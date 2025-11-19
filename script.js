// Sample data
const sampleData = [

{ patchName: "Windows Secure Boot Patch", severity: "Critical", computerName: "SRV-101", group: "servers", from: "2024-04-10", to: "2024-04-11", status: "Remediated" },
{ patchName: "Chrome Security Patch 124", severity: "High", computerName: "WKS-102", group: "workstations", from: "2024-04-12", to: "2024-04-13", status: "Pending" },
{ patchName: "Java Runtime Update 8u421", severity: "Important", computerName: "LAP-103", group: "laptops", from: "2024-04-14", to: "2024-04-15", status: "Remediated" },
{ patchName: "Windows Update KB5100021", severity: "Critical", computerName: "WKS-104", group: "workstations", from: "2024-04-16", to: "2024-04-17", status: "Pending" },
{ patchName: "SQL Server Engine Patch", severity: "High", computerName: "SRV-105", group: "servers", from: "2024-04-18", to: "2024-04-19", status: "Remediated" },

{ patchName: "Firefox Patch 123.2", severity: "Important", computerName: "LAP-106", group: "laptops", from: "2024-05-01", to: "2024-05-02", status: "Pending" },
{ patchName: "Windows Defender Critical Fix", severity: "Critical", computerName: "WKS-107", group: "workstations", from: "2024-05-03", to: "2024-05-04", status: "Remediated" },
{ patchName: "OpenSSL High Vulnerability Patch", severity: "High", computerName: "SRV-108", group: "servers", from: "2024-05-05", to: "2024-05-06", status: "Pending" },
{ patchName: "Office Macro Hardening Patch", severity: "Important", computerName: "WKS-109", group: "workstations", from: "2024-05-07", to: "2024-05-08", status: "Remediated" },
{ patchName: "Adobe PDF Engine Update", severity: "Critical", computerName: "LAP-110", group: "laptops", from: "2024-05-09", to: "2024-05-10", status: "Pending" },

{ patchName: "Windows Kernel Fix", severity: "High", computerName: "SRV-111", group: "servers", from: "2024-06-14", to: "2024-06-15", status: "Remediated" },
{ patchName: "Chrome Update 125", severity: "Important", computerName: "WKS-112", group: "workstations", from: "2024-06-16", to: "2024-06-17", status: "Pending" },
{ patchName: "Linux Root Certificate Patch", severity: "Critical", computerName: "SRV-113", group: "servers", from: "2024-06-18", to: "2024-06-19", status: "Pending" },
{ patchName: "HP Device Security Patch", severity: "High", computerName: "LAP-114", group: "laptops", from: "2024-06-20", to: "2024-06-21", status: "Remediated" },
{ patchName: "Windows UI Framework Patch", severity: "Important", computerName: "WKS-115", group: "workstations", from: "2024-06-22", to: "2024-06-23", status: "Pending" },

{ patchName: "Exchange Transport Patch", severity: "Critical", computerName: "SRV-116", group: "servers", from: "2024-07-01", to: "2024-07-02", status: "Pending" },
{ patchName: "Outlook Credential Patch", severity: "High", computerName: "LAP-117", group: "laptops", from: "2024-07-03", to: "2024-07-04", status: "Remediated" },
{ patchName: "Chrome Sandbox Fix", severity: "Important", computerName: "WKS-118", group: "workstations", from: "2024-07-05", to: "2024-07-06", status: "Pending" },
{ patchName: "SQL Reporting Service Patch", severity: "High", computerName: "SRV-119", group: "servers", from: "2024-07-07", to: "2024-07-08", status: "Remediated" },
{ patchName: "Windows RDP Hardening Patch", severity: "Critical", computerName: "WKS-120", group: "workstations", from: "2024-07-09", to: "2024-07-10", status: "Remediated" },

{ patchName: "Linux Privilege Escalation Patch", severity: "High", computerName: "SRV-121", group: "servers", from: "2024-08-11", to: "2024-08-12", status: "Pending" },
{ patchName: "Office Add-in Security Patch", severity: "Important", computerName: "LAP-122", group: "laptops", from: "2024-08-13", to: "2024-08-14", status: "Remediated" },
{ patchName: "Windows Networking Patch", severity: "Critical", computerName: "WKS-123", group: "workstations", from: "2024-08-15", to: "2024-08-16", status: "Pending" },
{ patchName: "VMware Host Agent Patch", severity: "High", computerName: "SRV-124", group: "servers", from: "2024-08-17", to: "2024-08-18", status: "Remediated" },
{ patchName: "Firefox Extended Support Patch", severity: "Important", computerName: "WKS-125", group: "workstations", from: "2024-08-19", to: "2024-08-20", status: "Pending" },

{ patchName: "Windows Credential Guard Patch", severity: "Critical", computerName: "WKS-126", group: "workstations", from: "2024-09-22", to: "2024-09-23", status: "Pending" },
{ patchName: "Chrome Password Manager Fix", severity: "High", computerName: "LAP-127", group: "laptops", from: "2024-09-24", to: "2024-09-25", status: "Remediated" },
{ patchName: "Linux SSH Module Patch", severity: "Important", computerName: "SRV-128", group: "servers", from: "2024-09-26", to: "2024-09-27", status: "Pending" },
{ patchName: "Windows RPC Patch", severity: "High", computerName: "WKS-129", group: "workstations", from: "2024-09-28", to: "2024-09-29", status: "Remediated" },
{ patchName: "SQL Database Security Patch", severity: "Critical", computerName: "SRV-130", group: "servers", from: "2024-09-30", to: "2024-10-01", status: "Remediated" },

{ patchName: "Outlook Rendering Patch", severity: "Important", computerName: "WKS-131", group: "workstations", from: "2024-10-04", to: "2024-10-05", status: "Pending" },
{ patchName: "Chrome Rendering Patch", severity: "High", computerName: "LAP-132", group: "laptops", from: "2024-10-06", to: "2024-10-07", status: "Remediated" },
{ patchName: "Linux Kernel 6.8 Patch", severity: "Critical", computerName: "SRV-133", group: "servers", from: "2024-10-08", to: "2024-10-09", status: "Pending" },
{ patchName: "Windows BitLocker Update", severity: "High", computerName: "WKS-134", group: "workstations", from: "2024-10-10", to: "2024-10-11", status: "Remediated" },
{ patchName: "Apache Log4J Prevention Patch", severity: "Important", computerName: "SRV-135", group: "servers", from: "2024-10-12", to: "2024-10-13", status: "Remediated" },

{ patchName: "Microsoft Defender Core Patch", severity: "Critical", computerName: "WKS-136", group: "workstations", from: "2025-01-08", to: "2025-01-09", status: "Pending" },
{ patchName: "Chrome Engine Patch", severity: "High", computerName: "LAP-137", group: "laptops", from: "2025-01-10", to: "2025-01-11", status: "Remediated" },
{ patchName: "Linux System Daemon Patch", severity: "Important", computerName: "SRV-138", group: "servers", from: "2025-01-12", to: "2025-01-13", status: "Pending" },
{ patchName: "Windows Task Scheduler Patch", severity: "High", computerName: "WKS-139", group: "workstations", from: "2025-01-14", to: "2025-01-15", status: "Remediated" },
{ patchName: "SQL Server Memory Patch", severity: "Critical", computerName: "SRV-140", group: "servers", from: "2025-01-16", to: "2025-01-17", status: "Remediated" },

{ patchName: "Outlook Ribbon Patch", severity: "Important", computerName: "LAP-141", group: "laptops", from: "2025-02-04", to: "2025-02-05", status: "Pending" },
{ patchName: "Firefox SSL Patch", severity: "High", computerName: "WKS-142", group: "workstations", from: "2025-02-06", to: "2025-02-07", status: "Remediated" },
{ patchName: "Linux SSH Hardening Patch", severity: "Critical", computerName: "SRV-143", group: "servers", from: "2025-02-08", to: "2025-02-09", status: "Pending" },
{ patchName: "Windows Bluetooth Security Patch", severity: "High", computerName: "WKS-144", group: "workstations", from: "2025-02-10", to: "2025-02-11", status: "Pending" },
{ patchName: "Exchange Mailbox Safety Patch", severity: "Critical", computerName: "SRV-145", group: "servers", from: "2025-02-12", to: "2025-02-13", status: "Remediated" },

{ patchName: "Chrome Web Engine Patch", severity: "High", computerName: "LAP-146", group: "laptops", from: "2025-03-14", to: "2025-03-15", status: "Pending" },
{ patchName: "Windows Memory Leak Patch", severity: "Critical", computerName: "WKS-147", group: "workstations", from: "2025-03-16", to: "2025-03-17", status: "Remediated" },
{ patchName: "Linux Container Security Patch", severity: "High", computerName: "SRV-148", group: "servers", from: "2025-03-18", to: "2025-03-19", status: "Pending" },
{ patchName: "Office VBA Runtime Patch", severity: "Important", computerName: "WKS-149", group: "workstations", from: "2025-03-20", to: "2025-03-21", status: "Remediated" },
{ patchName: "Windows Network Stack Patch", severity: "Critical", computerName: "SRV-150", group: "servers", from: "2025-03-22", to: "2025-03-23", status: "Pending" }


];
// Initialize custom multiselect dropdowns
let currentDisplayedData = [];

