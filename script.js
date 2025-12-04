// ==========================================
//  DATA SOURCE 1: PATCH MANAGEMENT
// ==========================================
const sampleData = [
    { patchName: 'Outlook Desktop Patch', severity: 'Important', computerName: 'LAP-101', group: 'Laptops', from: '06/04/2024', to: '07/04/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '01/04/2024' },
    { patchName: 'Windows Update KB5100021', severity: 'Critical', computerName: 'WKS-102', group: 'Workstations', from: '03/06/2024', to: '04/06/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '29/05/2024' },
    { patchName: 'Office 365 Monthly Update', severity: 'Critical', computerName: 'LAP-103', group: 'Laptops', from: '14/06/2024', to: '16/06/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '09/06/2024' },
    { patchName: 'Outlook Desktop Patch', severity: 'Important', computerName: 'LAP-104', group: 'Laptops', from: '04/05/2024', to: '06/05/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '02/05/2024' },
    { patchName: 'VLC Media Player Patch', severity: 'Important', computerName: 'WKS-105', group: 'Workstations', from: '07/04/2024', to: '09/04/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '04/04/2024' },
    { patchName: 'WinRAR Archive Fix', severity: 'Critical', computerName: 'WKS-106', group: 'Workstations', from: '11/05/2024', to: '12/05/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '02/05/2024' },
    { patchName: 'Windows Update KB5100021', severity: 'Important', computerName: 'LAP-107', group: 'Laptops', from: '07/06/2024', to: '09/06/2024', status: 'Remediated', owner: 'Network Team', releaseDate: '29/05/2024' },
    { patchName: 'Edge Browser Security Update', severity: 'Important', computerName: 'WKS-108', group: 'Workstations', from: '11/06/2024', to: '13/06/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '04/06/2024' },
    { patchName: 'Zoom Client Hotfix', severity: 'Critical', computerName: 'LAP-109', group: 'Laptops', from: '26/06/2024', to: '28/06/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '19/06/2024' },
    { patchName: 'Go Language Runtime', severity: 'Important', computerName: 'SRV-110', group: 'Servers', from: '13/05/2024', to: '15/05/2024', status: 'Outstanding', owner: 'DevOps Team', releaseDate: '10/05/2024' },
    { patchName: 'Dropbox Sync Client', severity: 'Important', computerName: 'LAP-111', group: 'Laptops', from: '23/05/2024', to: '24/05/2024', status: 'Remediated', owner: 'Network Team', releaseDate: '18/05/2024' },
    { patchName: 'Slack Desktop App Update', severity: 'Important', computerName: 'LAP-112', group: 'Laptops', from: '08/05/2024', to: '10/05/2024', status: 'Outstanding', owner: 'Network Team', releaseDate: '02/05/2024' },
    { patchName: 'VMware Tools Upgrade', severity: 'Critical', computerName: 'SRV-113', group: 'Servers', from: '06/04/2024', to: '07/04/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '28/03/2024' },
    { patchName: 'Ansible Core Update', severity: 'Critical', computerName: 'SRV-114', group: 'Servers', from: '04/06/2024', to: '05/06/2024', status: 'Outstanding', owner: 'DevOps Team', releaseDate: '31/05/2024' },
    { patchName: 'Chrome Security Patch 124', severity: 'Critical', computerName: 'WKS-115', group: 'Workstations', from: '08/05/2024', to: '09/05/2024', status: 'Remediated', owner: 'Helpdesk Team', releaseDate: '06/05/2024' },
    { patchName: 'Outlook Desktop Patch', severity: 'Important', computerName: 'LAP-116', group: 'Laptops', from: '29/06/2024', to: '01/07/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '24/06/2024' },
    { patchName: 'Wireshark Update', severity: 'Critical', computerName: 'LAP-117', group: 'Laptops', from: '30/06/2024', to: '01/07/2024', status: 'Outstanding', owner: 'Network Team', releaseDate: '21/06/2024' },
    { patchName: 'WinRAR Archive Fix', severity: 'Critical', computerName: 'WKS-118', group: 'Workstations', from: '14/06/2024', to: '15/06/2024', status: 'Outstanding', owner: 'Security Ops', releaseDate: '10/06/2024' },
    { patchName: 'Terraform Provider Fix', severity: 'Important', computerName: 'SRV-119', group: 'Servers', from: '11/04/2024', to: '12/04/2024', status: 'Remediated', owner: 'Alice Smith', releaseDate: '08/04/2024' },
    { patchName: 'PowerShell 7.4 Update', severity: 'Important', computerName: 'LAP-120', group: 'Laptops', from: '16/04/2024', to: '17/04/2024', status: 'Remediated', owner: 'Helpdesk Team', releaseDate: '12/04/2024' },
    { patchName: 'PostgreSQL 14.2 Patch', severity: 'Important', computerName: 'SRV-121', group: 'Servers', from: '31/05/2024', to: '02/06/2024', status: 'Outstanding', owner: 'Alice Smith', releaseDate: '23/05/2024' },
    { patchName: 'Safari Browser Patch', severity: 'Critical', computerName: 'WKS-122', group: 'Workstations', from: '29/04/2024', to: '01/05/2024', status: 'Outstanding', owner: 'Security Ops', releaseDate: '25/04/2024' },
    { patchName: 'Edge Browser Security Update', severity: 'Critical', computerName: 'WKS-123', group: 'Workstations', from: '26/06/2024', to: '28/06/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '24/06/2024' },
    { patchName: 'NGINX Proxy Fix', severity: 'Important', computerName: 'SRV-124', group: 'Servers', from: '02/04/2024', to: '04/04/2024', status: 'Outstanding', owner: 'Database Team', releaseDate: '23/03/2024' },
    { patchName: 'Slack Desktop App Update', severity: 'Important', computerName: 'WKS-125', group: 'Workstations', from: '07/04/2024', to: '09/04/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '04/04/2024' },
    { patchName: 'Safari Browser Patch', severity: 'Important', computerName: 'LAP-126', group: 'Laptops', from: '21/04/2024', to: '23/04/2024', status: 'Remediated', owner: 'Helpdesk Team', releaseDate: '17/04/2024' },
    { patchName: 'Android Studio Patch', severity: 'Critical', computerName: 'LAP-127', group: 'Laptops', from: '25/04/2024', to: '26/04/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '22/04/2024' },
    { patchName: 'Wireshark Update', severity: 'Important', computerName: 'WKS-128', group: 'Workstations', from: '02/04/2024', to: '04/04/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '29/03/2024' },
    { patchName: 'Linux Kernel 5.15 Upgrade', severity: 'Important', computerName: 'SRV-129', group: 'Servers', from: '29/06/2024', to: '01/07/2024', status: 'Outstanding', owner: 'Database Team', releaseDate: '19/06/2024' },
    { patchName: 'Edge Browser Security Update', severity: 'Important', computerName: 'LAP-130', group: 'Laptops', from: '29/04/2024', to: '01/05/2024', status: 'Remediated', owner: 'Network Team', releaseDate: '25/04/2024' },
    { patchName: 'Android Studio Patch', severity: 'Important', computerName: 'LAP-131', group: 'Laptops', from: '01/05/2024', to: '02/05/2024', status: 'Outstanding', owner: 'Network Team', releaseDate: '21/04/2024' },
    { patchName: 'Node.js 18.x Maintenance', severity: 'Important', computerName: 'SRV-132', group: 'Servers', from: '11/06/2024', to: '12/06/2024', status: 'Outstanding', owner: 'Database Team', releaseDate: '08/06/2024' },
    { patchName: 'Firefox Patch 123.2', severity: 'Important', computerName: 'WKS-133', group: 'Workstations', from: '09/05/2024', to: '10/05/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '05/05/2024' },
    { patchName: 'Oracle JDK 17 Update', severity: 'Critical', computerName: 'SRV-134', group: 'Servers', from: '12/04/2024', to: '14/04/2024', status: 'Outstanding', owner: 'Security Ops', releaseDate: '05/04/2024' },
    { patchName: 'Apache HTTP Server Patch', severity: 'Critical', computerName: 'SRV-135', group: 'Servers', from: '01/04/2024', to: '03/04/2024', status: 'Remediated', owner: 'Alice Smith', releaseDate: '27/03/2024' },
    { patchName: 'Safari Browser Patch', severity: 'Critical', computerName: 'LAP-136', group: 'Laptops', from: '08/05/2024', to: '09/05/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '05/05/2024' },
    { patchName: 'Outlook Desktop Patch', severity: 'Important', computerName: 'WKS-137', group: 'Workstations', from: '03/04/2024', to: '04/04/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '26/03/2024' },
    { patchName: 'Zoom Client Hotfix', severity: 'Critical', computerName: 'LAP-138', group: 'Laptops', from: '18/05/2024', to: '20/05/2024', status: 'Remediated', owner: 'Network Team', releaseDate: '08/05/2024' },
    { patchName: 'Android Studio Patch', severity: 'Important', computerName: 'WKS-139', group: 'Workstations', from: '01/06/2024', to: '03/06/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '28/05/2024' },
    { patchName: 'Jenkins Security Advisory', severity: 'Important', computerName: 'SRV-140', group: 'Servers', from: '25/05/2024', to: '27/05/2024', status: 'Remediated', owner: 'DevOps Team', releaseDate: '16/05/2024' },
    { patchName: 'Kubernetes 1.29 Upgrade', severity: 'Important', computerName: 'SRV-141', group: 'Servers', from: '14/06/2024', to: '16/06/2024', status: 'Remediated', owner: 'Database Team', releaseDate: '05/06/2024' },
    { patchName: 'Windows Defender Critical Fix', severity: 'Important', computerName: 'WKS-142', group: 'Workstations', from: '01/04/2024', to: '02/04/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '28/03/2024' },
    { patchName: 'Firefox Patch 123.2', severity: 'Critical', computerName: 'LAP-143', group: 'Laptops', from: '21/06/2024', to: '23/06/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '11/06/2024' },
    { patchName: 'MacOS Sonoma 14.4.1', severity: 'Critical', computerName: 'WKS-144', group: 'Workstations', from: '10/06/2024', to: '11/06/2024', status: 'Outstanding', owner: 'Security Ops', releaseDate: '08/06/2024' },
    { patchName: 'Kubernetes 1.29 Upgrade', severity: 'Critical', computerName: 'SRV-145', group: 'Servers', from: '14/05/2024', to: '16/05/2024', status: 'Outstanding', owner: 'DevOps Team', releaseDate: '09/05/2024' },
    { patchName: '7-Zip Buffer Overflow Fix', severity: 'Important', computerName: 'LAP-146', group: 'Laptops', from: '27/06/2024', to: '28/06/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '18/06/2024' },
    { patchName: 'Tableau Desktop Patch', severity: 'Important', computerName: 'LAP-147', group: 'Laptops', from: '01/06/2024', to: '03/06/2024', status: 'Remediated', owner: 'Helpdesk Team', releaseDate: '28/05/2024' },
    { patchName: 'Dropbox Sync Client', severity: 'Important', computerName: 'LAP-148', group: 'Laptops', from: '29/04/2024', to: '01/05/2024', status: 'Remediated', owner: 'Helpdesk Team', releaseDate: '22/04/2024' },
    { patchName: 'Jenkins Security Advisory', severity: 'Important', computerName: 'SRV-149', group: 'Servers', from: '17/05/2024', to: '18/05/2024', status: 'Outstanding', owner: 'Alice Smith', releaseDate: '11/05/2024' },
    { patchName: 'PowerShell 7.4 Update', severity: 'Critical', computerName: 'LAP-150', group: 'Laptops', from: '13/06/2024', to: '15/06/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '03/06/2024' },
    { patchName: 'Windows Update KB5100021', severity: 'Important', computerName: 'LAP-151', group: 'Laptops', from: '17/06/2024', to: '19/06/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '14/06/2024' },
    { patchName: 'Visual Studio Code Update', severity: 'Important', computerName: 'LAP-152', group: 'Laptops', from: '01/06/2024', to: '02/06/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '23/05/2024' },
    { patchName: 'Dropbox Sync Client', severity: 'Critical', computerName: 'WKS-153', group: 'Workstations', from: '25/04/2024', to: '27/04/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '23/04/2024' },
    { patchName: 'Firefox Patch 123.2', severity: 'Important', computerName: 'WKS-154', group: 'Workstations', from: '25/05/2024', to: '26/05/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '17/05/2024' },
    { patchName: 'NGINX Proxy Fix', severity: 'Important', computerName: 'SRV-155', group: 'Servers', from: '28/04/2024', to: '29/04/2024', status: 'Outstanding', owner: 'DevOps Team', releaseDate: '24/04/2024' },
    { patchName: 'MacOS Sonoma 14.4.1', severity: 'Important', computerName: 'WKS-156', group: 'Workstations', from: '29/06/2024', to: '01/07/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '23/06/2024' },
    { patchName: 'Node.js 18.x Maintenance', severity: 'Important', computerName: 'SRV-157', group: 'Servers', from: '30/04/2024', to: '02/05/2024', status: 'Outstanding', owner: 'Security Ops', releaseDate: '20/04/2024' },
    { patchName: 'AWS CLI V2 Update', severity: 'Critical', computerName: 'LAP-158', group: 'Laptops', from: '28/04/2024', to: '29/04/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '20/04/2024' },
    { patchName: 'Cisco AnyConnect Update', severity: 'Important', computerName: 'WKS-159', group: 'Workstations', from: '08/05/2024', to: '10/05/2024', status: 'Remediated', owner: 'Helpdesk Team', releaseDate: '01/05/2024' },
    { patchName: 'NVIDIA Graphics Driver', severity: 'Critical', computerName: 'LAP-160', group: 'Laptops', from: '29/04/2024', to: '01/05/2024', status: 'Outstanding', owner: 'Network Team', releaseDate: '21/04/2024' },
    { patchName: 'Windows Secure Boot Patch', severity: 'Important', computerName: 'SRV-161', group: 'Servers', from: '24/05/2024', to: '25/05/2024', status: 'Remediated', owner: 'Database Team', releaseDate: '21/05/2024' },
    { patchName: 'Windows 11 Feature Update', severity: 'Important', computerName: 'LAP-162', group: 'Laptops', from: '30/06/2024', to: '01/07/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '20/06/2024' },
    { patchName: 'Windows Server Cumulative Update', severity: 'Critical', computerName: 'SRV-163', group: 'Servers', from: '23/04/2024', to: '24/04/2024', status: 'Outstanding', owner: 'Alice Smith', releaseDate: '18/04/2024' },
    { patchName: 'Windows 11 Feature Update', severity: 'Important', computerName: 'LAP-164', group: 'Laptops', from: '12/05/2024', to: '13/05/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '07/05/2024' },
    { patchName: 'NGINX Proxy Fix', severity: 'Important', computerName: 'SRV-165', group: 'Servers', from: '09/05/2024', to: '11/05/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '05/05/2024' },
    { patchName: 'Notepad++ Update', severity: 'Important', computerName: 'LAP-166', group: 'Laptops', from: '29/06/2024', to: '01/07/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '23/06/2024' },
    { patchName: 'Python 3.9 Security Fix', severity: 'Important', computerName: 'LAP-167', group: 'Laptops', from: '06/04/2024', to: '07/04/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '03/04/2024' },
    { patchName: 'Office 365 Monthly Update', severity: 'Important', computerName: 'LAP-168', group: 'Laptops', from: '17/04/2024', to: '18/04/2024', status: 'Remediated', owner: 'Network Team', releaseDate: '13/04/2024' },
    { patchName: 'AWS CLI V2 Update', severity: 'Important', computerName: 'LAP-169', group: 'Laptops', from: '08/05/2024', to: '09/05/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '03/05/2024' },
    { patchName: 'Python 3.9 Security Fix', severity: 'Critical', computerName: 'WKS-170', group: 'Workstations', from: '01/04/2024', to: '02/04/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '28/03/2024' },
    { patchName: 'Git Client Security Fix', severity: 'Important', computerName: 'WKS-171', group: 'Workstations', from: '17/04/2024', to: '18/04/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '14/04/2024' },
    { patchName: 'Slack Desktop App Update', severity: 'Critical', computerName: 'WKS-172', group: 'Workstations', from: '03/06/2024', to: '05/06/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '26/05/2024' },
    { patchName: 'Ansible Core Update', severity: 'Critical', computerName: 'SRV-173', group: 'Servers', from: '10/04/2024', to: '12/04/2024', status: 'Remediated', owner: 'Alice Smith', releaseDate: '05/04/2024' },
    { patchName: 'Outlook Desktop Patch', severity: 'Important', computerName: 'LAP-174', group: 'Laptops', from: '24/05/2024', to: '25/05/2024', status: 'Remediated', owner: 'Bob Jones', releaseDate: '21/05/2024' },
    { patchName: 'Windows IIS Server Fix', severity: 'Critical', computerName: 'SRV-175', group: 'Servers', from: '21/06/2024', to: '22/06/2024', status: 'Remediated', owner: 'Alice Smith', releaseDate: '15/06/2024' },
    { patchName: 'Slack Desktop App Update', severity: 'Critical', computerName: 'LAP-176', group: 'Laptops', from: '11/05/2024', to: '13/05/2024', status: 'Remediated', owner: 'Network Team', releaseDate: '06/05/2024' },
    { patchName: 'Zoom Client Hotfix', severity: 'Critical', computerName: 'WKS-177', group: 'Workstations', from: '05/05/2024', to: '07/05/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '03/05/2024' },
    { patchName: 'Windows 11 Feature Update', severity: 'Important', computerName: 'LAP-178', group: 'Laptops', from: '23/06/2024', to: '24/06/2024', status: 'Remediated', owner: 'Network Team', releaseDate: '17/06/2024' },
    { patchName: 'NVIDIA Graphics Driver', severity: 'Critical', computerName: 'WKS-179', group: 'Workstations', from: '04/04/2024', to: '05/04/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '26/03/2024' },
    { patchName: 'Spotify Desktop Patch', severity: 'Important', computerName: 'LAP-180', group: 'Laptops', from: '01/06/2024', to: '03/06/2024', status: 'Remediated', owner: 'Helpdesk Team', releaseDate: '22/05/2024' },
    { patchName: 'Go Language Runtime', severity: 'Critical', computerName: 'SRV-181', group: 'Servers', from: '26/05/2024', to: '28/05/2024', status: 'Remediated', owner: 'Database Team', releaseDate: '18/05/2024' },
    { patchName: 'Apache HTTP Server Patch', severity: 'Important', computerName: 'SRV-182', group: 'Servers', from: '26/04/2024', to: '27/04/2024', status: 'Remediated', owner: 'DevOps Team', releaseDate: '23/04/2024' },
    { patchName: 'NGINX Proxy Fix', severity: 'Important', computerName: 'SRV-183', group: 'Servers', from: '20/04/2024', to: '21/04/2024', status: 'Remediated', owner: 'Database Team', releaseDate: '18/04/2024' },
    { patchName: 'Linux Kernel 5.15 Upgrade', severity: 'Critical', computerName: 'SRV-184', group: 'Servers', from: '26/04/2024', to: '28/04/2024', status: 'Outstanding', owner: 'DevOps Team', releaseDate: '22/04/2024' },
    { patchName: 'Docker Container Runtime Fix', severity: 'Critical', computerName: 'SRV-185', group: 'Servers', from: '19/05/2024', to: '20/05/2024', status: 'Outstanding', owner: 'Database Team', releaseDate: '09/05/2024' },
    { patchName: 'Python 3.9 Security Fix', severity: 'Critical', computerName: 'WKS-186', group: 'Workstations', from: '20/05/2024', to: '21/05/2024', status: 'Outstanding', owner: 'Security Ops', releaseDate: '14/05/2024' },
    { patchName: 'Windows 11 Feature Update', severity: 'Critical', computerName: 'LAP-187', group: 'Laptops', from: '16/04/2024', to: '18/04/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '07/04/2024' },
    { patchName: 'Kubernetes 1.29 Upgrade', severity: 'Important', computerName: 'SRV-188', group: 'Servers', from: '05/06/2024', to: '06/06/2024', status: 'Remediated', owner: 'Security Ops', releaseDate: '01/06/2024' },
    { patchName: 'Oracle JDK 17 Update', severity: 'Critical', computerName: 'SRV-189', group: 'Servers', from: '04/05/2024', to: '05/05/2024', status: 'Outstanding', owner: 'Database Team', releaseDate: '02/05/2024' },
    { patchName: 'Windows Secure Boot Patch', severity: 'Important', computerName: 'SRV-190', group: 'Servers', from: '19/04/2024', to: '21/04/2024', status: 'Outstanding', owner: 'Security Ops', releaseDate: '09/04/2024' },
    { patchName: 'Ansible Core Update', severity: 'Critical', computerName: 'SRV-191', group: 'Servers', from: '06/06/2024', to: '08/06/2024', status: 'Outstanding', owner: 'DevOps Team', releaseDate: '27/05/2024' },
    { patchName: 'Windows 11 Feature Update', severity: 'Critical', computerName: 'LAP-192', group: 'Laptops', from: '20/04/2024', to: '22/04/2024', status: 'Outstanding', owner: 'Helpdesk Team', releaseDate: '12/04/2024' },
    { patchName: 'Windows 11 Feature Update', severity: 'Important', computerName: 'LAP-193', group: 'Laptops', from: '10/04/2024', to: '12/04/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '02/04/2024' },
    { patchName: 'Notepad++ Update', severity: 'Critical', computerName: 'LAP-194', group: 'Laptops', from: '16/06/2024', to: '18/06/2024', status: 'Remediated', owner: 'Helpdesk Team', releaseDate: '07/06/2024' },
    { patchName: 'Slack Desktop App Update', severity: 'Important', computerName: 'WKS-195', group: 'Workstations', from: '02/06/2024', to: '03/06/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '28/05/2024' },
    { patchName: 'Go Language Runtime', severity: 'Critical', computerName: 'SRV-196', group: 'Servers', from: '25/06/2024', to: '27/06/2024', status: 'Outstanding', owner: 'Database Team', releaseDate: '23/06/2024' },
    { patchName: 'Kubernetes 1.29 Upgrade', severity: 'Critical', computerName: 'SRV-197', group: 'Servers', from: '08/06/2024', to: '10/06/2024', status: 'Outstanding', owner: 'Alice Smith', releaseDate: '02/06/2024' },
    { patchName: 'Kubernetes 1.29 Upgrade', severity: 'Important', computerName: 'SRV-198', group: 'Servers', from: '06/04/2024', to: '07/04/2024', status: 'Outstanding', owner: 'Alice Smith', releaseDate: '28/03/2024' },
    { patchName: 'Java Runtime Update 8u421', severity: 'Important', computerName: 'LAP-199', group: 'Laptops', from: '12/05/2024', to: '13/05/2024', status: 'Outstanding', owner: 'Bob Jones', releaseDate: '09/05/2024' },
    { patchName: 'Firefox Patch 123.2', severity: 'Critical', computerName: 'LAP-200', group: 'Laptops', from: '06/04/2024', to: '07/04/2024', status: 'Outstanding', owner: 'Network Team', releaseDate: '31/03/2024' },
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


// Environment Compliance Data
const envComplianceData = {
    'Production': {
        totalPatches: 150,
        remediatedPatches: 135,
        details: [
            {
                patchName: 'Windows Security Update KB5001234',
                severity: 'Critical',
                computerName: 'PROD-WEB-01',
                from: '2024-11-10',
                to: '2024-11-15',
                releaseDate: '2024-11-08',
                owner: 'John Smith',
                status: 'Remediated'
            },
            {
                patchName: 'SQL Server Cumulative Update',
                severity: 'High',
                computerName: 'PROD-DB-01',
                from: '2024-11-10',
                to: '2024-11-18',
                releaseDate: '2024-11-05',
                owner: 'Sarah Johnson',
                status: 'Remediated'
            },
            {
                patchName: '.NET Framework Security Patch',
                severity: 'Medium',
                computerName: 'PROD-APP-01',
                from: '2024-11-10',
                to: '2024-11-20',
                releaseDate: '2024-11-07',
                owner: 'Mike Davis',
                status: 'Remediated'
            },
            {
                patchName: 'IIS Security Update KB5001237',
                severity: 'High',
                computerName: 'PROD-WEB-02',
                from: '2024-11-08',
                to: '2024-12-05',
                releaseDate: '2024-11-06',
                owner: 'John Smith',
                status: 'Pending'
            },
            {
                patchName: 'Windows Defender Definition Update',
                severity: 'Low',
                computerName: 'PROD-APP-02',
                from: '2024-11-10',
                to: '2024-11-22',
                releaseDate: '2024-11-09',
                owner: 'Mike Davis',
                status: 'Remediated'
            }
        ]
    },
    'UAT': {
        totalPatches: 120,
        remediatedPatches: 108,
        details: [
            {
                patchName: 'Apache Security Fix CVE-2024-1234',
                severity: 'High',
                computerName: 'UAT-WEB-01',
                from: '2024-11-07',
                to: '2024-11-10',
                releaseDate: '2024-11-05',
                owner: 'Emily Chen',
                status: 'Remediated'
            },
            {
                patchName: 'MySQL Security Patch 8.0.35',
                severity: 'Medium',
                computerName: 'UAT-DB-01',
                from: '2024-11-07',
                to: '2024-11-12',
                releaseDate: '2024-11-04',
                owner: 'David Lee',
                status: 'Remediated'
            },
            {
                patchName: 'Node.js Security Update 18.20.1',
                severity: 'Critical',
                computerName: 'UAT-APP-01',
                from: '2024-11-15',
                to: '2024-12-03',
                releaseDate: '2024-11-12',
                owner: 'Emily Chen',
                status: 'Pending'
            }
        ]
    },
    'Dev': {
        totalPatches: 95,
        remediatedPatches: 88,
        details: [
            {
                patchName: 'Nginx Security Update 1.24.0',
                severity: 'Medium',
                computerName: 'DEV-WEB-01',
                from: '2024-11-06',
                to: '2024-11-08',
                releaseDate: '2024-11-04',
                owner: 'Alex Martinez',
                status: 'Remediated'
            },
            {
                patchName: 'PostgreSQL Security Patch 15.5',
                severity: 'Low',
                computerName: 'DEV-DB-01',
                from: '2024-11-06',
                to: '2024-11-09',
                releaseDate: '2024-11-03',
                owner: 'Rachel Green',
                status: 'Remediated'
            },
            {
                patchName: 'Redis Security Fix 7.2.3',
                severity: 'High',
                computerName: 'DEV-APP-01',
                from: '2024-11-03',
                to: '2024-12-03',
                releaseDate: '2024-11-01',
                owner: 'Alex Martinez',
                status: 'Failed'
            }
        ]
    },
    'DR': {
        totalPatches: 140,
        remediatedPatches: 126,
        details: [
            {
                patchName: 'HAProxy Load Balancer Patch 2.8.5',
                severity: 'High',
                computerName: 'DR-LB-01',
                from: '2024-11-10',
                to: '2024-11-16',
                releaseDate: '2024-11-08',
                owner: 'Kevin Brown',
                status: 'Remediated'
            },
            {
                patchName: 'Oracle Database Security Update',
                severity: 'Critical',
                computerName: 'DR-DB-01',
                from: '2024-11-10',
                to: '2024-11-17',
                releaseDate: '2024-11-07',
                owner: 'Linda White',
                status: 'Remediated'
            },
            {
                patchName: 'Apache Tomcat Security Patch 9.0.82',
                severity: 'Medium',
                computerName: 'DR-APP-01',
                from: '2024-11-13',
                to: '2024-12-03',
                releaseDate: '2024-11-10',
                owner: 'Kevin Brown',
                status: 'Pending'
            }
        ]
    },
    'Cloud': {
        totalPatches: 110,
        remediatedPatches: 105,
        details: [
            {
                patchName: 'AWS AMI Security Update',
                severity: 'High',
                computerName: 'CLOUD-EC2-01',
                from: '2024-11-10',
                to: '2024-11-14',
                releaseDate: '2024-11-08',
                owner: 'Cloud Team',
                status: 'Remediated'
            },
            {
                patchName: 'RDS Engine Patch MySQL 8.0.35',
                severity: 'Critical',
                computerName: 'CLOUD-RDS-01',
                from: '2024-11-10',
                to: '2024-11-15',
                releaseDate: '2024-11-07',
                owner: 'Cloud Team',
                status: 'Remediated'
            },
            {
                patchName: 'ECS Container Runtime Update',
                severity: 'Medium',
                computerName: 'CLOUD-ECS-01',
                from: '2024-11-10',
                to: '2024-11-16',
                releaseDate: '2024-11-09',
                owner: 'Cloud Team',
                status: 'Remediated'
            }
        ]
    },
    'InfraOps': {
        totalPatches: 85,
        remediatedPatches: 79,
        details: [
            {
                patchName: 'Prometheus Monitoring Update 2.48.0',
                severity: 'Low',
                computerName: 'INFRA-MON-01',
                from: '2024-11-07',
                to: '2024-11-11',
                releaseDate: '2024-11-05',
                owner: 'DevOps Team',
                status: 'Remediated'
            },
            {
                patchName: 'Elasticsearch Security Patch 8.11.1',
                severity: 'High',
                computerName: 'INFRA-LOG-01',
                from: '2024-11-07',
                to: '2024-11-13',
                releaseDate: '2024-11-04',
                owner: 'DevOps Team',
                status: 'Remediated'
            },
            {
                patchName: 'Jenkins Security Fix 2.426.1',
                severity: 'Critical',
                computerName: 'INFRA-CICD-01',
                from: '2024-11-18',
                to: '2024-12-03',
                releaseDate: '2024-11-15',
                owner: 'DevOps Team',
                status: 'Pending'
            }
        ]
    }
};




// Pagination State
let currentPage = 1;
const rowsPerPage = 10;
let filteredData = [];
let compFilteredData = []; // Patch Data
let compBaseData = []; // Computer Base (Filtered by Apply)
let compViewData = []; // Computer View (Filtered by Status/Search)
let patchStatusChart = null; // global chart variable
let envComplianceChart;



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

// /*--------------------
// patch graph data
// ---------------------*/

// function getPatchChartData(patchTableData) {
//     const labels = patchTableData.map(item => item.severity);        // X-axis: Critical, Important, Total
//     const totalData = patchTableData.map(item => item.total);
//     const compliantData = patchTableData.map(item => item.remediated);
//     const nonCompliantData = patchTableData.map(item => item.outstanding);

//     return { labels, totalData, compliantData, nonCompliantData };
// }





/* -----------------------------
    GLOBAL CLICK LISTENER (Close Dropdowns & Calendar)
   ----------------------------- */
const datePickerPopup = document.getElementById('datePickerPopup');

if (datePickerPopup) {
    datePickerPopup.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

document.addEventListener('click', function () {
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



/*-------------------------------
   Debounce logic 
----------------------------------*/

let debounceTimers = {}; // store separate timers for each input

function unifiedDebounce(inputId, spinnerId, callback, delay = 300) {
    if (debounceTimers[inputId]) clearTimeout(debounceTimers[inputId]);

    const spinner = document.getElementById(spinnerId);
    if (spinner) spinner.classList.remove('hidden');

    debounceTimers[inputId] = setTimeout(() => {
        callback();
        if (spinner) spinner.classList.add('hidden');
    }, delay);
}

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

    function toggle(e) {
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
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        if (e.key === 'Escape') { dropdown.classList.remove('show'); trigger.classList.remove('active'); }
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            updateMultiselectText();
        });
    });

    function updateMultiselectText() {
        const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.nextSibling.textContent.trim());
        if (selected.length === 0) textElement.textContent = defaultText;
        else if (selected.length === 1) textElement.textContent = selected[0];
        else textElement.textContent = `${selected.length} selected`;
    }
    dropdown.addEventListener('click', function (e) { e.stopPropagation(); });
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
            option.addEventListener('click', function (e) {
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
                    if (filteredData.length > 0) applyFilters(1);
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
    if (datePickerPopup) datePickerPopup.innerHTML = html;
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
        if (datePickerPopup) datePickerPopup.style.display = 'none';
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
    input.addEventListener('click', function (e) {
        e.stopPropagation();
        document.querySelectorAll('.custom-select .select-dropdown.show').forEach(d => d.classList.remove('show'));

        if (datePickerPopup) {
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
    console.log('Export function called');
    console.log('Filtered data length:', filteredData ? filteredData.length : 'undefined');
    console.log('Filtered data:', filteredData);

    // Only export filtered data
    if (!filteredData || filteredData.length === 0) {
        alert('No data to export. Please apply filters first to load and filter data.');
        return;
    }

    const headers = [
        'Patch Name',
        'Severity',
        'Computer Name',
        'From',
        'To',
        'Release Date',
        'Responsibility/Owner',
        'Status'
    ];

    let csvContent = headers.join(',') + '\n';

    filteredData.forEach(item => {
        const row = [
            `"${(item.patchName || '').replace(/"/g, '""')}"`,
            `"${(item.severity || '').replace(/"/g, '""')}"`,
            `"${(item.computerName || '').replace(/"/g, '""')}"`,
            `"${(item.from || '').replace(/"/g, '""')}"`,
            `"${(item.to || '').replace(/"/g, '""')}"`,
            `"${(item.releaseDate || '').replace(/"/g, '""')}"`,
            `"${(item.owner || '').replace(/"/g, '""')}"`,
            `"${(item.status || '').replace(/"/g, '""')}"`
        ];
        csvContent += row.join(',') + '\n';
    });

    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `patch_report_${timestamp}.csv`;

    console.log('Attempting to download:', filename);
    console.log('CSV content length:', csvContent.length);

    downloadCSV(csvContent, filename);

    console.log(`Successfully exported ${filteredData.length} records to CSV`);
}


function exportCompToCSV() {
    console.log('Computer Export function called');
    console.log('Computer view data length:', compViewData ? compViewData.length : 'undefined');
    console.log('Computer view data:', compViewData);

    // Only export filtered/visible data
    if (!compViewData || compViewData.length === 0) {
        alert('No data to export. Please apply filters first to load and filter data.');
        return;
    }

    const headers = [
        'Computer Name',
        'Last Seen',
        'Days Offline',
        'IP Address',
        'Operating System',
        'Status'
    ];

    let csvContent = headers.join(',') + '\n';

    compViewData.forEach(item => {
        const row = [
            `"${(item.name || '').replace(/"/g, '""')}"`,
            `"${(item.lastSeen || '').replace(/"/g, '""')}"`,
            item.daysOffline || 0,
            `"${(item.ip || '').replace(/"/g, '""')}"`,
            `"${(item.os || '').replace(/"/g, '""')}"`,
            `"${(item.status || '').replace(/"/g, '""')}"`
        ];
        csvContent += row.join(',') + '\n';
    });

    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `computer_report_${timestamp}.csv`;

    console.log('Attempting to download:', filename);
    console.log('CSV content length:', csvContent.length);

    downloadCSV(csvContent, filename);

    console.log(`Successfully exported ${compViewData.length} records to CSV`);
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
        tableBody.innerHTML = `
            <tr>
                <td colspan="8" class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div>No data available. Apply filters to load data.</div>
                </td>
            </tr>`;
        renderPagination('paginationContainer', data.length, page, applyFilters);
        return;
    }

    paginatedItems.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.patchName || "—"}</td>
            <td>
                <span class="severity-badge ${getSeverityClass(item.severity)}">
                    ${item.severity || "—"}
                </span>
            </td>
            <td>${item.computerName || "—"}</td>
            <td>${item.from || "—"}</td>
            <td>${item.to || "—"}</td>
            <td>${item.releaseDate || "—"}</td>
            <td>${item.owner || "Unassigned"}</td>
            <td>
                <span class="status-badge ${getStatusClass(item.status)}">
                    ${item.status || "Unknown"}
                </span>
            </td>
        `;

        tableBody.appendChild(row);
    });

    renderPagination('paginationContainer', data.length, page, applyFilters);
}




//-------------------filter logic -------------//

let forceCriticalOutstanding = false;
let forceImportantOutstanding = false;


let kpiFilter = null;  // <-- NEW (do NOT redeclare elsewhere)

function applyFilters(page = 1) {

    const search = document.getElementById('search').value.toLowerCase().trim();
    const status = getCustomSelectValue('status');
    const severity2 = getCustomSelectValue('severity2');
    const group = getCustomSelectValue('group');
    const dateFrom = formatToISO(document.getElementById('dateFrom').value);
    const dateTo = formatToISO(document.getElementById('dateTo').value);
    const selectedSeverities = getSelectedValues('severityMultiselect');

    filteredData = sampleData.filter(item => {

        // 🔥 1. KPI FILTERS — run FIRST, ignore all other filters
        if (forceCriticalOutstanding) {
            return item.severity.toLowerCase() === "critical" &&
                item.status.toLowerCase() === "outstanding";
        }

        if (forceImportantOutstanding) {
            return item.severity.toLowerCase() === "important" &&
                item.status.toLowerCase() === "outstanding";
        }

        // 🔥 2. GLOBAL SEARCH
        if (search) {
            const searchableText = `
                ${item.patchName || ""}
                ${item.severity || ""}
                ${item.computerName || ""}
                ${item.from || ""}
                ${item.to || ""}
                ${item.releaseDate || ""}
                ${item.owner || ""}
                ${item.status || ""}
            `.toLowerCase();

            if (!searchableText.includes(search)) return false;
        }

        // 🔥 3. OTHER FILTERS
        if (status && item.status.toLowerCase() !== status) return false;
        if (severity2 && item.severity.toLowerCase() !== severity2) return false;

        if (selectedSeverities.length > 0 &&
            !selectedSeverities.includes(item.severity.toLowerCase())
        ) return false;

        if (group && item.group.toLowerCase() !== group) return false;

        if (dateFrom && item.from < dateFrom) return false;
        if (dateTo && item.to > dateTo) return false;

        return true;
    });

    currentPage = page;
    displayTableData(filteredData, currentPage);
    updateKpiCards(filteredData, 'totalDevicesValue', 'compliancePercentageValue');
    updateNonCompliantKpis();
}










//--------graph patch----------------//
function buildPatchChartData() {
    const critical = sampleData.filter(i => i.severity?.toLowerCase() === "critical");
    const important = sampleData.filter(i => i.severity?.toLowerCase() === "important");

    const totalCritical = critical.length;
    const remCritical = critical.filter(i => i.status?.toLowerCase() === "remediated").length;
    const outCritical = critical.filter(i => i.status?.toLowerCase() === "outstanding").length;

    const totalImportant = important.length;
    const remImportant = important.filter(i => i.status?.toLowerCase() === "remediated").length;
    const outImportant = important.filter(i => i.status?.toLowerCase() === "outstanding").length;

    const totalAll = sampleData.length;
    const remAll = sampleData.filter(i => i.status?.toLowerCase() === "remediated").length;
    const outAll = sampleData.filter(i => i.status?.toLowerCase() === "outstanding").length;

    return [
        { severity: "Critical", total: totalCritical, remediated: remCritical, outstanding: outCritical },
        { severity: "Important", total: totalImportant, remediated: remImportant, outstanding: outImportant },
        { severity: "Total", total: totalAll, remediated: remAll, outstanding: outAll }
    ];
}



function initPatchChart() {
    const patchData = buildPatchChartData();

    const labels = patchData.map(item => item.severity);
    const totalData = patchData.map(item => item.total);
    const compliantData = patchData.map(item => item.remediated);
    const nonCompliantData = patchData.map(item => item.outstanding);

    const ctx = document.getElementById('monthlyComplianceChart').getContext('2d');

    if (patchStatusChart) patchStatusChart.destroy();

    patchStatusChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                { label: 'Total Patches', data: totalData, backgroundColor: '#34495e' },
                { label: 'Compliant', data: compliantData, backgroundColor: '#1abc9c' },
                { label: 'Non-Compliant', data: nonCompliantData, backgroundColor: '#e74c3c' }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const datasetLabel = context.dataset.label;
                            const value = context.raw;
                            if (datasetLabel === "Total Patches") return `${datasetLabel}: ${value}`;
                            const total = patchData[context.dataIndex].total;
                            const percent = ((value / total) * 100).toFixed(1);
                            return `${datasetLabel}: ${value} (${percent}%)`;
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, title: { display: true, text: 'Number of Patches' } },
                x: { title: { display: true, text: 'Severity' } }
            }
        }
    });
}


// //chart update
// function updatePatchChart(filteredData) {
//     if (!patchStatusChart) return;

//     const { labels, totalData, compliantData, nonCompliantData } = getPatchChartData(filteredData);

//     patchStatusChart.data.labels = labels;
//     patchStatusChart.data.datasets[0].data = totalData;
//     patchStatusChart.data.datasets[1].data = compliantData;
//     patchStatusChart.data.datasets[2].data = nonCompliantData;

//     patchStatusChart.update();
// }

// Search filter listener
const patchSearchInput = document.getElementById('search');

patchSearchInput.addEventListener('input', () => {
    const value = patchSearchInput.value.trim();
    document.getElementById('clearSearch').style.display = value.length > 0 ? "block" : "none";
    unifiedDebounce('patch', 'searchSpinner', () => applyFilters(1));
});

document.getElementById('clearSearch').addEventListener('click', () => {
    patchSearchInput.value = '';
    patchSearchInput.focus();
    document.getElementById('clearSearch').style.display = 'none';
    applyFilters(1);
});






/* -----------------------------
    COMPUTER TAB LOGIC
   ----------------------------- */
function applyCompGlobalFilters(page = 1) {
    const daysVal = document.getElementById('compDaysInput').value;
    const groupVal = getCustomSelectValue('comp-group'); // group dropdown

    // Filter base data from full dataset
    compBaseData = computerData.filter(item => {
        const matchGroup = !groupVal || item.group.toLowerCase() === groupVal;
        const matchDays = !daysVal || item.daysOffline >= parseInt(daysVal);
        return matchGroup && matchDays;
    });

    // Reset local search/status filters
    const statusSel = document.getElementById('compStatusSelect');
    statusSel.dataset.value = '';
    statusSel.querySelector('.select-text').textContent = 'Status (All)';
    document.getElementById('compSearchInput').value = '';

    // Render table
    updateCompTableDisplay(page);
}


function applyCompSearchFilter() {
    const query = document.getElementById("compSearchInput").value.toLowerCase();

    compFilteredData = compBaseData.filter(item => {
        const text = (
            item.name + " " +
            item.ip + " " +
            item.os + " " +
            item.status
        ).toLowerCase();

        return text.includes(query);
    });

    updateCompTableDisplay(1);
}

function updateCompTableDisplay(page = 1) {
    const statusVal = getCustomSelectValue('comp-status'); // status dropdown
    const searchVal = document.getElementById('compSearchInput').value.toLowerCase().trim();

    // Filter based on base data + local filters
    compViewData = compBaseData.filter(item => {
        const matchStatus = !statusVal || item.status.toLowerCase() === statusVal;
        const matchSearch = (item.name + ' ' + item.ip + ' ' + item.os).toLowerCase().includes(searchVal);
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
        tbody.innerHTML = `<tr><td colspan="6" class="empty-state">
            <div class="empty-state-icon">🔍</div>
            <div>No data available. Apply filters to load data.</div>
        </td></tr>`;
        renderPagination('compPaginationContainer', data.length, page, updateCompTableDisplay);
        return;
    }

    paginatedItems.forEach(item => {
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


function updateCompChart(compViewData) {
    const ctx = document.getElementById('computerStatusChart').getContext('2d');

    const totalDevices = compViewData.length;
    const onlineDevices = compViewData.filter(d => d.status === 'Online').length;
    const offlineDevices = compViewData.filter(d => d.status === 'Offline').length;

    const chartData = {
        labels: ['Total Devices', 'Online', 'Offline'],
        datasets: [{
            label: 'Devices',
            data: [totalDevices, onlineDevices, offlineDevices],
            backgroundColor: ['#34495e', '#27ae60', '#c0392b']
        }]
    };

    if (window.compChart) {
        window.compChart.data = chartData;
        window.compChart.update();
    } else {
        window.compChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,   // chart fills the container
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        barPercentage: 0.3,
                        categoryPercentage: 0.4,
                        ticks: { font: { size: 14 } }
                    },
                    y: {
                        beginAtZero: true,
                        precision: 0,
                        ticks: { font: { size: 14 } }
                    }
                }
            }
        });
    }
}

/*------------------------------
env tab 
--------------------------------*/



// Initialize Environment Compliance Chart
function initEnvComplianceChart() {
    const ctx = document.getElementById('envComplianceChart');
    if (!ctx) return;

    const chartContext = ctx.getContext('2d');

    const environments = Object.keys(envComplianceData);

    // Start with EMPTY data (all zeros)
    const emptyData = environments.map(() => 0);

    const colors = ['#3498db', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6', '#1abc9c'];

    envComplianceChart = new Chart(chartContext, {
        type: 'bar',
        data: {
            labels: environments,
            datasets: [{
                label: 'Compliance %',
                data: emptyData,  // <-- START WITH ZERO DATA
                backgroundColor: colors,
                borderRadius: 8,
                barPercentage: 0.7,
                categoryPercentage: 0.8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, activeElements) => {
                if (activeElements.length === 0) return;

                const index = activeElements[0].index;
                const environment = environments[index];

                // Read currently applied date range
                const dateFromRaw = document.getElementById('envDateFrom').value;
                const dateToRaw = document.getElementById('envDateTo').value;

                const dateFrom = formatToISO(dateFromRaw);
                const dateTo = formatToISO(dateToRaw);

                showEnvDetails(environment, dateFrom, dateTo);
            },

            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const env = context.label;
                            const data = envComplianceData[env];
                            return [
                                `Compliance: ${context.parsed.y}%`,
                                `Remediated: ${data.remediatedPatches}`,
                                `Total: ${data.totalPatches}`
                            ];
                        }
                    }
                }
            },

            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 13, weight: 600 } }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: value => value + '%',
                        font: { size: 12 }
                    },
                    grid: { color: '#e1e8ed' }
                }
            }
        }
    });

    //  HIDE THE CHART ON TAB LOAD
    document.getElementById("envChartContainer").style.display = "none";
}



// Show environment details in table
function showEnvDetails(environment, dateFrom = null, dateTo = null) {
    const data = envComplianceData[environment];
    const tableBody = document.getElementById('envTableBody');
    const emptyState = document.getElementById('envEmptyState');
    const detailsTable = document.getElementById('envDetailsTable');
    const selectedEnv = document.getElementById('envSelectedEnv');

    if (!tableBody || !emptyState || !detailsTable || !selectedEnv) return;

    // Clear previous table data
    tableBody.innerHTML = '';

    // Filter details by date range if provided
    const filteredDetails = data.details.filter(item => {
        if (!dateFrom || !dateTo) return true; // no filter applied
        const itemFrom = new Date(item.from);
        const itemTo = new Date(item.to);
        return itemFrom >= new Date(dateFrom) && itemTo <= new Date(dateTo);
    });

    // Populate table
    filteredDetails.forEach(item => {
        const statusClass = item.status === 'Remediated' ? 'env-status-remediated' : 
                           item.status === 'Pending' ? 'env-status-pending' : 'env-status-failed';
        const severityClass = `env-severity-${item.severity.toLowerCase()}`;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.patchName}</td>
            <td class="${severityClass}">${item.severity}</td>
            <td>${item.computerName}</td>
            <td>${item.from}</td>
            <td>${item.to}</td>
            <td>${item.releaseDate}</td>
            <td>${item.owner}</td>
            <td><span class="env-status-badge ${statusClass}">${item.status}</span></td>
        `;
        tableBody.appendChild(row);
    });

    // Show table only if filtered data exists
    if (filteredDetails.length === 0) {
        emptyState.style.display = 'block';
        detailsTable.classList.remove('visible');
        selectedEnv.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        detailsTable.classList.add('visible');
        selectedEnv.style.display = 'block';
        selectedEnv.textContent = `${environment} - ${filteredDetails.filter(x => x.status === "Remediated").length}/${filteredDetails.length} patches remediated`;
        detailsTable.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}


// Apply date filter
function applyEnvFilter() {
    // Read values from custom calendar inputs (dd-mm-yyyy)
    document.getElementById("envChartContainer").style.display = "block";

    const dateFromRaw = document.getElementById('envDateFrom').value;
    const dateToRaw = document.getElementById('envDateTo').value;

    if (!dateFromRaw || !dateToRaw) {
        alert('Please select both start and end dates');
        return;
    }

    // Convert to ISO yyyy-mm-dd
    const dateFrom = formatToISO(dateFromRaw);
    const dateTo = formatToISO(dateToRaw);

    if (new Date(dateFrom) > new Date(dateTo)) {
        alert('Start date cannot be after end date');
        return;
    }

    const environments = Object.keys(envComplianceData);

    // Prepare filtered percentages per environment
    const filteredPercentages = environments.map(env => {
        const envObj = envComplianceData[env];

        const filteredDetails = envObj.details.filter(item => {
            const itemFrom = new Date(item.from);
            const itemTo = new Date(item.to);
            return itemFrom >= new Date(dateFrom) && itemTo <= new Date(dateTo);
        });

        const total = filteredDetails.length;
        const remediated = filteredDetails.filter(x => x.status === "Remediated").length;

        if (total === 0) return 0;
        return ((remediated / total) * 100).toFixed(1);
    });

    // Inject the filtered values into the empty chart
    envComplianceChart.data.datasets[0].data = filteredPercentages;
    envComplianceChart.update();

    // Reset table & UI state
    const emptyState = document.getElementById('envEmptyState');
    const detailsTable = document.getElementById('envDetailsTable');
    const selectedEnv = document.getElementById('envSelectedEnv');
    const tableBody = document.getElementById('envTableBody');

    tableBody.innerHTML = "";          
    emptyState.style.display = 'block';
    selectedEnv.style.display = 'none';
    detailsTable.classList.remove('visible');
}


function loadEnvChart() {
    const ctx = document.getElementById('envComplianceChart').getContext('2d');

    // Destroy old chart if exists (prevents duplicate charts)
    if (envComplianceChart) {
        envComplianceChart.destroy();
    }

    // Create EMPTY chart on tab load
    envComplianceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(envComplianceData),  // Production, UAT, Dev, etc.
            datasets: [{
                label: 'Compliance %',
                data: [], // EMPTY DATA (graph remains blank)
                backgroundColor: '#3e95cd',
                borderRadius: 6,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: true,

            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { stepSize: 20 }
                }
            },

            onClick: (event, activeElements) => {
                //  If chart is empty → do nothing
                if (envComplianceChart.data.datasets[0].data.length === 0) return;

                if (activeElements.length === 0) return;

                const index = activeElements[0].index;
                const environment = envComplianceChart.data.labels[index];

                // Read currently applied date range
                const dateFromRaw = document.getElementById('envDateFrom').value;
                const dateToRaw = document.getElementById('envDateTo').value;

                if (!dateFromRaw || !dateToRaw) return;

                showEnvDetails(environment, dateFromRaw, dateToRaw);
            }
        }
    });

    // Reset table + state visibility
    document.getElementById('envEmptyState').style.display = 'block';
    document.getElementById('envDetailsTable').classList.remove('visible');
    document.getElementById('envSelectedEnv').style.display = 'none';
    document.getElementById('envTableBody').innerHTML = "";
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
    if (document.getElementById(totalId)) document.getElementById(totalId).textContent = total;
    if (document.getElementById(complianceId)) document.getElementById(complianceId).textContent = `${compliance.toFixed(1)}%`;
}

function updateCompKPIs(compViewData) {
    const totalDevices = compViewData.length;
    const onlineDevices = compViewData.filter(d => d.status === 'Online').length;
    const offlineDevices = compViewData.filter(d => d.status === 'Offline').length;

    // Update KPI card values using IDs from your HTML
    document.getElementById('compTotalDevices').textContent = totalDevices;
    document.getElementById('compOnlineDevices').textContent = onlineDevices;
    document.getElementById('compOfflineDevices').textContent = offlineDevices;

    // Update chart
    updateCompChart(compViewData);
}


function updateNonCompliantKpis() {

    // Critical + non-compliant
    const criticalNonComp = sampleData.filter(item =>
        item.severity?.toLowerCase() === "critical" &&
        item.status?.toLowerCase() === "outstanding"
    ).length;

    // Important + non-compliant
    const importantNonComp = sampleData.filter(item =>
        item.severity?.toLowerCase() === "important" &&
        item.status?.toLowerCase() === "outstanding"
    ).length;

    // Update KPI Cards
    document.getElementById("CriticalNonComp").textContent = criticalNonComp;
    document.getElementById("importantNonComp").textContent = importantNonComp;
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

document.getElementById('search').addEventListener('input', () => {
    const searchInput = document.getElementById('search');
    const clearBtn = document.getElementById('clearSearch');

    clearBtn.style.display = searchInput.value.length > 0 ? "block" : "none";

    debounce(() => applyFilters(1));
});

document.getElementById('clearSearch').addEventListener('click', () => {
    const searchInput = document.getElementById('search');

    searchInput.value = "";
    searchInput.focus();

    document.getElementById('clearSearch').style.display = "none";

    applyFilters(1);
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const searchInput = document.getElementById('search');
        const clearBtn = document.getElementById('clearSearch');

        if (searchInput.value.length > 0) {
            searchInput.value = "";
            clearBtn.style.display = "none";
            applyFilters(1);
        }
    }
});

// document.getElementById("CriticalNonComp").closest(".kpi-card")
//     .addEventListener("click", () => {
//         forceCriticalOutstanding = true;
//         forceImportantOutstanding = false;
//         applyFilters(1);
//     });


// document.getElementById("importantNonComp").closest(".kpi-card")
//     .addEventListener("click", () => {
//         forceImportantOutstanding = true;
//         forceCriticalOutstanding = false;
//         applyFilters(1);
//     });



// -------------------------------
// COMPUTER MANAGEMENT EVENT LISTENERS
// -------------------------------

// Setup references
const compInput = document.getElementById("compSearchInput");
const compClearBtn = document.getElementById("compSearchClear");
const compSpinner = document.getElementById("compSearchSpinner");


// Computer Apply & Reset
document.getElementById('compApplyBtn').addEventListener('click', () => applyCompGlobalFilters(1));
document.getElementById('compResetBtn').addEventListener('click', resetCompDashboard);

document.getElementById('compSearchInput').addEventListener('input', () => {
    unifiedDebounce('compSearch', 'compSearchSpinner', () => updateCompTableDisplay(1), 300);
});




// Event listener for search input
document.getElementById('compSearchInput').addEventListener('input', () => {
    const searchInput = document.getElementById('compSearchInput');
    const clearBtn = document.getElementById('compSearchClear'); // Make sure you have a clear button

    // Show/hide clear button
    clearBtn.style.display = searchInput.value.length > 0 ? "block" : "none";

    // Debounced table update
    unifiedDebounce('compSearch', 'compSearchSpinner', () => updateCompTableDisplay(1), 500);
});

// Event listener for clear button
document.getElementById('compSearchClear').addEventListener('click', () => {
    const searchInput = document.getElementById('compSearchInput');
    searchInput.value = "";
    searchInput.focus();

    document.getElementById('compSearchClear').style.display = "none";

    updateCompTableDisplay(1);
});

// Event listener for Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const searchInput = document.getElementById('compSearchInput');
        const clearBtn = document.getElementById('compSearchClear');

        if (searchInput.value.length > 0) {
            searchInput.value = "";
            clearBtn.style.display = "none";
            updateCompTableDisplay(1);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const staticPatchData = [
        { severity: "Critical", total: 100, remediated: 80, outstanding: 20 },
        { severity: "Important", total: 120, remediated: 90, outstanding: 30 },
        { severity: "Total", total: 220, remediated: 170, outstanding: 50 },
    ];

    // Initialize the chart with static data
    initPatchChart(staticPatchData);
});

/** env tab eventlistener */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize chart
    initEnvComplianceChart();

    // Apply button click
    const applyBtn = document.getElementById('envApplyBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', applyEnvFilter);
    }
});


// ----------------------
// KPI → Trigger Filter
// ----------------------
document.getElementById("kpiCriticalNonComp").addEventListener("click", () => {

    // Set Severity filter
    getCustomSelectValue("severity2", "critical");

    // Set Status filter
    getCustomSelectValue("status", "outstanding");

    // Apply filters
    applyFilters(1);
});



// Export Listeners
document.getElementById('exportCsvBtn').addEventListener('click', exportToCSV);
document.getElementById('compExportBtn').addEventListener('click', exportCompToCSV);


// Initialize Empty
resetFilters();
resetCompDashboard();




// ============================================================
//  PROTOTYPE CHARTS FOR NEW TABS
// ============================================================




let envChartInstance = null;

function renderEnvComplianceChart() {
    const ctx = document.getElementById("envComplianceChart");

    if (envChartInstance) {
        envChartInstance.destroy();
    }

    const environments = ["Production", "UAT", "Dev", "DR", "Cloud", "InfraOps"];
    const complianceValues = [98, 95, 92, 93, 96, 94];

    envChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: environments,
            datasets: [{
                label: "Compliance (%)",
                data: complianceValues,
                backgroundColor: [
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(201, 203, 207, 0.6)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    min: 80,
                    max: 100
                }
            }
        }
    });
}


// --- 2) Compliance by OS Chart (Pie) ---
function loadOSChart() {
    const ctx = document.getElementById('osComplianceChart').getContext('2d');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Windows 2012", "Windows 2016", "Windows 2019", "Linux (RHEL/CentOS/Amazon)"],
            datasets: [{
                data: [50, 70, 85, 60], // Placeholder values
                borderWidth: 1
            }]
        }
    });
}

// Load charts when tabs become active
document.querySelector('[data-tab="envTab"]').addEventListener('click', function () {

    renderEnvComplianceChart();
});



document.querySelector('[data-tab="osTab"]').addEventListener('click', loadOSChart);
