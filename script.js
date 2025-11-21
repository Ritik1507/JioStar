// ==========================================
//  DATA SOURCE 1: PATCH MANAGEMENT
// ==========================================
const sampleData = [
    { patchName: "Windows Secure Boot Patch", severity: "Critical", computerName: "SRV-101", group: "servers", from: "2024-04-10", to: "2024-04-11", status: "Remediated" },
    { patchName: "Chrome Security Patch 124", severity: "High", computerName: "WKS-102", group: "workstations", from: "2024-04-12", to: "2024-04-13", status: "Outstanding" },
    { patchName: "Java Runtime Update 8u421", severity: "Important", computerName: "LAP-103", group: "laptops", from: "2024-04-14", to: "2024-04-15", status: "Remediated" },
    { patchName: "Windows Update KB5100021", severity: "Critical", computerName: "WKS-104", group: "workstations", from: "2024-04-16", to: "2024-04-17", status: "Outstanding" },
    { patchName: "SQL Server Engine Patch", severity: "High", computerName: "SRV-105", group: "servers", from: "2024-04-18", to: "2024-04-19", status: "Remediated" },
    { patchName: "Firefox Patch 123.2", severity: "Important", computerName: "LAP-106", group: "laptops", from: "2024-05-01", to: "2024-05-02", status: "Outstanding" },
    { patchName: "Windows Defender Critical Fix", severity: "Critical", computerName: "WKS-107", group: "workstations", from: "2024-05-03", to: "2024-05-04", status: "Remediated" },
    { patchName: "OpenSSL High Vulnerability Patch", severity: "High", computerName: "SRV-108", group: "servers", from: "2024-05-05", to: "2024-05-06", status: "Outstanding" }
];

// ==========================================
//  DATA SOURCE 2: COMPUTER MANAGEMENT
// ==========================================
const computerData = [
    { name: 'SRV-101', lastSeen: '2024-11-20', daysOffline: 2, ip: '192.168.1.10', os: 'Windows Server 2019', status: 'Offline', group: 'server' },
    { name: 'WKS-102', lastSeen: '2024-11-22', daysOffline: 0, ip: '192.168.1.12', os: 'Windows 11', status: 'Online', group: 'workstation' },
    { name: 'LAP-103', lastSeen: '2024-11-22', daysOffline: 0, ip: '192.168.1.15', os: 'Windows 10', status: 'Online', group: 'laptop' },
    { name: 'SRV-105', lastSeen: '2024-11-10', daysOffline: 12, ip: '10.0.0.5', os: 'Red Hat Linux', status: 'Offline', group: 'server' },
    { name: 'LAP-106', lastSeen: '2024-11-21', daysOffline: 1, ip: '192.168.1.88', os: 'macOS', status: 'Offline', group: 'laptop' },
    { name: 'WKS-107', lastSeen: '2024-11-22', daysOffline: 0, ip: '192.168.1.200', os: 'Windows 11', status: 'Online', group: 'workstation' },
    { name: 'SRV-108', lastSeen: '2024-11-18', daysOffline: 4, ip: '10.0.0.9', os: 'Ubuntu Server', status: 'Offline', group: 'server' },
    { name: 'WKS-109', lastSeen: '2024-11-22', daysOffline: 0, ip: '192.168.1.205', os: 'Windows 10', status: 'Online', group: 'workstation' },
    { name: 'LAP-110', lastSeen: '2024-11-22', daysOffline: 0, ip: '192.168.1.210', os: 'Windows 11', status: 'Online', group: 'laptop' }
];

// Pagination State
let currentPage = 1;
const rowsPerPage = 10;
let filteredData = []; // Patch Data
let compBaseData = []; // Computer Base (Filtered by Apply)
let compViewData = []; // Computer View (Filtered by Status/Search)

/* -----------------------------
    TAB SWITCHING LOGIC
   ----------------------------- */
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

/* -----------------------------
    GLOBAL CLICK LISTENER (Close Dropdowns & Calendar)
   ----------------------------- */
