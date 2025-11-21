// Sample data
const sampleData = [
    { patchName: "Windows Secure Boot Patch", severity: "Critical", computerName: "SRV-101", group: "servers", from: "2024-04-10", to: "2024-04-11", status: "Remediated" },
    { patchName: "Chrome Security Patch 124", severity: "High", computerName: "WKS-102", group: "workstations", from: "2024-04-12", to: "2024-04-13", status: "Outstanding" },
    { patchName: "Java Runtime Update 8u421", severity: "Important", computerName: "LAP-103", group: "laptops", from: "2024-04-14", to: "2024-04-15", status: "Remediated" },
    { patchName: "Windows Update KB5100021", severity: "Critical", computerName: "WKS-104", group: "workstations", from: "2024-04-16", to: "2024-04-17", status: "Outstanding" },
    { patchName: "SQL Server Engine Patch", severity: "High", computerName: "SRV-105", group: "servers", from: "2024-04-18", to: "2024-04-19", status: "Remediated" },
    { patchName: "Firefox Patch 123.2", severity: "Important", computerName: "LAP-106", group: "laptops", from: "2024-05-01", to: "2024-05-02", status: "Outstanding" },
    { patchName: "Windows Defender Critical Fix", severity: "Critical", computerName: "WKS-107", group: "workstations", from: "2024-05-03", to: "2024-05-04", status: "Remediated" },
    { patchName: "OpenSSL High Vulnerability Patch", severity: "High", computerName: "SRV-108", group: "servers", from: "2024-05-05", to: "2024-05-06", status: "Outstanding" },
    { patchName: "Office Macro Hardening Patch", severity: "Important", computerName: "WKS-109", group: "workstations", from: "2024-05-07", to: "2024-05-08", status: "Remediated" },
    { patchName: "Adobe PDF Engine Update", severity: "Critical", computerName: "LAP-110", group: "laptops", from: "2024-05-09", to: "2024-05-10", status: "Outstanding" },
    { patchName: "Windows Kernel Fix", severity: "High", computerName: "SRV-111", group: "servers", from: "2024-06-14", to: "2024-06-15", status: "Remediated" },
    { patchName: "Chrome Update 125", severity: "Important", computerName: "WKS-112", group: "workstations", from: "2024-06-16", to: "2024-06-17", status: "Outstanding" },
    { patchName: "Linux Root Certificate Patch", severity: "Critical", computerName: "SRV-113", group: "servers", from: "2024-06-18", to: "2024-06-19", status: "Outstanding" },
    { patchName: "HP Device Security Patch", severity: "High", computerName: "LAP-114", group: "laptops", from: "2024-06-20", to: "2024-06-21", status: "Remediated" },
    { patchName: "Windows UI Framework Patch", severity: "Important", computerName: "WKS-115", group: "workstations", from: "2024-06-22", to: "2024-06-23", status: "Outstanding" },
    { patchName: "Exchange Transport Patch", severity: "Critical", computerName: "SRV-116", group: "servers", from: "2024-07-01", to: "2024-07-02", status: "Outstanding" },
    { patchName: "Outlook Credential Patch", severity: "High", computerName: "LAP-117", group: "laptops", from: "2024-07-03", to: "2024-07-04", status: "Remediated" },
    { patchName: "Chrome Sandbox Fix", severity: "Important", computerName: "WKS-118", group: "workstations", from: "2024-07-05", to: "2024-07-06", status: "Outstanding" },
    { patchName: "SQL Reporting Service Patch", severity: "High", computerName: "SRV-119", group: "servers", from: "2024-07-07", to: "2024-07-08", status: "Remediated" },
    { patchName: "Windows RDP Hardening Patch", severity: "Critical", computerName: "WKS-120", group: "workstations", from: "2024-07-09", to: "2024-07-10", status: "Remediated" },
    { patchName: "Linux Privilege Escalation Patch", severity: "High", computerName: "SRV-121", group: "servers", from: "2024-08-11", to: "2024-08-12", status: "Outstanding" },
    { patchName: "Office Add-in Security Patch", severity: "Important", computerName: "LAP-122", group: "laptops", from: "2024-08-13", to: "2024-08-14", status: "Remediated" },
    { patchName: "Windows Networking Patch", severity: "Critical", computerName: "WKS-123", group: "workstations", from: "2024-08-15", to: "2024-08-16", status: "Outstanding" },
    { patchName: "VMware Host Agent Patch", severity: "High", computerName: "SRV-124", group: "servers", from: "2024-08-17", to: "2024-08-18", status: "Remediated" },
    { patchName: "Firefox Extended Support Patch", severity: "Important", computerName: "WKS-125", group: "workstations", from: "2024-08-19", to: "2024-08-20", status: "Outstanding" },
    { patchName: "Windows Credential Guard Patch", severity: "Critical", computerName: "WKS-126", group: "workstations", from: "2024-09-22", to: "2024-09-23", status: "Outstanding" },
    { patchName: "Chrome Password Manager Fix", severity: "High", computerName: "LAP-127", group: "laptops", from: "2024-09-24", to: "2024-09-25", status: "Remediated" },
    { patchName: "Linux SSH Module Patch", severity: "Important", computerName: "SRV-128", group: "servers", from: "2024-09-26", to: "2024-09-27", status: "Outstanding" },
    { patchName: "Windows RPC Patch", severity: "High", computerName: "WKS-129", group: "workstations", from: "2024-09-28", to: "2024-09-29", status: "Remediated" },
    { patchName: "SQL Database Security Patch", severity: "Critical", computerName: "SRV-130", group: "servers", from: "2024-09-30", to: "2024-10-01", status: "Remediated" },
    { patchName: "Outlook Rendering Patch", severity: "Important", computerName: "WKS-131", group: "workstations", from: "2024-10-04", to: "2024-10-05", status: "Outstanding" },
    { patchName: "Chrome Rendering Patch", severity: "High", computerName: "LAP-132", group: "laptops", from: "2024-10-06", to: "2024-10-07", status: "Remediated" },
    { patchName: "Linux Kernel 6.8 Patch", severity: "Critical", computerName: "SRV-133", group: "servers", from: "2024-10-08", to: "2024-10-09", status: "Outstanding" },
    { patchName: "Windows BitLocker Update", severity: "High", computerName: "WKS-134", group: "workstations", from: "2024-10-10", to: "2024-10-11", status: "Remediated" },
    { patchName: "Apache Log4J Prevention Patch", severity: "Important", computerName: "SRV-135", group: "servers", from: "2024-10-12", to: "2024-10-13", status: "Remediated" },
    { patchName: "Microsoft Defender Core Patch", severity: "Critical", computerName: "WKS-136", group: "workstations", from: "2025-01-08", to: "2025-01-09", status: "Outstanding" },
    { patchName: "Chrome Engine Patch", severity: "High", computerName: "LAP-137", group: "laptops", from: "2025-01-10", to: "2025-01-11", status: "Remediated" },
    { patchName: "Linux System Daemon Patch", severity: "Important", computerName: "SRV-138", group: "servers", from: "2025-01-12", to: "2025-01-13", status: "Outstanding" },
    { patchName: "Windows Task Scheduler Patch", severity: "High", computerName: "WKS-139", group: "workstations", from: "2025-01-14", to: "2025-01-15", status: "Remediated" },
    { patchName: "SQL Server Memory Patch", severity: "Critical", computerName: "SRV-140", group: "servers", from: "2025-01-16", to: "2025-01-17", status: "Remediated" },
    { patchName: "Outlook Ribbon Patch", severity: "Important", computerName: "LAP-141", group: "laptops", from: "2025-02-04", to: "2025-02-05", status: "Outstanding" },
    { patchName: "Firefox SSL Patch", severity: "High", computerName: "WKS-142", group: "workstations", from: "2025-02-06", to: "2025-02-07", status: "Remediated" },
    { patchName: "Linux SSH Hardening Patch", severity: "Critical", computerName: "SRV-143", group: "servers", from: "2025-02-08", to: "2025-02-09", status: "Outstanding" },
    { patchName: "Windows Bluetooth Security Patch", severity: "High", computerName: "WKS-144", group: "workstations", from: "2025-02-10", to: "2025-02-11", status: "Outstanding" },
    { patchName: "Exchange Mailbox Safety Patch", severity: "Critical", computerName: "SRV-145", group: "servers", from: "2025-02-12", to: "2025-02-13", status: "Remediated" },
    { patchName: "Chrome Web Engine Patch", severity: "High", computerName: "LAP-146", group: "laptops", from: "2025-03-14", to: "2025-03-16", status: "Outstanding" },
    { patchName: "Windows Memory Leak Patch", severity: "Critical", computerName: "WKS-147", group: "workstations", from: "2025-03-16", to: "2025-03-17", status: "Remediated" },
    { patchName: "Linux Container Security Patch", severity: "High", computerName: "SRV-148", group: "servers", from: "2025-03-18", to: "2025-03-19", status: "Outstanding" },
    { patchName: "Office VBA Runtime Patch", severity: "Important", computerName: "WKS-149", group: "workstations", from: "2025-03-20", to: "2025-03-21", status: "Remediated" },
    { patchName: "Windows Network Stack Patch", severity: "Critical", computerName: "SRV-150", group: "servers", from: "2025-03-22", to: "2025-03-23", status: "Outstanding" }
];

