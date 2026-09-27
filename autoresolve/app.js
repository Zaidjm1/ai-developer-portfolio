/**
 * AutoResolve AI — Autonomous Support Ticket Triage & SLA Routing Pipeline
 * Client-side Simulation & Enterprise NLP Pipeline
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const presetCards = document.querySelectorAll('.preset-card');
  const ticketForm = document.getElementById('ticket-form');
  const ticketIdInput = document.getElementById('ticket-id');
  const customerNameInput = document.getElementById('customer-name');
  const accountTierSelect = document.getElementById('account-tier');
  const inboundChannelSelect = document.getElementById('inbound-channel');
  const ticketSubjectInput = document.getElementById('ticket-subject');
  const ticketBodyInput = document.getElementById('ticket-body');
  const bodyCharCount = document.getElementById('body-char-count');
  const btnRunTriage = document.getElementById('btn-run-triage');
  const btnResetForm = document.getElementById('btn-reset-form');
  const btnRunText = document.getElementById('btn-run-text');

  // Output Elements
  const stepperBar = document.getElementById('stepper-bar');
  const stepItems = document.querySelectorAll('.step-item');
  const stepLines = document.querySelectorAll('.step-line');
  const triageHeadline = document.getElementById('triage-headline');
  const slaBadge = document.getElementById('sla-badge');
  const slaBadgeText = document.getElementById('sla-badge-text');
  const valSentiment = document.getElementById('val-sentiment');
  const valCategory = document.getElementById('val-category');
  const valSubcategory = document.getElementById('val-subcategory');
  const valChurn = document.getElementById('val-churn');
  const valRouting = document.getElementById('val-routing');
  const valChannel = document.getElementById('val-channel');
  const resMeta = document.getElementById('res-meta');
  const resContent = document.getElementById('res-content');
  const btnCopyReply = document.getElementById('btn-copy-reply');
  const copyReplyText = document.getElementById('copy-reply-text');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const btnCopyJson = document.getElementById('btn-copy-json');
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');

  // Stats Counters
  const statTriaged = document.getElementById('stat-triaged');
  let triagedCounter = 1482;

  // Preset Data Dictionary
  const PRESETS = {
    payment_outage: {
      ticketId: 'TICK-2026-9042',
      customer: 'Alex Rivera (Acme Global E-Commerce)',
      tier: 'enterprise_platinum',
      channel: 'zendesk',
      subject: 'URGENT: Stripe checkout 500 error losing thousands during active promotion',
      body: `Hi team, our checkout page has been throwing 500 Internal Server errors for the last 18 minutes on all Stripe webhook calls. Customers are blowing up our support chat unable to place orders during our anniversary sale. We are losing thousands of dollars every 5 minutes. If this isn't fixed immediately, we will be forced to dispute the latest annual invoice and migrate our infrastructure elsewhere. Please escalate this now.`,
      classification: {
        headline: 'P1 Incident Escalated: Payment Gateway Outage',
        slaLabel: '🚨 P1 CRITICAL • 15m SLA',
        slaClass: 'tag-p1',
        sentiment: 'Critical Distress (-0.92)',
        sentimentClass: 'val-negative',
        sentimentSub: 'Urgency Multiplier: High',
        category: 'Payment & Billing Gateway',
        subcategory: 'Sub-intent: Stripe Webhook 500 Failure',
        churn: '94% High Churn Risk',
        churnSub: 'Retention Strategy Triggered',
        routing: 'DevOps On-Call + Lead AE',
        channel: '#prod-incidents-p1 & Jira INC'
      },
      replyMeta: 'Calibrated Tone: Empathetic, Authoritative, Urgent • Formatted for Zendesk / Email',
      replyContent: `Dear Alex,

Thank you for alerting us immediately. I completely understand how critical this anniversary sale is for Acme Global, and I am treating this payment gateway issue as our highest priority incident (Incident Key: **INC-9042**).

Our senior infrastructure engineers have been paged into an active war room to diagnose the Stripe webhook 500 response codes. We have also placed a temporary retry buffer on incoming checkout payloads to prevent transaction drops.

Here is your immediate operational update:
• **Assigned Incident Commander:** Dev Lead (PagerDuty ID: #4491)
• **SLA Target:** Preliminary root-cause update within 15 minutes (by 21:20 UTC)
• **Live War Room Status:** https://status.diazmj.com/incidents/INC-9042
• **Direct Escalation:** I have also notified your dedicated account executive (Sarah Lin) so we can monitor checkout telemetry together.

We will provide another update the second the webhook handler is stabilized. You have our full commitment to restoring 100% throughput immediately.

Sincerely,
Michael Jay Diaz — Executive Support & Infrastructure Ops
AutoResolve AI Enterprise Incident Response`,
      slack: {
        channel: 'prod-incidents-p1',
        title: '🚨 P1 INCIDENT DETECTED: Stripe 500 Webhook Failure During Flash Sale',
        desc: 'Customer **Alex Rivera (Acme Global E-Commerce)** reports checkout 500 errors for 18m. High churn risk ($48,000 ARR). Enterprise Platinum 15m SLA initiated.',
        severity: 'P1 - CRITICAL',
        deadline: '15 Minutes (21:20 UTC)',
        assigned: '@oncall-devops @sarah-ae',
        jiraRef: 'INC-9042'
      },
      jira: {
        key: 'INC-9042',
        summary: 'Stripe 500 Webhook Failure During Flash Sale',
        priority: 'Highest (P1)',
        components: 'Payment-Gateway, Webhook-Ingress',
        assignee: 'DevOps On-Call Team',
        customer: 'Acme Global E-Commerce'
      }
    },

    billing_dispute: {
      ticketId: 'TICK-2026-9043',
      customer: 'Elena Rostova (Apex SaaS Solutions)',
      tier: 'growth',
      channel: 'email',
      subject: 'Inquiry: Unrecognized duplicate seat renewal charge on Amex statement',
      body: `Hello, we noticed an unexpected second invoice of $3,450 charged to our corporate Amex on Sept 25th for 25 additional seat licenses. We previously downsized our engineering team last month and confirmed our seat count at 40 seats. Could you please audit our billing history and issue an immediate refund for the extra charge before our fiscal month closes this Friday? Thank you.`,
      classification: {
        headline: 'P2 Billing Escalation: Duplicate Annual Renewal Audit',
        slaLabel: '⚠️ P2 HIGH • 2h SLA',
        slaClass: 'tag-p2',
        sentiment: 'Concerned / Dispute Alert (-0.58)',
        sentimentClass: 'val-risk',
        sentimentSub: 'Financial Audit Required',
        category: 'Billing & Subscriptions',
        subcategory: 'Sub-intent: Seat Downsizing & Refund Approval',
        churn: '42% Moderate Churn Risk',
        churnSub: 'Contract Review Triggered',
        routing: 'Billing Ops Lead (@billing-ops)',
        channel: '#billing-escalations & Jira FIN'
      },
      replyMeta: 'Calibrated Tone: Professional, Transparent, Accountable • Formatted for Financial Inquiries',
      replyContent: `Hi Elena,

Thank you for contacting us regarding your September 25th seat renewal invoice. I reviewed your account telemetry, and you are completely correct: your downsized seat allocation of 40 seats had been confirmed on August 28th, but our automated billing sync had an overlapping prorated seat true-up token.

I have already taken the following immediate steps for Apex SaaS Solutions:
1. **Full Refund Issued:** Refund of **$3,450.00 USD** back to your corporate American Express ending in 4018 (Reference: **TXN-REF-88219**).
2. **Bank Clearing Timeline:** Funds will reflect in your account within 2 to 3 business days, well ahead of your month-end financial close.
3. **Corrected Seat Counter:** Locked your billing profile strictly to 40 seats to prevent future automated true-up sweeps.

Attached is your revised zero-balance credit memo for your accounting archives. Please feel free to reply directly to me if you require any further documentation.

Best regards,
Michael Jay Diaz — Head of Customer Operations
AutoResolve AI Enterprise Suite`,
      slack: {
        channel: 'billing-escalations',
        title: '⚠️ P2 BILLING AUDIT: Duplicate Seat Charge ($3,450) Flagged',
        desc: 'Customer **Elena Rostova (Apex SaaS Solutions)** flagged duplicate annual seat true-up. Verified downsizing record in CRM.',
        severity: 'P2 - HIGH',
        deadline: '2 Hours (23:45 UTC)',
        assigned: '@billing-ops @finance-lead',
        jiraRef: 'FIN-4402'
      },
      jira: {
        key: 'FIN-4402',
        summary: 'Seat Downsizing Billing Reconciliation - Apex SaaS',
        priority: 'High (P2)',
        components: 'Stripe-Billing, Seat-Counter-Sync',
        assignee: 'Finance & Billing Operations',
        customer: 'Apex SaaS Solutions'
      }
    },

    sso_failure: {
      ticketId: 'TICK-2026-9044',
      customer: 'Marcus Vance (Beacon Healthcare Network)',
      tier: 'enterprise_gold',
      channel: 'intercom',
      subject: 'Critical: Okta SAML 2.0 SSO Certificate Mismatch - 400 clinicians locked out',
      body: `URGENT: All clinical staff across our 4 regional hospitals are currently receiving 'Error 400: SAML Response Signature Invalid' when authenticating through our Okta portal into your patient management platform. It appears our IT team rotated our X.509 certificate early this morning and the new IdP metadata XML needs to be verified on your identity provider end. 400 staff members cannot access schedules right now.`,
      classification: {
        headline: 'P2 High Incident: Okta SAML 2.0 IdP Certificate Rotation',
        slaLabel: '⚠️ P2 HIGH • 1h SLA',
        slaClass: 'tag-p2',
        sentiment: 'High Operational Strain (-0.81)',
        sentimentClass: 'val-negative',
        sentimentSub: 'Clinical Operations Impact',
        category: 'Identity & Access Management (IAM)',
        subcategory: 'Sub-intent: SAML X.509 Certificate Mismatch',
        churn: '78% High Operational Risk',
        churnSub: 'Healthcare Enterprise SLA',
        routing: 'Identity & Security Engineering',
        channel: '#iam-sec-bridge & Jira SEC'
      },
      replyMeta: 'Calibrated Tone: Technical Precision, Immediate Resolution Guide • Formatted for IT Directors',
      replyContent: `Hello Marcus,

Thank you for reporting this immediately. We have identified the SAML signature discrepancy: when your Okta tenant rotated its X.509 signing certificate this morning, our SP endpoint was still verifying against the previous SHA-256 fingerprint.

We have applied the following resolution:
1. **Updated IdP Metadata:** Our Identity Provider engine has ingested your latest Beacon Healthcare metadata XML (Fingerprint: 4A:9B:F3:...:82).
2. **Emergency Direct Bypass:** We have enabled an emergency 2-hour dual-certificate validation mode so both legacy and newly rotated cert tokens are accepted without session dropping.
3. **Status:** All 400 clinician Okta SSO logins are now functional and authenticating in < 180ms.

Please test one clinical workstation login at your earliest convenience and confirm. Our Security On-Call engineer is remaining on this thread until you give the all-clear.

Warm regards,
Michael Jay Diaz — Lead Systems Architect & InfoSec
AutoResolve AI Enterprise Suite`,
      slack: {
        channel: 'iam-sec-bridge',
        title: '⚠️ P2 SECURITY INCIDENT: Okta SAML Certificate Mismatch',
        desc: 'Customer **Marcus Vance (Beacon Healthcare)**: 400 clinical staff SSO failure. Dual-cert validation mode engaged.',
        severity: 'P2 - HIGH',
        deadline: '1 Hour (22:45 UTC)',
        assigned: '@security-team @iam-dev',
        jiraRef: 'SEC-8911'
      },
      jira: {
        key: 'SEC-8911',
        summary: 'Okta SAML 2.0 X.509 Signing Cert Ingestion - Beacon Healthcare',
        priority: 'High (P2)',
        components: 'IAM-Service, SAML-Auth-Provider',
        assignee: 'InfoSec & Identity Team',
        customer: 'Beacon Healthcare Network'
      }
    },

    feature_request: {
      ticketId: 'TICK-2026-9045',
      customer: 'Chloe Chen (DesignFlow Collective)',
      tier: 'standard',
      channel: 'email',
      subject: 'Feature Request: Native Dark Mode & Bi-directional Notion workspace sync',
      body: `Hey team! Absolutely loving the platform for our design studio. One question: do you have native dark mode support on your roadmap, and is there any plan to support bi-directional syncing with Notion databases? Our team uses Notion for task management and it would save us 30 minutes a day if updates synced automatically. Thanks for building such an awesome tool!`,
      classification: {
        headline: 'P4 Feature Feedback: Notion Sync & Dark Mode Inquiry',
        slaLabel: '🌱 P4 LOW • 24h SLA',
        slaClass: 'tag-p4',
        sentiment: 'Delighted & Constructive (+0.88)',
        sentimentClass: 'val-team',
        sentimentSub: 'Product Expansion Signal',
        category: 'Product & Integrations',
        subcategory: 'Sub-intent: Notion API & Dark Theme UI',
        churn: '3% Very Low Churn Risk',
        churnSub: 'NPS Promoter Candidate',
        routing: 'Product Ops & Developer Relations',
        channel: '#product-feedback & Jira PROD'
      },
      replyMeta: 'Calibrated Tone: Warm, Enthusiastic, Informative • Formatted for Community & Product Relations',
      replyContent: `Hi Chloe!

Thank you so much for the kind words and awesome feedback! The team was thrilled to hear how much DesignFlow Collective is enjoying the workspace.

Here is the inside scoop on both items you asked about:
1. **Native Dark Mode:** Great news — our obsidian dark theme is already in private beta! I have just added your account to the early access cohort. You can toggle it today in **Settings → Appearance → Dark Theme (Beta)**.
2. **Notion Bi-Directional Sync:** We are currently in sprint with the official Notion API integration (slated for our Q4 release). Because your studio relies on it so heavily, I’ve flagged your email for our Alpha testers group so you can test the sync before public rollout.

You can also track our public roadmap and upvote upcoming integrations directly at https://roadmap.diazmj.com.

Thanks again for helping us make the product better!

Warmly,
Michael Jay Diaz — Product Lead & Engineering Strategy
AutoResolve AI Enterprise Suite`,
      slack: {
        channel: 'product-feedback',
        title: '🌱 PRODUCT FEEDBACK: Notion Bi-Directional Sync Request',
        desc: 'Customer **Chloe Chen (DesignFlow Collective)** requested Notion DB sync + dark mode. Enrolled in Alpha tester program.',
        severity: 'P4 - LOW',
        deadline: '24 Hours (Next Day)',
        assigned: '@product-ops @devrel',
        jiraRef: 'PROD-318'
      },
      jira: {
        key: 'PROD-318',
        summary: 'Notion Bi-Directional Database Sync Feature Request',
        priority: 'Low (P4)',
        components: 'Integrations-API, UI-Theme',
        assignee: 'Product Operations Team',
        customer: 'DesignFlow Collective'
      }
    }
  };

  // Character counter for textarea
  ticketBodyInput.addEventListener('input', () => {
    bodyCharCount.textContent = ticketBodyInput.value.length;
  });

  // Preset Selection
  presetCards.forEach(card => {
    card.addEventListener('click', () => {
      presetCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const presetKey = card.getAttribute('data-preset');
      const data = PRESETS[presetKey];
      if (!data) return;

      // Populate Inputs
      ticketIdInput.value = data.ticketId;
      customerNameInput.value = data.customer;
      accountTierSelect.value = data.tier;
      inboundChannelSelect.value = data.channel;
      ticketSubjectInput.value = data.subject;
      ticketBodyInput.value = data.body;
      bodyCharCount.textContent = data.body.length;

      // Trigger Automated Triage Pipeline
      executeTriagePipeline(data);
    });
  });

  // Run Triage Button
  btnRunTriage.addEventListener('click', () => {
    const customData = gatherFormCustomData();
    executeTriagePipeline(customData);
  });

  // Reset Form
  btnResetForm.addEventListener('click', () => {
    ticketIdInput.value = `TICK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    customerNameInput.value = '';
    ticketSubjectInput.value = '';
    ticketBodyInput.value = '';
    bodyCharCount.textContent = '0';
    presetCards.forEach(c => c.classList.remove('active'));
    showToast('Form cleared. Type any customer ticket to test!');
  });

  // Tab Navigation for Webhook Outbound
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const tabKey = btn.getAttribute('data-tab');
      const pane = document.getElementById(`tab-${tabKey}`);
      if (pane) pane.classList.add('active');
    });
  });

  // Copy Drafted Reply
  btnCopyReply.addEventListener('click', () => {
    const textToCopy = resContent.innerText || resContent.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      copyReplyText.textContent = 'Copied!';
      showToast('Drafted customer reply copied to clipboard!');
      setTimeout(() => {
        copyReplyText.textContent = 'Copy Reply';
      }, 2000);
    });
  });

  // Copy JSON Payload
  btnCopyJson.addEventListener('click', () => {
    const jsonBlock = document.getElementById('raw-json-output');
    navigator.clipboard.writeText(jsonBlock.textContent).then(() => {
      btnCopyJson.textContent = 'Copied!';
      showToast('Simulated Webhook JSON payload copied!');
      setTimeout(() => {
        btnCopyJson.textContent = 'Copy JSON';
      }, 2000);
    });
  });

  /**
   * Helper: Gather and dynamically classify user-typed data
   */
  function gatherFormCustomData() {
    const body = ticketBodyInput.value.trim();
    const subject = ticketSubjectInput.value.trim();
    const fullText = (subject + ' ' + body).toLowerCase();
    const tier = accountTierSelect.value;
    const customer = customerNameInput.value.trim() || 'Valued Client';
    const ticketId = ticketIdInput.value || `TICK-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    // Simple rule-based sentiment & urgency scoring for custom inputs
    const isCritical = fullText.includes('outage') || fullText.includes('down') || fullText.includes('500') || fullText.includes('lost') || fullText.includes('critical') || fullText.includes('emergency') || fullText.includes('dispute') || fullText.includes('lawyer');
    const isBilling = fullText.includes('charge') || fullText.includes('invoice') || fullText.includes('refund') || fullText.includes('money') || fullText.includes('stripe') || fullText.includes('seat');
    const isAuth = fullText.includes('okta') || fullText.includes('saml') || fullText.includes('sso') || fullText.includes('login') || fullText.includes('password') || fullText.includes('locked');

    let priority = isCritical ? 'P1 - CRITICAL' : (isBilling || isAuth ? 'P2 - HIGH' : 'P3 - MEDIUM');
    let slaLabel = isCritical ? '🚨 P1 CRITICAL • 15m SLA' : (isBilling || isAuth ? '⚠️ P2 HIGH • 2h SLA' : '⚡ P3 NORMAL • 8h SLA');
    let slaClass = isCritical ? 'tag-p1' : (isBilling || isAuth ? 'tag-p2' : 'tag-p4');
    let sentiment = isCritical ? 'Critical Distress (-0.88)' : (isBilling ? 'Concerned / Dispute Alert (-0.55)' : 'Inquiry / Cooperative (+0.42)');
    let sentimentClass = isCritical ? 'val-negative' : (isBilling ? 'val-risk' : 'val-team');
    let category = isBilling ? 'Payment & Invoicing' : (isAuth ? 'IAM & Access Security' : 'Customer Operations & Technical');
    let subcategory = isBilling ? 'Billing Policy & Reconciliation' : (isAuth ? 'SSO Token Verification' : 'General Technical Inquiry');
    let churn = isCritical ? '88% High Churn Risk' : (isBilling ? '45% Moderate Churn Risk' : '12% Low Risk');
    let routing = isCritical ? 'DevOps On-Call + Lead AE' : (isBilling ? 'Billing Operations Lead' : 'Tier-1 Technical Support');
    let channel = isCritical ? '#prod-incidents-p1' : (isBilling ? '#billing-escalations' : '#customer-support');

    return {
      ticketId,
      customer,
      tier,
      subject,
      body,
      classification: {
        headline: `${priority.split(' ')[0]} Automated Triage: ${subject.slice(0, 45)}...`,
        slaLabel,
        slaClass,
        sentiment,
        sentimentClass,
        sentimentSub: 'NLP Confidence Score: 98.4%',
        category,
        subcategory,
        churn,
        churnSub: 'Automated Retention Guard',
        routing,
        channel: `${channel} & Jira TICKET`
      },
      replyMeta: 'Calibrated Tone: Empathetic, Solution-Oriented • AutoResolve AI Pipeline',
      replyContent: `Hello ${customer},

Thank you for contacting our executive support team. We have received your inquiry regarding "${subject}" and assigned it ticket reference ${ticketId}.

Our automated intelligence system has flagged this request for priority review with our ${routing}. We are actively analyzing your telemetry and logs.

Summary of next operational steps:
• **Current Status:** In Review with Priority Routing
• **Target SLA Response:** Under ${isCritical ? '15 minutes' : '2 hours'}
• **Dedicated Support Engineer:** Assigned and monitoring live queue

We will follow up with direct resolution details shortly. If you have any additional diagnostic files or details, please reply directly to this thread.

Warm regards,
Michael Jay Diaz — Executive Support Engineering
AutoResolve AI Enterprise Incident Response`,
      slack: {
        channel: channel.replace('#', ''),
        title: `${priority}: ${subject.slice(0, 55)}`,
        desc: `Customer **${customer}** submitted priority request: "${body.slice(0, 110)}..."`,
        severity: priority,
        deadline: isCritical ? '15 Minutes' : '2 Hours',
        assigned: routing,
        jiraRef: ticketId.replace('TICK', 'INC')
      },
      jira: {
        key: ticketId.replace('TICK', 'INC'),
        summary: subject,
        priority: isCritical ? 'Highest (P1)' : 'High (P2)',
        components: category,
        assignee: routing,
        customer
      }
    };
  }

  /**
   * Execute visual 5-stage automated triage pipeline
   */
  function executeTriagePipeline(data) {
    btnRunTriage.disabled = true;
    btnRunText.textContent = 'Executing AI Triage Pipeline...';

    // Reset stepper
    stepItems.forEach(item => {
      item.classList.remove('step-done', 'step-running');
    });
    stepLines.forEach(line => line.classList.remove('active'));

    // Stage 1: Ingestion
    activateStep(1);

    setTimeout(() => {
      // Stage 2: Sentiment
      completeStep(1);
      activateStep(2);

      setTimeout(() => {
        // Stage 3: Policy
        completeStep(2);
        activateStep(3);

        setTimeout(() => {
          // Stage 4: Auto-Reply
          completeStep(3);
          activateStep(4);

          setTimeout(() => {
            // Stage 5: Webhooks & Finish
            completeStep(4);
            completeStep(5);

            renderTriageResults(data);

            btnRunTriage.disabled = false;
            btnRunText.textContent = 'Run Autonomous Triage & Routing';

            // Increment stat counter
            triagedCounter++;
            statTriaged.textContent = triagedCounter.toLocaleString();

            showToast(`Triage complete: Dispatched to Slack (#${data.slack.channel}) and Jira (${data.jira.key})!`);
          }, 350);
        }, 350);
      }, 350);
    }, 350);
  }

  function activateStep(num) {
    const item = document.querySelector(`.step-item[data-step="${num}"]`);
    if (item) item.classList.add('step-running');
  }

  function completeStep(num) {
    const item = document.querySelector(`.step-item[data-step="${num}"]`);
    if (item) {
      item.classList.remove('step-running');
      item.classList.add('step-done');
    }
    const line = stepLines[num - 1];
    if (line) line.classList.add('active');
  }

  /**
   * Render updated classification, reply, and outbound mockups
   */
  function renderTriageResults(data) {
    const c = data.classification;

    // Headline & Badges
    triageHeadline.textContent = c.headline;
    slaBadgeText.textContent = c.slaLabel;
    slaBadge.className = `matrix-sla-badge ${c.slaClass}`;

    // Metrics Grid
    valSentiment.textContent = c.sentiment;
    valSentiment.className = `m-val ${c.sentimentClass}`;
    valCategory.textContent = c.category;
    valSubcategory.textContent = c.subcategory;
    valChurn.textContent = c.churn;
    valRouting.textContent = c.routing;
    valChannel.textContent = c.channel;

    // Response Box
    resMeta.textContent = data.replyMeta;
    resContent.textContent = data.replyContent;

    // Slack Mockup
    document.getElementById('slack-channel').textContent = data.slack.channel;
    document.getElementById('slack-att-title').textContent = data.slack.title;
    document.getElementById('slack-att-desc').innerHTML = data.slack.desc;
    document.getElementById('slack-fields').innerHTML = `
      <div class="slack-f-item">
        <span class="f-lbl">Severity:</span>
        <span class="f-val ${data.slack.severity.includes('P1') ? 'text-red' : 'text-cyan'}">${data.slack.severity}</span>
      </div>
      <div class="slack-f-item">
        <span class="f-lbl">SLA Deadline:</span>
        <span class="f-val">${data.slack.deadline}</span>
      </div>
      <div class="slack-f-item">
        <span class="f-lbl">Assigned:</span>
        <span class="f-val">${data.slack.assigned}</span>
      </div>
      <div class="slack-f-item">
        <span class="f-lbl">Jira Reference:</span>
        <span class="f-val text-cyan">${data.slack.jiraRef}</span>
      </div>
    `;

    // Jira Mockup
    document.getElementById('jira-key').textContent = data.jira.key;
    document.getElementById('jira-summary').textContent = data.jira.summary;
    document.getElementById('jira-priority').textContent = data.jira.priority;
    document.getElementById('jira-component').textContent = data.jira.components;
    document.getElementById('jira-assignee').textContent = data.jira.assignee;
    document.getElementById('jira-customer').textContent = data.jira.customer;

    // Raw JSON Payload
    const jsonPayload = {
      event: 'autoresolve.ticket.triaged',
      ticket_id: data.ticketId,
      timestamp: new Date().toISOString(),
      sla_tier: data.tier,
      classification: {
        priority: c.slaLabel.split(' ')[1] || 'P1_CRITICAL',
        category: c.category.toUpperCase().replace(/\s+/g, '_'),
        sub_category: c.subcategory.toUpperCase().replace(/\s+/g, '_'),
        sentiment_score: c.sentiment,
        churn_risk_flag: c.churn,
        routing_destination: c.routing
      },
      escalation_targets: {
        slack_channel: `#${data.slack.channel}`,
        jira_issue_key: data.jira.key,
        auto_response_generated: true
      },
      customer: {
        identifier: data.customer
      }
    };
    document.getElementById('raw-json-output').textContent = JSON.stringify(jsonPayload, null, 2);
  }

  function showToast(msg) {
    toastText.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Initialize with default P1 Critical scenario
  executeTriagePipeline(PRESETS.payment_outage);
});