const datePickerPopup = document.getElementById('datePickerPopup');

if(datePickerPopup) {
    datePickerPopup.addEventListener('click', (e) => {
        e.stopPropagation(); 
    });
}

document.addEventListener('click', function() {
    document.querySelectorAll('.custom-multiselect').forEach(multiselect => {
        multiselect.querySelector('.multiselect-trigger').classList.remove('active');
        multiselect.querySelector('.multiselect-dropdown').classList.remove('show');
    });
    document.querySelectorAll('.custom-select').forEach(select => {
        select.querySelector('.select-dropdown').classList.remove('show');
        select.querySelector('.select-trigger').classList.remove('active');
        select.querySelector('.select-trigger').setAttribute('aria-expanded', 'false');
    });
    if (datePickerPopup) {
        datePickerPopup.style.display = 'none';
        activeInput = null; 
    }
});

/* -----------------------------
    CUSTOM MULTI-SELECT SETUP
   ----------------------------- */
function initMultiselect(multiselectId) {
    const multiselect = document.getElementById(multiselectId);
    const trigger = multiselect.querySelector('.multiselect-trigger');
    const dropdown = multiselect.querySelector('.multiselect-dropdown');
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    const textElement = multiselect.querySelector('.multiselect-text');
    const defaultText = textElement.textContent;

    function toggle(e){
        if (e) e.stopPropagation();
        document.querySelectorAll('.custom-multiselect').forEach(ms => {
            if (ms.id !== multiselectId) {
                ms.querySelector('.multiselect-trigger').classList.remove('active');
                ms.querySelector('.multiselect-dropdown').classList.remove('show');
            }
        });
        trigger.classList.toggle('active');
        dropdown.classList.toggle('show');
    }

    trigger.addEventListener('click', toggle);
    trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' ) { e.preventDefault(); toggle(); }
        if (e.key === 'Escape') { dropdown.classList.remove('show'); trigger.classList.remove('active'); }
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateMultiselectText();
        });
    });

    function updateMultiselectText() {
        const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.nextSibling.textContent.trim());
        if (selected.length === 0) textElement.textContent = defaultText;
        else if (selected.length === 1) textElement.textContent = selected[0];
        else textElement.textContent = `${selected.length} selected`;
    }
    dropdown.addEventListener('click', function(e) { e.stopPropagation(); });
}

initMultiselect('severityMultiselect');

/* -----------------------------
    CUSTOM SINGLE-SELECT SETUP
   ----------------------------- */
function initCustomSelects() {
    document.querySelectorAll('.custom-select').forEach(select => {
        const trigger = select.querySelector('.select-trigger');
        const dropdown = select.querySelector('.select-dropdown');
        const text = select.querySelector('.select-text');

        function toggle(openEvent) {
            const isOpen = dropdown.classList.contains('show');
            document.querySelectorAll('.custom-select').forEach(s => {
                if (s !== select) {
                    s.querySelector('.select-dropdown').classList.remove('show');
                    s.querySelector('.select-trigger').classList.remove('active');
                    s.querySelector('.select-trigger').setAttribute('aria-expanded', 'false');
                }
            });
            if (!isOpen) {
                dropdown.classList.add('show');
                trigger.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            } else {
                dropdown.classList.remove('show');
                trigger.classList.remove('active');
                trigger.setAttribute('aria-expanded', 'false');
            }
            if (openEvent) openEvent.stopPropagation();
        }

        trigger.addEventListener('click', (e) => toggle(e));

        dropdown.querySelectorAll('div').forEach(option => {
            option.addEventListener('click', function(e) {
                text.textContent = option.textContent;
                select.dataset.value = option.dataset.value || '';
                
                dropdown.querySelectorAll('div').forEach(d => d.removeAttribute('aria-selected'));
                option.setAttribute('aria-selected', 'true');
                dropdown.classList.remove('show');
                trigger.classList.remove('active');

                const selectId = select.dataset.id || '';
                if (selectId.startsWith('comp-')) {
                    if (selectId === 'comp-status' && compBaseData.length > 0) {
                        updateCompTableDisplay(1); 
                    }
                } else if (selectId === 'export') {
                     // Handled by button listeners now, but keeping for safety if dropdown export used
                } else {
                    if(filteredData.length > 0) applyFilters(1);
                }
                e.stopPropagation();
            });
        });
    });
}
initCustomSelects();

