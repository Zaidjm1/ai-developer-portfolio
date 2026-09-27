/**
 * PulseDesk IT — Enterprise Workplace Ticketing & Helpdesk System
 * JavaScript Logic & Multi-Role State Machine
 */

document.addEventListener('DOMContentLoaded', () => {

  // Default initial tickets if not present in localStorage
  const INITIAL_TICKETS = [
    {
      id: 'IT-1041',
      employee: 'Sarah Jenkins (Marketing Lead)',
      desk: 'Floor 3 — Desk 3A (Design Pod)',
      assetTag: 'PC-DELL-8821',
      os: 'Windows 11 Enterprise',
      category: 'peripherals',
      categoryName: 'Peripherals & Docks',
      urgency: 'high',
      urgencyLabel: 'HIGH URGENCY',
      status: 'In Progress',
      subject: 'Dual 4K Dell monitors not detecting via CalDigit dock after Windows update',
      desc: 'When I plugged in my laptop to my desk dock this morning, neither of my external Dell monitors turn on. Both display "No Signal". I tried unplugging the Thunderbolt cable and power-cycling the dock twice, but only my laptop keyboard works. I have an executive design presentation in 1 hour and urgently need my dual displays.',
      createdAt: 'Today, 08:42 AM',
      assignee: 'Marcus Vance (Tier-2 IT)',
      activities: [
        {
          author: 'System Bot',
          time: '08:42 AM',
          text: 'Ticket created via Employee Portal. Routed to Tier-2 Hardware Queue based on peripheral category.'
        },
        {
          author: 'Marcus Vance (Tier-2 IT)',
          time: '08:49 AM',
          text: 'Acknowledged. Heading to Desk 3A with a replacement Thunderbolt 4 cable and CalDigit TS4 dock to test DisplayPort handshake.'
        }
      ]
    },
    {
      id: 'IT-1042',
      employee: 'Alex Rivera (Frontend Engineer)',
      desk: 'Floor 2 — Desk 2F (Engineering Pod)',
      assetTag: 'MAC-STUDIO-4402',
      os: 'macOS Sonoma (M2 / M3)',
      category: 'crash',
      categoryName: 'Unresponsive PC / Crash',
      urgency: 'emergency',
      urgencyLabel: 'EMERGENCY',
      status: 'Open',
      subject: 'Workstation frozen on black screen with spinning wheel after sleep, power button unresponsive',
      desc: 'Arrived at my desk, tried to wake my Mac Studio from sleep mode. Screen stays black with a spinning cursor. Holding down the rear power button for 10 seconds does not force restart. Machine fans are spinning at maximum speed. I cannot push production code hotfixes until this is operational.',
      createdAt: 'Today, 09:15 AM',
      assignee: 'Lisa Patel (Desktop Support)',
      activities: [
        {
          author: 'System Bot',
          time: '09:15 AM',
          text: 'Emergency SLA triggered: Workstation halting production release. Dispatched onsite tech within 15-minute window.'
        }
      ]
    },
    {
      id: 'IT-1043',
      employee: 'Marcus Vance (Engineering)',
      desk: 'Floor 4 — Desk 4B (Backend Lab)',
      assetTag: 'LINUX-SRV-901',
      os: 'Ubuntu Linux 24.04 LTS',
      category: 'network',
      categoryName: 'Network & Wi-Fi',
      urgency: 'emergency',
      urgencyLabel: 'EMERGENCY',
      status: 'In Progress',
      subject: 'Internal 10Gbps Engineering VLAN dropping packets every 10 minutes on Floor 4',
      desc: 'All lab workstations connected to Switch Port 4A-SW2 on Floor 4 are experiencing 30-40% packet loss to internal git and docker registries every 10 minutes. Wi-Fi works but wired 10Gbps trunk seems to be cycling spanning-tree STP loops.',
      createdAt: 'Today, 07:30 AM',
      assignee: 'David Chen (Network Lead)',
      activities: [
        {
          author: 'System Bot',
          time: '07:30 AM',
          text: 'Network monitoring probe alert matched. High packet loss flagged on VLAN 104.'
        },
        {
          author: 'David Chen (Network Lead)',
          time: '07:45 AM',
          text: 'Investigating core switch Cisco Catalyst 9300. Detected loop from rogue unmanaged switch plugged under desk 4D. Dispatched tech to disconnect port.'
        }
      ]
    },
    {
      id: 'IT-1044',
      employee: 'Chloe Chen (UX Designer)',
      desk: 'Floor 1 — Desk 1C (Creative Commons)',
      assetTag: 'PC-HP-1192',
      os: 'Windows 11 Enterprise',
      category: 'peripherals',
      categoryName: 'Peripherals & Docks',
      urgency: 'medium',
      urgencyLabel: 'MEDIUM URGENCY',
      status: 'Waiting on Parts',
      subject: 'Logitech MX Master mouse lagging and keyboard repeating keystrokes via Bluetooth',
      desc: 'My wireless mouse cursor stutters across the screen and my mechanical keyboard frequently types "eeeeee" when typing. Replaced AAA batteries and tried both 2.4GHz Bolt receiver and Bluetooth 5.0. Suspect RF interference in the open office.',
      createdAt: 'Yesterday, 04:10 PM',
      assignee: 'Marcus Vance (Tier-2 IT)',
      activities: [
        {
          author: 'Marcus Vance (Tier-2 IT)',
          time: 'Yesterday, 04:30 PM',
          text: 'Tested with USB-C wired extension cable. RF interference from nearby 5GHz router confirmed. Ordered USB extension hub for Chloe desk.'
        }
      ]
    }
  ];

  // Load or initialize tickets database
  function loadTickets() {
    try {
      const stored = localStorage.getItem('pulsedesk_tickets');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const sanitized = parsed.filter(t => t && t.id && t.subject);
          if (sanitized.length > 0) return sanitized;
        }
      }
    } catch (e) {
      console.warn('LocalStorage unavailable, using initial tickets');
    }
    saveTickets(INITIAL_TICKETS);
    return JSON.parse(JSON.stringify(INITIAL_TICKETS));
  }

  function saveTickets(tickets) {
    try {
      localStorage.setItem('pulsedesk_tickets', JSON.stringify(tickets));
    } catch (e) {
      console.warn('Failed to save to localStorage');
    }
  }

  let tickets = loadTickets();
  let currentRole = 'employee';
  let activeCategory = 'network';
  let selectedTicketId = 'IT-1041';
  let activeQueueFilter = 'all';

  // Role DOM Elements
  const roleButtons = document.querySelectorAll('.role-btn');
  const roleViews = {
    employee: document.getElementById('view-employee'),
    tech: document.getElementById('view-tech'),
    admin: document.getElementById('view-admin')
  };
  const roleBadge = document.getElementById('role-badge');
  const viewHeading = document.getElementById('view-heading');
  const viewDesc = document.getElementById('view-desc');
  const activeQueueCount = document.getElementById('active-queue-count');

  // Employee View Elements
  const empTabButtons = document.querySelectorAll('.emp-tab-btn');
  const empPanes = {
    create: document.getElementById('emp-tab-create'),
    list: document.getElementById('emp-tab-list')
  };
  const catCards = document.querySelectorAll('.cat-card');
  const newTicketForm = document.getElementById('new-ticket-form');
  const empTicketList = document.getElementById('emp-ticket-list');
  const empOpenCount = document.getElementById('emp-open-count');
  const aiHintBox = document.getElementById('ai-hint-box');
  const btnFillCrash = document.getElementById('btn-fill-crash');
  const btnFillNetwork = document.getElementById('btn-fill-network');

  // Tech View Elements
  const techQueueList = document.getElementById('tech-queue-list');
  const qFilterButtons = document.querySelectorAll('.q-filter-btn');
  const qCountAll = document.getElementById('q-count-all');
  const techDetailCard = document.getElementById('tech-detail-card');
  const techEmptyState = document.getElementById('tech-empty-state');
  const archivedBanner = document.getElementById('archived-banner');
  const detKey = document.getElementById('det-key');
  const detUrgency = document.getElementById('det-urgency');
  const detStatus = document.getElementById('det-status');
  const detTitle = document.getElementById('det-title');
  const detMeta = document.getElementById('det-meta');
  const detDesc = document.getElementById('det-desc');
  const detActivity = document.getElementById('det-activity');
  const techUpdateStatus = document.getElementById('tech-update-status');
  const techAssignee = document.getElementById('tech-assignee');
  const techReplyInput = document.getElementById('tech-reply-input');
  const btnSaveTicket = document.getElementById('btn-save-ticket');
  const btnQuickResolve = document.getElementById('btn-quick-resolve');
  const btnDiagPing = document.getElementById('btn-diag-ping');
  const btnDiagAsset = document.getElementById('btn-diag-asset');
  const btnDiagCopilot = document.getElementById('btn-diag-copilot');
  const diagOutputBox = document.getElementById('diag-output-box');
  const diagOutTitle = document.getElementById('diag-out-title');
  const diagCode = document.getElementById('diag-code');
  const btnCloseDiag = document.getElementById('btn-close-diag');

  // Admin View Elements
  const adminAuditTbody = document.getElementById('admin-audit-tbody');
  const adminTotalTickets = document.getElementById('admin-total-tickets');
  const btnExportCsv = document.getElementById('btn-export-csv');

  // Toast
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  // Self-help hints dictionary based on category
  const HINTS = {
    network: `<strong>IT Self-Service Quick Check:</strong> For VPN or Wi-Fi drops, toggle Airplane Mode for 5s or open Terminal/cmd and run <kbd>ipconfig /renew</kbd> or <kbd>sudo dscacheutil -flushcache</kbd>. If DNS is still unreachable, submit below.`,
    peripherals: `<strong>IT Self-Service Quick Check:</strong> For dock & display issues, verify the Thunderbolt cable is in the host port and press <kbd>Win + Ctrl + Shift + B</kbd> to restart graphics drivers. If monitors stay black, submit below.`,
    crash: `<strong>IT Self-Service Quick Check:</strong> If your PC is completely frozen, hold the hardware power button for 12 seconds to force a cold shutdown. If it fails to boot or loops on blue screen, submit below.`,
    software: `<strong>IT Self-Service Quick Check:</strong> For Okta SSO locks, check if your password expired in the last 24h. For Adobe/Figma, sign out and back in via company Google Workspace. If still locked, submit below.`
  };

  /**
   * 1. ROLE SWITCHING CONTROLLER
   */
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetRole = btn.getAttribute('data-role');
      switchRole(targetRole);
    });
  });

  function switchRole(role) {
    currentRole = role;

    // Update nav button states
    roleButtons.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-role') === role);
    });

    // Update active view
    Object.keys(roleViews).forEach(k => {
      roleViews[k].classList.toggle('active', k === role);
    });

    // Update banner text
    if (role === 'employee') {
      roleBadge.textContent = 'VIEWING AS: EMPLOYEE (SARAH JENKINS — SUBMIT & TRACK)';
      viewHeading.textContent = 'Workplace IT Helpdesk: Report an Issue or Request Assistance';
      viewDesc.textContent = 'Having computer troubles, Wi-Fi drops, peripheral issues, or broken software? Submit a ticket below for our onsite IT support team.';
      renderEmployeeTickets();
    } else if (role === 'tech') {
      roleBadge.textContent = 'VIEWING AS: IT SUPPORT TECHNICIAN (MARCUS VANCE — TIER-2)';
      viewHeading.textContent = 'IT Technician Workstation: Active Incident Queue & Diagnostics';
      viewDesc.textContent = 'Manage open workplace tickets, inspect hardware asset tags, run network diagnostics, and communicate resolutions directly with employees.';
      renderTechQueue();

      const activeTickets = tickets.filter(t => t && t.id && t.status !== 'Resolved');
      const isCurrentActive = activeTickets.some(t => t.id === selectedTicketId);

      if (isCurrentActive) {
        selectTechTicket(selectedTicketId);
      } else if (selectedTicketId && tickets.some(t => t.id === selectedTicketId)) {
        // Specifically inspecting an archived ticket (e.g. from Admin Inspect)
        selectTechTicket(selectedTicketId);
      } else if (activeTickets.length > 0) {
        selectedTicketId = activeTickets[0].id;
        selectTechTicket(selectedTicketId);
      } else {
        renderTechEmptyState();
      }
    } else if (role === 'admin') {
      roleBadge.textContent = 'VIEWING AS: IT ADMINISTRATOR (ELENA ROSTOVA — VP ENTERPRISE IT)';
      viewHeading.textContent = 'IT Operations Command Center: Analytics, SLA Telemetry & Staff Load';
      viewDesc.textContent = 'Global visibility into workplace incident volumes, technician workload distribution, SLA compliance metrics, and master audit logs.';
      renderAdminDashboard();
    }

    updateHeaderCounts();
  }
  window.switchRole = switchRole;

  /**
   * 2. EMPLOYEE PORTAL LOGIC
   */

  // Sub-tabs in Employee view
  empTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      empTabButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tab));
      Object.keys(empPanes).forEach(k => empPanes[k].classList.toggle('active', k === tab));
    });
  });

  // Category card selector
  catCards.forEach(card => {
    card.addEventListener('click', () => {
      catCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      activeCategory = card.getAttribute('data-category');

      // Update AI self-help hint
      if (HINTS[activeCategory]) {
        aiHintBox.querySelector('.ai-hint-text').innerHTML = HINTS[activeCategory];
      }
    });
  });

  // Quick Preset Fillers
  btnFillCrash.addEventListener('click', () => {
    selectCategoryByName('crash');
    document.getElementById('f-subject').value = 'Workstation blue screen (KERNEL_DATA_INPAGE_ERROR) recurring every 20 minutes';
    document.getElementById('f-desc').value = 'My Dell precision workstation crashed 3 times this morning with blue screen stop code KERNEL_DATA_INPAGE_ERROR. After rebooting, the SSD feels sluggish and files in C:/Projects/ fail to open. Requesting onsite tech to test hardware drive integrity.';
    document.getElementById('f-urgency').value = 'emergency';
    showToast('Loaded "PC Blue Screen Crash" incident template!');
  });

  btnFillNetwork.addEventListener('click', () => {
    selectCategoryByName('network');
    document.getElementById('f-subject').value = 'Unable to connect to Corporate GlobalProtect VPN from Desk 3A wired ethernet';
    document.getElementById('f-desc').value = 'Wired ethernet connects to local network but GlobalProtect VPN repeatedly fails at "Authenticating 98%... Gateway not responding". Wi-Fi behaves the same. Need VPN access to deploy client staging release.';
    document.getElementById('f-urgency').value = 'high';
    showToast('Loaded "VPN Network Drop" incident template!');
  });

  function selectCategoryByName(cat) {
    catCards.forEach(c => {
      const match = c.getAttribute('data-category') === cat;
      c.classList.toggle('active', match);
      if (match) activeCategory = cat;
    });
    if (HINTS[activeCategory]) {
      aiHintBox.querySelector('.ai-hint-text').innerHTML = HINTS[activeCategory];
    }
  }

  // Handle New Ticket Submission
  newTicketForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const empName = document.getElementById('f-employee-name').value.trim();
    const desk = document.getElementById('f-desk-loc').value.trim();
    const assetTag = document.getElementById('f-asset-tag').value.trim();
    const urgency = document.getElementById('f-urgency').value;
    const os = document.getElementById('f-os').value;
    const subject = document.getElementById('f-subject').value.trim();
    const desc = document.getElementById('f-desc').value.trim();

    if (!subject || !desc) {
      showToast('Please fill out the issue subject and description.');
      return;
    }

    const nextIdNum = 1040 + tickets.length + 1;
    const newId = `IT-${nextIdNum}`;

    const catObj = Array.from(catCards).find(c => c.getAttribute('data-category') === activeCategory);
    const categoryName = catObj ? catObj.querySelector('.cat-name').textContent : 'General IT';

    const urgencyMap = {
      emergency: 'EMERGENCY',
      high: 'HIGH URGENCY',
      medium: 'MEDIUM URGENCY',
      low: 'LOW URGENCY'
    };

    const newTicket = {
      id: newId,
      employee: empName,
      desk,
      assetTag,
      os,
      category: activeCategory,
      categoryName,
      urgency,
      urgencyLabel: urgencyMap[urgency] || 'NORMAL',
      status: 'Open',
      subject,
      desc,
      createdAt: 'Just now',
      assignee: urgency === 'emergency' ? 'David Chen (Network Lead)' : 'Marcus Vance (Tier-2 IT)',
      activities: [
        {
          author: 'System Bot',
          time: 'Just now',
          text: `Ticket created by ${empName}. Priority set to ${urgencyMap[urgency]}. Dispatched to IT Desk.`
        }
      ]
    };

    tickets.unshift(newTicket);
    saveTickets(tickets);

    showToast(`Ticket ${newId} submitted! Dispatched to IT Support.`);

    // Switch to "My Open Tickets" view
    empTabButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === 'list'));
    empPanes.create.classList.remove('active');
    empPanes.list.classList.add('active');

    renderEmployeeTickets();
    updateHeaderCounts();
  });

  // Render Employee's submitted tickets
  function renderEmployeeTickets() {
    empTicketList.innerHTML = '';
    const openTickets = tickets.filter(t => t.status !== 'Resolved');
    empOpenCount.textContent = openTickets.length;

    if (tickets.length === 0) {
      empTicketList.innerHTML = '<div style="padding: 24px; text-align: center; color: var(--text-dim);">No submitted tickets yet.</div>';
      return;
    }

    tickets.forEach(t => {
      const card = document.createElement('div');
      card.className = 'ticket-card';
      const badgeClass = t.urgency === 'emergency' ? 'badge-emergency' : (t.urgency === 'high' ? 'badge-high' : (t.urgency === 'medium' ? 'badge-med' : 'badge-low'));
      const statusClass = t.status === 'Resolved' ? 'status-resolved' : (t.status === 'In Progress' ? 'status-progress' : (t.status === 'Waiting on Parts' ? 'status-waiting' : 'status-open'));

      card.innerHTML = `
        <div class="tc-top">
          <div class="tc-key-group">
            <span class="t-key">${t.id}</span>
            <span class="t-badge ${badgeClass}">${t.urgencyLabel}</span>
            <span style="font-size: 0.72rem; color: var(--text-dim); font-family: var(--font-mono);">${t.categoryName}</span>
          </div>
          <span class="t-status ${statusClass}">${t.status}</span>
        </div>
        <div class="tc-title">${escapeHtml(t.subject)}</div>
        <div class="tc-desc">${escapeHtml(t.desc)}</div>
        <div class="tc-meta">
          <span>📍 ${escapeHtml(t.desk)}</span> • 
          <span>🏷️ ${escapeHtml(t.assetTag)}</span> • 
          <span>👤 Assigned: <strong style="color: #38bdf8;">${escapeHtml(t.assignee)}</strong></span> • 
          <span>⏱️ ${t.createdAt}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        // Switch to Tech view to inspect this ticket
        selectedTicketId = t.id;
        switchRole('tech');
      });

      empTicketList.appendChild(card);
    });
  }

  /**
   * 3. IT TECHNICIAN WORKBENCH LOGIC
   */

  // Filter Queue by category
  qFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      qFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeQueueFilter = btn.getAttribute('data-qfilter');
      renderTechQueue();
    });
  });

  function renderTechQueue() {
    techQueueList.innerHTML = '';
    
    // STRICT RULE: Only active (non-resolved) valid tickets appear in the IT Dispatch Queue!
    const activeTickets = tickets.filter(t => t && t.id && t.subject && t.status !== 'Resolved');
    
    // Update queue count badge to show active tickets only
    qCountAll.textContent = activeTickets.length;

    // Filter by category
    const filtered = activeTickets.filter(t => {
      if (activeQueueFilter === 'all') return true;
      return t.category === activeQueueFilter;
    });

    if (activeTickets.length === 0) {
      techQueueList.innerHTML = `
        <div class="queue-empty-box" style="padding: 28px 16px; text-align: center; color: var(--text-dim);">
          <div style="font-size: 2rem; margin-bottom: 6px;">🎉</div>
          <div style="font-weight: 700; color: #34d399; font-size: 0.9rem; margin-bottom: 4px;">Queue Clear — All Incidents Resolved</div>
          <div style="font-size: 0.74rem; line-height: 1.4; color: var(--text-muted); margin-bottom: 12px;">All workplace incidents have been marked as resolved and removed from the active queue. Master records remain viewable in IT Admin.</div>
          <button type="button" class="btn-text-preset" onclick="window.switchRole('admin')" style="font-size: 0.7rem; padding: 4px 10px;">Open IT Admin Audit View →</button>
        </div>
      `;
      return;
    }

    if (filtered.length === 0) {
      techQueueList.innerHTML = '<div style="padding: 24px; text-align: center; color: var(--text-dim); font-size: 0.8rem;">No active tickets in this category.</div>';
      return;
    }

    filtered.forEach(t => {
      const card = document.createElement('div');
      card.className = `ticket-card ${t.id === selectedTicketId ? 'selected' : ''}`;
      const badgeClass = t.urgency === 'emergency' ? 'badge-emergency' : (t.urgency === 'high' ? 'badge-high' : (t.urgency === 'medium' ? 'badge-med' : 'badge-low'));
      const statusClass = t.status === 'Resolved' ? 'status-resolved' : (t.status === 'In Progress' ? 'status-progress' : (t.status === 'Waiting on Parts' ? 'status-waiting' : 'status-open'));

      card.innerHTML = `
        <div class="tc-top">
          <div class="tc-key-group">
            <span class="t-key">${t.id}</span>
            <span class="t-badge ${badgeClass}">${t.urgencyLabel || 'NORMAL'}</span>
          </div>
          <span class="t-status ${statusClass}">${t.status}</span>
        </div>
        <div class="tc-title">${escapeHtml(t.subject)}</div>
        <div class="tc-meta">
          <span>👤 ${escapeHtml(t.employee)}</span> • 
          <span>📍 ${escapeHtml(t.desk)}</span> • 
          <span>🏷️ ${escapeHtml(t.assetTag)}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        selectTechTicket(t.id);
      });

      techQueueList.appendChild(card);
    });
  }

  function selectTechTicket(id) {
    const t = tickets.find(item => item && item.id === id);
    if (!t) {
      const activeTickets = tickets.filter(item => item && item.id && item.status !== 'Resolved');
      if (activeTickets.length > 0) {
        selectTechTicket(activeTickets[0].id);
      } else {
        renderTechEmptyState();
      }
      return;
    }

    selectedTicketId = id;

    // Show detail card, hide empty state
    if (techDetailCard) techDetailCard.style.display = 'flex';
    if (techEmptyState) techEmptyState.style.display = 'none';

    // Highlight selected card in queue list (if present)
    const cards = techQueueList.querySelectorAll('.ticket-card');
    cards.forEach(c => {
      const keySpan = c.querySelector('.t-key');
      if (keySpan && keySpan.textContent === id) {
        c.classList.add('selected');
      } else {
        c.classList.remove('selected');
      }
    });

    // Populate detail card
    detKey.textContent = t.id;
    detUrgency.textContent = t.urgencyLabel || 'NORMAL';
    detUrgency.className = `t-badge ${t.urgency === 'emergency' ? 'badge-emergency' : (t.urgency === 'high' ? 'badge-high' : 'badge-med')}`;
    
    detStatus.textContent = t.status.toUpperCase();
    detStatus.className = `t-status ${t.status === 'Resolved' ? 'status-resolved' : (t.status === 'In Progress' ? 'status-progress' : 'status-open')}`;

    detTitle.textContent = t.subject;
    detMeta.innerHTML = `
      <span>👤 ${escapeHtml(t.employee)}</span> • 
      <span>📍 ${escapeHtml(t.desk)}</span> • 
      <span>🏷️ Asset: ${escapeHtml(t.assetTag)}</span> • 
      <span>💻 OS: ${escapeHtml(t.os)}</span>
    `;
    detDesc.textContent = t.desc;

    // Set select controls
    techUpdateStatus.value = t.status;
    techAssignee.value = t.assignee || 'Marcus Vance (Tier-2 IT)';

    // Archived banner & Quick Resolve button handling
    if (archivedBanner) {
      if (t.status === 'Resolved') {
        archivedBanner.style.display = 'flex';
        btnQuickResolve.disabled = true;
        btnQuickResolve.innerHTML = '<span>Ticket Already Resolved</span>';
        btnQuickResolve.style.opacity = '0.55';
        btnQuickResolve.style.cursor = 'not-allowed';
      } else {
        archivedBanner.style.display = 'none';
        btnQuickResolve.disabled = false;
        btnQuickResolve.innerHTML = '<span>Mark Resolved &amp; Close</span>';
        btnQuickResolve.style.opacity = '1';
        btnQuickResolve.style.cursor = 'pointer';
      }
    }

    // Render activity thread
    renderActivityThread(t);

    // Hide any previous diagnostic box
    diagOutputBox.style.display = 'none';
  }

  function renderTechEmptyState() {
    selectedTicketId = null;
    if (techDetailCard) techDetailCard.style.display = 'none';
    if (techEmptyState) techEmptyState.style.display = 'flex';
  }

  function renderActivityThread(ticket) {
    detActivity.innerHTML = '';
    if (!ticket.activities || ticket.activities.length === 0) {
      detActivity.innerHTML = '<div style="color: var(--text-dim); font-size: 0.74rem;">No technician notes logged yet.</div>';
      return;
    }

    ticket.activities.forEach(act => {
      const div = document.createElement('div');
      div.className = 'act-item';
      div.innerHTML = `
        <div class="act-item-top">
          <span class="act-item-author">${escapeHtml(act.author)}</span>
          <span>${act.time}</span>
        </div>
        <div class="act-item-text">${escapeHtml(act.text)}</div>
      `;
      detActivity.appendChild(div);
    });
  }

  // Technician Quick Diagnostics Buttons
  btnDiagPing.addEventListener('click', () => {
    const t = tickets.find(item => item.id === selectedTicketId);
    diagOutTitle.textContent = `NETWORK PING DIAGNOSTIC: ${t ? t.assetTag : 'WORKSTATION'}`;
    diagCode.textContent = 
`[PING TRACE] Target IP: 10.24.112.45 (Subnet: Floor 3 / VLAN 103)
--- PING statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 1.124 / 1.482 / 1.890 / 0.281 ms
Port 80/443 (HTTP/HTTPS): OPEN
Port 22 (SSH Remote Mgmt): OPEN (Host Key Verified)
DisplayPort Link Handshake: NEGOTIATION TIMEOUT (DisplayLink Driver v5.1 out of sync)`;
    diagOutputBox.style.display = 'block';
  });

  btnDiagAsset.addEventListener('click', () => {
    const t = tickets.find(item => item.id === selectedTicketId);
    diagOutTitle.textContent = `HARDWARE ASSET & WARRANTY SPECIFICATION`;
    diagCode.textContent = 
`[DEVICE ASSET LOOKUP] Tag: ${t ? t.assetTag : 'PC-DELL-8821'}
Device Model: Dell Precision 5820 Tower Workstation
Processor: Intel Core i9-14900K @ 3.20GHz (24 Cores)
Installed Memory: 64 GB DDR5-5600 ECC RAM
Connected Docks: CalDigit TS4 Thunderbolt 4 (Serial: TS4-88912-US)
Dock Firmware: v38.1 (Latest: v42.0 - Update Available!)
Corporate Warranty: Dell ProSupport Plus (Active until Dec 2027)
Registered User: ${t ? t.employee : 'Sarah Jenkins'}`;
    diagOutputBox.style.display = 'block';
  });

  btnDiagCopilot.addEventListener('click', () => {
    const t = tickets.find(item => item.id === selectedTicketId);
    diagOutTitle.textContent = `🤖 IT COPILOT RESOLUTION RECOMMENDATIONS`;
    diagCode.textContent = 
`[AI IT COPILOT] Tailored troubleshooting sequence for: ${t ? t.categoryName : 'Incident'}
1. Fast Fix: Reset Thunderbolt PCIe bus tree by running:
   devcon restart "PCI\\VEN_8086&DEV_15EB*"
2. Display Link Issue: The CalDigit dock firmware is on v38.1. Flash dock to v42.0 to resolve DisplayPort 1.4 alt-mode drop after Windows cumulative update KB5034441.
3. Onsite Action: Bring spare Thunderbolt 4 0.8m active cable to ${t ? t.desk : 'user desk'} in case of physical pin wear.`;
    diagOutputBox.style.display = 'block';
  });

  btnCloseDiag.addEventListener('click', () => {
    diagOutputBox.style.display = 'none';
  });

  // Save updates & add note
  btnSaveTicket.addEventListener('click', () => {
    const t = tickets.find(item => item && item.id === selectedTicketId);
    if (!t) return;

    const newStatus = techUpdateStatus.value;
    const newAssignee = techAssignee.value;
    const replyText = techReplyInput.value.trim();

    t.status = newStatus;
    t.assignee = newAssignee;

    if (replyText) {
      if (!t.activities) t.activities = [];
      t.activities.push({
        author: 'Marcus Vance (Tier-2 IT)',
        time: 'Just now',
        text: replyText
      });
      techReplyInput.value = '';
    }

    saveTickets(tickets);
    updateHeaderCounts();

    if (newStatus === 'Resolved') {
      showToast(`Ticket ${t.id} marked as Resolved! Removed from Dispatch Queue and retained in IT Admin.`);
      renderTechQueue();
      // Auto-select next active ticket or display queue clear state
      const remaining = tickets.filter(item => item && item.id && item.status !== 'Resolved');
      if (remaining.length > 0) {
        selectedTicketId = remaining[0].id;
        selectTechTicket(selectedTicketId);
      } else {
        renderTechEmptyState();
      }
    } else {
      showToast(`Updated ticket ${t.id} successfully!`);
      renderTechQueue();
      selectTechTicket(t.id);
    }
  });

  // 1-Click Quick Resolve
  btnQuickResolve.addEventListener('click', () => {
    const t = tickets.find(item => item && item.id === selectedTicketId);
    if (!t || t.status === 'Resolved') return;

    t.status = 'Resolved';
    if (!t.activities) t.activities = [];
    t.activities.push({
      author: 'Marcus Vance (Tier-2 IT)',
      time: 'Just now',
      text: 'Verified onsite at user desk. Replaced hardware and restored normal operation. Marked Resolved and archived to Master IT Audit Log.'
    });

    saveTickets(tickets);
    showToast(`Ticket ${t.id} marked as Resolved! Removed from Dispatch Queue and viewable in IT Admin.`);
    updateHeaderCounts();
    renderTechQueue();

    // Auto-select next active ticket or display clear state
    const remaining = tickets.filter(item => item && item.id && item.status !== 'Resolved');
    if (remaining.length > 0) {
      selectedTicketId = remaining[0].id;
      selectTechTicket(selectedTicketId);
    } else {
      renderTechEmptyState();
    }
  });

  /**
   * 4. IT ADMIN DASHBOARD LOGIC
   */
  function renderAdminDashboard() {
    adminAuditTbody.innerHTML = '';
    
    // Dynamic KPI statistics
    const totalCount = tickets.length;
    const resolvedCount = tickets.filter(t => t && t.status === 'Resolved').length;
    const activeCount = totalCount - resolvedCount;

    if (adminTotalTickets) adminTotalTickets.textContent = totalCount;
    const adminResolvedCountEl = document.getElementById('admin-resolved-count');
    const adminActiveCountEl = document.getElementById('admin-active-count');
    if (adminResolvedCountEl) adminResolvedCountEl.textContent = `${resolvedCount} Resolved`;
    if (adminActiveCountEl) adminActiveCountEl.textContent = `${activeCount} Active`;

    // Render all tickets (both active and resolved) in master audit log
    tickets.forEach(t => {
      if (!t || !t.id) return;
      const tr = document.createElement('tr');
      const badgeClass = t.urgency === 'emergency' ? 'badge-emergency' : (t.urgency === 'high' ? 'badge-high' : (t.urgency === 'medium' ? 'badge-med' : 'badge-low'));
      const statusClass = t.status === 'Resolved' ? 'status-resolved' : (t.status === 'In Progress' ? 'status-progress' : (t.status === 'Waiting on Parts' ? 'status-waiting' : 'status-open'));

      const empDisplay = t.employee ? t.employee.split('(')[0].trim() : 'Unknown';
      const assigneeDisplay = t.assignee ? t.assignee.split('(')[0].trim() : 'Unassigned';

      tr.innerHTML = `
        <td><strong class="t-key">${t.id}</strong></td>
        <td>
          <div><strong>${escapeHtml(empDisplay)}</strong></div>
          <small style="color: var(--text-dim);">${escapeHtml(t.desk || '')}</small>
        </td>
        <td>${escapeHtml(t.categoryName || 'General IT')}</td>
        <td><div style="max-width: 280px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(t.subject || '')}</div></td>
        <td><span class="t-badge ${badgeClass}">${(t.urgencyLabel || 'NORMAL').split(' ')[0]}</span></td>
        <td><span class="t-status ${statusClass}">${t.status}</span></td>
        <td><span style="color: #38bdf8;">${escapeHtml(assigneeDisplay)}</span></td>
        <td>
          <button type="button" class="btn-text-preset" style="padding: 3px 8px; font-size: 0.68rem;" onclick="window.viewTicketInTech('${t.id}')">Inspect</button>
        </td>
      `;

      adminAuditTbody.appendChild(tr);
    });
  }

  // Global helper for admin inspect button
  window.viewTicketInTech = function(id) {
    selectedTicketId = id;
    switchRole('tech');
  };

  // Reset Demo Tickets Helper
  function resetDemoTickets() {
    tickets = JSON.parse(JSON.stringify(INITIAL_TICKETS));
    saveTickets(tickets);
    selectedTicketId = 'IT-1041';
    showToast('Reset demo tickets! Restored initial workplace incidents.');
    updateHeaderCounts();
    if (currentRole === 'tech') {
      renderTechQueue();
      selectTechTicket(selectedTicketId);
    } else if (currentRole === 'admin') {
      renderAdminDashboard();
    } else {
      renderEmployeeTickets();
    }
  }
  window.resetDemoTickets = resetDemoTickets;

  // Empty state buttons
  const btnEmptyGoAdmin = document.getElementById('btn-empty-go-admin');
  if (btnEmptyGoAdmin) {
    btnEmptyGoAdmin.addEventListener('click', () => switchRole('admin'));
  }

  const btnEmptyNewTicket = document.getElementById('btn-empty-new-ticket');
  if (btnEmptyNewTicket) {
    btnEmptyNewTicket.addEventListener('click', () => switchRole('employee'));
  }

  const btnEmptyResetDemo = document.getElementById('btn-empty-reset-demo');
  if (btnEmptyResetDemo) {
    btnEmptyResetDemo.addEventListener('click', resetDemoTickets);
  }

  const btnAdminResetDemo = document.getElementById('btn-admin-reset-demo');
  if (btnAdminResetDemo) {
    btnAdminResetDemo.addEventListener('click', resetDemoTickets);
  }

  // Export CSV Audit simulation
  btnExportCsv.addEventListener('click', () => {
    let csv = 'Ticket ID,Employee,Desk,Asset Tag,Category,Urgency,Status,Assignee,Created At,Subject\n';
    tickets.forEach(t => {
      if (!t || !t.id) return;
      csv += `"${t.id}","${t.employee || ''}","${t.desk || ''}","${t.assetTag || ''}","${t.categoryName || ''}","${t.urgency || ''}","${t.status || ''}","${t.assignee || ''}","${t.createdAt || ''}","${(t.subject || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `PulseDesk_IT_Audit_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported IT tickets audit CSV!');
  });

  /**
   * Helper: Header counters
   */
  function updateHeaderCounts() {
    const activeCount = tickets.filter(t => t && t.id && t.status !== 'Resolved').length;
    activeQueueCount.textContent = `${activeCount} Active ${activeCount === 1 ? 'Ticket' : 'Tickets'}`;
  }

  function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Initialize
  renderEmployeeTickets();
  updateHeaderCounts();
});