// Pagination State
let currentPage = 1;
const rowsPerPage = 10;
let filteredData = []; // Stores the fully filtered dataset

/* -----------------------------
    CUSTOM MULTI-SELECT SETUP (Top Filters)
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

    // Update display text when checkboxes change, then re-apply filters if data is loaded
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateMultiselectText();
            // If data is already loaded, re-apply filters to page 1
            if (filteredData.length > 0) {
                applyFilters(1);
            }
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
    // Also close custom single selects
    document.querySelectorAll('.custom-select').forEach(select => {
        select.querySelector('.select-dropdown').classList.remove('show');
        select.querySelector('.select-trigger').classList.remove('active');
        select.querySelector('.select-trigger').setAttribute('aria-expanded', 'false');
    });
});

// Init multiselects 
initMultiselect('severityMultiselect');
// Group multiselect initiation removed

/* -----------------------------
    CUSTOM SINGLE-SELECT SETUP (Table Controls & Group Filter)
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
                    // For other selects (Status, Severity2, Group), apply filters (resets to page 1)
                    applyFilters(1);
                }

                e.stopPropagation();
            });
        });
    });
}
initCustomSelects();

/* -----------------------------
    Helpers to get selected values
   ----------------------------- */
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
    PAGINATION & DISPLAY FUNCTIONS
   ----------------------------- */