function getCustomSelectValue(id) {
    const sel = document.querySelector(`.custom-select[data-id="${id}"]`);
    if (!sel) return '';
    return (sel.dataset.value || '').toLowerCase();
}
function getSelectedValues(multiselectId) {
    const multiselect = document.getElementById(multiselectId);
    const checkboxes = multiselect.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value.toLowerCase());
}

/* -----------------------------
    CALENDAR LOGIC
   ----------------------------- */
let currentCalendarDate = new Date();
let activeInput = null;

function formatToISO(dateString) {
    const parts = dateString.split('-');
    if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const month = parts[1].padStart(2, '0');
        const year = parts[2];
        return `${year}-${month}-${day}`;
    }
    return dateString;
}

function formatToDisplay(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth(); 
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); 

    let monthOptions = '';
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    monthNames.forEach((name, m) => {
        let disabled = '';
        const selected = m === month ? 'selected' : '';
        if (year === currentYear && m > currentMonth) disabled = 'disabled';
        monthOptions += `<option value="${m}" ${selected} ${disabled}>${name}</option>`;
    });

    const startYear = currentYear - 50; 
    const endYear = currentYear;
    let yearListHtml = '';
    for (let y = endYear; y >= startYear; y--) {
        const selectedClass = y === year ? 'selected' : '';
        yearListHtml += `<div class="year-option ${selectedClass}" onclick="selectYearFromList(${y}, event)">${y}</div>`;
    }

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = '<div class="custom-calendar">';
    html += `<div class="cal-header">
                <button class="cal-nav-btn" onclick="navigateMonth(-1)">&#9664;</button>
                <div style="display:flex; align-items:center;">
                    <select class="cal-select" id="monthSelect" onchange="jumpToMonth(this.value)">${monthOptions}</select>
                    <div class="year-select-container">
                        <div class="year-select-trigger" onclick="toggleYearDropdown(event)">
                            ${year} <span>&#9662;</span>
                        </div>
                        <div class="year-dropdown-list" id="yearDropdownList">
                            ${yearListHtml}
                        </div>
                    </div>
                </div>
                <button class="cal-nav-btn" onclick="navigateMonth(1)">&#9654;</button>
            </div>`;
    
    html += '<div class="cal-days">';
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayLabels.forEach(label => html += `<span class="day-label">${label}</span>`);
    for (let i = 0; i < firstDayOfMonth; i++) html += '<span></span>';
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDayDate = new Date(year, month, day);
        const displayDate = formatToDisplay(currentDayDate); 
        let dayDisabled = '';
        if (year === currentYear && month === currentMonth && day > today.getDate()) dayDisabled = 'disabled';
        const isSelected = activeInput && activeInput.value === displayDate;
        const selectedClass = isSelected ? 'selected' : '';
        html += `<span data-date="${displayDate}" class="${selectedClass}" onclick="selectDate('${displayDate}')" ${dayDisabled}>${day}</span>`;
    }
    html += '</div></div>';
    if(datePickerPopup) datePickerPopup.innerHTML = html;
}

function navigateMonth(offset) {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + offset);
    renderCalendar(currentCalendarDate);
}
function jumpToMonth(newMonth) {
    currentCalendarDate.setMonth(parseInt(newMonth));
    renderCalendar(currentCalendarDate);
}
function jumpToYear(newYear) {
    currentCalendarDate.setFullYear(parseInt(newYear));
    renderCalendar(currentCalendarDate);
}
function selectDate(dateString) {
    if (activeInput) {
        activeInput.value = dateString; 
        activeInput.dispatchEvent(new Event('change')); 
        if(datePickerPopup) datePickerPopup.style.display = 'none';
        activeInput = null;
    }
}
function toggleYearDropdown(e) {
    e.stopPropagation();
    const list = document.getElementById('yearDropdownList');
    if (list) list.classList.toggle('show');
    if (list && list.classList.contains('show')) {
        const selected = list.querySelector('.selected');
        if (selected) selected.scrollIntoView({ block: 'center' });
    }
}
function selectYearFromList(year, e) {
    e.stopPropagation();
    jumpToYear(year); 
}

