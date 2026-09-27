// DocuSense AI — Intelligent Financial Document & Invoice Automation
// Built by Michael Jay Diaz (MJ)

document.addEventListener('DOMContentLoaded', () => {
  // Preset Data Catalog
  const PRESETS = {
    cloud: {
      title: "Apex Cloud Infrastructure",
      subtitle: "Monthly Enterprise Cluster Bill",
      vendor: {
        name: "Apex Cloud Systems Inc.",
        address: "500 Cloud Parkway, Suite 1200, San Francisco, CA 94105",
        tax_id: "EIN-82-4910291",
        contact: "billing@apexcloud.io · (415) 890-2100"
      },
      invoice: {
        number: "INV-2026-8941",
        issue_date: "2026-09-15",
        due_date: "2026-10-15",
        terms: "Net 30",
        currency: "USD",
        po_number: "PO-77218"
      },
      items: [
        { description: "Managed Kubernetes GPU Node Pool (A100 x 4) - 720 hrs", qty: 1, unit_price: 1450.00, total: 1450.00 },
        { description: "High-Throughput NVMe Object Storage (12.5 TB)", qty: 1, unit_price: 320.00, total: 320.00 },
        { description: "Dedicated Vector DB Cluster (Qdrant Enterprise)", qty: 1, unit_price: 280.00, total: 280.00 },
        { description: "Multi-Region Egress Bandwidth & Edge CDN", qty: 1, unit_price: 150.00, total: 150.00 }
      ],
      financials: {
        subtotal: 2200.00,
        tax_rate: 8.38,
        tax_amount: 184.50,
        grand_total: 2384.50
      },
      raw_text: `INVOICE: INV-2026-8941
Vendor: Apex Cloud Systems Inc.
Address: 500 Cloud Parkway, Suite 1200, San Francisco, CA 94105
Tax ID: EIN-82-4910291 | Email: billing@apexcloud.io
Issue Date: 2026-09-15 | Due Date: 2026-10-15 | Terms: Net 30 | PO: PO-77218

LINE ITEMS:
1. Managed Kubernetes GPU Node Pool (A100 x 4) - 720 hrs | Qty: 1 | Rate: $1,450.00 | Total: $1,450.00
2. High-Throughput NVMe Object Storage (12.5 TB) | Qty: 1 | Rate: $320.00 | Total: $320.00
3. Dedicated Vector DB Cluster (Qdrant Enterprise) | Qty: 1 | Rate: $280.00 | Total: $280.00
4. Multi-Region Egress Bandwidth & Edge CDN | Qty: 1 | Rate: $150.00 | Total: $150.00

Subtotal: $2,200.00
Tax (8.38%): $184.50
Grand Total: $2,384.50 USD`
    },

    anomaly: {
      title: "OmniTech Hardware Solutions",
      subtitle: "Workstation Delivery & Logistics (Discrepancy Sample)",
      vendor: {
        name: "OmniTech Hardware Solutions LLC",
        address: "842 Industrial Blvd, Austin, TX 78701",
        tax_id: "TX-4491002",
        contact: "orders@omnitech.com · (512) 555-0199"
      },
      invoice: {
        number: "INV-OT-4402",
        issue_date: "2026-09-10",
        due_date: "2026-09-20",
        terms: "Due on Receipt",
        currency: "USD",
        po_number: "PO-99120"
      },
      items: [
        { description: "Deep Learning Developer Workstation (RTX 4090)", qty: 3, unit_price: 1600.00, total: 4800.00 },
        { description: "UltraWide 4K IPS Developer Monitor 38\"", qty: 2, unit_price: 650.00, total: 1300.00 },
        { description: "Logistics, Freight Insured & Priority Courier", qty: 1, unit_price: 600.00, total: 600.00 }
      ],
      financials: {
        // True line items sum = $4800 + $1300 + $600 = $6,700!
        // But the document states $6,120 to simulate a vendor billing mistake
        subtotal: 6120.00,
        tax_rate: 8.5,
        tax_amount: 520.20,
        grand_total: 6640.20
      },
      raw_text: `INVOICE: INV-OT-4402
Vendor: OmniTech Hardware Solutions LLC
Address: 842 Industrial Blvd, Austin, TX 78701
Tax ID: TX-4491002 | Email: orders@omnitech.com
Issue Date: 2026-09-10 | Due Date: 2026-09-20 (PAST DUE) | Terms: Due on Receipt | PO: PO-99120

LINE ITEMS:
1. Deep Learning Developer Workstation (RTX 4090) | Qty: 3 | Rate: $1,600.00 | Total: $4,800.00
2. UltraWide 4K IPS Developer Monitor 38" | Qty: 2 | Rate: $650.00 | Total: $1,300.00
3. Logistics, Freight Insured & Priority Courier | Qty: 1 | Rate: $600.00 | Total: $600.00

Stated Subtotal: $6,120.00 (NOTE: Sum of items is $6,700.00)
Tax (8.5%): $520.20
Stated Grand Total: $6,640.20 USD`
    },

    freelance: {
      title: "Michael Jay Diaz (MJ)",
      subtitle: "AI-Powered Full-Stack Sprint Delivery",
      vendor: {
        name: "Michael Jay Diaz (MJ Studio)",
        address: "Centaur Dev Labs · Remote Global",
        tax_id: "MJ-DEV-2026",
        contact: "michaeljayo.diaz@gmail.com"
      },
      invoice: {
        number: "INV-MJ-0842",
        issue_date: "2026-09-22",
        due_date: "2026-10-06",
        terms: "Net 14",
        currency: "USD",
        po_number: "PO-CLIENT-92"
      },
      items: [
        { description: "Full-Stack SaaS MVP Architecture & Next.js Application", qty: 1, unit_price: 2400.00, total: 2400.00 },
        { description: "Custom LLM Document Intelligence & Multi-Modal Vision API", qty: 1, unit_price: 1500.00, total: 1500.00 },
        { description: "Supabase Database Schema, Stripe Billing & Webhook Automations", qty: 1, unit_price: 600.00, total: 600.00 },
        { description: "Automated Deployment, Monitoring & QA Smoke Suite", qty: 1, unit_price: 350.00, total: 350.00 }
      ],
      financials: {
        subtotal: 4850.00,
        tax_rate: 0.0,
        tax_amount: 0.00,
        grand_total: 4850.00
      },
      raw_text: `INVOICE: INV-MJ-0842
Vendor: Michael Jay Diaz (MJ Studio)
Address: Centaur Dev Labs · Remote Global
Contact: michaeljayo.diaz@gmail.com
Issue Date: 2026-09-22 | Due Date: 2026-10-06 | Terms: Net 14 | PO: PO-CLIENT-92

LINE ITEMS:
1. Full-Stack SaaS MVP Architecture & Next.js Application | Qty: 1 | Rate: $2,400.00 | Total: $2,400.00
2. Custom LLM Document Intelligence & Multi-Modal Vision API | Qty: 1 | Rate: $1,500.00 | Total: $1,500.00
3. Supabase Database Schema, Stripe Billing & Webhook Automations | Qty: 1 | Rate: $600.00 | Total: $600.00
4. Automated Deployment, Monitoring & QA Smoke Suite | Qty: 1 | Rate: $350.00 | Total: $350.00

Subtotal: $4,850.00
Tax / Platform Fee: $0.00
Grand Total: $4,850.00 USD`
    }
  };

  // Instant High-Fidelity Demo Cache for Presets (Zero API Tokens Used)
  const CACHED_PRESET_RESULTS = {
    cloud: {
      vendor: {
        name: "Apex Cloud Systems Inc.",
        email: "billing@apexcloud.io",
        phone: "(415) 890-2100",
        address: "500 Cloud Parkway, Suite 1200, San Francisco, CA 94105",
        tax_id: "EIN-82-4910291",
        website: "https://apexcloud.io"
      },
      invoice: {
        invoice_number: "INV-2026-8941",
        issue_date: "2026-09-15",
        due_date: "2026-10-15",
        currency: "USD",
        payment_terms: "Net 30",
        po_number: "PO-77218"
      },
      line_items: [
        { description: "Managed Kubernetes GPU Node Pool (A100 x 4) - 720 hrs", quantity: 1, unit_price: 1450.00, total: 1450.00 },
        { description: "High-Throughput NVMe Object Storage (12.5 TB)", quantity: 1, unit_price: 320.00, total: 320.00 },
        { description: "Dedicated Vector DB Cluster (Qdrant Enterprise)", quantity: 1, unit_price: 280.00, total: 280.00 },
        { description: "Multi-Region Egress Bandwidth & Edge CDN", quantity: 1, unit_price: 150.00, total: 150.00 }
      ],
      financials: {
        subtotal: 2200.00,
        tax_rate_percent: 8.38,
        tax_amount: 184.50,
        shipping: 0.00,
        discount: 0.00,
        grand_total: 2384.50
      },
      audit_and_anomalies: {
        math_verified: true,
        flags: [
          { severity: "LOW", message: "Clean Audit: All line items, taxes (8.38%), and grand total are 100% mathematically balanced." }
        ],
        business_expense_category: "Cloud Infrastructure & AI Compute",
        tax_deductible_estimate: true,
        executive_summary: "Valid monthly cloud infrastructure and GPU cluster invoice. Due in 30 days; recommended for automated accounts payable approval."
      }
    },

    anomaly: {
      vendor: {
        name: "OmniTech Hardware Solutions LLC",
        email: "orders@omnitech.com",
        phone: "(512) 555-0199",
        address: "842 Industrial Blvd, Austin, TX 78701",
        tax_id: "TX-4491002",
        website: "https://omnitech.com"
      },
      invoice: {
        invoice_number: "INV-OT-4402",
        issue_date: "2026-09-10",
        due_date: "2026-09-20",
        currency: "USD",
        payment_terms: "Due on Receipt",
        po_number: "PO-99120"
      },
      line_items: [
        { description: "Deep Learning Developer Workstation (RTX 4090)", quantity: 3, unit_price: 1600.00, total: 4800.00 },
        { description: "UltraWide 4K IPS Developer Monitor 38\"", quantity: 2, unit_price: 650.00, total: 1300.00 },
        { description: "Logistics, Freight Insured & Priority Courier", quantity: 1, unit_price: 600.00, total: 600.00 }
      ],
      financials: {
        subtotal: 6120.00,
        tax_rate_percent: 8.5,
        tax_amount: 520.20,
        shipping: 0.00,
        discount: 0.00,
        grand_total: 6640.20
      },
      audit_and_anomalies: {
        math_verified: false,
        flags: [
          { severity: "HIGH", message: "Mathematical Discrepancy: True sum of line items ($6,700.00) differs by $580.00 from stated subtotal ($6,120.00)." },
          { severity: "MEDIUM", message: "Payment Terms Alert: Invoice due date (2026-09-20) has already elapsed." }
        ],
        business_expense_category: "Computer Hardware & Capital Equipment",
        tax_deductible_estimate: true,
        executive_summary: "Automated audit flagged a $580.00 arithmetic mismatch between line items and subtotal. Invoicing hold recommended pending vendor correction."
      }
    },

    freelance: {
      vendor: {
        name: "Michael Jay Diaz (MJ Studio)",
        email: "michaeljayo.diaz@gmail.com",
        phone: null,
        address: "Centaur Dev Labs · Remote Global",
        tax_id: "MJ-DEV-2026",
        website: "http://localhost:8088"
      },
      invoice: {
        invoice_number: "INV-MJ-0842",
        issue_date: "2026-09-22",
        due_date: "2026-10-06",
        currency: "USD",
        payment_terms: "Net 14",
        po_number: "PO-CLIENT-92"
      },
      line_items: [
        { description: "Full-Stack SaaS MVP Architecture & Next.js Application", quantity: 1, unit_price: 2400.00, total: 2400.00 },
        { description: "Custom LLM Document Intelligence & Multi-Modal Vision API", quantity: 1, unit_price: 1500.00, total: 1500.00 },
        { description: "Supabase Database Schema, Stripe Billing & Webhook Automations", quantity: 1, unit_price: 600.00, total: 600.00 },
        { description: "Automated Deployment, Monitoring & QA Smoke Suite", quantity: 1, unit_price: 350.00, total: 350.00 }
      ],
      financials: {
        subtotal: 4850.00,
        tax_rate_percent: 0.0,
        tax_amount: 0.00,
        shipping: 0.00,
        discount: 0.00,
        grand_total: 4850.00
      },
      audit_and_anomalies: {
        math_verified: true,
        flags: [
          { severity: "LOW", message: "Clean Audit: Professional developer milestone delivery verified against contract terms." }
        ],
        business_expense_category: "Contracted Software Development & AI Engineering",
        tax_deductible_estimate: true,
        executive_summary: "Completed sprint deliverable for SaaS MVP and AI vision pipeline. All milestone deliverables verified."
      }
    }
  };

  // State
  let currentPreset = 'cloud';
  let uploadedImageBase64 = null;
  let activeTab = 'preview';
  let latestExtractedData = null;
  let remainingCredits = 3;

  // DOM Elements
  const documentSheet = document.getElementById('document-sheet');
  const rawDocText = document.getElementById('raw-doc-text');
  const presetButtons = document.querySelectorAll('.preset-card');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  const runExtractBtn = document.getElementById('run-extract-btn');
  const extractSpinner = document.getElementById('extract-spinner');
  const extractBtnLabel = document.getElementById('extract-btn-label');
  const creditCount = document.getElementById('credit-count');
  const demoCreditPill = document.getElementById('demo-credit-pill');
  const quotaAlertBox = document.getElementById('quota-alert-box');

  // Fetch initial demo quota status from server
  async function syncDemoStatus() {
    try {
      const res = await fetch('/api/demo-status');
      const data = await res.json();
      remainingCredits = typeof data.remaining_credits === 'number' ? data.remaining_credits : 3;
      updateCreditDisplay();
    } catch (e) {
      console.warn("Could not sync demo status", e);
    }
  }

  function updateCreditDisplay() {
    if (creditCount) creditCount.textContent = remainingCredits;
    if (remainingCredits <= 0) {
      if (demoCreditPill) demoCreditPill.classList.add('exhausted');
      if (quotaAlertBox) quotaAlertBox.classList.remove('hidden');
    } else {
      if (demoCreditPill) demoCreditPill.classList.remove('exhausted');
      if (quotaAlertBox) quotaAlertBox.classList.add('hidden');
    }
  }

  syncDemoStatus();

  // Dashboard Elements
  const auditBanner = document.getElementById('audit-banner');
  const auditIcon = document.getElementById('audit-icon');
  const auditLabel = document.getElementById('audit-label');
  const expenseCategory = document.getElementById('expense-category');
  const deductibleStatus = document.getElementById('deductible-status');
  const summaryText = document.getElementById('summary-text');
  const flagsContainer = document.getElementById('flags-container');
  const flagsList = document.getElementById('flags-list');
  const kpiTotal = document.getElementById('kpi-total');
  const kpiSubtotal = document.getElementById('kpi-subtotal');
  const kpiTax = document.getElementById('kpi-tax');
  const kpiTerms = document.getElementById('kpi-terms');
  const kpiDue = document.getElementById('kpi-due');
  const kpiCurrency = document.getElementById('kpi-currency');
  const vendorName = document.getElementById('vendor-name');
  const vendorTaxId = document.getElementById('vendor-tax-id');
  const vendorAddress = document.getElementById('vendor-address');
  const vendorContact = document.getElementById('vendor-contact');
  const metaInvNum = document.getElementById('meta-inv-num');
  const metaIssueDate = document.getElementById('meta-issue-date');
  const metaDueDate = document.getElementById('meta-due-date');
  const metaPoNum = document.getElementById('meta-po-num');
  const lineItemsCount = document.getElementById('line-items-count');
  const itemsTbody = document.getElementById('items-tbody');

  // Toggle View
  const btnViewVisual = document.getElementById('btn-view-visual');
  const btnViewJson = document.getElementById('btn-view-json');
  const dashboardView = document.getElementById('dashboard-view');
  const jsonView = document.getElementById('json-view');
  const jsonCodeDisplay = document.getElementById('json-code-display');
  const btnCopyJson = document.getElementById('btn-copy-json');

  // Export Buttons
  const btnExportJson = document.getElementById('btn-export-json');
  const btnExportCsv = document.getElementById('btn-export-csv');
  const btnSyncWebhook = document.getElementById('btn-sync-webhook');
  const webhookReceipt = document.getElementById('webhook-receipt');
  const receiptMsg = document.getElementById('receipt-msg');
  const receiptDetails = document.getElementById('receipt-details');

  // Render Preset to Document Sheet
  function renderDocument(presetKey) {
    const data = PRESETS[presetKey];
    if (!data) return;

    rawDocText.value = data.raw_text;

    let itemsHtml = data.items.map(item => `
      <tr>
        <td><strong>${item.description}</strong></td>
        <td>${item.qty}</td>
        <td>$${item.unit_price.toFixed(2)}</td>
        <td class="text-right"><strong>$${item.total.toFixed(2)}</strong></td>
      </tr>
    `).join('');

    documentSheet.innerHTML = `
      <div class="doc-header-row">
        <div>
          <div class="doc-company-name">${data.vendor.name}</div>
          <div style="font-size: 0.8rem; color: #64748b;">${data.vendor.address}</div>
          <div style="font-size: 0.8rem; color: #64748b;">${data.vendor.contact}</div>
        </div>
        <div class="doc-invoice-badge">
          <h3>INVOICE</h3>
          <div><strong>#${data.invoice.number}</strong></div>
          <div style="font-size: 0.8rem; color: #64748b;">Terms: ${data.invoice.terms}</div>
        </div>
      </div>

      <div class="doc-info-cols">
        <div>
          <div><strong>Issue Date:</strong> ${data.invoice.issue_date}</div>
          <div><strong>Due Date:</strong> ${data.invoice.due_date}</div>
        </div>
        <div style="text-align: right;">
          <div><strong>Tax ID:</strong> ${data.vendor.tax_id}</div>
          <div><strong>PO Number:</strong> ${data.invoice.po_number}</div>
        </div>
      </div>

      <table class="doc-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th class="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <div class="doc-totals">
        <div class="doc-totals-row">
          <span>Subtotal:</span>
          <span>$${data.financials.subtotal.toFixed(2)}</span>
        </div>
        <div class="doc-totals-row">
          <span>Tax (${data.financials.tax_rate}%):</span>
          <span>$${data.financials.tax_amount.toFixed(2)}</span>
        </div>
        <div class="doc-totals-row grand">
          <span>Total (${data.invoice.currency}):</span>
          <span>$${data.financials.grand_total.toFixed(2)}</span>
        </div>
      </div>
    `;
  }

  // Handle Preset Button Clicks
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPreset = btn.dataset.preset;
      uploadedImageBase64 = null;
      renderDocument(currentPreset);

      // Switch to preview tab
      switchTab('preview');
    });
  });

  // Tab Switcher
  function switchTab(tabName) {
    activeTab = tabName;
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === `tab-${tabName}`);
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // File Upload Drop Zone Handlers
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });
  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUploadedFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleUploadedFile(e.target.files[0]);
    }
  });

  function handleUploadedFile(file) {
    if (!file.type.startsWith('image/')) {
      alert("Please upload an image file (PNG, JPG, WEBP).");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImageBase64 = e.target.result;
      documentSheet.innerHTML = `
        <div style="text-align: center;">
          <img src="${uploadedImageBase64}" alt="Uploaded Document" style="max-width: 100%; max-height: 480px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
          <div style="margin-top: 12px; font-weight: 600; color: #0f172a;">${file.name}</div>
        </div>
      `;
      switchTab('preview');
      presetButtons.forEach(b => b.classList.remove('active'));
    };
    reader.readAsDataURL(file);
  }

  // Run AI Extraction Call
  runExtractBtn.addEventListener('click', async () => {
    // 1. Check if user is using a built-in demonstration preset
    const isUsingPreset = !uploadedImageBase64 && activeTab === 'preview' && CACHED_PRESET_RESULTS[currentPreset];

    if (isUsingPreset) {
      runExtractBtn.disabled = true;
      extractSpinner.classList.remove('hidden');
      extractBtnLabel.textContent = "Loading Instant Demo Intelligence (0 Tokens Used)...";

      setTimeout(() => {
        latestExtractedData = CACHED_PRESET_RESULTS[currentPreset];
        populateDashboard(latestExtractedData);
        runExtractBtn.disabled = false;
        extractSpinner.classList.add('hidden');
        extractBtnLabel.textContent = "Run DocuSense AI Extraction & Audit";
      }, 450);
      return;
    }

    // 2. Custom Upload or Custom Text -> Enforce Demo Limit
    if (remainingCredits <= 0) {
      alert("🔒 Demo Limit Reached: You have used all 3 free live custom extractions. Built-in presets remain freely available. Contact Michael Jay Diaz at michaeljayo.diaz@gmail.com to deploy an unlimited pipeline for your company.");
      if (quotaAlertBox) quotaAlertBox.classList.remove('hidden');
      return;
    }

    runExtractBtn.disabled = true;
    extractSpinner.classList.remove('hidden');
    extractBtnLabel.textContent = "Analyzing with Live Gemini Multi-Modal AI (Uses 1 Credit)...";

    let payload = {};
    if (uploadedImageBase64) {
      payload.image_base64 = uploadedImageBase64;
    } else {
      payload.text = rawDocText.value || PRESETS[currentPreset].raw_text;
    }

    try {
      const res = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const jsonRes = await res.json();

      if (jsonRes.success && jsonRes.data) {
        latestExtractedData = jsonRes.data;
        if (typeof jsonRes.remaining_credits === 'number') {
          remainingCredits = jsonRes.remaining_credits;
          updateCreditDisplay();
        }
        populateDashboard(latestExtractedData);
      } else {
        if (jsonRes.quota_reached) {
          remainingCredits = 0;
          updateCreditDisplay();
        }
        alert(jsonRes.error || "Extraction failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error communicating with DocuSense AI backend.");
    } finally {
      runExtractBtn.disabled = false;
      extractSpinner.classList.add('hidden');
      extractBtnLabel.textContent = "Run DocuSense AI Extraction & Audit";
    }
  });

  // Populate Dashboard with Extracted JSON
  function populateDashboard(data) {
    const audit = data.audit_and_anomalies || {};
    const vendor = data.vendor || {};
    const invoice = data.invoice || {};
    const financials = data.financials || {};
    const items = data.line_items || [];

    // Audit Banner
    auditBanner.className = 'audit-banner';
    if (audit.math_verified === false) {
      auditBanner.classList.add('discrepancy');
      auditIcon.textContent = '🚨';
      auditLabel.textContent = 'Discrepancy Detected';
    } else {
      auditBanner.classList.add('clean');
      auditIcon.textContent = '✅';
      auditLabel.textContent = 'Audit Passed · Balanced';
    }

    expenseCategory.textContent = `Category: ${audit.business_expense_category || 'General Business'}`;
    deductibleStatus.textContent = audit.tax_deductible_estimate ? 'Deductible: 100% Eligible' : 'Deductible: Review Required';

    // Summary
    summaryText.textContent = audit.executive_summary || "Document parsed successfully.";

    // Flags
    const flags = audit.flags || [];
    if (flags.length > 0) {
      flagsContainer.classList.remove('hidden');
      flagsList.innerHTML = flags.map(f => `
        <div class="flag-item">
          <span class="flag-severity ${f.severity || 'LOW'}">${f.severity || 'LOW'}</span>
          <span>${f.message}</span>
        </div>
      `).join('');
    } else {
      flagsContainer.classList.add('hidden');
    }

    // Top KPIs
    kpiTotal.textContent = `$${parseFloat(financials.grand_total || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    kpiCurrency.textContent = invoice.currency || 'USD';
    kpiSubtotal.textContent = `$${parseFloat(financials.subtotal || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    kpiTax.textContent = `Tax: $${parseFloat(financials.tax_amount || 0).toFixed(2)} (${financials.tax_rate_percent || 0}%)`;
    kpiTerms.textContent = invoice.payment_terms || 'Standard';
    kpiDue.textContent = `Due: ${invoice.due_date || 'N/A'}`;

    // Vendor Card
    vendorName.textContent = vendor.name || '--';
    vendorTaxId.textContent = vendor.tax_id || 'Not specified';
    vendorAddress.textContent = vendor.address || '--';
    vendorContact.textContent = vendor.email || vendor.phone || '--';

    // Invoice Meta Card
    metaInvNum.textContent = invoice.invoice_number || '--';
    metaIssueDate.textContent = invoice.issue_date || '--';
    metaDueDate.textContent = invoice.due_date || '--';
    metaPoNum.textContent = invoice.po_number || 'N/A';

    // Line Items Table
    lineItemsCount.textContent = items.length;
    if (items.length > 0) {
      itemsTbody.innerHTML = items.map(item => `
        <tr>
          <td><strong>${item.description || '--'}</strong></td>
          <td>${item.quantity || 1}</td>
          <td>$${parseFloat(item.unit_price || 0).toFixed(2)}</td>
          <td class="text-right"><strong>$${parseFloat(item.total || 0).toFixed(2)}</strong></td>
        </tr>
      `).join('');
    } else {
      itemsTbody.innerHTML = `<tr><td colspan="4" class="empty-state">No line items extracted.</td></tr>`;
    }

    // JSON display
    jsonCodeDisplay.textContent = JSON.stringify(data, null, 2);
  }

  // Toggle View Visual vs JSON
  btnViewVisual.addEventListener('click', () => {
    btnViewVisual.classList.add('active');
    btnViewJson.classList.remove('active');
    dashboardView.classList.remove('hidden');
    jsonView.classList.add('hidden');
  });

  btnViewJson.addEventListener('click', () => {
    btnViewJson.classList.add('active');
    btnViewVisual.classList.remove('active');
    dashboardView.classList.add('hidden');
    jsonView.classList.remove('hidden');
  });

  // Copy JSON
  btnCopyJson.addEventListener('click', () => {
    navigator.clipboard.writeText(jsonCodeDisplay.textContent).then(() => {
      btnCopyJson.textContent = "Copied!";
      setTimeout(() => { btnCopyJson.textContent = "Copy JSON"; }, 2000);
    });
  });

  // Export JSON
  btnExportJson.addEventListener('click', () => {
    if (!latestExtractedData) {
      alert("Please extract an invoice first before downloading.");
      return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(latestExtractedData, null, 2));
    const invNum = latestExtractedData.invoice?.invoice_number || 'export';
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `docusense_${invNum}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  });

  // Export CSV
  btnExportCsv.addEventListener('click', () => {
    if (!latestExtractedData || !latestExtractedData.line_items) {
      alert("Please extract an invoice first before exporting CSV.");
      return;
    }
    const items = latestExtractedData.line_items;
    let csv = "Item Description,Quantity,Unit Price,Total\n";
    items.forEach(it => {
      const desc = `"${(it.description || '').replace(/"/g, '""')}"`;
      csv += `${desc},${it.quantity || 1},${it.unit_price || 0},${it.total || 0}\n`;
    });

    const dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `docusense_items_${Date.now()}.csv`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  });

  // Simulate Webhook Sync
  btnSyncWebhook.addEventListener('click', async () => {
    if (!latestExtractedData) {
      alert("Please extract an invoice first before triggering webhook sync.");
      return;
    }

    btnSyncWebhook.disabled = true;
    try {
      const res = await fetch('/api/sync-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(latestExtractedData)
      });
      const data = await res.json();
      receiptMsg.textContent = data.message;
      receiptDetails.textContent = `Transaction: ${data.transaction_id} · Timestamp: ${data.timestamp} · Webhooks: ${data.integrations_notified.join(', ')}`;
      webhookReceipt.classList.remove('hidden');
    } catch (err) {
      alert("Failed to dispatch webhook.");
    } finally {
      btnSyncWebhook.disabled = false;
    }
  });

  // Initialize initial preset
  renderDocument('cloud');
});
