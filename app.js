/* ==========================================================================
   AI-Powered Developer Portfolio — Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. AI Dev Partner Terminal
  // --------------------------------------------------------------------------
  const terminalLog = document.getElementById('terminal-log');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const promptChips = document.querySelectorAll('.prompt-chip');

  const partnerKnowledge = [
    {
      keywords: ['quality', 'bugs', 'ensure', 'hallucination', 'code review', 'broken'],
      reasoning: 'Tool Call: review_code_quality_workflow()\nRetrieving testing protocols, linting gates, and human verification checkpoints...',
      response: `We guarantee production-grade code through a strict **Two-Tier Verification Workflow**:
      
1. **Human Architecture & Oversight**: My human partner defines the database schemas, API contracts, security constraints, and UX logic before any code is generated.
2. **Automated Test Scaffolding**: I generate comprehensive unit and integration test suites (PyTest / Jest / Playwright) alongside the features.
3. **Rigorous Human QA**: Every single pull request and code snippet is manually inspected, tested, and approved by the human lead. You get the speed of AI with the reliability of a senior engineer.`
    },
    {
      keywords: ['agency', 'better', 'traditional', 'cost', 'why hire', 'vs'],
      reasoning: 'Tool Call: compare_delivery_models(target="Traditional Agency vs Human+AI Studio")\nCalculating turnaround benchmarks and cost efficiencies...',
      response: `Hiring a Human + AI duo beats a traditional dev agency on three critical fronts:
      
1. **5x Faster Turnaround**: Traditional agencies take 6–12 weeks of endless meetings and junior developer handoffs. We build and deploy working MVPs in **48 to 72 hours**.
2. **Zero Communication Silos**: You talk directly to the lead architect who actually directs the build—no account managers or broken telephone.
3. **Drastically Lower Cost**: You get the output of a 4-person team (frontend, backend, design, and QA) packaged into one agile, high-velocity partner.`
    },
    {
      keywords: ['turnaround', 'timeline', 'time', 'mvp', 'how fast', 'schedule'],
      reasoning: 'Tool Call: estimate_velocity_metrics(sprint="MVP Launch")\nLoading historical delivery records across SaaS and automation projects...',
      response: `Our standard delivery benchmarks:
      
- **Interactive Landing Pages & Prototypes**: 24 – 48 Hours
- **Full-Stack SaaS MVPs (Auth, Database, Payments)**: 3 – 5 Days
- **Custom Business & Workflow Automations**: 1 – 3 Days
- **Generative Media & Image Pipelines**: 24 – 48 Hours

Because we eliminate boilerplate grunt work with AI agents, 90% of our time is spent on product logic, user experience, and testing.`
    },
    {
      keywords: ['automation', 'automate', 'crm', 'webhook', 'slack', 'sheets', 'zapier', 'make'],
      reasoning: 'Tool Call: list_automation_connectors(status="active")\nIndexing API webhooks, document parsers, and sync engines...',
      response: `Yes! We build custom, resilient automation pipelines that eliminate manual work:
      
1. **Document & Invoice OCR**: Automatically extracting structured JSON data from incoming PDFs and emails using AI vision.
2. **Cross-Platform Synchronization**: Bi-directional syncing between Google Sheets, Airtable, HubSpot, Salesforce, and PostgreSQL.
3. **Custom Alerts & Bots**: Real-time Slack, Discord, or WhatsApp triggers for high-priority leads, payment failures, or urgent tickets.`
    }
  ];

  let isTyping = false;

  function streamPartnerResponse(userQuery, match) {
    if (isTyping) return;
    isTyping = true;

    const userMsgEl = document.createElement('div');
    userMsgEl.className = 'chat-msg';
    userMsgEl.innerHTML = `
      <div class="user-query">
        <span style="color: var(--accent-cyan);">&gt;</span>
        <span>${escapeHtml(userQuery)}</span>
      </div>
      <div class="reasoning-box">
        <div class="reasoning-title">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          AI Co-Developer Processing
        </div>
        <div class="reasoning-text">${escapeHtml(match.reasoning)}</div>
      </div>
      <div class="agent-response">
        <span class="stream-target"></span><span class="cursor-blink"></span>
      </div>
    `;

    terminalLog.appendChild(userMsgEl);
    terminalLog.scrollTop = terminalLog.scrollHeight;

    const streamTarget = userMsgEl.querySelector('.stream-target');
    const cursor = userMsgEl.querySelector('.cursor-blink');

    const formatted = formatMarkdown(match.response);
    
    let charIndex = 0;
    const fullText = match.response;
    const typingInterval = setInterval(() => {
      charIndex += 4;
      if (charIndex >= fullText.length) {
        clearInterval(typingInterval);
        streamTarget.innerHTML = formatted;
        cursor.remove();
        isTyping = false;
        terminalLog.scrollTop = terminalLog.scrollHeight;
      } else {
        streamTarget.textContent = fullText.slice(0, charIndex);
        terminalLog.scrollTop = terminalLog.scrollHeight;
      }
    }, 12);
  }

  function handlePartnerQuery(queryText) {
    if (!queryText.trim()) return;

    const lower = queryText.toLowerCase();
    let selectedMatch = null;

    for (const item of partnerKnowledge) {
      if (item.keywords.some(kw => lower.includes(kw))) {
        selectedMatch = item;
        break;
      }
    }

    if (!selectedMatch) {
      selectedMatch = {
        reasoning: `Tool Call: general_inquiry_synthesis(topic="${escapeHtml(queryText)}")\nSynthesizing human-in-the-loop developer workflow...`,
        response: `As a human + AI development team, we combine **strategic direction and rigorous QA** with **lightning-fast AI execution**.
        
We build:
- **Full-Stack Web & Mobile Apps** (React, Next.js, Python, PostgreSQL, Supabase)
- **Workflow Automations & Custom Bots** (APIs, webhooks, CRMs, document parsers)
- **Generative Media & Visuals** (High-converting graphics, brand assets, mockups)

Have a specific project in mind? Use our **Scope Estimator** above or drop us an email!`
      };
    }

    streamPartnerResponse(queryText, selectedMatch);
  }

  if (terminalForm) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = terminalInput.value.trim();
      if (val) {
        handlePartnerQuery(val);
        terminalInput.value = '';
      }
    });
  }

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) {
        terminalInput.value = prompt;
        handlePartnerQuery(prompt);
        terminalInput.value = '';
      }
    });
  });

  // --------------------------------------------------------------------------
  // 2. Interactive Scope & Timeline Estimator
  // --------------------------------------------------------------------------
  const typeButtons = document.querySelectorAll('.type-btn');
  const featAuth = document.getElementById('feat-auth');
  const featBilling = document.getElementById('feat-billing');
  const featWebhooks = document.getElementById('feat-webhooks');
  const featMedia = document.getElementById('feat-media');
  const featAdmin = document.getElementById('feat-admin');
  const estimateTimeVal = document.getElementById('estimate-time-val');
  const estimateSpeedVal = document.getElementById('estimate-speed-val');
  const estimateDeliverablesList = document.getElementById('estimate-deliverables-list');
  const btnInquireSpec = document.getElementById('btn-inquire-spec');

  let currentProjectType = 'webapp';

  const baseEstimates = {
    webapp: {
      name: "Full-Stack Web App / MVP",
      baseDays: 3,
      deliverables: [
        "Production-ready code repository with clean documentation",
        "Responsive modern UI with dark mode & mobile optimization",
        "Secure cloud deployment on Vercel / Railway / AWS",
        "30 days of post-launch bug warranty & support"
      ]
    },
    automation: {
      name: "Workflow Automation Pipeline",
      baseDays: 2,
      deliverables: [
        "Custom Python / Node.js automation script or webhook server",
        "API connector connecting your CRM, databases, and notification channels",
        "Error handling, automatic retries & log monitoring",
        "Deployment to serverless / cloud cron worker"
      ]
    },
    media: {
      name: "Generative Media & Asset Studio",
      baseDays: 2,
      deliverables: [
        "Curated package of high-resolution AI-generated assets",
        "Prompt engineering playbook & brand style consistency guide",
        "Automated resizing & export pipeline for all web/social dimensions",
        "Direct Figma / Drive export of all final assets"
      ]
    },
    internal: {
      name: "Internal AI Assistant / Bot",
      baseDays: 3,
      deliverables: [
        "Custom AI assistant connected to your private documentation / knowledge",
        "Slack / Discord / Web interface integration",
        "Role-based access control and rate-limiting",
        "Prompt tuning for 99%+ answer accuracy"
      ]
    }
  };

  function updateEstimator() {
    const config = baseEstimates[currentProjectType];
    let totalDays = config.baseDays;
    const deliverables = [...config.deliverables];

    if (featAuth && featAuth.checked) {
      totalDays += 0.5;
      deliverables.push("User Authentication & Database (Supabase / PostgreSQL)");
    }
    if (featBilling && featBilling.checked) {
      totalDays += 0.5;
      deliverables.push("Stripe / Payment integration with automated webhook handling");
    }
    if (featWebhooks && featWebhooks.checked) {
      totalDays += 0.5;
      deliverables.push("Third-party Webhooks & bi-directional sync");
    }
    if (featMedia && featMedia.checked) {
      totalDays += 0.5;
      deliverables.push("Custom AI-generated branding graphics & visual assets");
    }
    if (featAdmin && featAdmin.checked) {
      totalDays += 0.5;
      deliverables.push("Custom Admin dashboard with analytics & user management");
    }

    const minDays = Math.floor(totalDays);
    const maxDays = Math.ceil(totalDays + 1);

    if (estimateTimeVal) {
      estimateTimeVal.textContent = `${minDays} – ${maxDays} Days`;
    }
    if (estimateSpeedVal) {
      estimateSpeedVal.textContent = `🚀 Traditional Agency Estimate: ${minDays * 3} – ${maxDays * 4} Weeks`;
    }

    if (estimateDeliverablesList) {
      estimateDeliverablesList.innerHTML = deliverables
        .map(item => `<li>${escapeHtml(item)}</li>`)
        .join('');
    }
  }

  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      typeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentProjectType = btn.getAttribute('data-type');
      updateEstimator();
    });
  });

  [featAuth, featBilling, featWebhooks, featMedia, featAdmin].forEach(checkbox => {
    if (checkbox) {
      checkbox.addEventListener('change', updateEstimator);
    }
  });

  // Run initial estimate calculation
  updateEstimator();

  if (btnInquireSpec) {
    btnInquireSpec.addEventListener('click', () => {
      const typeName = baseEstimates[currentProjectType].name;
      const timeEst = estimateTimeVal.textContent;
      const specSummary = `Project Type: ${typeName} | Estimated Timeline: ${timeEst}`;
      
      const email = 'developer@example.com';
      const subject = encodeURIComponent(`Project Inquiry: ${typeName}`);
      const body = encodeURIComponent(`Hi!\n\nI configured a project scope on your portfolio:\n- Type: ${typeName}\n- Estimated Timeline: ${timeEst}\n\nLet's discuss getting this built!`);
      
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }

  // --------------------------------------------------------------------------
  // 3. Projects Category Filter
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 4. Build Specs & Process Modal
  // --------------------------------------------------------------------------
  const archModal = document.getElementById('arch-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalProjectSubtitle = document.getElementById('modal-project-subtitle');
  const modalDiagramText = document.getElementById('modal-diagram-text');
  const modalDetails = document.getElementById('modal-details');

  const projectSpecs = {
    pulsesync: {
      title: "ApexSMB: Modern Small & Medium Business Digital Platform",
      subtitle: "High-Converting Website with 24/7 AI Concierge & Instant Quote Engine",
      diagram:
`[Visitor Arrives on High-Converting Responsive Website]
        │
        ▼
[Interactive Conversion Layer]
  ├── Dynamic Theme & Industry Switcher (Dental, Contractor, Legal)
  └── Instant Cost & Service Package Calculator
        │
        ▼
[24/7 AI Concierge & Smart Receptionist (Gemini AI)]
  ├── Answers Pricing, Hours, Insurance & Service Inquiries
  └── Captures Lead Contact Info & Qualifies Intent
        │
        ▼
[60-Second Online Booking & Automated Dispatch]
  ├── Selects Service Slot & Validates Scheduling
  └── Dispatches Google/Apple Calendar Sync & SMS Confirmation`,
      details: `
        <h4 style="color: var(--accent-cyan); margin-bottom: 8px;">Human + AI Synergy Highlights:</h4>
        <ul style="padding-left: 20px; margin-bottom: 12px;">
          <li><strong>Turnkey Multi-Vertical Support</strong>: Adaptable to dental clinics, home contractors, and law firms with zero re-scaffolding.</li>
          <li><strong>24/7 Automated Lead Capture</strong>: AI receptionist handles late-night inquiries and books appointments when the office is closed.</li>
          <li><strong>Zero-Friction Transparent Pricing</strong>: Live interactive calculator eliminates billing hesitation and boosts online conversions.</li>
        </ul>
        <div style="margin-top: 14px;">
          <a href="http://localhost:8092" target="_blank" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
            <span>🚀 Launch Live ApexSMB App (Port 8092)</span>
          </a>
        </div>
      `
    },
    autoflow: {
      title: "DocuSense AI: Financial Document Intelligence & Invoice Pipeline",
      subtitle: "Multi-Platform Automated Extraction & Audit Engine Saving 25+ Hours Weekly",
      diagram:
`[Incoming Invoices / Receipts via File Upload or Presets]
        │
        ▼
[Gemini Vision Multi-Modal AI Extraction Engine]
  ├── Extracts Vendor, Invoice #, Line Items & Due Dates
  └── Formats into Structured JSON & CSV Data
        │
        ▼
[Automated Financial Audit & Anomaly Detection]
  ├── Verifies Mathematical Balance (Line Items Sum vs Subtotal)
  └── Flags Overdue Terms, Duplicate Line Items, or Tax Discrepancies
        │
        ▼
[Multi-Channel Sync & Export Triggers]
  ├── 1-Click CSV & JSON Export
  └── Real-Time ERP / Webhook Sync (QuickBooks / Slack alerts)`,
      details: `
        <h4 style="color: var(--accent-cyan); margin-bottom: 8px;">Human + AI Synergy Highlights:</h4>
        <ul style="padding-left: 20px; margin-bottom: 12px;">
          <li><strong>Eliminated Manual Data Entry</strong>: Extracted line items and financial metrics in under 3 seconds with zero manual typing.</li>
          <li><strong>Automated Fraud & Error Shield</strong>: Built-in mathematical validation flags mismatched totals and suspicious charges before accounting sync.</li>
          <li><strong>Enterprise-Ready Webhooks</strong>: Simulates real-time push to QuickBooks, Slack, and accounting databases.</li>
        </ul>
        <div style="margin-top: 14px;">
          <a href="http://localhost:8090" target="_blank" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
            <span>🚀 Launch Live DocuSense AI App (Port 8090)</span>
          </a>
        </div>
      `
    },
    visioncraft: {
      title: "VisionCraft: AI Asset Pipeline Specification",
      subtitle: "Automated Generative Media & Visual Asset Engine",
      diagram:
`[Product Catalog & Brand Style Guidelines]
        │
        ▼
[Prompt Matrix & LoRA Style Consistency (Python)]
  ├── High-Resolution Lifestyle Mockups
  └── Social Ad Variants (1:1, 9:16, 16:9)
        │
        ▼
[ComfyUI & Stable Diffusion Automated Batch Run]
        │
        ▼
[Upscaling & Automated Post-Processing]
  ├── Real-ESRGAN 4K Upscaling
  └── Python Pillow Auto-Watermarking & S3 Cloud Upload
        │
        ▼
[Export to Figma / Google Drive for Campaign Use]`,
      details: `
        <h4 style="color: var(--accent-cyan); margin-bottom: 8px;">Human + AI Synergy Highlights:</h4>
        <ul style="padding-left: 20px; margin-bottom: 12px;">
          <li><strong>10x Faster Asset Iteration</strong>: Marketing team tested 40 visual variants in the time it usually takes a designer to produce 2.</li>
          <li><strong>Brand Color Fidelity</strong>: Custom color mapping scripts ensured hex code consistency across all generated outputs.</li>
        </ul>
      `
    }
  };

  document.querySelectorAll('.btn-view-arch').forEach(btn => {
    btn.addEventListener('click', () => {
      const projKey = btn.getAttribute('data-project');
      const data = projectSpecs[projKey];
      if (data) {
        modalProjectTitle.textContent = data.title;
        modalProjectSubtitle.textContent = data.subtitle;
        modalDiagramText.textContent = data.diagram;
        modalDetails.innerHTML = data.details;
        archModal.classList.add('active');
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      archModal.classList.remove('active');
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === archModal) {
      archModal.classList.remove('active');
    }
  });

  // --------------------------------------------------------------------------
  // 5. Toast Notification & Copy Email
  // --------------------------------------------------------------------------
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  const btnCopyEmail = document.getElementById('btn-copy-email');

  function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = 'developer@example.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
        });
      } else {
        showToast(`Contact: ${email}`);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Helper Utilities
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatMarkdown(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; font-family: var(--font-mono); color: var(--accent-cyan);">$1</code>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n- (.*?)/g, '<br>• $1');
  }

});
