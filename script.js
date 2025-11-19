// Sample data (unchanged)
const sampleData=[
{ patchName: "Windows Defender Platform Update", severity: "High", computerName: "WKS-051", group: "workstations", from: "2024-03-22", to: "2024-03-23", status: "Pending" },
{ patchName: "Adobe Reader Patch", severity: "Important", computerName: "LAP-052", group: "laptops", from: "2024-03-21", to: "2024-03-22", status: "Remediated" },
{ patchName: "Microsoft Edge Update", severity: "Critical", computerName: "SRV-053", group: "servers", from: "2024-03-19", to: "2024-03-20", status: "Pending" },
{ patchName: "Linux Kernel Patch 6.6", severity: "High", computerName: "SRV-054", group: "servers", from: "2024-03-18", to: "2024-03-19", status: "Remediated" },
{ patchName: "Firefox ESR Patch", severity: "Important", computerName: "WKS-055", group: "workstations", from: "2024-03-17", to: "2024-03-18", status: "Remediated" },
{ patchName: "Chrome Zero-Day Patch", severity: "Critical", computerName: "LAP-056", group: "laptops", from: "2024-03-16", to: "2024-03-17", status: "Pending" },
{ patchName: "Outlook Vulnerability Fix", severity: "High", computerName: "WKS-057", group: "workstations", from: "2024-03-15", to: "2024-03-16", status: "Remediated" },
{ patchName: "Exchange Security Hotfix", severity: "Critical", computerName: "SRV-058", group: "servers", from: "2024-03-14", to: "2024-03-15", status: "Remediated" },
{ patchName: "Java Runtime Update", severity: "Important", computerName: "LAP-059", group: "laptops", from: "2024-03-13", to: "2024-03-14", status: "Pending" },
{ patchName: "BIOS Firmware Patch", severity: "High", computerName: "WKS-060", group: "workstations", from: "2024-03-12", to: "2024-03-13", status: "Pending" },
{ patchName: "Microsoft SMB Leak Patch", severity: "Critical", computerName: "SRV-061", group: "servers", from: "2024-03-11", to: "2024-03-12", status: "Remediated" },
{ patchName: "Windows Update KB5091123", severity: "High", computerName: "WKS-062", group: "workstations", from: "2024-03-10", to: "2024-03-11", status: "Pending" },
{ patchName: "SQL Server Cumulative Patch", severity: "Critical", computerName: "SRV-063", group: "servers", from: "2024-03-09", to: "2024-03-10", status: "Pending" },
{ patchName: "PowerShell Core Update", severity: "Important", computerName: "LAP-064", group: "laptops", from: "2024-03-08", to: "2024-03-09", status: "Remediated" },
{ patchName: "Chrome Update 122.0", severity: "High", computerName: "WKS-065", group: "workstations", from: "2024-03-07", to: "2024-03-08", status: "Remediated" },
{ patchName: "Windows 10 Feature Update", severity: "Critical", computerName: "LAP-066", group: "laptops", from: "2024-03-06", to: "2024-03-07", status: "Pending" },
{ patchName: "Apache Server Patch", severity: "High", computerName: "SRV-067", group: "servers", from: "2024-03-05", to: "2024-03-06", status: "Remediated" },
{ patchName: "VMware Tools Patch", severity: "Important", computerName: "WKS-068", group: "workstations", from: "2024-03-04", to: "2024-03-05", status: "Pending" },
{ patchName: "Teams Desktop Patch", severity: "High", computerName: "LAP-069", group: "laptops", from: "2024-03-03", to: "2024-03-04", status: "Remediated" },
{ patchName: "Intel ME Security Patch", severity: "Critical", computerName: "SRV-070", group: "servers", from: "2024-03-02", to: "2024-03-03", status: "Remediated" },

{ patchName: "Adobe Patchset April", severity: "High", computerName: "WKS-071", group: "workstations", from: "2024-03-01", to: "2024-03-02", status: "Pending" },
{ patchName: "Windows Defender Definition", severity: "Important", computerName: "LAP-072", group: "laptops", from: "2024-02-29", to: "2024-03-01", status: "Remediated" },
{ patchName: "Linux OpenSSL Patch", severity: "Critical", computerName: "SRV-073", group: "servers", from: "2024-02-28", to: "2024-02-29", status: "Pending" },
{ patchName: "Chrome Extension Security Fix", severity: "High", computerName: "WKS-074", group: "workstations", from: "2024-02-27", to: "2024-02-28", status: "Remediated" },
{ patchName: "HP Device Manager Patch", severity: "Important", computerName: "LAP-075", group: "laptops", from: "2024-02-26", to: "2024-02-27", status: "Pending" },
{ patchName: "SQL Injection Patch", severity: "Critical", computerName: "SRV-076", group: "servers", from: "2024-02-25", to: "2024-02-26", status: "Pending" },
{ patchName: "Office VBA Macro Patch", severity: "High", computerName: "WKS-077", group: "workstations", from: "2024-02-24", to: "2024-02-25", status: "Remediated" },
{ patchName: "Android USB Driver Patch", severity: "Important", computerName: "LAP-078", group: "laptops", from: "2024-02-23", to: "2024-02-24", status: "Remediated" },
{ patchName: "Windows Kernel Patch", severity: "Critical", computerName: "SRV-079", group: "servers", from: "2024-02-22", to: "2024-02-23", status: "Remediated" },
{ patchName: "Visual C++ Runtime Update", severity: "High", computerName: "WKS-080", group: "workstations", from: "2024-02-21", to: "2024-02-22", status: "Pending" },

{ patchName: "Exchange Log Cleanup Patch", severity: "Critical", computerName: "SRV-081", group: "servers", from: "2024-02-20", to: "2024-02-21", status: "Pending" },
{ patchName: "Windows Remote Desktop Patch", severity: "High", computerName: "WKS-082", group: "workstations", from: "2024-02-19", to: "2024-02-20", status: "Remediated" },
{ patchName: "Chrome Auto-Update Fix", severity: "Important", computerName: "LAP-083", group: "laptops", from: "2024-02-18", to: "2024-02-19", status: "Remediated" },
{ patchName: "OpenSSH Vulnerability Patch", severity: "Critical", computerName: "SRV-084", group: "servers", from: "2024-02-17", to: "2024-02-18", status: "Pending" },
{ patchName: "Windows TLS Patch", severity: "High", computerName: "WKS-085", group: "workstations", from: "2024-02-16", to: "2024-02-17", status: "Pending" },
{ patchName: "Zoom Client Update", severity: "Important", computerName: "LAP-086", group: "laptops", from: "2024-02-15", to: "2024-02-16", status: "Remediated" },
{ patchName: "Linux Sudo Patch", severity: "Critical", computerName: "SRV-087", group: "servers", from: "2024-02-14", to: "2024-02-15", status: "Remediated" },
{ patchName: "Office Add-in Security Patch", severity: "High", computerName: "WKS-088", group: "workstations", from: "2024-02-13", to: "2024-02-14", status: "Pending" },
{ patchName: "Java Runtime Update 8u411", severity: "Important", computerName: "LAP-089", group: "laptops", from: "2024-02-12", to: "2024-02-13", status: "Pending" },
{ patchName: "VMware ESXi Critical Patch", severity: "Critical", computerName: "SRV-090", group: "servers", from: "2024-02-11", to: "2024-02-12", status: "Remediated" },

{ patchName: "Outlook Sync Bug Patch", severity: "High", computerName: "WKS-091", group: "workstations", from: "2024-02-10", to: "2024-02-11", status: "Remediated" },
{ patchName: "HP BIOS Update", severity: "Important", computerName: "LAP-092", group: "laptops", from: "2024-02-09", to: "2024-02-10", status: "Pending" },
{ patchName: "Linux Firewall Patch", severity: "Critical", computerName: "SRV-093", group: "servers", from: "2024-02-08", to: "2024-02-09", status: "Remediated" },
{ patchName: "Chrome Sandboxing Patch", severity: "High", computerName: "WKS-094", group: "workstations", from: "2024-02-07", to: "2024-02-08", status: "Pending" },
{ patchName: "Microsoft Identity Patch", severity: "Important", computerName: "LAP-095", group: "laptops", from: "2024-02-06", to: "2024-02-07", status: "Remediated" },
{ patchName: "SQL Injection Protection Patch", severity: "Critical", computerName: "SRV-096", group: "servers", from: "2024-02-05", to: "2024-02-06", status: "Remediated" },
{ patchName: "Windows WinHTTP Patch", severity: "High", computerName: "WKS-097", group: "workstations", from: "2024-02-04", to: "2024-02-05", status: "Pending" },
{ patchName: "Linux RootFS Patch", severity: "Critical", computerName: "SRV-098", group: "servers", from: "2024-02-03", to: "2024-02-04", status: "Pending" },
{ patchName: "Office Outlook Forms Patch", severity: "Important", computerName: "LAP-099", group: "laptops", from: "2024-02-02", to: "2024-02-03", status: "Remediated" },
{ patchName: "Windows Backup Engine Patch", severity: "High", computerName: "WKS-100", group: "workstations", from: "2024-02-01", to: "2024-02-02", status: "Pending" }
];

