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

  // --------------------------------------------------------------------------
  // Intelligent Project Scoping & Conversational Engine
  // --------------------------------------------------------------------------
  function generateProjectResponse(query) {
    const q = query.trim().toLowerCase();

    // 1. E-COMMERCE & ONLINE STORES
    if (/e-?commerce|online store|shop|storefront|cart|selling online|shopify|products catalog/i.test(q)) {
      return {
        reasoning: `Analyzing requirement: E-Commerce Web Application\nDetecting sub-modules: Storefront Catalog, Cart State, Stripe Checkout, Merchant Admin\nCalculating sprint timeline with Human+AI velocity...`,
        response: `### 🛒 E-Commerce Website & Online Store
        
Building a modern, high-converting **E-Commerce Platform** typically takes **4 to 6 business days** from kickoff to live deployment.

**📅 Estimated Sprint Milestones**:
- **Days 1–2 (Storefront & Product Catalog)**: Responsive product grid, category filtering, search, and dynamic inventory database.
- **Days 3–4 (Cart & Secure Checkout)**: Persistent cart state, Stripe / LemonSqueezy payment gateway, coupon codes, and automated customer order confirmations.
- **Days 5–6 (Merchant Dashboard & Fulfillment)**: Custom admin portal for tracking orders, managing product stock, updating shipping statuses, and customer accounts.
- **Final Launch**: Domain configuration, SSL, payment webhook verification, and live testing.

**⚡ Key Tech**: React / Next.js, Stripe API, Supabase / PostgreSQL, Tailwind & Glassmorphism.

*Ready to start selling? Send your product details to Michael at **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 2. FULL-STACK SAAS & WEB APPS
    if (/saas|web app|webapp|portal|membership|dashboard|client portal|mvp/i.test(q)) {
      return {
        reasoning: `Analyzing requirement: Full-Stack SaaS MVP\nDetecting sub-modules: User Auth, Relational Database, Subscription Billing, Analytics Dashboard\nCalculating agile delivery sprint...`,
        response: `### 💻 Full-Stack SaaS MVP
        
Architecting and deploying a production-ready **SaaS MVP** typically takes **3 to 5 business days**.

**📅 Estimated Sprint Milestones**:
- **Days 1–2 (Architecture, Auth & Database)**: Supabase / PostgreSQL schema with Row-Level Security (RLS), email/OAuth login, and user roles.
- **Days 3–4 (Core Product Features & UI)**: Interactive dashboard, real-time analytics graphs, responsive mobile/desktop UI, and CRUD business logic.
- **Day 5 (Billing, Automated Webhooks & QA)**: Stripe subscription tiers, customer self-service billing portal, unit testing, and cloud deployment.

**⚡ Key Tech**: React 18, Python FastAPI / Node.js, PostgreSQL, Stripe, Vercel / Railway.

*Have a SaaS concept? Let's turn it into a live product: **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 3. WORKFLOW AUTOMATIONS, OCR & BOTS
    if (/automation|automate|ocr|invoice|receipt|webhook|crm|slack|bot|scraper|scrape|sheets|zapier|make/i.test(q)) {
      return {
        reasoning: `Analyzing requirement: Custom Workflow Automation\nDetecting integrations: Webhooks, AI OCR Parsing, Database Sync, Notification Engine\nCalculating automation pipeline timeline...`,
        response: `### ⚡ Custom Workflow & Operations Automation
        
Creating an end-to-end **Automated Workflow Pipeline** typically takes **1 to 3 business days**.

**📅 Estimated Sprint Milestones**:
- **Day 1 (Data Ingestion & Extraction)**: Webhook endpoints, email listeners, or scrapers paired with Gemini 3.8 Flash OCR to extract structured JSON data.
- **Day 2 (Business Logic & CRM Sync)**: Data validation rules, duplicate detection, and automated synchronization with PostgreSQL, HubSpot, Airtable, or Google Sheets.
- **Day 3 (Alerts & Resilience)**: Multi-channel notifications via Slack / WhatsApp with interactive action buttons, retry mechanisms, and error logging.

**⚡ Key Tech**: Python, Gemini 3.8 Flash, REST APIs, Webhooks, Docker, Cloud Cron.

*Want to eliminate repetitive manual work? Reach out at **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 4. GENERATIVE MEDIA & ASSET PIPELINES
    if (/image|media|generative|visual|comfyui|stable diffusion|midjourney|brand asset|graphic|creative|photorealistic|model|portrait|product ad|business ad/i.test(q)) {
      return {
        reasoning: `Analyzing requirement: Generative Media & Commercial Visual Studio\nDetecting modules: Editorial Fashion Modeling, Executive Branding Portraits, Commercial Product Photography, Luxury Spaces\nCalculating commercial synthesis pipeline...`,
        response: `### 📸 Commercial AI Visual Production & Generative Studio
        
Producing a comprehensive package of **Photorealistic Commercial Visuals** (for editorial modeling, executive branding, e-commerce product ads, or luxury hospitality) typically takes **2 to 3 business days**.

**📅 Estimated Sprint Milestones**:
- **Day 1 (Prompt Matrix & Lighting Setup)**: Calibrating photorealistic textures (authentic skin pores, micro-lighting, studio rim lights, macro product depth of field).
- **Day 2 (Multi-Angle Batch Synthesis)**: Generating 30+ campaign variations across multi-channel ratios (1:1 feed, 9:16 mobile ads, 16:9 hero banners).
- **Day 3 (Color Grading & 4K Master Delivery)**: Color calibration for brand hex fidelity, 4K upscaling, and direct commercial delivery.

**⚡ Key Tech**: Midjourney Studio, Stable Diffusion / ComfyUI, Python Pillow, 4K Real-ESRGAN.

*Explore the live interactive sample carousel right above, or email **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 4B. AI SEO / GEO / AEO SEARCH ENGINE OPTIMIZATION
    if (/geo|aeo|ai seo|seo|search optimization|perplexity|chatgpt search|google ai|citations|answer engine/i.test(q)) {
      return {
        reasoning: `Analyzing requirement: AI SEO, Generative Engine Optimization (GEO) & AEO\nDetecting modules: Schema.org Entity Graph, AEO Answer Nodes, LLM Citation Monitoring\nCalculating search sprint timeline...`,
        response: `### 🌐 AI SEO, GEO & Answer Engine Optimization (AEO)
        
Deploying a complete **Generative Engine Optimization (GEO / AEO) Sprint** typically takes **2 to 3 business days**.

**📅 Estimated Sprint Milestones**:
- **Day 1 (Entity Audit & Competitive Citation Mapping)**: Auditing how your brand is cited inside ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews vs top competitors.
- **Day 2 (Schema & Direct-Answer Node Engineering)**: Deploying rich JSON-LD semantic entity graphs and formatting high-authority FAQ direct-answer blocks that LLMs cite as truth.
- **Day 3 (Citation Graph & Monitoring Setup)**: Establishing authority backlinks, submitting search index feeds, and setting up automated 30-day LLM citation tracking.

**⚡ Deliverables**: 4x LLM citation share, structured entity schemas, conversational search dominance.

*Ready to dominate AI search? Contact Michael at **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 4C. AI EXECUTIVE GHOSTWRITING & THOUGHT LEADERSHIP
    if (/ghostwrit|executive writing|thought leadership|founder post|linkedin essay|substack|op-ed|founder voice|newsletter/i.test(q)) {
      return {
        reasoning: `Analyzing requirement: AI Executive Ghostwriting & Thought Leadership\nDetecting modules: Founder Voice Profiling, LinkedIn Viral Framing, Substack Op-Eds\nCalculating editorial velocity...`,
        response: `### ✍️ AI Executive Ghostwriting & Thought Leadership Pipeline
        
Building your personalized **Executive Ghostwriting Pipeline** and delivering the initial high-authority editorial batch takes **2 to 3 business days**.

**📅 Estimated Sprint Milestones**:
- **Day 1 (Executive Voice Fingerprinting)**: Analyzing your past writing, voice memos, and core perspectives to calibrate tone, cadence, and contrarian thesis angles.
- **Day 2 (Sprint Content Production)**: Synthesizing 10x viral-hooked LinkedIn B2B essays and 2x long-form Substack / Forbes-caliber industry opinion editorials.
- **Day 3 (Multi-Format Adaptation & Calendar)**: Converting essays into X/Twitter threads, quotation cards, and a structured 30-day automated publishing schedule.

**⚡ Result**: 100% authentic founder voice match with 12x content velocity.

*Ready to turn your insights into authority? Email Michael at **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 5. MOBILE APPS & CROSS-PLATFORM
    if (/mobile|ios|android|phone app|react native|flutter|pwa/i.test(q)) {
      return {
        reasoning: `Analyzing requirement: Mobile / PWA Application\nDetecting modules: Responsive Shell, Offline Storage, Push Alerts, Native Device APIs\nCalculating mobile sprint...`,
        response: `### 📱 Mobile / Progressive Web App (PWA)
        
Building a fast, installable **Mobile Application or PWA** typically takes **5 to 8 business days**.

**📅 Estimated Sprint Milestones**:
- **Days 1–3 (App Shell & Navigation)**: Touch-optimized UI, fluid navigation gestures, bottom tab bars, and user profile management.
- **Days 4–6 (Core Mobile Features)**: Camera / file uploads, push notifications, offline caching, and responsive backend API synchronization.
- **Days 7–8 (Testing & App Store Ready)**: Cross-device testing on iOS & Android viewports, performance audits, and PWA manifest generation.

*Have a mobile concept? Let's discuss scope at **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 6. LANDING PAGES & CORPORATE WEBSITES
    if (/landing|landing page|website|portfolio|redesign|homepage|one page/i.test(q)) {
      return {
        reasoning: `Analyzing requirement: High-Converting Landing Page\nDetecting modules: Modern Glassmorphic Design, Interactive Micro-Animations, Form Ingestion, SEO\nCalculating frontend sprint...`,
        response: `### 🌐 High-Converting Landing Page & Website
        
Designing, developing, and launching a bespoke **Landing Page** typically takes **1 to 2 business days**.

**📅 Estimated Sprint Milestones**:
- **Day 1 (Visual Architecture & Layout)**: Ultra-modern dark glassmorphism, responsive mobile-first typography, hero animations, and feature showcases.
- **Day 2 (Interactivity, SEO & Launch)**: Lead capture forms, custom interactive calculators/widgets, 98+ Google Lighthouse optimization, and custom domain deployment.

*Ready for a stunning web presence? Contact Michael at **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 7. PRICING & RATES INQUIRIES
    if (/cost|price|pricing|rate|how much|quote|budget|estimate fee/i.test(q)) {
      return {
        reasoning: `Analyzing inquiry: Pricing Structure & Rates\nRetrieving sprint pricing guidelines...`,
        response: `### 💰 Project Pricing & Sprint Structure
        
Because we eliminate agency bloat and leverage AI-accelerated workflows, our turnaround times and rates are significantly more competitive than traditional agencies:

- **Quick Automations & Bots**: Typically **$500 – $1,200** (1–3 days delivery)
- **High-Converting Landing Pages**: Typically **$800 – $1,500** (1–2 days delivery)
- **Full-Stack SaaS MVPs & E-Commerce Stores**: Typically **$2,000 – $4,500** (3–6 days delivery)

Every project includes clean source code ownership, production cloud deployment, and **30 days of post-launch bug warranty**.

*Want an exact, fixed-price quote? Email Michael directly with your project brief at **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 8. TECH STACK & TOOLS INQUIRIES
    if (/tech stack|technologies|what tools|framework|languages|stack|what do you use/i.test(q)) {
      return {
        reasoning: `Analyzing inquiry: Technical Stack & Architecture\nSynthesizing engineering toolkit...`,
        response: `### 🛠️ Michael's Core Development Stack
        
We use a high-performance, modern toolkit optimized for speed, reliability, and scalability:

- **Frontend**: React 18, Next.js, HTML5/CSS3 Vanilla, Tailwind, Glassmorphism, Framer Motion
- **Backend & APIs**: Python FastAPI, Node.js / Express, REST & GraphQL, Webhooks
- **Databases & Auth**: Supabase, PostgreSQL, Firebase, Redis, Prisma
- **Payments & Cloud**: Stripe API, Vercel, Railway, Docker, AWS S3
- **AI & Automation**: Antigravity IDE, Claude Fable 5.1, Gemini 3.8 Flash, ComfyUI, Stable Diffusion

*Need a specific tech stack not listed? We adapt quickly: **michaeljayo.diaz@gmail.com**.*`
      };
    }

    // 9. GREETINGS & INTRODUCTIONS
    if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|who are you|what can you do)/i.test(q)) {
      return {
        reasoning: `Analyzing inquiry: Conversational Greeting\nFormulating introduction to Michael's studio capabilities...`,
        response: `### 👋 Hello! I'm Michael's AI Project Estimator
        
I'm here to help you scope your project and provide accurate delivery timelines. 

**I can estimate timelines for**:
- 🛒 **E-Commerce Stores** (Product catalogs, cart, Stripe checkout)
- 💻 **Full-Stack SaaS MVPs** (Auth, databases, billing, user dashboards)
- ⚡ **Workflow Automations** (API integrations, invoice OCR, CRM syncing)
- 🎨 **Generative AI Studios** (Image generation, branding assets, ComfyUI pipelines)
- 🌐 **Modern Landing Pages & Web Apps**

What type of project are you thinking about building? Describe your idea and I'll break it down for you!`
      };
    }

    // 10. DYNAMIC CONTEXTUAL ESTIMATOR (For any arbitrary or novel project pitch)
    let estimatedDaysMin = 2;
    let estimatedDaysMax = 4;
    let detectedFeatures = [];

    if (/auth|login|user|signup|account|profile/i.test(q)) {
      estimatedDaysMin += 1;
      estimatedDaysMax += 1;
      detectedFeatures.push("User Authentication & Access Control");
    }
    if (/stripe|payment|billing|checkout|subscription|pay/i.test(q)) {
      estimatedDaysMin += 1;
      estimatedDaysMax += 1;
      detectedFeatures.push("Secure Payment Gateway & Webhook Ingestion");
    }
    if (/api|webhook|sync|connect|database|sql|postgres|supabase/i.test(q)) {
      estimatedDaysMin += 1;
      estimatedDaysMax += 1;
      detectedFeatures.push("Database Modeling & API Integrations");
    }
    if (/ai|llm|chat|agent|ocr|vision|gpt|model/i.test(q)) {
      estimatedDaysMin += 1;
      estimatedDaysMax += 2;
      detectedFeatures.push("Intelligent AI / LLM Feature Integration");
    }
    if (/admin|dashboard|analytics|reporting|table|chart/i.test(q)) {
      estimatedDaysMin += 1;
      estimatedDaysMax += 1;
      detectedFeatures.push("Custom Admin Dashboard & Visual Analytics");
    }

    if (detectedFeatures.length === 0) {
      detectedFeatures.push("Custom Application Logic & Data Flow", "Responsive Modern UI & Mobile Optimization", "Cloud Deployment & QA Testing");
    }

    return {
      reasoning: `Analyzing custom project requirements: "${escapeHtml(query.slice(0, 60))}"\nIdentified Components: [${detectedFeatures.join(', ')}]\nCalculating delivery sprint...`,
      response: `### 📋 Project Scope & Timeline Estimate
      
For your project requirements, estimated delivery is **${estimatedDaysMin} to ${estimatedDaysMax} business days** from design kickoff to deployment.

**🛠️ Identified Technical Modules**:
${detectedFeatures.map(f => `- **${f}**`).join('\n')}

**📅 Execution Milestones**:
- **Milestone 1 (Foundations)**: Technical architecture, database schemas, and wireframe approval.
- **Milestone 2 (Development)**: Fast-paced feature buildout, component styling, and third-party integrations.
- **Milestone 3 (Verification & Launch)**: End-to-end automated testing, security checks, and live cloud deployment.

*Let's build this together! Send your project details to Michael at **michaeljayo.diaz@gmail.com**.*`
    };
  }

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
          Sprint Calculation Trace
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

  async function handlePartnerQuery(queryText) {
    if (!queryText.trim()) return;

    // Show initial loading / thinking bubble
    const userMsgEl = document.createElement('div');
    userMsgEl.className = 'chat-msg';
    userMsgEl.innerHTML = `
      <div class="user-query">
        <span style="color: var(--accent-cyan);">&gt;</span>
        <span>${escapeHtml(queryText)}</span>
      </div>
      <div class="reasoning-box">
        <div class="reasoning-title">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          <span class="reasoning-label">Contacting Live AI Estimator...</span>
        </div>
        <div class="reasoning-text">Analyzing project parameters, feasibility, and technical dependencies...</div>
      </div>
      <div class="agent-response">
        <span class="stream-target">Thinking...</span><span class="cursor-blink"></span>
      </div>
    `;

    terminalLog.appendChild(userMsgEl);
    terminalLog.scrollTop = terminalLog.scrollHeight;

    const streamTarget = userMsgEl.querySelector('.stream-target');
    const reasoningLabel = userMsgEl.querySelector('.reasoning-label');
    const reasoningText = userMsgEl.querySelector('.reasoning-text');
    const cursor = userMsgEl.querySelector('.cursor-blink');

    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: queryText })
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      
      // Update reasoning box
      if (data.reasoning) {
        reasoningLabel.textContent = "AI Sprint Reasoning";
        reasoningText.textContent = data.reasoning;
      }

      // Stream the real Gemini response
      streamTextToElement(streamTarget, cursor, data.response);

    } catch (err) {
      console.warn("Live API call failed or server offline, using local intelligent engine fallback:", err);
      const fallback = generateProjectResponse(queryText);
      reasoningLabel.textContent = "Sprint Calculation Trace";
      reasoningText.textContent = fallback.reasoning;
      streamTextToElement(streamTarget, cursor, fallback.response);
    }
  }

  function streamTextToElement(targetEl, cursorEl, text) {
    let charIndex = 0;
    const formatted = formatMarkdown(text);
    targetEl.textContent = '';
    
    const typingInterval = setInterval(() => {
      charIndex += 4;
      if (charIndex >= text.length) {
        clearInterval(typingInterval);
        targetEl.innerHTML = formatted;
        if (cursorEl) cursorEl.remove();
        terminalLog.scrollTop = terminalLog.scrollHeight;
      } else {
        targetEl.textContent = text.slice(0, charIndex);
        terminalLog.scrollTop = terminalLog.scrollHeight;
      }
    }, 10);
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
      name: "Generative Media & Visual Studio",
      baseDays: 2,
      deliverables: [
        "Photorealistic commercial imagery (editorial modeling, portraits, product ads)",
        "Prompt engineering playbook & brand style consistency guide",
        "Automated resizing & export pipeline for all web/social dimensions",
        "Direct 4K master asset delivery with full commercial rights"
      ]
    },
    geo: {
      name: "AI SEO / GEO / AEO Engine",
      baseDays: 2,
      deliverables: [
        "Complete Generative Engine Optimization (GEO) audit across ChatGPT & Perplexity",
        "Semantic Schema.org / JSON-LD entity graph deployment",
        "High-authority direct-answer FAQ nodes for Answer Engine Optimization (AEO)",
        "Target entity density optimization & knowledge base anchoring",
        "30-day automated LLM citation tracking dashboard & recommendation report"
      ]
    },
    ghostwriting: {
      name: "AI Executive Ghostwriting Pipeline",
      baseDays: 2,
      deliverables: [
        "Executive voice profiling & semantic tone calibration",
        "10x High-impact LinkedIn thought leadership essays with viral hook engineering",
        "2x Long-form Substack / Forbes-style opinion editorials",
        "Multi-post X/Twitter thread adaptations with quote graphics",
        "Editorial content calendar & audience engagement blueprint"
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
      
      const email = 'michaeljayo.diaz@gmail.com';
      const subject = encodeURIComponent(`Project Inquiry for Michael Jay Diaz: ${typeName}`);
      const body = encodeURIComponent(`Hi Michael,\n\nI configured a project scope on your portfolio:\n- Type: ${typeName}\n- Estimated Timeline: ${timeEst}\n\nLet's discuss getting this built!`);
      
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
          <a href="docusense/" target="_blank" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
            <span>🚀 Launch Live DocuSense AI App</span>
          </a>
        </div>
      `
    },
    autoresolve: {
      title: "AutoResolve AI: Autonomous Support Ticket Triage & SLA Router",
      subtitle: "Multi-Channel Ingestion, NLP Sentiment Scoring, Policy Checks & Webhook Dispatches",
      diagram:
`[Inbound Support Inquiries (Zendesk API / Email / Intercom Webhooks)]
        │
        ▼
[NLP Sentiment & Urgency Scoring Engine (Gemini Pro NLP)]
  ├── Calculates Negative Sentiment & Customer Churn Probability
  └── Determines SLA Window (P1 Critical 15m vs P4 Low 24h)
        │
        ▼
[Policy Rule Engine & Knowledge Retrieval]
  ├── Validates Refund & Downsizing Grace Periods (§4.2 SLA)
  └── Retrieves Technical Diagnostic Playbooks (SAML X.509 / Stripe 500)
        │
        ▼
[Autonomous Response Synthesizer & Multi-Channel Dispatch]
  ├── Drafts Human-Quality Empathetic Resolution Email
  ├── Pushes Priority Alert to Slack (#prod-incidents / #billing)
  └── Creates & Assigns Jira Service Desk Incident (INC Key)`,
      details: `
        <h4 style="color: var(--accent-cyan); margin-bottom: 8px;">Human + AI Synergy Highlights:</h4>
        <ul style="padding-left: 20px; margin-bottom: 12px;">
          <li><strong>Zero Customer Dropoff</strong>: High-churn complaints receive an empathetic, policy-grounded resolution in seconds rather than sitting in a 24-hour queue.</li>
          <li><strong>Automated War Room Escalation</strong>: Real-time Slack webhooks and Jira tickets ensure on-call engineers are paged before the customer disputes a charge.</li>
          <li><strong>Interactive Sandbox</strong>: Explore live presets or test custom tickets directly in the <a href="autoresolve/" target="_blank" style="color: #38bdf8;">AutoResolve AI Dashboard</a>.</li>
        </ul>
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
    },
    omnirank: {
      title: "OmniRank AI: Generative Engine Optimization (GEO) & AEO Search Engine",
      subtitle: "Conversational Search Authority Across Perplexity, ChatGPT Search, Gemini & Claude",
      diagram:
`[Brand Content & Entity Knowledge Ingestion]
        │
        ▼
[OmniRank Semantic Entity & Knowledge Graph Builder]
  ├── Maps Core Topics & Authority Nodes (JSON-LD)
  └── Identifies Missing Search Entity Relations
        │
        ▼
[AEO Direct-Answer & FAQ Synthesizer]
  ├── Crafts Conversational Direct-Answer Snippets
  └── Formats Citeable Fact Tables for LLM Context Windows
        │
        ▼
[Generative Engine Optimization (GEO) Deployment]
  ├── Continuous Perplexity, ChatGPT & Gemini Citation Tracking
  └── Dynamic Entity Re-indexing for 4x Higher Citation Share`,
      details: `
        <h4 style="color: var(--accent-cyan); margin-bottom: 8px;">Human + AI Synergy Highlights:</h4>
        <ul style="padding-left: 20px; margin-bottom: 12px;">
          <li><strong>Conversational First-Mover Advantage</strong>: Optimizes for how LLMs read and cite information, not obsolete 2015 keyword stuffing.</li>
          <li><strong>Direct Answer Supremacy</strong>: Targets the direct citation snippets displayed at the top of Perplexity and ChatGPT Search.</li>
          <li><strong>2-3 Day Agile Implementation</strong>: Instant deployment of Schema.org JSON-LD graph nodes and structured Markdown answer repositories.</li>
        </ul>
      `
    },
    aurawrite: {
      title: "AuraWrite AI: Executive Thought Leadership & Ghostwriting Pipeline",
      subtitle: "Founder Voice Profiling & Multi-Channel Thought Leadership Engine",
      diagram:
`[Founder Raw Voice Notes / Briefing Memos / Bullet Ideas]
        │
        ▼
[AuraWrite Semantic Voice Fingerprinting]
  ├── Analyzes Vocabulary, Sentence Rhythm & Contrarian Angles
  └── Establishes Executive Brand Style & Vocabulary Bounds
        │
        ▼
[Multi-Channel Narrative Engineering]
  ├── High-Engagement LinkedIn B2B Thought Leadership Essays
  ├── Long-form Substack & Industry Op-Eds
  └── Viral Hook-Engineered X/Twitter Threads
        │
        ▼
[1-Click Editorial Review & Automated Publishing Schedule]`,
      details: `
        <h4 style="color: var(--accent-cyan); margin-bottom: 8px;">Human + AI Synergy Highlights:</h4>
        <ul style="padding-left: 20px; margin-bottom: 12px;">
          <li><strong>Authentic Voice Retention</strong>: Preserves the authentic tone, cadence, and contrarian perspectives of the executive with zero generic AI fluff.</li>
          <li><strong>12x Editorial Velocity</strong>: Turns a 5-minute raw voice memo into a full week of authoritative LinkedIn and Substack content.</li>
          <li><strong>Turnaround in 2-3 Days</strong>: Full setup, tone calibration, and initial batch of 10 executive essays delivered within 72 hours.</li>
        </ul>
      `
    },
    glamourlabel: {
      title: "GLAMOUR THE LABEL: Modern Fashion E-Commerce Architecture",
      subtitle: "24+ Female Apparel Catalog, Flash Sales, Slide-out Bag & Multi-Currency",
      diagram:
`[Shopper Explores 24+ Female Fashion Styles]
        │
        ▼
[High-Conversion Merchandising & Urgency Layer]
  ├── Live Flash Deal Countdown Clock & Scarcity Tickers
  ├── Instant Interactive Coupon Wallet (GLAM20, SAVE10, VIP25)
  └── Multi-Currency Conversion Engine (USD, EUR, GBP, CAD, AUD)
        │
        ▼
[Instant Reactive Filter & Quick-Add Engine]
  ├── Sub-millisecond Category & Price Range Filter
  ├── Card Hover Quick-Add Size Drawer (XS / S / M / L / XL)
  └── Interactive Wishlist Drawer with Instant Sync
        │
        ▼
[Slide-Out Shopping Bag & Checkout Simulator]
  ├── Real-time Free Shipping Progress Bar ($29 Threshold)
  ├── Automated Promo Code Discount Calculation
  └── Multi-Option Secure Checkout Modal with Order Confetti`,
      details: `
        <h4 style="color: #ff4757; margin-bottom: 8px;">E-Commerce Engine Highlights:</h4>
        <ul style="padding-left: 20px; margin-bottom: 12px;">
          <li><strong>Complete Catalog of 24 Styles</strong>: Covers French floral sundresses, Tokyo streetwear cargo sets, satin cowl evening gowns, and tailored outerwear.</li>
          <li><strong>Micro-Conversion UX</strong>: Card hover size chips allow customers to add items to bag in one single click without page reloads.</li>
          <li><strong>Real-Time Cart Drawer</strong>: Includes threshold progress bar for free shipping, coupon auto-apply, and simulated multi-step checkout.</li>
        </ul>
        <div style="margin-top: 14px;">
          <a href="clothing/" target="_blank" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none; background: #fa2c19;">
            <span>🛍️ Launch Live GLAMOUR Storefront</span>
          </a>
        </div>
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
  // 4B. Interactive Autoplay Commercial Visual Carousel
  // --------------------------------------------------------------------------
  const visualCarouselTrack = document.getElementById('visualCarouselTrack');
  const visualCarouselContainer = document.getElementById('visualCarouselContainer');
  const carouselPrevBtn = document.getElementById('carouselPrevBtn');
  const carouselNextBtn = document.getElementById('carouselNextBtn');
  const carouselDots = document.querySelectorAll('.c-dot');
  const catPills = document.querySelectorAll('.cat-pill');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const carouselStatusText = document.getElementById('carouselStatusText');

  if (visualCarouselTrack && visualCarouselContainer) {
    let currentSlide = 0;
    const slides = visualCarouselTrack.querySelectorAll('.visual-slide');
    const totalSlides = slides.length || 6;
    let autoplayInterval = null;
    let isHovered = false;

    function goToSlide(index, manual = false) {
      currentSlide = (index + totalSlides) % totalSlides;
      visualCarouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update dots
      carouselDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });

      // Update category pills
      catPills.forEach((pill) => {
        const slideTarget = parseInt(pill.getAttribute('data-slide'));
        if (pill.textContent.includes('All')) {
          pill.classList.toggle('active', !manual && !isHovered);
        } else {
          pill.classList.toggle('active', slideTarget === currentSlide);
        }
      });

      // Update slide counter
      const counterEl = document.getElementById('carouselCounter');
      if (counterEl) {
        counterEl.innerHTML = `<span id="currentSlideNum">0${currentSlide + 1}</span> / 0${totalSlides}`;
      } else if (currentSlideNum) {
        currentSlideNum.textContent = `0${currentSlide + 1}`;
      }

      if (manual && carouselStatusText) {
        carouselStatusText.textContent = `Jumped to Slide 0${currentSlide + 1} (Autoplay resumes when cursor leaves)`;
      }
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(() => {
        if (!isHovered) {
          goToSlide(currentSlide + 1);
        }
      }, 3500);

      if (carouselStatusText) {
        carouselStatusText.textContent = 'Autoplaying (Advances every 3.5s • Hover to pause)';
      }
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    if (carouselPrevBtn) {
      carouselPrevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1, true);
      });
    }

    if (carouselNextBtn) {
      carouselNextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1, true);
      });
    }

    carouselDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx, true);
      });
    });

    catPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const target = parseInt(pill.getAttribute('data-slide'));
        goToSlide(target, true);
        catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });

    visualCarouselContainer.addEventListener('mouseenter', () => {
      isHovered = true;
      if (carouselStatusText) {
        carouselStatusText.textContent = 'Paused on hover (Click arrows or pills to explore)';
      }
    });

    visualCarouselContainer.addEventListener('mouseleave', () => {
      isHovered = false;
      startAutoplay();
    });

    visualCarouselContainer.addEventListener('touchstart', () => {
      isHovered = true;
    }, { passive: true });

    visualCarouselContainer.addEventListener('touchend', () => {
      setTimeout(() => {
        isHovered = false;
      }, 3000);
    });

    // Start autoplay initially
    startAutoplay();
  }

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
      const email = 'michaeljayo.diaz@gmail.com';
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
  // 6. Mobile Navigation Drawer Controller
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link, #mobile-contact-btn');

  function openMobileNav() {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.add('open');
    if (mobileToggle) mobileToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('open');
    if (mobileToggle) mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileNav);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

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