// Globalize for onclick in generated HTML
window.navigateMonth = navigateMonth;
window.selectDate = selectDate;
window.jumpToMonth = jumpToMonth;
window.jumpToYear = jumpToYear;
window.toggleYearDropdown = toggleYearDropdown;
window.selectYearFromList = selectYearFromList;

// Initialize Date Inputs
document.querySelectorAll('.date-input').forEach(input => {
    input.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelectorAll('.custom-select .select-dropdown.show').forEach(d => d.classList.remove('show'));
        
        if(datePickerPopup) {
            const rect = input.getBoundingClientRect();
            datePickerPopup.style.top = `${rect.top + rect.height + 10}px`;
            datePickerPopup.style.left = `${rect.left}px`;
            datePickerPopup.style.display = 'block';
        }
        
        activeInput = input;
        let initialDate = input.value ? new Date(input.value.split('-').reverse().join('-')) : new Date();
        if (isNaN(initialDate.getTime())) initialDate = new Date();
        currentCalendarDate = initialDate;
        renderCalendar(currentCalendarDate);
    });
    
    input.addEventListener('change', () => {
        const parent = input.closest('.custom-input');
        if (parent) {
            if (input.value) parent.classList.add('filled');
            else parent.classList.remove('filled');
        }
    });
});

/* -----------------------------
    EXPORT LOGIC
   ----------------------------- */
function downloadCSV(csvContent, fileName) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function exportToCSV() {
    if (!filteredData || filteredData.length === 0) {
        alert('No data to export. Please apply filters first.');
        return;
    }
    const headers = ['Patch Name', 'Severity', 'Computer Name', 'From', 'To', 'Status'];
    let csvContent = headers.join(',') + '\n';
    filteredData.forEach(item => {
        const row = [`"${item.patchName}"`, item.severity, item.computerName, item.from, item.to, item.status];
        csvContent += row.join(',') + '\n';
    });
    downloadCSV(csvContent, 'patch_report.csv');
}

function exportCompToCSV() {
    if (!compViewData || compViewData.length === 0) {
        alert('No data to export. Please apply filters first.');
        return;
    }
    const headers = ['Computer Name', 'Last Seen', 'Days Offline', 'IP Address', 'OS', 'Status'];
    let csvContent = headers.join(',') + '\n';
    compViewData.forEach(item => {
        const row = [item.name, item.lastSeen, item.daysOffline, `"${item.ip}"`, `"${item.os}"`, item.status];
        csvContent += row.join(',') + '\n';
    });
    downloadCSV(csvContent, 'computer_report.csv');
}

/* -----------------------------
    PATCH TAB LOGIC
   ----------------------------- */