// ... (displayTableData, renderPagination, getStatusClass, getSeverityClass functions remain the same) ...

/**
 * Renders the table body with the data for the current page.
 * @param {Array} data - The array of patches (already filtered) to display.
 * @param {number} page - The current page number.
 */
function displayTableData(data, page) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    // Calculate start and end indices for the current page
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = data.slice(start, end);

    if (paginatedItems.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div>No matching records found.</div>
                </td>
            </tr>
        `;
        renderPagination(data.length, page);
        return;
    }

    paginatedItems.forEach(item => {
        const row = document.createElement('tr');

        // create severity and status badges inside td
        const severityBadge = `<span class="severity-badge ${getSeverityClass(item.severity)}">${item.severity}</span>`;
        const statusBadge = `<span class="status-badge ${getStatusClass(item.status)}">${item.status}</span>`;

        row.innerHTML = `
            <td>${item.patchName}</td>
            <td>${severityBadge}</td>
            <td>${item.computerName}</td>
            <td>${item.from}</td>
            <td>${item.to}</td>
            <td>${statusBadge}</td>
        `;
        tableBody.appendChild(row);
    });

    renderPagination(data.length, page);
}

/**
 * Renders the pagination controls (Previous/Next buttons, page numbers).
 */
function renderPagination(totalItems, page) {
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = '';

    if (totalItems === 0) {
        return;
    }

    const totalPages = Math.ceil(totalItems / rowsPerPage);

    // Calculate item range for display (e.g., 1-10 of 48)
    const startItem = (page - 1) * rowsPerPage + 1;
    const endItem = Math.min(page * rowsPerPage, totalItems);

    const info = document.createElement('span');
    info.classList.add('pagination-info');
    info.textContent = `Showing ${startItem} to ${endItem} of ${totalItems} patches.`;
    paginationContainer.appendChild(info);

    // Helper to create page buttons
    function createPageButton(pageNumber, currentPage) {
        const pageButton = document.createElement('span');
        pageButton.classList.add('page-number');
        if (pageNumber === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.textContent = pageNumber;
        pageButton.addEventListener('click', () => applyFilters(pageNumber));
        return pageButton;
    }

    // Previous Button
    const prevButton = document.createElement('button');
    prevButton.classList.add('pagination-button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = page === 1;
    prevButton.addEventListener('click', () => {
        if (page > 1) {
            applyFilters(page - 1);
        }
    });
    paginationContainer.appendChild(prevButton);

    // Page Number Buttons (showing a basic range: 1, ..., N)
    for (let i = 1; i <= totalPages; i++) {
        // Simple logic for showing pages: show all if <= 5, otherwise show first, last, and up to 3 around current.
        const maxPagesToShow = 5;
        const showEllipsis = totalPages > maxPagesToShow;

        if (showEllipsis) {
            // Logic to determine which pages to show (1, ..., [current-1, current, current+1], ..., last)
            const isFirst = i === 1;
            const isLast = i === totalPages;
            const isNearCurrent = i >= page - 1 && i <= page + 1;

            if (isFirst || isLast || isNearCurrent) {
                const pageButton = createPageButton(i, page);
                paginationContainer.appendChild(pageButton);
            } else if (i === 2 && page > 3) {
                // Add ellipsis before the middle range
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.classList.add('page-number');
                paginationContainer.appendChild(ellipsis);
            } else if (i === totalPages - 1 && page < totalPages - 2) {
                // Add ellipsis after the middle range
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.classList.add('page-number');
                paginationContainer.appendChild(ellipsis);
            }
        } else {
            // Show all pages if totalPages is small
            const pageButton = createPageButton(i, page);
            paginationContainer.appendChild(pageButton);
        }
    }

    // Next Button
    const nextButton = document.createElement('button');
    nextButton.classList.add('pagination-button');
    nextButton.textContent = 'Next';
    nextButton.disabled = page === totalPages;
    nextButton.addEventListener('click', () => {
        if (page < totalPages) {
            applyFilters(page + 1);
        }
    });
    paginationContainer.appendChild(nextButton);
}

function getStatusClass(status) {
    const s = (status || '').toLowerCase();
    if (s === 'remediated') return 'status-remediated';
    if (s === 'outstanding') return 'status-pending';
    return '';
}
function getSeverityClass(sev) {
    const s = (sev || '').toLowerCase();
    if (s === 'critical') return 'severity-critical';
    if (s === 'important') return 'severity-important';
    if (s === 'high') return 'severity-high';
    return '';
}


/* -----------------------------
    KPI CARD LOGIC (Updated for Total Devices and Compliance)
   ----------------------------- */

function updateKpiCards(data) {
    const totalDevices = data.length; // Total items in the current view/dataset
    let remediatedPatches = 0;

    data.forEach(item => {
        // Count the patches that are remediated
        if (item.status.toLowerCase() === 'remediated') {
            remediatedPatches++;
        }
    });

    // Calculation: Compliance = (Remediated Patches / Total Patches) * 100
    let compliancePercentage = 0;
    if (totalDevices > 0) {
        compliancePercentage = (remediatedPatches / totalDevices) * 100;
    }

    // 1. Total Devices
    document.getElementById('totalDevicesValue').textContent = totalDevices;

    // 2. Compliance Percentage
    document.getElementById('compliancePercentageValue').textContent = 
        `${compliancePercentage.toFixed(1)}%`;
}


/* -----------------------------
    FILTERING CORE LOGIC
   ----------------------------- */

/**
 * Calculates and filters the data based on all criteria.
 * Then calls displayTableData with the first page (or specified page).
 * @param {number} [page=1] - The page number to navigate to after filtering.
 */
function applyFilters(page = 1) {
    // 1. Get filter values
    const search = document.getElementById('search').value.toLowerCase();
    const status = getCustomSelectValue('status');
    const severity2 = getCustomSelectValue('severity2');
    const group = getCustomSelectValue('group'); // Group is now a single select
    
    const dateFrom = document.getElementById('dateFrom').value;
    const dateTo = document.getElementById('dateTo').value;
    const selectedSeverities = getSelectedValues('severityMultiselect');

    // 2. Filter the entire dataset
    filteredData = sampleData.filter(item => {
        // Search filter (Patch Name or Computer Name)
        const itemText = (item.patchName + ' ' + item.computerName).toLowerCase();
        if (search && !itemText.includes(search)) {
            return false;
        }
        // Table Status filter (Custom Select)
        if (status && item.status.toLowerCase() !== status) {
            return false;
        }
        // Table Severity filter (Custom Select)
        if (severity2 && item.severity.toLowerCase() !== severity2) {
            return false;
        }
        
        // Multiselect Severity filter (Top Filter)
        if (selectedSeverities.length > 0 && !selectedSeverities.includes(item.severity.toLowerCase())) {
            return false;
        }
        
        // Single-select Group filter (Top Filter)
        if (group && item.group.toLowerCase() !== group) {
            return false;
        }
        
        // Date From filter
        if (dateFrom && item.from < dateFrom) {
            return false;
        }
        // Date To filter
        if (dateTo && item.to > dateTo) {
            return false;
        }
        return true;
    });

    // 3. Update current page and display the results
    currentPage = page;
    displayTableData(filteredData, currentPage);
    
    // Update KPI cards after filtering
    updateKpiCards(filteredData);
}

/* -----------------------------
    RESET FILTERS
   ----------------------------- */
function resetFilters() {
    // clear multiselects (ONLY SEVERITY REMAINS)
    document.querySelectorAll('.custom-multiselect').forEach(multiselect => {
        const checkboxes = multiselect.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        const textElement = multiselect.querySelector('.multiselect-text');
        // Only checks for severity multiselect
        if (multiselect.id === 'severityMultiselect') {
            textElement.textContent = 'Severity';
        }
        multiselect.querySelector('.multiselect-dropdown').classList.remove('show');
        multiselect.querySelector('.multiselect-trigger').classList.remove('active');
    });

    // reset custom selects (Status, Severity2, Export, and Group)
    document.querySelectorAll('.custom-select').forEach(s => {
        s.dataset.value = '';
        
        // Logic to set the default text based on data-id
        let defaultText = s.dataset.id === 'status' ? 'Status' : 
                          s.dataset.id === 'severity2' ? 'Severity' : 
                          s.dataset.id === 'group' ? 'Group' : 'Export';
        
        s.querySelector('.select-text').textContent = defaultText;

        // Close dropdowns
        s.querySelector('.select-dropdown').classList.remove('show');
        s.querySelector('.select-trigger').classList.remove('active');
        s.querySelector('.select-trigger').setAttribute('aria-expanded', 'false');
    });

    document.getElementById('search').value = '';
    document.getElementById('dateFrom').value = '';
    document.getElementById('dateTo').value = '';

    // Remove filled class for date inputs
    document.querySelectorAll('.custom-input').forEach(ci => ci.classList.remove('filled'));

    // Reset state for pagination/data
    filteredData = [];
    currentPage = 1;

    // Clear table and pagination UI (Table will show "No data available")
    document.getElementById('paginationContainer').innerHTML = '';
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = `
        <tr>
            <td colspan="6" class="empty-state">
                <div class="empty-state-icon">📊</div>
                <div>No data available. Apply filters to load data.</div>
            </td>
        </tr>
    `;
    
    // CRITICAL FIX: The KPI must be updated with empty data on RESET
    updateKpiCards(filteredData); 
}

/* -----------------------------
    Export helpers (CSV/Excel/PDF)
   ----------------------------- */
function exportToCSV() {
    if (filteredData.length === 0) {
        alert('No data to export. Please apply filters first to load data.');
        return;
    }
    const headers = ['Patch Name', 'Severity', 'Computer Name', 'From', 'To', 'Status'];
    let csvContent = headers.join(',') + '\n';
    filteredData.forEach(item => {
        const row = [`"${item.patchName.replace(/"/g, '""')}"`, item.severity, item.computerName, item.from, item.to, item.status];
        csvContent += row.join(',') + '\n';
    });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().slice(0,10).replace(/-/g, '');
    const filename = `patch_management_${timestamp}.csv`;
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function exportToExcel() {
    if (filteredData.length === 0) {
        alert('No data to export. Please apply filters first to load data.');
        return;
    }
    // Simple XLSX compatible CSV using .xlsx extension
    const headers = ['Patch Name', 'Severity', 'Computer Name', 'From', 'To', 'Status'];
    let csvContent = headers.join(',') + '\n';
    filteredData.forEach(item => {
        const row = [`"${item.patchName.replace(/"/g, '""')}"`, item.severity, item.computerName, item.from, item.to, item.status];
        csvContent += row.join(',') + '\n';
    });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().slice(0,10).replace(/-/g, '');
    const filename = `patch_management_${timestamp}.xlsx`;
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportToPDF() {
    alert('PDF export not implemented. Use CSV/Excel.');
}

function handleExport(type) {
    if (type === 'csv') exportToCSV();
    else if (type === 'excel') exportToExcel();
    else if (type === 'pdf') exportToPDF();
}


/* -----------------------------
    Event listeners & wiring
   ----------------------------- */
document.getElementById('applyBtn').addEventListener('click', () => applyFilters(1));
document.getElementById('resetBtn').addEventListener('click', resetFilters);
document.getElementById('exportCsvBtn').addEventListener('click', exportToCSV);

// Dynamic search trigger (re-filter and reset to page 1)
document.getElementById('search').addEventListener('keyup', function() {
    // Only filter if there is data loaded or if the user types more than 2 chars to search
    if (filteredData.length > 0 || this.value.length > 2) applyFilters(1);
});

// Date inputs change -> apply (re-filter and reset to page 1)
document.getElementById('dateFrom').addEventListener('change', () => {
    toggleFilledClass('dateFrom');
    applyFilters(1);
});
document.getElementById('dateTo').addEventListener('change', () => {
    toggleFilledClass('dateTo');
    applyFilters(1);
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