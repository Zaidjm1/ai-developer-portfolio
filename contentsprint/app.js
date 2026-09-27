// ContentSprint AI — Autonomous Marketing & Ad Campaign Studio
// Built by Michael Jay Diaz (MJ) · Human + AI Synergy Showcase

document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive Pre-computed Zero-Token Demonstration Presets
  const PRESETS = {
    saas: {
      name: "PulseSync Analytics",
      audience: "B2B SaaS Founders, Growth Leads, VPs of Product",
      valueProp: "Stop losing customers to silent churn. Real-time Stripe telemetry catches payment and usage drop-offs 3x earlier with automated 1-click Slack winback workflows.",
      tone: "High Energy & Direct Response",
      data: {
        campaign_title: "PulseSync SaaS Churn Recovery Sprint",
        meta: {
          brand: "PulseSync",
          headline: "Cut Churn by 40% in 14 Days",
          primary_text: "🚨 73% of SaaS churn happens in silence before a user ever submits a cancellation survey.\n\nFailed credit cards, broken feature gates, and unmonitored checkout errors are leaking thousands in monthly recurring revenue.\n\nPulseSync connects directly to your Stripe & telemetry stack in 3 minutes. When high-value accounts show churn signals, your team gets instant Slack alerts with one-click automated winback sequences.\n\n👇 Start your 14-day production trial with zero credit card required.",
          banner_headline: "Stop Churn Before It Costs You",
          banner_sub: "Real-Time Stripe Telemetry & Automated Winback Workflows",
          cta: "Start Free Trial",
          concept: "Split-screen mockup: On the left, an anxious founder looking at red churn spike in Stripe. On the right, clean dark-mode PulseSync dashboard highlighting 'Saved $4,200 MRR from automated churn mitigation'."
        },
        google: {
          h1: "PulseSync SaaS Analytics",
          h2: "Cut Churn by 40% in 14 Days",
          h3: "Start Free 14-Day Trial",
          d1: "Real-time Stripe billing telemetry, automated churn alerts, and conversion funnel graphs.",
          d2: "Instant setup in under 5 minutes. Trusted by 500+ modern scale-up software founders."
        },
        tiktok: {
          hook: "Visual: Fast pan to laptop screen showing red Stripe cancellations. Spoken: \"If your SaaS is losing more than 3 paying users a week, stop scrolling—you are making this silent mistake.\"",
          points: [
            "1. Most founders check churn at the end of the month when customer relationships are already dead.",
            "2. Failed card payments account for 40% of all lost revenue without anyone on your team noticing.",
            "3. Here's how PulseSync automatically catches and recovers them in real-time before you lose the account."
          ],
          cta: "Click the link in bio to run a free churn audit on your Stripe account in under 60 seconds."
        },
        linkedin: {
          slides: [
            {
              tag: "SLIDE 1 OF 5 · THE HOOK",
              title: "Why 90% of SaaS Startups Die from Silent Churn",
              body: "It's not lack of product-market fit. It's the silent revenue leaks happening right under your nose in your payment gateway.",
              author: "PulseSync Growth Notes"
            },
            {
              tag: "SLIDE 2 OF 5 · THE DATA",
              title: "The Reality of Failed Transactions",
              body: "Over 40% of customer cancellations are involuntary—expired credit cards, fraud false-positives, and bank network timeouts that quietly terminate billing.",
              author: "PulseSync Growth Notes"
            },
            {
              tag: "SLIDE 3 OF 5 · THE STRATEGY",
              title: "Immediate Telemetry vs. Monthly Reviews",
              body: "By the time your finance team pulls a monthly churn report, those users have already signed up with a competitor. Immediate 15-minute intervention recovers 3x more accounts.",
              author: "PulseSync Growth Notes"
            },
            {
              tag: "SLIDE 4 OF 5 · AUTOMATION",
              title: "Automated Micro-Winbacks in Slack",
              body: "PulseSync listens to Stripe webhooks and generates smart in-app retry prompts and personalized Slack alerts for customer success reps.",
              author: "PulseSync Growth Notes"
            },
            {
              tag: "SLIDE 5 OF 5 · ACTION PLAN",
              title: "Audit Your Payment Gateway Today",
              body: "Connect your Stripe account in read-only mode to uncover exactly how much ARR is slipping away. Visit pulsesync.io for a free audit.",
              author: "PulseSync Growth Notes"
            }
          ]
        },
        visual: {
          hero: "AUTOMATE YOUR REVENUE RETENTION",
          sub: "Catch 40% more churn signals before high-value customers cancel.",
          cta: "Claim Free Audit",
          prompt: "Futuristic glowing neon glass dashboard displaying real-time financial telemetry, volumetric purple and cyan lighting, isometric clean 3D render, minimalist architectural aesthetics --ar 16:9 --v 6.0"
        }
      }
    },

    dental: {
      name: "Lumina Dental & Aesthetics",
      audience: "Working Professionals, Brides-to-Be, Event Attendees (Ages 24–48)",
      valueProp: "Get up to 8 shades brighter in a single 45-minute lunch break. Anxiety-free dental spa experience with desensitizing laser therapy and zero enamel pain.",
      tone: "Empathetic, Friendly & Educational",
      data: {
        campaign_title: "Lumina Dental 45-Min Laser Brightening Campaign",
        meta: {
          brand: "Lumina Dental",
          headline: "8 Shades Brighter in 45 Minutes ✨",
          primary_text: "Say goodbye to messy drug-store strips and sharp enamel sensitivity 🦷\n\nAt Lumina Dental & Aesthetics, our in-office laser treatment activates professional desensitized peroxide to lift years of coffee, tea, and red wine stains in a single 45-minute visit.\n\n🥂 Complimentary spa amenities: private suites, noise-canceling headphones, and ceiling streaming included.\n\n✨ Limited Special: $299 Complete (Regular $450) + Free Take-Home Maintenance Pen!\n\n👇 Tap below to reserve your private appointment.",
          banner_headline: "Spa-Level Smile Whitening in 45 Min",
          banner_sub: "Gentle Laser Activation · Zero Sensitivity · $299 Intro Special",
          cta: "Book $299 Special",
          concept: "Macro photograph of a radiant natural smile holding a dental shade guide showing an 8-shade jump. Sunlit alabaster and warm Scandinavian oak dental spa interior in soft focus."
        },
        google: {
          h1: "Laser Teeth Whitening $299",
          h2: "8 Shades Brighter in 45 Min",
          h3: "Zero Enamel Sensitivity",
          d1: "Grand Avenue luxury dental spa. Up to 8 shades whiter in 45 minutes. Book today!",
          d2: "Gentle laser whitening with desensitizing treatment. $150 off first visit special."
        },
        tiktok: {
          hook: "Visual: Creator holding a large iced latte with a glass straw looking directly at the camera. Spoken: \"If you drink 2 or 3 iced coffees every single day like me, stop scrolling because your teeth need this.\"",
          points: [
            "1. Drugstore whitening strips actually dehydrate your enamel and cause intense zinger pain.",
            "2. I went to Lumina Dental for their 45-minute medical laser whitening because they use a desensitizing gel barrier.",
            "3. You literally wear Bose headphones, watch Netflix on the ceiling, and walk out 8 shades brighter before lunch ends."
          ],
          cta: "Tap the link in bio to grab their $299 new-patient whitening package before September slots fill up."
        },
        linkedin: {
          slides: [
            {
              tag: "SLIDE 1 OF 5 · THE HOOK",
              title: "The Professional ROI of Smile Aesthetics",
              body: "Clinical studies show 74% of corporate professionals perceive colleagues with bright, healthy smiles as more confident and trustworthy in executive negotiations.",
              author: "Lumina Aesthetics Insights"
            },
            {
              tag: "SLIDE 2 OF 5 · THE ENAMEL MYTH",
              title: "Why Cheap Whitening Kits Cause Damage",
              body: "Over-the-counter abrasive strips strip away micro-layers of protective dentin, creating chronic sensitivity without achieving deep stain breakdown.",
              author: "Lumina Aesthetics Insights"
            },
            {
              tag: "SLIDE 3 OF 5 · MODERN LASER TECH",
              title: "How Laser Phototherapy Works",
              body: "Targeted blue wavelengths break down organic chromophore bonds inside tooth enamel in 45 minutes without heat, friction, or dehydration.",
              author: "Lumina Aesthetics Insights"
            },
            {
              tag: "SLIDE 4 OF 5 · SPA ENVIRONMENT",
              title: "Anxiety-Free Clinical Dentistry",
              body: "Experience medicine redefined: private treatment suites, ergonomic memory-foam recliners, noise-canceling soundscapes, and transparent upfront fees.",
              author: "Lumina Aesthetics Insights"
            },
            {
              tag: "SLIDE 5 OF 5 · ELEVATE YOUR SMILE",
              title: "Reserve Your Executive Session",
              body: "Located at 450 Grand Avenue with complimentary valet parking. Discover transparent aesthetic dentistry at luminadental.com.",
              author: "Lumina Aesthetics Insights"
            }
          ]
        },
        visual: {
          hero: "WORLD-CLASS DENTAL AESTHETICS",
          sub: "8 shades brighter in 45 minutes with zero sensitivity guarantee.",
          cta: "Reserve Whitening Visit",
          prompt: "High-end Scandinavian dental clinic interior with soft natural morning light, marble reception desk, green indoor plants, state-of-the-art white ergonomic dental chair, ultra-clean serene spa atmosphere, architectural photography --ar 16:9 --v 6.0"
        }
      }
    },

    hvac: {
      name: "ProCraft Home Services & HVAC",
      audience: "Suburban Homeowners, Landlords, Property Managers",
      valueProp: "Slash heating & cooling bills by up to 50% with Federal Inflation Reduction Act rebates up to $2,000 + $0 down 0% APR financing on modern high-efficiency heat pumps.",
      tone: "Prestigious, Premium & Authoritative",
      data: {
        campaign_title: "ProCraft Zero-Down Modern Heat Pump Program",
        meta: {
          brand: "ProCraft HVAC",
          headline: "Uncle Sam Will Pay You $2,000 to Replace Your Old Furnace 🏡",
          primary_text: "⚠️ If your home furnace or AC is over 10 years old, you're paying double on monthly utility bills while waiting on an expensive winter breakdown.\n\nUnder the Inflation Reduction Act, eligible homeowners qualify for up to $2,000 in immediate clean energy tax credits when upgrading to a modern cold-climate heat pump.\n\n🔧 ProCraft Master Guarantee:\n• $0 Down, 0% APR Financing for 18 Months\n• 5-Year Master Labor Guarantee\n• Guaranteed 60-Minute Emergency Response\n• NATE-Certified Master Installers\n\n👇 Check your zip code's rebate eligibility in 60 seconds.",
          banner_headline: "Claim Up to $2,000 in Federal Energy Rebates",
          banner_sub: "$0 Down · 0% APR Financing · 5-Year Master Labor Guarantee",
          cta: "Check Rebate Eligibility",
          concept: "Side-by-side comparison of an old rusty rattling furnace in a dusty basement next to a sleek whisper-quiet modern heat pump outdoor unit with green '$2,000 Federal Rebate Approved' badge."
        },
        google: {
          h1: "HVAC Heat Pump Rebates $2,000",
          h2: "$0 Down Heat Pump Install",
          h3: "ProCraft™ Master HVAC",
          d1: "Claim up to $2,000 federal clean energy rebates. 0% financing available for 18 mo.",
          d2: "NATE-certified installers. 5-year labor guarantee. Book your free home energy audit."
        },
        tiktok: {
          hook: "Visual: Tech gently tapping on a rusty furnace making a loud clattering racket. Spoken: \"If your home furnace sounds like a freight train starting up in your basement, you are literally burning cash.\"",
          points: [
            "1. Winter utility rates just spiked again, and running a 12-year-old heating unit costs you an extra $200 every single month.",
            "2. Most homeowners don't know the federal government pays up to $2,000 in direct tax credits to replace old units with electric heat pumps.",
            "3. With zero down and 0% financing, your monthly utility savings actually pay off the new high-efficiency system."
          ],
          cta: "Tap the link in bio to calculate your home's exact tax rebate in under 60 seconds."
        },
        linkedin: {
          slides: [
            {
              tag: "SLIDE 1 OF 5 · THE HOOK",
              title: "The Financial Tipping Point for Home Energy",
              body: "Why rising natural gas volatility and federal tax incentives are making traditional fossil fuel furnaces financially obsolete.",
              author: "ProCraft Trade Insights"
            },
            {
              tag: "SLIDE 2 OF 5 · THE IRA 25C CREDIT",
              title: "Up to $2,000 Direct Tax Offset",
              body: "Section 25C of the Internal Revenue Code allows homeowners to offset 30% of project costs up to $2,000 for qualifying cold-climate heat pumps.",
              author: "ProCraft Trade Insights"
            },
            {
              tag: "SLIDE 3 OF 5 · TECHNOLOGY SHIFT",
              title: "Inverter Compressors Operate to -15°F",
              body: "Modern variable-speed compressors eliminate noisy duct cycling, maintaining exact indoor temperatures while cutting seasonal energy draw in half.",
              author: "ProCraft Trade Insights"
            },
            {
              tag: "SLIDE 4 OF 5 · RISK MITIGATION",
              title: "Why Master Labor Guarantees Matter",
              body: "Over 70% of HVAC equipment failures stem from improper refrigerant charging and sizing. Demanding NATE certification protects long-term property equity.",
              author: "ProCraft Trade Insights"
            },
            {
              tag: "SLIDE 5 OF 5 · ACTION PLAN",
              title: "Schedule Your Free Home Energy Audit",
              body: "Our certified technicians perform full load calculations and rebate filings with zero sales pressure. Learn more at procrafthvac.com.",
              author: "ProCraft Trade Insights"
            }
          ]
        },
        visual: {
          hero: "FEDERAL ENERGY REBATES UP TO $2,000",
          sub: "Upgrade to high-efficiency cold climate heat pumps with $0 down.",
          cta: "Check Rebate Eligibility",
          prompt: "Professional residential HVAC technician in clean navy uniform standing next to a modern heat pump condenser outside a clean suburban craftsman home, sunny afternoon, commercial photography --ar 16:9 --v 6.0"
        }
      }
    }
  };

  // State
  let activePresetKey = 'saas';
  let currentCampaignData = PRESETS.saas.data;
  let currentSlideIndex = 0;
  let remainingQuota = 5;

  // DOM Elements - Input Form
  const campaignForm = document.getElementById('campaign-form');
  const inputProductName = document.getElementById('input-product-name');
  const inputAudience = document.getElementById('input-audience');
  const inputValueProp = document.getElementById('input-value-prop');
  const inputTone = document.getElementById('input-tone');
  const generateBtn = document.getElementById('generate-btn');
  const genSpinner = document.getElementById('gen-spinner');
  const genBtnLabel = document.getElementById('gen-btn-label');
  const quotaCountEl = document.getElementById('quota-count');
  const quotaWarningCard = document.getElementById('quota-warning-card');
  const campaignTitleLabel = document.getElementById('campaign-title-label');

  // Channel Tabs & Panes
  const channelTabs = document.querySelectorAll('.channel-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');

  // Meta Output Elements
  const feedBrandName = document.getElementById('feed-brand-name');
  const metaPrimaryText = document.getElementById('meta-primary-text');
  const feedBannerHeadline = document.getElementById('feed-banner-headline');
  const feedBannerSub = document.getElementById('feed-banner-sub');
  const metaHeadline = document.getElementById('meta-headline');
  const metaCtaBtn = document.getElementById('meta-cta-btn');
  const metaVisualConcept = document.getElementById('meta-visual-concept');

  // Google Output Elements
  const googleHeadlinesPreview = document.getElementById('google-headlines-preview');
  const googleDescPreview = document.getElementById('google-desc-preview');
  const rsaH1 = document.getElementById('rsa-h1');
  const rsaH2 = document.getElementById('rsa-h2');
  const rsaH3 = document.getElementById('rsa-h3');
  const rsaD1 = document.getElementById('rsa-d1');
  const rsaD2 = document.getElementById('rsa-d2');

  // TikTok Output Elements
  const ttHook = document.getElementById('tt-hook');
  const ttBodyPoints = document.getElementById('tt-body-points');
  const ttCta = document.getElementById('tt-cta');

  // LinkedIn Carousel Output Elements
  const slideTagLabel = document.getElementById('slide-tag-label');
  const slideTitleDisplay = document.getElementById('slide-title-display');
  const slideBodyDisplay = document.getElementById('slide-body-display');
  const slideAuthor = document.getElementById('slide-author');
  const slideIndicator = document.getElementById('slide-indicator');
  const prevSlideBtn = document.getElementById('prev-slide-btn');
  const nextSlideBtn = document.getElementById('next-slide-btn');

  // Visual Ad Elements
  const bannerHeroText = document.getElementById('banner-hero-text');
  const bannerSubText = document.getElementById('banner-sub-text');
  const bannerCtaButton = document.getElementById('banner-cta-button');
  const midjourneyPromptDisplay = document.getElementById('midjourney-prompt-display');

  // Tool Buttons
  const btnCopyAll = document.getElementById('btn-copy-all');
  const btnDownloadKit = document.getElementById('btn-download-kit');
  const copyMetaTextBtn = document.getElementById('copy-meta-text-btn');
  const copyGoogleBtn = document.getElementById('copy-google-btn');
  const copyTiktokBtn = document.getElementById('copy-tiktok-btn');
  const copyCarouselBtn = document.getElementById('copy-carousel-btn');
  const copyMjPromptBtn = document.getElementById('copy-mj-prompt-btn');

  // 1. Fetch Demo Quota from Server
  fetch('/api/demo-status')
    .then(res => res.json())
    .then(info => {
      if (typeof info.remaining_credits === 'number') {
        remainingQuota = info.remaining_credits;
        updateQuotaDisplay();
      }
    })
    .catch(() => {});

  function updateQuotaDisplay() {
    if (quotaCountEl) {
      quotaCountEl.textContent = remainingQuota;
    }
    if (remainingQuota <= 0) {
      if (quotaWarningCard) quotaWarningCard.classList.remove('hidden');
      if (generateBtn) {
        generateBtn.disabled = true;
        generateBtn.style.opacity = '0.6';
      }
    }
  }

  // 2. Channel Tab Switching (Meta, Google, TikTok, LinkedIn, Visual)
  channelTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabTarget = tab.dataset.tab; // e.g. "meta", "google", "tiktok", "linkedin", "visual"

      // Update Tab Styles
      channelTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update Panes Visibility
      tabPanes.forEach(pane => {
        pane.classList.remove('active');
      });

      const targetPane = document.getElementById(`tab-${tabTarget}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 3. Preset Switcher (1-Click Zero-Token Instant Updates)
  const presetButtons = document.querySelectorAll('.preset-btn');
  presetButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.dataset.preset;
      const preset = PRESETS[key];
      if (!preset) return;

      activePresetKey = key;

      // Update Preset Button Active Styles
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Populate Input Form Fields
      if (inputProductName) inputProductName.value = preset.name;
      if (inputAudience) inputAudience.value = preset.audience;
      if (inputValueProp) inputValueProp.value = preset.valueProp;
      if (inputTone) inputTone.value = preset.tone;

      // Render Campaign Data
      renderCampaign(preset.data);
    });
  });

  // 4. Render Campaign to UI
  function renderCampaign(data) {
    currentCampaignData = data;
    currentSlideIndex = 0;

    // Header label
    if (campaignTitleLabel) {
      campaignTitleLabel.textContent = data.campaign_title || "Ready for deployment across Meta, Google, TikTok & LinkedIn";
    }

    // A. Meta / Instagram Ad
    const m = data.meta || {};
    if (feedBrandName) feedBrandName.textContent = m.brand || "Brand";
    if (metaPrimaryText) metaPrimaryText.textContent = m.primary_text || "";
    if (feedBannerHeadline) feedBannerHeadline.textContent = m.banner_headline || "";
    if (feedBannerSub) feedBannerSub.textContent = m.banner_sub || "";
    if (metaHeadline) metaHeadline.textContent = m.headline || "";
    if (metaCtaBtn) metaCtaBtn.textContent = m.cta || "Learn More";
    if (metaVisualConcept) metaVisualConcept.textContent = m.concept || "";

    // B. Google Search Ad
    const g = data.google || {};
    if (googleHeadlinesPreview) {
      googleHeadlinesPreview.textContent = `${g.h1 || ''} | ${g.h2 || ''} | ${g.h3 || ''}`;
    }
    if (googleDescPreview) {
      googleDescPreview.textContent = `${g.d1 || ''} ${g.d2 || ''}`;
    }
    if (rsaH1) rsaH1.textContent = g.h1 || "";
    if (rsaH2) rsaH2.textContent = g.h2 || "";
    if (rsaH3) rsaH3.textContent = g.h3 || "";
    if (rsaD1) rsaD1.textContent = g.d1 || "";
    if (rsaD2) rsaD2.textContent = g.d2 || "";

    // C. TikTok / Reels Script
    const tt = data.tiktok || {};
    if (ttHook) ttHook.textContent = tt.hook || "";
    if (ttBodyPoints) {
      const points = tt.points || [];
      ttBodyPoints.innerHTML = points.map(p => `<div>${escapeHtml(p)}</div>`).join('');
    }
    if (ttCta) ttCta.textContent = tt.cta ? `"${tt.cta}"` : "";

    // D. LinkedIn Carousel Deck
    renderCarouselSlide();

    // E. Visual Ad Mockup & Prompt
    const vis = data.visual || {};
    if (bannerHeroText) bannerHeroText.textContent = vis.hero || "";
    if (bannerSubText) bannerSubText.textContent = vis.sub || "";
    if (bannerCtaButton) bannerCtaButton.textContent = vis.cta || "Get Started";
    if (midjourneyPromptDisplay) midjourneyPromptDisplay.textContent = vis.prompt || "";
  }

  // 5. LinkedIn Carousel Slide Renderer
  function getCarouselSlides() {
    if (!currentCampaignData) return [];
    const lk = currentCampaignData.linkedin || currentCampaignData.linkedin_carousel;
    if (!lk) return [];
    if (Array.isArray(lk)) return lk;
    if (Array.isArray(lk.slides)) return lk.slides;
    return [];
  }

  function renderCarouselSlide() {
    const slides = getCarouselSlides();
    if (!slides.length) {
      if (slideTagLabel) slideTagLabel.textContent = "SLIDE 1 OF 5 · THE HOOK";
      if (slideTitleDisplay) slideTitleDisplay.textContent = "Strategic Thought Leadership Deck";
      if (slideBodyDisplay) slideBodyDisplay.textContent = "Select a preset or generate a campaign to review the 5-slide carousel.";
      if (slideIndicator) slideIndicator.textContent = "1 / 5";
      return;
    }

    if (currentSlideIndex < 0) currentSlideIndex = 0;
    if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;

    const s = slides[currentSlideIndex];
    const sTag = s.visual_tag || s.tag || `SLIDE ${s.slide || currentSlideIndex + 1} OF ${slides.length} · ${currentSlideIndex === 0 ? 'THE HOOK' : currentSlideIndex === slides.length - 1 ? 'CALL TO ACTION' : 'STRATEGY'}`;
    const sTitle = s.title || s.heading || `Slide ${currentSlideIndex + 1}`;
    const sBody = s.body || s.content || s.text || "";
    const sAuthor = s.author || (currentCampaignData.meta && currentCampaignData.meta.brand) || "ContentSprint AI";

    if (slideTagLabel) slideTagLabel.textContent = sTag;
    if (slideTitleDisplay) slideTitleDisplay.textContent = sTitle;
    if (slideBodyDisplay) slideBodyDisplay.textContent = sBody;
    if (slideAuthor) slideAuthor.textContent = sAuthor;
    if (slideIndicator) slideIndicator.textContent = `${currentSlideIndex + 1} / ${slides.length}`;

    if (prevSlideBtn) prevSlideBtn.disabled = currentSlideIndex === 0;
    if (nextSlideBtn) nextSlideBtn.disabled = currentSlideIndex === slides.length - 1;
  }

  if (prevSlideBtn) {
    prevSlideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderCarouselSlide();
      }
    });
  }

  if (nextSlideBtn) {
    nextSlideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const slides = getCarouselSlides();
      if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        renderCarouselSlide();
      }
    });
  }

  // 6. Custom Campaign Form Submission (Live AI Generation)
  if (campaignForm) {
    campaignForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (remainingQuota <= 0) {
        alert("🔒 Demo Limit Reached: You've tested the 5 free live AI runs. The 3 demonstration presets remain completely interactive! To install ContentSprint AI into your business, contact Michael Jay Diaz.");
        return;
      }

      const pName = inputProductName ? inputProductName.value.trim() : "";
      const pAudience = inputAudience ? inputAudience.value.trim() : "";
      const pValueProp = inputValueProp ? inputValueProp.value.trim() : "";
      const pTone = inputTone ? inputTone.value : "High Energy & Direct Response";

      if (!pName || !pAudience || !pValueProp) {
        alert("Please provide the Product Name, Target Buyer Persona, and Core Value Proposition.");
        return;
      }

      // Deselect presets
      presetButtons.forEach(b => b.classList.remove('active'));

      // Loading state
      if (generateBtn) generateBtn.disabled = true;
      if (genSpinner) genSpinner.classList.remove('hidden');
      if (genBtnLabel) genBtnLabel.textContent = "Synthesizing 5-Channel Strategy with Gemini AI...";

      try {
        const payload = {
          product_name: pName,
          brand_name: pName,
          target_audience: pAudience,
          value_prop: pValueProp,
          unique_angle: pValueProp,
          tone: pTone,
          category: pTone,
          url: ""
        };

        const res = await fetch('/api/generate-campaign', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const json = await res.json();

        if (!res.ok) {
          if (json.quota_reached) {
            remainingQuota = 0;
            updateQuotaDisplay();
            alert("🔒 Demo Quota Reached: You have reached 5 live AI generations.");
          } else {
            alert(`Generation Error: ${json.error || 'Server error occurred'}`);
          }
          return;
        }

        if (typeof json.remaining_credits === 'number') {
          remainingQuota = json.remaining_credits;
          updateQuotaDisplay();
        }

        // Map server JSON schema response to UI structure
        const c = json.campaign || json.data || {};
        const overview = c.campaign_overview || {};
        const meta = c.meta_ads || {};
        const google = c.google_search_ads || {};

        // Extract LinkedIn slides from any schema shape (Array or Object.slides)
        const rawLk = c.linkedin_carousel || c.linkedin || [];
        let extractedSlides = [];
        if (Array.isArray(rawLk)) {
          extractedSlides = rawLk;
        } else if (rawLk && Array.isArray(rawLk.slides)) {
          extractedSlides = rawLk.slides;
        }

        const normalizedSlides = extractedSlides.length > 0 ? extractedSlides.map((sl, idx) => ({
          tag: sl.visual_tag || sl.tag || `SLIDE ${sl.slide || idx + 1} OF ${extractedSlides.length} · ${idx === 0 ? 'THE HOOK' : idx === extractedSlides.length - 1 ? 'CALL TO ACTION' : 'CORE INSIGHT'}`,
          title: sl.title || sl.heading || `Slide ${idx + 1}`,
          body: sl.body || sl.content || sl.text || '',
          author: `${pName} Growth Notes`
        })) : [
          { tag: `SLIDE 1 OF 5 · THE HOOK`, title: `The Hidden Cost of Ignoring ${pName}`, body: pValueProp, author: `${pName} Growth Notes` },
          { tag: `SLIDE 2 OF 5 · THE PROBLEM`, title: `Why Traditional Approaches Fail`, body: `Most ${pAudience} struggle with inefficient legacy solutions and high costs.`, author: `${pName} Growth Notes` },
          { tag: `SLIDE 3 OF 5 · THE SOLUTION`, title: `The Modern 3-Step Strategy`, body: `Engineered specifically to solve this problem faster and more reliably.`, author: `${pName} Growth Notes` },
          { tag: `SLIDE 4 OF 5 · THE RESULTS`, title: `Measurable Outcomes`, body: `Early users report significant performance gains and immediate ROI.`, author: `${pName} Growth Notes` },
          { tag: `SLIDE 5 OF 5 · NEXT STEPS`, title: `Get Started with ${pName}`, body: `Take action today to transform your results.`, author: `${pName} Growth Notes` }
        ];

        // Extract TikTok script from any schema shape
        const ttRaw = c.tiktok_reels_script || c.tiktok_script || {};
        const ttHookVal = ttRaw.hook_0_to_3s || ttRaw.hook || ttRaw.hook_audio || `Stop scrolling if you need a better solution for ${pName}!`;
        let ttPointsList = [];
        if (Array.isArray(ttRaw.body_3_to_20s)) {
          ttPointsList = ttRaw.body_3_to_20s;
        } else if (Array.isArray(ttRaw.body_scenes)) {
          ttPointsList = ttRaw.body_scenes.map((sc, i) => `${i + 1}. Visual: ${sc.visual || ''} · Dialogue: "${sc.dialogue || ''}"`);
        } else if (Array.isArray(ttRaw.points)) {
          ttPointsList = ttRaw.points;
        }
        if (!ttPointsList.length) {
          ttPointsList = [
            `1. The old way of doing this is costing you time and money.`,
            `2. ${pName} changes everything: ${pValueProp.slice(0, 80)}.`,
            `3. Setup takes under 5 minutes with zero technical overhead.`
          ];
        }
        const ttCtaVal = ttRaw.cta_20_to_30s || ttRaw.cta || ttRaw.cta_text || `Tap the link in bio to learn more about ${pName}.`;

        // Extract Visual Creative
        const visRaw = c.visual_prompts || c.visual_creative || {};
        const vHeroVal = visRaw.ad_mockup_headline || visRaw.hero || visRaw.headline_overlay || pName.toUpperCase();
        const vSubVal = visRaw.ad_mockup_sub || visRaw.sub || visRaw.subheadline_overlay || overview.primary_angle || pValueProp;
        const vPromptVal = visRaw.midjourney_prompt || visRaw.prompt || `High-end commercial advertisement photography of ${pName}, clean modern aesthetics, dramatic studio lighting, 8k --ar 16:9`;

        const mappedData = {
          campaign_title: overview.campaign_name || `${pName} Growth Sprint`,
          meta: {
            brand: pName,
            headline: meta.headline || `Try ${pName} Today`,
            primary_text: meta.primary_text || pValueProp,
            banner_headline: vHeroVal,
            banner_sub: vSubVal,
            cta: meta.cta_button || "Learn More",
            concept: meta.suggested_visual_concept || "High-impact conversion creative."
          },
          google: {
            h1: (google.headlines && google.headlines[0]) || pName,
            h2: (google.headlines && google.headlines[1]) || "Official Website",
            h3: (google.headlines && google.headlines[2]) || "Get Started Today",
            d1: (google.descriptions && google.descriptions[0]) || pValueProp.slice(0, 90),
            d2: (google.descriptions && google.descriptions[1]) || "Transparent pricing & fast onboarding. Try today."
          },
          tiktok: {
            hook: ttHookVal.startsWith("Visual:") ? ttHookVal : `Visual: High-energy pattern-interrupt hook. Spoken: "${ttHookVal}"`,
            points: ttPointsList,
            cta: ttCtaVal
          },
          linkedin: {
            slides: normalizedSlides
          },
          visual: {
            hero: vHeroVal,
            sub: vSubVal,
            cta: meta.cta_button || "Claim Offer",
            prompt: vPromptVal
          }
        };

        renderCampaign(mappedData);

      } catch (err) {
        alert(`Connection Error: ${err.message}. Please check if the local server on port 8094 is active.`);
      } finally {
        if (generateBtn) generateBtn.disabled = remainingQuota <= 0;
        if (genSpinner) genSpinner.classList.add('hidden');
        if (genBtnLabel) genBtnLabel.textContent = "⚡ Generate Multi-Channel Campaign Kit";
      }
    });
  }

  // 7. Clipboard Copy Handlers with Visual Feedback
  function setupCopyButton(btn, textGetter) {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = textGetter();
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = "<span>✓ Copied to Clipboard!</span>";
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      });
    });
  }

  setupCopyButton(copyMetaTextBtn, () => {
    const m = currentCampaignData.meta || {};
    return `--- META / INSTAGRAM AD COPY ---\nHEADLINE: ${m.headline || ''}\nCTA: ${m.cta || ''}\n\nPRIMARY TEXT:\n${m.primary_text || ''}\n\nVISUAL CONCEPT:\n${m.concept || ''}`;
  });

  setupCopyButton(copyGoogleBtn, () => {
    const g = currentCampaignData.google || {};
    return `--- GOOGLE SEARCH AD (RSA) ---\nHEADLINE 1: ${g.h1 || ''}\nHEADLINE 2: ${g.h2 || ''}\nHEADLINE 3: ${g.h3 || ''}\n\nDESCRIPTION 1: ${g.d1 || ''}\nDESCRIPTION 2: ${g.d2 || ''}`;
  });

  setupCopyButton(copyTiktokBtn, () => {
    const tt = currentCampaignData.tiktok || {};
    return `--- TIKTOK / REELS 30s SCRIPT ---\nHOOK:\n${tt.hook || ''}\n\nSCENES:\n${(tt.points || []).join('\n')}\n\nCTA:\n${tt.cta || ''}`;
  });

  setupCopyButton(copyCarouselBtn, () => {
    const slides = getCarouselSlides();
    return `--- LINKEDIN 5-SLIDE CAROUSEL DECK ---\n\n` + slides.map((s, i) => `[SLIDE ${i + 1}: ${s.title || s.heading || ''}]\n${s.body || s.content || ''}\n`).join('\n');
  });

  setupCopyButton(copyMjPromptBtn, () => {
    return (currentCampaignData.visual && currentCampaignData.visual.prompt) || "";
  });

  // 8. Copy Complete Kit
  setupCopyButton(btnCopyAll, () => {
    return buildMarkdownKit(currentCampaignData);
  });

  // 9. Download .MD Campaign Kit
  if (btnDownloadKit) {
    btnDownloadKit.addEventListener('click', (e) => {
      e.preventDefault();
      const mdContent = buildMarkdownKit(currentCampaignData);
      const title = currentCampaignData.campaign_title || "campaign_kit";
      const filename = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.md`;

      const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  function buildMarkdownKit(data) {
    const m = data.meta || {};
    const g = data.google || {};
    const tt = data.tiktok || {};
    const li = getCarouselSlides();
    const v = data.visual || {};

    return `# ${data.campaign_title || 'Multi-Channel Campaign Strategy Kit'}
*Generated by ContentSprint AI · Architecture by Michael Jay Diaz (MJ)*

---

## 📱 Channel 1: Meta & Instagram Feed Ad
- **Headline**: ${m.headline || ''}
- **Call to Action**: ${m.cta || 'Learn More'}
- **Suggested Visual Creative**: ${m.concept || ''}

### Primary Text:
${m.primary_text || ''}

---

## 🔍 Channel 2: Google Search Responsive Ads (RSA)
### Headlines (Max 30 chars):
1. \`${g.h1 || ''}\`
2. \`${g.h2 || ''}\`
3. \`${g.h3 || ''}\`

### Descriptions (Max 90 chars):
1. \`${g.d1 || ''}\`
2. \`${g.d2 || ''}\`

---

## 🎬 Channel 3: TikTok & Instagram Reels 30s Script
### Hook (0:00 – 0:03):
${tt.hook || ''}

### Body Scenes (0:03 – 0:20):
${(tt.points || []).map(p => `- ${p}`).join('\n')}

### Call to Action (0:20 – 0:30):
${tt.cta || ''}

---

## 📑 Channel 4: LinkedIn 5-Slide Thought Leadership Carousel
${li.map((s, i) => `### Slide ${i + 1}: ${s.title}\n${s.body}\n*(Footer: ${s.author})*`).join('\n\n')}

---

## 🎨 Channel 5: Visual Ad Mockup & Generative AI Prompt
- **Banner Headline**: ${v.hero || ''}
- **Banner Subtitle**: ${v.sub || ''}
- **Banner CTA**: ${v.cta || ''}

### Midjourney / Flux Prompt:
\`\`\`
${v.prompt || ''}
\`\`\`
`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  // Initial Load: Activate the SaaS Preset
  const initialPresetBtn = document.querySelector('.preset-btn[data-preset="saas"]');
  if (initialPresetBtn) {
    initialPresetBtn.click();
  } else {
    renderCampaign(PRESETS.saas.data);
  }
});