let currentDisplayedData = [];

/* -----------------------------
   EXISTING MULTISELECT SETUP
   (keeps behaviour you had before)
   ----------------------------- */
function initMultiselect(multiselectId) {
    const multiselect = document.getElementById(multiselectId);
    const trigger = multiselect.querySelector('.multiselect-trigger');
    const dropdown = multiselect.querySelector('.multiselect-dropdown');
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    const textElement = multiselect.querySelector('.multiselect-text');
    const defaultText = textElement.textContent;

    // Toggle dropdown
    function toggle(e){
        if (e) e.stopPropagation();
        // close other multiselects
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

    // Update display text when checkboxes change
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateMultiselectText();
        });
    });

    function updateMultiselectText() {
        const selected = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.nextSibling.textContent.trim());

        if (selected.length === 0) {
            textElement.textContent = defaultText;
        } else if (selected.length === 1) {
            textElement.textContent = selected[0];
        } else {
            textElement.textContent = `${selected.length} selected`;
        }
    }

    // Prevent dropdown from closing when clicking inside
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('.custom-multiselect').forEach(multiselect => {
        multiselect.querySelector('.multiselect-trigger').classList.remove('active');
        multiselect.querySelector('.multiselect-dropdown').classList.remove('show');
    });
});

// Init multiselects
initMultiselect('severityMultiselect');
initMultiselect('groupMultiselect');