// Initialize custom multiselect dropdowns
function initMultiselect(multiselectId) {
    const multiselect = document.getElementById(multiselectId);
    const trigger = multiselect.querySelector('.multiselect-trigger');
    const dropdown = multiselect.querySelector('.multiselect-dropdown');
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    const textElement = multiselect.querySelector('.multiselect-text');
    const defaultText = textElement.textContent;

    // Toggle dropdown
    trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Close other dropdowns
        document.querySelectorAll('.custom-multiselect').forEach(ms => {
            if (ms.id !== multiselectId) {
                ms.querySelector('.multiselect-trigger').classList.remove('active');
                ms.querySelector('.multiselect-dropdown').classList.remove('show');
            }
        });

        trigger.classList.toggle('active');
        dropdown.classList.toggle('show');
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

// Initialize both multiselects
initMultiselect('severityMultiselect');
initMultiselect('groupMultiselect');

function getSelectedValues(multiselectId) {
    const multiselect = document.getElementById(multiselectId);
    const checkboxes = multiselect.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value.toLowerCase());
}

function applyFilters() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const filteredData = sampleData.filter(item => {
        const search = document.getElementById('search').value.toLowerCase();
        const status = document.getElementById('status').value.toLowerCase();
        const severity2 = document.getElementById('severity2').value.toLowerCase();
        
        // Get selected values from custom multiselects
        const selectedSeverities = getSelectedValues('severityMultiselect');
        const selectedGroups = getSelectedValues('groupMultiselect');

        if (search && !item.patchName.toLowerCase().includes(search) && 
            !item.computerName.toLowerCase().includes(search)) {
            return false;
        }
        if (status && item.status.toLowerCase() !== status) {
            return false;
        }
        if (severity2 && item.severity.toLowerCase() !== severity2) {
            return false;
        }
        if (selectedSeverities.length > 0 && !selectedSeverities.includes(item.severity.toLowerCase())) {
            return false;
        }
        if (selectedGroups.length > 0 && !selectedGroups.includes(item.group.toLowerCase())) {
            return false;
        }
        return true;
    });

    // Store the current displayed data for export
    currentDisplayedData = filteredData;

    if (filteredData.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div>No matching records found.</div>
                </td>
            </tr>
        `;
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

function resetFilters() {
    // Clear custom multiselects
    document.querySelectorAll('.custom-multiselect').forEach(multiselect => {
        const checkboxes = multiselect.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        const textElement = multiselect.querySelector('.multiselect-text');
        const defaultText = multiselect.id === 'severityMultiselect' ? 'Severity' : 'Group';
        textElement.textContent = defaultText;
    });
    
    document.getElementById('severity2').value = '';
    document.getElementById('status').value = '';
    document.getElementById('search').value = '';
    document.getElementById('dateFrom').value = '';
    document.getElementById('dateTo').value = '';
    document.getElementById('export').value = '';

    // Clear current displayed data
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

// Export to CSV function
function exportToCSV() {
    if (currentDisplayedData.length === 0) {
        alert('No data to export. Please apply filters first to load data.');
        return;
    }

    // Define CSV headers
    const headers = ['Patch Name', 'Severity', 'Computer Name', 'From', 'To', 'Status'];
    
    // Create CSV content
    let csvContent = headers.join(',') + '\n';
    
    currentDisplayedData.forEach(item => {
        const row = [
            `"${item.patchName}"`,
            item.severity,
            item.computerName,
            item.from,
            item.to,
            item.status
        ];
        csvContent += row.join(',') + '\n';
    });

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    // Create filename with timestamp
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `patch_management_${timestamp}.csv`;
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Export to Excel function (CSV format compatible with Excel)
function exportToExcel() {
    if (currentDisplayedData.length === 0) {
        alert('No data to export. Please apply filters first to load data.');
        return;
    }

    // Define headers
    const headers = ['Patch Name', 'Severity', 'Computer Name', 'From', 'To', 'Status'];
    
    // Create CSV content
    let csvContent = headers.join(',') + '\n';
    
    currentDisplayedData.forEach(item => {
        const row = [
            `"${item.patchName}"`,
            item.severity,
            item.computerName,
            item.from,
            item.to,
            item.status
        ];
        csvContent += row.join(',') + '\n';
    });

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    // Create filename with timestamp
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `patch_management_${timestamp}.xlsx`;
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Export to PDF function (basic text format)
function exportToPDF() {
    if (currentDisplayedData.length === 0) {
        alert('No data to export. Please apply filters first to load data.');
        return;
    }

    alert('PDF export functionality requires a PDF library. For now, please use CSV or Excel export.\n\nTo implement full PDF support, you would need to add a library like jsPDF or pdfmake.');
}

// Event Listeners
document.getElementById('applyBtn').addEventListener('click', applyFilters);
document.getElementById('resetBtn').addEventListener('click', resetFilters);

// Dynamic filtering from table controls
document.getElementById('status').addEventListener('change', function() {
    const tableBody = document.getElementById('tableBody');
    if (tableBody.querySelector('tr:not(.empty-state)')) {
        applyFilters();
    }
});

document.getElementById('severity2').addEventListener('change', function() {
    const tableBody = document.getElementById('tableBody');
    if (tableBody.querySelector('tr:not(.empty-state)')) {
        applyFilters();
    }
});

document.getElementById('search').addEventListener('keyup', function() {
    const tableBody = document.getElementById('tableBody');
    if (tableBody.querySelector('tr:not(.empty-state)')) {
        applyFilters();
    }
});

// Handle export dropdown change
document.getElementById('export').addEventListener('change', function() {
    const exportType = this.value;
    
    if (exportType === 'csv') {
        exportToCSV();
    } else if (exportType === 'excel') {
        exportToExcel();
    } else if (exportType === 'pdf') {
        exportToPDF();
    }
    
    // Reset dropdown
    this.value = '';
});