function displayTableData(data, page) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = data.slice(start, end);

    if (paginatedItems.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" class="empty-state"><div class="empty-state-icon">🔍</div><div>No data available. Apply filters to load data.</div></td></tr>`;
        renderPagination('paginationContainer', data.length, page, applyFilters);
        return;
    }

    paginatedItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.patchName}</td>
            <td><span class="severity-badge ${getSeverityClass(item.severity)}">${item.severity}</span></td>
            <td>${item.computerName}</td>
            <td>${item.from}</td>
            <td>${item.to}</td>
            <td><span class="status-badge ${getStatusClass(item.status)}">${item.status}</span></td>
        `;
        tableBody.appendChild(row);
    });
    renderPagination('paginationContainer', data.length, page, applyFilters);
}

function applyFilters(page = 1) {
    const search = document.getElementById('search').value.toLowerCase();
    const status = getCustomSelectValue('status');
    const severity2 = getCustomSelectValue('severity2');
    const group = getCustomSelectValue('group'); 
    const dateFrom = formatToISO(document.getElementById('dateFrom').value);
    const dateTo = formatToISO(document.getElementById('dateTo').value);
    const selectedSeverities = getSelectedValues('severityMultiselect');

    filteredData = sampleData.filter(item => {
        const itemText = (item.patchName + ' ' + item.computerName).toLowerCase();
        if (search && !itemText.includes(search)) return false;
        if (status && item.status.toLowerCase() !== status) return false;
        if (severity2 && item.severity.toLowerCase() !== severity2) return false;
        if (selectedSeverities.length > 0 && !selectedSeverities.includes(item.severity.toLowerCase())) return false;
        if (group && item.group.toLowerCase() !== group) return false;
        if (dateFrom && item.from < dateFrom) return false;
        if (dateTo && item.to > dateTo) return false;
        return true;
    });

    currentPage = page;
    displayTableData(filteredData, currentPage);
    updateKpiCards(filteredData, 'totalDevicesValue', 'compliancePercentageValue');
}

/* -----------------------------
    COMPUTER TAB LOGIC
   ----------------------------- */
function applyCompGlobalFilters(page = 1) {
    const daysVal = document.getElementById('compDaysInput').value;
    const groupVal = getCustomSelectValue('comp-group');

    compBaseData = computerData.filter(item => {
        let matchGroup = (!groupVal || groupVal === '' || item.group.toLowerCase() === groupVal);
        let matchDays = true;
        if (daysVal && daysVal !== "") matchDays = item.daysOffline >= parseInt(daysVal);
        return matchGroup && matchDays;
    });

    // Reset local filters on Apply
    document.getElementById('compStatusSelect').dataset.value = '';
    document.querySelector('#compStatusSelect .select-text').textContent = 'Status (All)';
    document.getElementById('compSearchInput').value = '';
    
    updateCompTableDisplay(page);
}

function updateCompTableDisplay(page = 1) {
    const statusVal = getCustomSelectValue('comp-status');
    const searchVal = document.getElementById('compSearchInput').value.toLowerCase();

    compViewData = compBaseData.filter(item => {
        const matchStatus = (!statusVal || statusVal === '' || item.status.toLowerCase() === statusVal);
        const itemStr = (item.name + ' ' + item.ip + ' ' + item.os).toLowerCase();
        const matchSearch = itemStr.includes(searchVal);
        return matchStatus && matchSearch;
    });

    renderCompTable(compViewData, page);
    updateCompKPIs(compViewData);
}

function renderCompTable(data, page) {
    const tbody = document.getElementById('compTableBody');
    tbody.innerHTML = '';
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = data.slice(start, end);

    if (paginatedItems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="empty-state"><div class="empty-state-icon">🔍</div><div>No data available. Apply filters to load data.</div></td></tr>`;
        renderPagination('compPaginationContainer', data.length, page, updateCompTableDisplay);
        return;
    }

    paginatedItems.forEach(item => {
        // Updated Status Logic for Computer Tab
        const statusClass = item.status === 'Online' ? 'status-online' : 'status-offline';
        const row = `<tr>
            <td>${item.name}</td>
            <td>${item.lastSeen}</td>
            <td>${item.daysOffline}</td>
            <td>${item.ip}</td>
            <td>${item.os}</td>
            <td><span class="status-badge ${statusClass}">${item.status}</span></td>
        </tr>`;
        tbody.innerHTML += row;
    });
    renderPagination('compPaginationContainer', data.length, page, updateCompTableDisplay);
}

/* -----------------------------
    SHARED HELPERS
   ----------------------------- */