/* -----------------------------
   CUSTOM SINGLE-SELECT SETUP
   ----------------------------- */
function initCustomSelects() {
    document.querySelectorAll('.custom-select').forEach(select => {
        const trigger = select.querySelector('.select-trigger');
        const dropdown = select.querySelector('.select-dropdown');
        const text = select.querySelector('.select-text');

        // Click open/close
        function toggle(openEvent) {
            const isOpen = dropdown.classList.contains('show');
            // close all others first
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
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); }
            if (e.key === 'Escape') { dropdown.classList.remove('show'); trigger.classList.remove('active'); trigger.setAttribute('aria-expanded', 'false'); }
        });

        // option click
        dropdown.querySelectorAll('div').forEach(option => {
            option.addEventListener('click', function(e) {
                // set displayed text
                text.textContent = option.textContent;
                // store selected value on the wrapper element
                select.dataset.value = option.dataset.value || '';
                // mark selected for styling/ARIA
                dropdown.querySelectorAll('div').forEach(d => d.removeAttribute('aria-selected'));
                option.setAttribute('aria-selected', 'true');

                // close
                dropdown.classList.remove('show');
                trigger.classList.remove('active');
                trigger.setAttribute('aria-expanded', 'false');

                // If the select was the export dropdown, trigger export
                if (select.dataset.id === 'export' && select.dataset.value) {
                    handleExport(select.dataset.value);
                    // reset export selection visible text and data-value
                    text.textContent = 'Export';
                    select.dataset.value = '';
                } else {
                    // For other selects, call applyFilters if table already has results
                    const tableBody = document.getElementById('tableBody');
                    if (tableBody.querySelector('tr:not(.empty-state)')) applyFilters();
                }

                e.stopPropagation();
            });
        });
    });

    // close when clicking outside
    document.addEventListener('click', function(e) {
        document.querySelectorAll('.custom-select').forEach(select => {
            const dropdown = select.querySelector('.select-dropdown');
            const trigger = select.querySelector('.select-trigger');
            if (!select.contains(e.target)) {
                dropdown.classList.remove('show');
                trigger.classList.remove('active');
                trigger.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

initCustomSelects();

/* -----------------------------
   Helpers to get selected values
   ----------------------------- */
function getCustomSelectValue(id) {
    const sel = Array.from(document.querySelectorAll('.custom-select')).find(s => s.dataset.id === id);
    if (!sel) return '';
    return (sel.dataset.value || '').toLowerCase();
}
function getSelectedValues(multiselectId) {
    const multiselect = document.getElementById(multiselectId);
    const checkboxes = multiselect.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value.toLowerCase());
}

/* -----------------------------
   Filtering & rendering
   ----------------------------- */
function applyFilters() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const search = document.getElementById('search').value.toLowerCase();
    const status = getCustomSelectValue('status');
    const severity2 = getCustomSelectValue('severity2');

    const selectedSeverities = getSelectedValues('severityMultiselect');
    const selectedGroups = getSelectedValues('groupMultiselect');

    const filteredData = sampleData.filter(item => {
        if (search && !item.patchName.toLowerCase().includes(search) && !item.computerName.toLowerCase().includes(search)) return false;
        if (status && item.status.toLowerCase() !== status) return false;
        if (severity2 && item.severity.toLowerCase() !== severity2) return false;
        if (selectedSeverities.length > 0 && !selectedSeverities.includes(item.severity.toLowerCase())) return false;
        if (selectedGroups.length > 0 && !selectedGroups.includes(item.group.toLowerCase())) return false;
        // date filters
        const fromDate = document.getElementById('dateFrom').value;
        const toDate = document.getElementById('dateTo').value;
        if (fromDate && new Date(item.from) < new Date(fromDate)) return false;
        if (toDate && new Date(item.to) > new Date(toDate)) return false;

        return true;
    });

    currentDisplayedData = filteredData;

    if (filteredData.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div>No matching records found.</div>
                </td>
            </tr>`;
        return;
    }

    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.patchName}</td>
            <td>${item.severity}</td>
            <td>${item.computerName}</td>
            <td>${item.from}</td>
            <td>${item.to}</td>
            <td>${item.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

/* -----------------------------
   Reset filters
   ----------------------------- */
function resetFilters() {
    // clear multiselects
    document.querySelectorAll('.custom-multiselect').forEach(multiselect => {
        const checkboxes = multiselect.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        const textElement = multiselect.querySelector('.multiselect-text');
        const defaultText = multiselect.id === 'severityMultiselect' ? 'Severity' : 'Group';
        textElement.textContent = defaultText;
        multiselect.querySelector('.multiselect-dropdown').classList.remove('show');
        multiselect.querySelector('.multiselect-trigger').classList.remove('active');
    });

    // reset custom selects
    document.querySelectorAll('.custom-select').forEach(s => {
        s.dataset.value = '';
        s.querySelector('.select-text').textContent = s.dataset.id === 'status' ? 'Status' : (s.dataset.id === 'severity2' ? 'Severity' : 'Export');
    });

    document.getElementById('search').value = '';
    document.getElementById('dateFrom').value = '';
    document.getElementById('dateTo').value = '';

    currentDisplayedData = [];

    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = `
        <tr>
            <td colspan="6" class="empty-state">
                <div class="empty-state-icon">📊</div>
                <div>No data available. Apply filters to load data.</div>
            </td>
        </tr>
    `;
}

/* -----------------------------
   Export helpers (CSV/Excel/PDF)
   ----------------------------- */
function exportToCSV() {
    if (currentDisplayedData.length === 0) {
        alert('No data to export. Please apply filters first to load data.');
        return;
    }
    const headers = ['Patch Name', 'Severity', 'Computer Name', 'From', 'To', 'Status'];
    let csvContent = headers.join(',') + '\n';
    currentDisplayedData.forEach(item => {
        const row = [`"${item.patchName}"`, item.severity, item.computerName, item.from, item.to, item.status];
        csvContent += row.join(',') + '\n';
    });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().slice(0,10);
    const filename = `patch_management_${timestamp}.csv`;
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportToExcel() {
    if (currentDisplayedData.length === 0) {
        alert('No data to export. Please apply filters first to load data.');
        return;
    }
    // simple XLSX compatible CSV
    const headers = ['Patch Name', 'Severity', 'Computer Name', 'From', 'To', 'Status'];
    let csvContent = headers.join(',') + '\n';
    currentDisplayedData.forEach(item => {
        const row = [`"${item.patchName}"`, item.severity, item.computerName, item.from, item.to, item.status];
        csvContent += row.join(',') + '\n';
    });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().slice(0,10);
    const filename = `patch_management_${timestamp}.xlsx`;
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportToPDF() {
    alert('PDF export requires a library such as jsPDF or pdfmake. Use CSV/Excel for now.');
}

function handleExport(type) {
    if (type === 'csv') exportToCSV();
    else if (type === 'excel') exportToExcel();
    else if (type === 'pdf') exportToPDF();
}

/* -----------------------------
   Event listeners & wiring
   ----------------------------- */
document.getElementById('applyBtn').addEventListener('click', applyFilters);
document.getElementById('resetBtn').addEventListener('click', resetFilters);

// dynamic search trigger
document.getElementById('search').addEventListener('keyup', function() {
    const tableBody = document.getElementById('tableBody');
    if (tableBody.querySelector('tr:not(.empty-state)')) applyFilters();
});

// date inputs change -> apply (optional)
document.getElementById('dateFrom').addEventListener('change', () => {
    const tableBody = document.getElementById('tableBody');
    if (tableBody.querySelector('tr:not(.empty-state)')) applyFilters();
});
document.getElementById('dateTo').addEventListener('change', () => {
    const tableBody = document.getElementById('tableBody');
    if (tableBody.querySelector('tr:not(.empty-state)')) applyFilters();
});