function renderPagination(containerId, totalItems, page, callbackFunc) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    if (totalItems === 0) return;

    const totalPages = Math.ceil(totalItems / rowsPerPage);
    const startItem = (page - 1) * rowsPerPage + 1;
    const endItem = Math.min(page * rowsPerPage, totalItems);

    const info = document.createElement('span');
    info.classList.add('pagination-info');
    info.textContent = `Showing ${startItem} to ${endItem} of ${totalItems}`;
    container.appendChild(info);

    const prevBtn = document.createElement('button');
    prevBtn.classList.add('pagination-button');
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = page === 1;
    prevBtn.onclick = () => callbackFunc(page - 1);
    container.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        if (totalPages <= 5 || i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
            const pgBtn = document.createElement('span');
            pgBtn.classList.add('page-number');
            if (i === page) pgBtn.classList.add('active');
            pgBtn.textContent = i;
            pgBtn.onclick = () => callbackFunc(i);
            container.appendChild(pgBtn);
        }
    }

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('pagination-button');
    nextBtn.textContent = 'Next';
    nextBtn.disabled = page === totalPages;
    nextBtn.onclick = () => callbackFunc(page + 1);
    container.appendChild(nextBtn);
}

function getStatusClass(status) {
    const s = (status || '').toLowerCase();
    return s === 'remediated' ? 'status-remediated' : (s === 'outstanding' ? 'status-pending' : '');
}
function getSeverityClass(sev) {
    const s = (sev || '').toLowerCase();
    return s === 'critical' ? 'severity-critical' : (s === 'important' ? 'severity-important' : (s === 'high' ? 'severity-high' : ''));
}

function updateKpiCards(data, totalId, complianceId) {
    const total = data.length;
    let remediated = data.filter(i => i.status.toLowerCase() === 'remediated').length;
    let compliance = total > 0 ? (remediated / total) * 100 : 0;
    if(document.getElementById(totalId)) document.getElementById(totalId).textContent = total;
    if(document.getElementById(complianceId)) document.getElementById(complianceId).textContent = `${compliance.toFixed(1)}%`;
}

function updateCompKPIs(data) {
    const total = data.length;
    const online = data.filter(d => d.status === 'Online').length;
    const offline = data.filter(d => d.status === 'Offline').length;
    document.getElementById('compTotalDevices').textContent = total;
    document.getElementById('compOnlineOffline').textContent = `${online} / ${offline}`;
}

// RESET FUNCTIONS
function resetFilters() {
    document.querySelectorAll('.custom-multiselect input').forEach(cb => cb.checked = false);
    document.querySelector('.multiselect-text').textContent = 'Severity';
    document.querySelectorAll('.custom-select:not([data-id^="comp"])').forEach(s => {
        s.dataset.value = '';
        s.querySelector('.select-text').textContent = s.dataset.id === 'status' ? 'Status' : s.dataset.id === 'severity2' ? 'Severity' : 'Group';
    });
    document.getElementById('search').value = '';
    document.getElementById('dateFrom').value = ''; 
    document.getElementById('dateTo').value = '';
    document.querySelectorAll('.custom-input').forEach(ci => ci.classList.remove('filled'));
    filteredData = [];
    currentPage = 1;
    displayTableData(filteredData, currentPage);
    updateKpiCards(filteredData, 'totalDevicesValue', 'compliancePercentageValue');
}

function resetCompDashboard() {
    document.getElementById('compDaysInput').value = '';
    const grpSel = document.getElementById('compGroupSelect');
    grpSel.dataset.value = '';
    grpSel.querySelector('.select-text').textContent = 'Computer Group';
    const statSel = document.getElementById('compStatusSelect');
    statSel.dataset.value = '';
    statSel.querySelector('.select-text').textContent = 'Status (All)';
    document.getElementById('compSearchInput').value = '';
    compBaseData = []; 
    updateCompTableDisplay(1);
}

// Event Listeners
document.getElementById('applyBtn').addEventListener('click', () => applyFilters(1));
document.getElementById('resetBtn').addEventListener('click', resetFilters);
document.getElementById('search').addEventListener('keyup', function() { 
    if (filteredData.length > 0) applyFilters(1); 
});

document.getElementById('compApplyBtn').addEventListener('click', () => applyCompGlobalFilters(1));
document.getElementById('compResetBtn').addEventListener('click', resetCompDashboard);
document.getElementById('compSearchInput').addEventListener('keyup', () => {
    if(compBaseData.length > 0) updateCompTableDisplay(1);
});

// Export Listeners
document.getElementById('exportCsvBtn').addEventListener('click', exportToCSV);
document.getElementById('compExportBtn').addEventListener('click', exportCompToCSV);

// Dynamic search trigger (re-filter and reset to page 1)
document.getElementById('search').addEventListener('keyup', function() {
    // CRITICAL FIX: Always trigger filtering if search value exists, or if filtering has already occurred.
    if (this.value.length >= 0) { 
        applyFilters(1); .
    }
});

// New custom date input wiring
document.querySelectorAll('.date-input').forEach(input => {
    input.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Hide other open dropdowns first
        document.querySelectorAll('.custom-select .select-dropdown.show').forEach(d => d.classList.remove('show'));
        
        // Determine position based on the input clicked
        const rect = input.getBoundingClientRect();
        
        // Position the calendar below the input
        datePickerPopup.style.top = `${rect.top + rect.height + 10}px`;
        datePickerPopup.style.left = `${rect.left}px`;
        datePickerPopup.style.display = 'block';

        activeInput = input;
        
        // Render the calendar starting from today or the selected date
        let initialDate = input.value ? new Date(input.value.split('-').reverse().join('-')) : new Date();
        currentCalendarDate = initialDate;
        renderCalendar(currentCalendarDate);
    });

    // Keep the change listener for filtering when a date is selected
    input.addEventListener('change', () => {
        toggleFilledClass(input.id);
        if (input.value) applyFilters(1); 
    });
});

// helper to mark inputs as filled so label floats
function toggleFilledClass(id) {
    const input = document.getElementById(id);
    const parent = input.closest('.custom-input');
    if (!parent) return;
    if (input.value) parent.classList.add('filled');
    else parent.classList.remove('filled');
}

// initialize filled state on load (in case of pre-filled values)
document.querySelectorAll('.custom-input input').forEach(inp => {
    if (inp.value) inp.closest('.custom-input').classList.add('filled');
});

/* -----------------------------
    Initialize default table (Load All Data)
   ----------------------------- */
// 1. Run reset to clear inputs/dropdowns and set table to empty state
resetFilters(); 

// 2. Load ALL data and KPIs immediately on page load
applyFilters(1);
// --- New Functions for the Custom Year Dropdown ---

function toggleYearDropdown(e) {
    e.stopPropagation();
    const list = document.getElementById('yearDropdownList');
    list.classList.toggle('show');
    
    // Auto-scroll to the selected year
    if (list.classList.contains('show')) {
        const selected = list.querySelector('.selected');
        if (selected) {
            selected.scrollIntoView({ block: 'center' });
        }
    }
}

function selectYearFromList(year, e) {
    e.stopPropagation();
    jumpToYear(year); // Use existing logic
    // The calendar re-renders, so the dropdown closes automatically
}

// Close the year dropdown if clicking anywhere else inside the calendar
datePickerPopup.addEventListener('click', function() {
    const list = document.getElementById('yearDropdownList');
    if (list && list.classList.contains('show')) {
        list.classList.remove('show');
    }
});

// Expose new function globally
window.toggleYearDropdown = toggleYearDropdown;
window.selectYearFromList = selectYearFromList;
// ... existing code ...

// NEW: Close calendar when clicking outside
document.addEventListener('click', function(event) {
    const calendar = document.getElementById('datePickerPopup');
    const isClickInsideCalendar = calendar.contains(event.target);
    const isClickOnInput = event.target.classList.contains('date-input');

    // If the click is NOT inside the calendar AND NOT on an input field
    if (!isClickInsideCalendar && !isClickOnInput) {
        calendar.style.display = 'none';
        // Also close the year dropdown if it happened to be open
        const yearList = document.getElementById('yearDropdownList');
        if (yearList) yearList.classList.remove('show');
        
        activeInput = null;
    }
});
