// ApexSMB — Turnkey Small & Medium Business Digital Platform
// Built by Michael Jay Diaz (MJ) · Human + AI Synergy Showcase

document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive Industry Catalog with Real-World Assets
  const INDUSTRIES = {
    wellness: {
      id: "wellness",
      heroImage: "assets/dental_hero.jpg",
      brandName: "Lumina Dental & Aesthetics",
      brandTagline: "Gentle Modern Dentistry & Cosmetic Smile Studio",
      brandIcon: "✨",
      phone: "(555) 234-8900",
      phoneTel: "tel:5552348900",
      phoneLabel: "Appointments & Inquiries",
      heroBadge: "Accepting New Patients · Same-Day Appointments Available",
      heroTitle: "World-Class Dental Care in a Calming Spa Environment",
      heroDescription: "Gentle, anxiety-free cosmetic and restorative dentistry with state-of-the-art 3D imaging. Transparent upfront pricing, accepted insurance, and zero judgment.",
      heroBookLabel: "Book Visit in 60s",
      ratingScore: "4.9 / 5.0",
      reviewCount: "on Google (520+ verified patient reviews)",
      insuranceBadge: "🛡️ In-Network with Delta Dental, MetLife, Cigna, Guardian",
      
      floatingCardTitle: "Check Pricing & Insurance Instantly",
      floatingCardDesc: "Our smart concierge verifies dental insurance and answers treatment questions 24/7.",
      floatingQuickChips: [
        { label: "⏰ Hours & Location", q: "What are your business hours?" },
        { label: "💳 Insurance In-Network", q: "Do you accept dental insurance?" },
        { label: "💵 Whitening Cost", q: "How much is teeth whitening?" }
      ],

      trustLabel: "Accreditations & Clinical Standards:",
      trustBadges: [
        { icon: "🦷", name: "American Dental Association (ADA)" },
        { icon: "💎", name: "Invisalign Diamond Provider" },
        { icon: "💳", name: "CareCredit 0% Financing" },
        { icon: "📡", name: "iTero 3D Digital Imaging" }
      ],

      servicesEyebrow: "Comprehensive Treatments",
      servicesHeading: "Advanced Dentistry with Transparent Pricing",
      servicesSub: "From routine preventive wellness to complete cosmetic smile design, experienced by thousands of happy patients.",
      services: [
        {
          badge: "Most Popular",
          icon: "🦷",
          title: "Laser Teeth Whitening",
          desc: "In-office 45-minute laser activation delivering up to 8 shades brighter with gentle desensitizing therapy and take-home maintenance kit.",
          price: "$299 Complete"
        },
        {
          badge: "Diamond Provider",
          icon: "💎",
          title: "Invisalign & Clear Aligners",
          desc: "Complete 3D digital iTero scan with instant smile outcome simulation. Discreet, comfortable alignment without metal brackets.",
          price: "Free Scan · From $120/mo"
        },
        {
          badge: "Spa Therapy",
          icon: "✨",
          title: "HydraFacial Glow & TMJ Relief",
          desc: "Deep facial exfoliation combined with therapeutic jaw tension relaxation for a refreshed, radiant look before big events.",
          price: "$185 / Session"
        },
        {
          badge: "Cosmetic Artistry",
          icon: "🌿",
          title: "Porcelain Veneers & Makeovers",
          desc: "Custom handcrafted ultra-thin ceramic veneers engineered to correct chips, gaps, and severe discoloration permanently.",
          price: "$850 / Tooth"
        }
      ],

      resultsEyebrow: "Real Patient Results",
      resultsHeading: "Proven Smile Transformations",
      resultsSub: "See why patients across the Bay Area trust Lumina for their life-changing aesthetic transformations.",
      results: [
        {
          badge: "Teeth Whitening",
          title: "8 Shades Lighter in 45 Minutes",
          desc: "Patient achieved a natural luminous glow before her wedding day using our proprietary zero-sensitivity laser whitening protocol."
        },
        {
          badge: "Clear Aligners",
          title: "Severe Crowding Corrected in 7 Months",
          desc: "Using customized weekly Invisalign trays and 3D digital monitoring, full arch alignment was achieved without tooth extractions."
        },
        {
          badge: "Porcelain Veneers",
          title: "Full 6-Unit Cosmetic Smile Makeover",
          desc: "Corrected worn enamel and uneven spacing with bespoke handcrafted porcelain veneers, restoring natural facial balance."
        }
      ],

      teamEyebrow: "Clinical Leadership",
      teamHeading: "Meet Your Dedicated Doctors",
      teamSub: "Our doctors combine Ivy League training with gentle, empathetic chairside care.",
      team: [
        {
          avatar: "👩‍⚕️",
          name: "Dr. Sarah Lin, DDS",
          role: "Lead Cosmetic & Restorative Dentist",
          bio: "Graduate of UCSF School of Dentistry. Member of the American Academy of Cosmetic Dentistry with over 12 years of gentle restorative experience."
        },
        {
          avatar: "👨‍⚕️",
          name: "Dr. Julian Vance, DDS, MS",
          role: "Orthodontist & Clear Aligner Specialist",
          bio: "Specializes in digital clear aligner biomechanics and airway-centered orthodontics. Completed residency at Columbia University College of Dental Medicine."
        }
      ],

      calcTitle: "Dental Treatment Cost Estimator",
      calcSubtitle: "Select treatments to calculate your out-of-pocket investment with transparent pricing and zero surprises.",
      calcItems: [
        { id: "opt_whitening", name: "In-Office Laser Teeth Whitening + Take-Home Kit", price: 299, checked: true },
        { id: "opt_cleaning", name: "Comprehensive Preventive Exam & 3D Digital Scan", price: 150, checked: true },
        { id: "opt_hydra", name: "Deluxe HydraFacial Glow Therapy", price: 185, checked: false },
        { id: "opt_sedation", name: "Spa Comfort Package (Warm Towels, Noise-Canceling)", price: 0, checked: true }
      ],

      reviews: [
        { quote: "“The most calming dental experience I've ever had. Dr. Lin explained everything on the 3D screen, and my teeth whitening was completely painless!”", author: "Amanda Sterling", location: "San Francisco, CA" },
        { quote: "“I asked Ava their AI assistant about financing on a Sunday night at 11 PM and was booked for Tuesday morning within 2 minutes. Outstanding!”", author: "Marcus Vance", location: "Oakland, CA" },
        { quote: "“Transparent pricing, zero pressure, and a clinic that feels like a 5-star spa hotel. Lumina sets a new standard for modern clinics.”", author: "Dr. Elena Rostova", location: "Marin County, CA" }
      ],

      footerCtaTitle: "Ready for a Healthier, Brighter Smile?",
      footerCtaSub: "Reserve your first appointment online in under 60 seconds. New patient specials applied automatically.",
      footerAddress: "450 Grand Avenue, Suite 300 · San Francisco, CA · (555) 234-8900",

      agent: {
        name: "Ava · 24/7 Patient Concierge",
        avatar: "👩‍⚕️",
        triggerLabel: "Ask 24/7 AI Concierge",
        greeting: "👋 Hi there! I'm Ava, the 24/7 patient concierge for Lumina Dental Clinic. How can I help you today? Ask about pricing, insurance, treatments, or scheduling a visit!",
        chips: [
          { q: "What are your business hours?", a: "Lumina Dental is open Mon-Fri from 8:00 AM - 7:00 PM, and Saturdays from 9:00 AM - 4:00 PM. We also offer same-day emergency appointments!" },
          { q: "Do you accept dental insurance?", a: "Yes! We are in-network with Delta Dental, MetLife, Cigna, Guardian, and most major PPO plans. We verify benefits and file claims on your behalf." },
          { q: "How much is teeth whitening?", a: "Our in-office Laser Whitening is $299 complete (includes before/after shade analysis and a take-home maintenance kit). It takes only 45 minutes!" }
        ]
      }
    },

    contractor: {
      id: "contractor",
      heroImage: "assets/contractor_hero.jpg",
      brandName: "ProCraft Home & HVAC",
      brandTagline: "Licensed HVAC, Plumbing & Emergency Contracting",
      brandIcon: "🔧",
      phone: "(555) 890-3400",
      phoneTel: "tel:5558903400",
      phoneLabel: "24/7 Emergency Dispatch",
      heroBadge: "🚨 24/7 Dispatch · Guaranteed 60-Minute Arrival for Emergencies",
      heroTitle: "Expert HVAC & Plumbing Done Right The First Time",
      heroDescription: "Licensed master technicians for emergency repairs, heat pump upgrades, and whole-home plumbing. Upfront flat-rate pricing with a 5-Year Workmanship Warranty.",
      heroBookLabel: "Schedule Dispatch Online",
      ratingScore: "4.9 / 5.0",
      reviewCount: "on Google (780+ verified homeowner reviews)",
      insuranceBadge: "🛡️ $2,000,000 Liability Insured · Master License #49102",

      floatingCardTitle: "Emergency Dispatch & Instant Quotes",
      floatingCardDesc: "Our automated dispatch coordinator provides upfront repair quotes and routes technicians 24/7.",
      floatingQuickChips: [
        { label: "🚨 24/7 Emergency Dispatch", q: "Do you offer 24/7 emergency dispatch?" },
        { label: "❄️ AC Tune-Up Pricing", q: "How much is an AC tune-up?" },
        { label: "🛡️ Warranty Details", q: "What warranties are included?" }
      ],

      trustLabel: "Licenses, Ratings & Certifications:",
      trustBadges: [
        { icon: "🛡️", name: "BBB Accredited A+ Rating" },
        { icon: "❄️", name: "NATE Certified Master Techs" },
        { icon: "⭐", name: "Google Guaranteed ($2K Protection)" },
        { icon: "⚡", name: "EPA Clean Air Certified" }
      ],

      servicesEyebrow: "Our Core Services",
      servicesHeading: "Full-Service Residential & Commercial Mechanical",
      servicesSub: "Emergency response and planned high-efficiency equipment upgrades backed by master contractors.",
      services: [
        {
          badge: "Tax Credit Eligible",
          icon: "❄️",
          title: "Heat Pump & AC Installations",
          desc: "Ultra-quiet 20+ SEER2 inverter heat pumps. Slash your winter heating and summer cooling electric bills by up to 45%.",
          price: "Free Estimate · From $3,800"
        },
        {
          badge: "60-Min Dispatch",
          icon: "🛠️",
          title: "24/7 Emergency Plumbing Repair",
          desc: "Burst pipes, mainline blockages, or sump pump failures. Fully stocked service trucks ready for immediate dispatch.",
          price: "$180 Service Dispatch"
        },
        {
          badge: "Energy Saver",
          icon: "🔥",
          title: "Tankless Water Heater Upgrades",
          desc: "Endless on-demand hot water with commercial-grade Navien condensing units. Compact wall mount saves 80% basement floor space.",
          price: "Installed from $1,450"
        },
        {
          badge: "Seasonal Special",
          icon: "⚡",
          title: "28-Point Precision HVAC Tune-Up",
          desc: "Full refrigerant charge check, electrical safety audit, coil cleaning, and airflow balancing before severe seasonal weather.",
          price: "$99 Seasonal Special"
        }
      ],

      resultsEyebrow: "Recent Projects",
      resultsHeading: "Proven Contracting Deliverables",
      resultsSub: "See real homeowner installations completed on time and strictly within budget.",
      results: [
        {
          badge: "Emergency HVAC",
          title: "Sub-Zero Furnace Replacement in 4 Hours",
          desc: "Dispatched during a Denver winter blizzard. Replaced a cracked heat exchanger and restored heating to 72°F the same afternoon."
        },
        {
          badge: "Plumbing Overhaul",
          title: "Trenchless Sewer Line Repair",
          desc: "Repaired 80 feet of collapsed clay pipe beneath a paved driveway without digging up the lawn, saving the client $4,200 in landscape restoration."
        },
        {
          badge: "Heat Pump Conversion",
          title: "Zero-Emission High-Efficiency Heat Pump",
          desc: "Converted an outdated oil furnace to an all-electric dual-fuel heat pump, qualifying the homeowner for a $2,000 Federal IRA tax rebate."
        }
      ],

      teamEyebrow: "Master Technicians",
      teamHeading: "Meet Your Field Leadership",
      teamSub: "Background-checked, drug-tested, and certified master contractors who treat your home with respect.",
      team: [
        {
          avatar: "👷‍♂️",
          name: "Mike Gallagher",
          role: "Master HVAC Specialist & Co-Founder",
          bio: "22 years in commercial and residential refrigeration. Holds NATE Master Certification and EPA Universal License #HVAC-9941."
        },
        {
          avatar: "👨‍🔧",
          name: "Dave Martinez",
          role: "Master Plumber & Emergency Dispatch Lead",
          bio: "Specializes in high-pressure hydronic heating, tankless boiler systems, and municipal sewer engineering with over 18 years of field leadership."
        }
      ],

      calcTitle: "Instant Contracting & Repair Cost Estimator",
      calcSubtitle: "Select the services you need to estimate your investment with upfront transparent pricing.",
      calcItems: [
        { id: "opt_tuneup", name: "28-Point Precision HVAC Seasonal Tune-Up", price: 99, checked: true },
        { id: "opt_filter", name: "Hospital-Grade HEPA Media Air Filter Replacement", price: 65, checked: true },
        { id: "opt_thermostat", name: "Smart Wi-Fi Thermostat (Installed & Paired)", price: 180, checked: false },
        { id: "opt_dispatch", name: "Guaranteed Priority Arrival Guarantee (Free)", price: 0, checked: true }
      ],

      reviews: [
        { quote: "“Our furnace failed during a freezing night. Jack on their AI chat dispatched Dave who arrived in 40 minutes. Absolute lifesavers!”", author: "David Henderson", location: "Denver, CO" },
        { quote: "“Replaced our 15-year-old AC unit with a heat pump. Upfront quote was honored to the penny, and the crew left the garage cleaner than they found it.”", author: "Sarah Jenkins", location: "Boulder, CO" },
        { quote: "“The online quote calculator gave me an exact estimate that matched the final invoice. Best contractor experience hands down.”", author: "Robert Miller", location: "Aurora, CO" }
      ],

      footerCtaTitle: "Need Immediate Service or a Free Estimate?",
      footerCtaSub: "Schedule an on-site master technician online or call our 24/7 emergency dispatch line.",
      footerAddress: "842 Industrial Blvd, Suite 100 · Denver, CO · (555) 890-3400",

      agent: {
        name: "Jack · 24/7 Dispatch AI",
        avatar: "👷",
        triggerLabel: "Ask 24/7 Dispatch AI",
        greeting: "🔧 Hello! I'm Jack, the 24/7 Dispatch Coordinator for ProCraft Home Services. Need an emergency technician dispatched, or looking for an HVAC or plumbing quote?",
        chips: [
          { q: "Do you offer 24/7 emergency dispatch?", a: "Yes, our certified technicians are on standby 24/7/365. For active leaks or heating outages, we guarantee arrival within 60 minutes!" },
          { q: "How much is an AC tune-up?", a: "Our comprehensive 28-point HVAC tune-up and safety inspection is currently on special for $99 (regularly $169)." },
          { q: "What warranties are included?", a: "Every ProCraft repair comes with a 1-year parts & labor guarantee. Full system installations include our 5-Year Master Workmanship Warranty." }
        ]
      }
    },

    legal: {
      id: "legal",
      heroImage: "assets/legal_hero.jpg",
      brandName: "Vanguard Legal & Wealth",
      brandTagline: "Business Law, Wealth Structuring & Corporate Counsel",
      brandIcon: "⚖️",
      phone: "(555) 710-9200",
      phoneTel: "tel:5557109200",
      phoneLabel: "Confidential Client Inquiries",
      heroBadge: "🔒 Confidential Counsel · Initial 20-Min Discovery Call Included",
      heroTitle: "Strategic Legal Counsel for Founders & Families",
      heroDescription: "Protecting enterprise equity and generational wealth. Flat-fee corporate structuring, contract auditing, and estate planning with zero billing surprises.",
      heroBookLabel: "Schedule Discovery Call",
      ratingScore: "5.0 / 5.0",
      reviewCount: "Martindale-Hubbell AV Preeminent Rated",
      insuranceBadge: "🛡️ Attorney-Client Privilege Protected · State Bar Certified",

      floatingCardTitle: "Confidential Intake & Advisory Pricing",
      floatingCardDesc: "Our AI intake specialist answers practice area questions and schedules partner consultations.",
      floatingQuickChips: [
        { label: "🔒 Confidentiality Guarantee", q: "Is the initial consultation confidential?" },
        { label: "📜 Living Trust Pricing", q: "How much does a Living Trust cost?" },
        { label: "💼 Fractional General Counsel", q: "What is Fractional General Counsel?" }
      ],

      trustLabel: "Peer Ratings & Legal Accreditations:",
      trustBadges: [
        { icon: "🏛️", name: "Martindale-Hubbell AV Preeminent 5.0" },
        { icon: "⭐", name: "Super Lawyers 2026 Rated" },
        { icon: "⚖️", name: "American Bar Association Member" },
        { icon: "📜", name: "Best Law Firms Tier 1 Corporate" }
      ],

      servicesEyebrow: "Practice Areas",
      servicesHeading: "High-Impact Counsel with Transparent Flat Fees",
      servicesSub: "Eliminate unpredictable hourly billings. Strategic legal execution designed to mitigate liability and preserve capital.",
      services: [
        {
          badge: "Founders & Startups",
          icon: "🏛️",
          title: "Corporate Entity Formation",
          desc: "Delaware C-Corp, LLC, operating agreements, IP assignment deeds, and founder 83(b) tax election filing.",
          price: "Flat Fee from $850"
        },
        {
          badge: "Wealth Protection",
          icon: "📜",
          title: "Revocable Living Trust & Estate",
          desc: "Comprehensive estate plan to shield assets from probate, reduce estate tax liability, and ensure smooth generational inheritance.",
          price: "Packages from $1,950"
        },
        {
          badge: "Risk Mitigation",
          icon: "🔍",
          title: "Commercial Contract Risk Audit",
          desc: "Detailed redline review of SaaS agreements, vendor MSAs, customer terms, and employment non-solicitation covenants.",
          price: "$450 / Agreement"
        },
        {
          badge: "Executive Advisory",
          icon: "💼",
          title: "Fractional General Counsel",
          desc: "Ongoing senior legal counsel on monthly retainer for board governance, risk oversight, commercial negotiations, and compliance.",
          price: "Retainers from $1,500/mo"
        }
      ],

      resultsEyebrow: "Representative Matters",
      resultsHeading: "Proven Transactional Outcomes",
      resultsSub: "A track record of protecting founders, family offices, and growing enterprises.",
      results: [
        {
          badge: "Venture Financing",
          title: "$14.5M Series A Preferred Stock Financing",
          desc: "Represented a high-growth AI SaaS company through term sheet negotiation, investor diligence, and definitive stock purchase agreements."
        },
        {
          badge: "Estate & Trust",
          title: "$28M Generational Family Asset Shelter",
          desc: "Structured an irrevocable dynasty trust and family limited partnership, insulating private equity and real estate holdings from probate and estate tax."
        },
        {
          badge: "Commercial Dispute",
          title: "Zero-Litigation Contract Dispute Resolution",
          desc: "Successfully negotiated settlement in an enterprise software breach of contract dispute, recovering 100% of outstanding licensing fees without litigation."
        }
      ],

      teamEyebrow: "Senior Partners",
      teamHeading: "Meet Your Strategic Counsel",
      teamSub: "Senior partners who bring institutional rigor from elite law schools and federal clerkships.",
      team: [
        {
          avatar: "👨‍⚖️",
          name: "Marcus Vance, Esq.",
          role: "Managing Partner · Corporate & Venture Practice",
          bio: "J.D., Harvard Law School. Formerly with Cooley LLP. Specializes in startup formation, cross-border venture financings, and executive governance."
        },
        {
          avatar: "👩‍⚖️",
          name: "Eleanor Sterling, Esq.",
          role: "Partner · Private Wealth & Estate Planning",
          bio: "J.D., Columbia Law School. Certified Specialist in Estate Planning, Trust & Probate Law with over 16 years advising high-net-worth families."
        }
      ],

      calcTitle: "Legal Representation Investment Calculator",
      calcSubtitle: "Select legal services to calculate flat-fee representation with zero hidden billable hours.",
      calcItems: [
        { id: "opt_llc", name: "Corporate Entity Formation & Operating Agreement", price: 850, checked: true },
        { id: "opt_ein", name: "Federal Tax EIN & Initial State Securities Compliance", price: 150, checked: true },
        { id: "opt_contract", name: "Master Services Agreement (MSA) Custom Draft", price: 650, checked: false },
        { id: "opt_discovery", name: "20-Minute Senior Partner Discovery Strategy Call (Free)", price: 0, checked: true }
      ],

      reviews: [
        { quote: "“Vanguard structured our Series Seed corporate entity and founder agreements. Transparent flat fees with elite legal precision.”", author: "Julian Thorne", location: "New York, NY" },
        { quote: "“Completed our family revocable trust in two weeks. Their digital client intake made an intimidating legal process crystal clear.”", author: "Katherine DuMont", location: "Greenwich, CT" },
        { quote: "“Having their Fractional GC plan gives our startup the confidence to negotiate 7-figure enterprise contracts without fear.”", author: "Leo Chen", location: "Boston, MA" }
      ],

      footerCtaTitle: "Protect Your Business & Legacy Today",
      footerCtaSub: "Schedule a confidential discovery consultation with our senior partners.",
      footerAddress: "100 Wall Street, 24th Floor · New York, NY · (555) 710-9200",

      agent: {
        name: "Sophia · Client Intake AI",
        avatar: "⚖️",
        triggerLabel: "Ask Legal Intake AI",
        greeting: "⚖️ Welcome to Vanguard Legal & Wealth Advisory. I'm Sophia, your confidential intake specialist. How can we assist your business or family estate today?",
        chips: [
          { q: "Is the initial consultation confidential?", a: "Yes, all communications with our office and intake tools are strictly protected by attorney-client privilege. Your initial 20-minute discovery session is complimentary." },
          { q: "How much does a Living Trust cost?", a: "Our comprehensive Family Revocable Living Trust packages start at a transparent flat fee of $1,950, which includes pour-over wills, healthcare directives, and property deeds." },
          { q: "What is Fractional General Counsel?", a: "It's an ongoing monthly partnership starting at $1,500/mo that gives your business direct access to senior legal counsel for contract reviews, compliance, and strategic advisory without hiring in-house." }
        ]
      }
    }
  };

  // State
  let currentIndustry = 'wellness';
  let remainingChats = 5;
  let activeCalcSelections = {};

  // DOM Elements
  const indButtons = document.querySelectorAll('.ind-btn');
  const emergencyBar = document.getElementById('emergency-bar');
  const brandName = document.getElementById('brand-name');
  const brandTagline = document.getElementById('brand-tagline');
  const brandIcon = document.getElementById('brand-icon');
  const businessPhone = document.getElementById('business-phone');
  const phoneLabel = document.getElementById('phone-label');
  const heroBadgeText = document.getElementById('hero-badge-text');
  const heroTitle = document.getElementById('hero-title');
  const heroDescription = document.getElementById('hero-description');
  const heroBookLabel = document.getElementById('hero-book-label');
  const heroImage = document.getElementById('hero-image');
  const ratingScore = document.getElementById('rating-score');
  const reviewCount = document.getElementById('review-count');
  const insuranceBadge = document.getElementById('insurance-badge');
  const floatingCardTitle = document.getElementById('floating-card-title');
  const floatingCardDesc = document.getElementById('floating-card-desc');
  const heroQuickChips = document.getElementById('hero-quick-chips');

  const trustLabel = document.getElementById('trust-label');
  const trustBadgesRow = document.getElementById('trust-badges-row');
  const servicesEyebrow = document.getElementById('services-eyebrow');
  const servicesHeading = document.getElementById('services-heading');
  const servicesSub = document.getElementById('services-sub');
  const servicesGrid = document.getElementById('services-grid');

  const resultsEyebrow = document.getElementById('results-eyebrow');
  const resultsHeading = document.getElementById('results-heading');
  const resultsSub = document.getElementById('results-sub');
  const resultsGrid = document.getElementById('results-grid');

  const teamEyebrow = document.getElementById('team-eyebrow');
  const teamHeading = document.getElementById('team-heading');
  const teamSub = document.getElementById('team-sub');
  const teamGrid = document.getElementById('team-grid');

  const calcTitle = document.getElementById('calc-title');
  const calcSubtitle = document.getElementById('calc-subtitle');
  const calcControls = document.getElementById('calc-controls');
  const calcTotalDisplay = document.getElementById('calc-total-display');
  const calcLineItems = document.getElementById('calc-line-items');
  const calcBookBtn = document.getElementById('calc-book-btn');

  const reviewsGrid = document.getElementById('reviews-grid');
  const footerCtaTitle = document.getElementById('footer-cta-title');
  const footerCtaSub = document.getElementById('footer-cta-sub');
  const footerBrand = document.getElementById('footer-brand');
  const footerAddress = document.getElementById('footer-address');

  // Booking Modal Elements
  const bookingModal = document.getElementById('booking-modal');
  const headerBookBtn = document.getElementById('header-book-btn');
  const heroBookBtn = document.getElementById('hero-book-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const bookingForm = document.getElementById('booking-form');
  const bookServiceSelect = document.getElementById('book-service-select');
  const bookingConfirmation = document.getElementById('booking-confirmation');
  const confDetails = document.getElementById('conf-details');
  const confDoneBtn = document.getElementById('conf-done-btn');
  const modalBizName = document.getElementById('modal-biz-name');

  // Chat Elements
  const chatWindow = document.getElementById('chat-window');
  const chatTriggerBtn = document.getElementById('chat-trigger-btn');
  const chatTriggerLbl = document.getElementById('chat-trigger-lbl');
  const chatCloseBtn = document.getElementById('chat-close-btn');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatForm = document.getElementById('chat-form');
  const agentName = document.getElementById('agent-name');
  const agentAvatar = document.getElementById('agent-avatar');
  const chatGreeting = document.getElementById('chat-greeting');
  const chatQuickChips = document.getElementById('chat-quick-chips');
  const chatDemoPill = document.getElementById('chat-demo-pill');

  // Sync Demo Quota from Server
  async function syncChatDemoStatus() {
    try {
      const res = await fetch('/api/demo-status');
      const data = await res.json();
      remainingChats = typeof data.remaining_credits === 'number' ? data.remaining_credits : 5;
      updateChatDemoPill();
    } catch (e) {
      console.warn("Could not sync chat quota", e);
    }
  }

  function updateChatDemoPill() {
    if (chatDemoPill) {
      chatDemoPill.textContent = `${remainingChats}/5 Free Demo Chats`;
      if (remainingChats <= 0) {
        chatDemoPill.style.background = "rgba(244, 63, 94, 0.2)";
        chatDemoPill.style.color = "#fb7185";
      }
    }
  }

  syncChatDemoStatus();

  // Set Industry Function
  function setIndustry(indKey) {
    const data = INDUSTRIES[indKey];
    if (!data) return;
    currentIndustry = indKey;

    document.body.setAttribute('data-industry', indKey);

    // Toggle emergency dispatch bar for contractor
    if (indKey === 'contractor') {
      emergencyBar.classList.remove('hidden');
    } else {
      emergencyBar.classList.add('hidden');
    }

    // Update Header & Brand
    brandName.textContent = data.brandName;
    brandTagline.textContent = data.brandTagline;
    brandIcon.textContent = data.brandIcon;
    businessPhone.textContent = data.phone;
    businessPhone.href = data.phoneTel;
    phoneLabel.textContent = data.phoneLabel;
    modalBizName.textContent = `Schedule Visit · ${data.brandName}`;

    // Update Hero Content & Real Photography Image
    heroBadgeText.textContent = data.heroBadge;
    heroTitle.textContent = data.heroTitle;
    heroDescription.textContent = data.heroDescription;
    heroBookLabel.textContent = data.heroBookLabel;
    heroImage.src = data.heroImage;
    ratingScore.textContent = data.ratingScore;
    reviewCount.textContent = data.reviewCount;
    insuranceBadge.textContent = data.insuranceBadge;

    floatingCardTitle.textContent = data.floatingCardTitle;
    floatingCardDesc.textContent = data.floatingCardDesc;
    heroQuickChips.innerHTML = data.floatingQuickChips.map(chip => `
      <button class="quick-chip" onclick="window.smbChat.openAndAsk('${chip.q}')">${chip.label}</button>
    `).join('');

    // Update Trust Badges
    trustLabel.textContent = data.trustLabel;
    trustBadgesRow.innerHTML = data.trustBadges.map(tb => `
      <div class="trust-badge-item">
        <span>${tb.icon}</span>
        <span>${tb.name}</span>
      </div>
    `).join('');

    // Update Services Grid
    servicesEyebrow.textContent = data.servicesEyebrow;
    servicesHeading.textContent = data.servicesHeading;
    servicesSub.textContent = data.servicesSub;
    servicesGrid.innerHTML = data.services.map(srv => `
      <div class="service-item-card">
        <div>
          <span class="srv-badge">${srv.badge}</span>
          <span class="srv-icon">${srv.icon}</span>
          <h3 class="srv-title">${srv.title}</h3>
          <p class="srv-desc">${srv.desc}</p>
        </div>
        <div class="srv-footer">
          <span class="srv-price">${srv.price}</span>
          <button type="button" class="srv-btn" onclick="window.smbBooking.openWithService('${srv.title}')">Reserve Now</button>
        </div>
      </div>
    `).join('');

    // Update Booking Modal Dropdown
    bookServiceSelect.innerHTML = data.services.map(srv => `
      <option value="${srv.title}">${srv.title} (${srv.price})</option>
    `).join('');

    // Update Case Studies / Results
    resultsEyebrow.textContent = data.resultsEyebrow;
    resultsHeading.textContent = data.resultsHeading;
    resultsSub.textContent = data.resultsSub;
    resultsGrid.innerHTML = data.results.map(res => `
      <div class="result-card">
        <div class="result-card-body">
          <span class="result-badge">${res.badge}</span>
          <h3 class="result-title">${res.title}</h3>
          <p class="result-desc">${res.desc}</p>
        </div>
      </div>
    `).join('');

    // Update Team / Doctors / Leadership
    teamEyebrow.textContent = data.teamEyebrow;
    teamHeading.textContent = data.teamHeading;
    teamSub.textContent = data.teamSub;
    teamGrid.innerHTML = data.team.map(member => `
      <div class="team-card">
        <div class="team-avatar-box">${member.avatar}</div>
        <h3 class="team-name">${member.name}</h3>
        <div class="team-role">${member.role}</div>
        <p class="team-bio">${member.bio}</p>
      </div>
    `).join('');

    // Update Calculator
    calcTitle.textContent = data.calcTitle;
    calcSubtitle.textContent = data.calcSubtitle;
    activeCalcSelections = {};
    data.calcItems.forEach(item => {
      activeCalcSelections[item.id] = item.checked;
    });
    renderCalculator(data.calcItems);

    // Update Reviews
    reviewsGrid.innerHTML = data.reviews.map(rev => `
      <div class="review-card">
        <div class="review-stars-row">★★★★★</div>
        <p class="review-quote">${rev.quote}</p>
        <strong class="review-author-name">${rev.author}</strong>
        <span class="review-author-city">${rev.location}</span>
      </div>
    `).join('');

    // Update Footer
    footerCtaTitle.textContent = data.footerCtaTitle;
    footerCtaSub.textContent = data.footerCtaSub;
    footerBrand.textContent = data.brandName;
    footerAddress.textContent = data.footerAddress;

    // Update AI Concierge
    agentName.textContent = data.agent.name;
    agentAvatar.textContent = data.agent.avatar;
    chatGreeting.textContent = data.agent.greeting;
    chatTriggerLbl.textContent = data.agent.triggerLabel;
    renderChatChips(data.agent.chips);
  }

  // Calculator Logic
  function renderCalculator(items) {
    calcControls.innerHTML = items.map(item => `
      <div class="calc-row ${activeCalcSelections[item.id] ? 'selected' : ''}" data-id="${item.id}">
        <div class="calc-row-left">
          <input type="checkbox" class="calc-checkbox" id="${item.id}" ${activeCalcSelections[item.id] ? 'checked' : ''}>
          <label for="${item.id}" class="calc-item-name">${item.name}</label>
        </div>
        <span class="calc-item-price">${item.price === 0 ? 'Complimentary' : '$' + item.price}</span>
      </div>
    `).join('');

    items.forEach(item => {
      const row = calcControls.querySelector(`[data-id="${item.id}"]`);
      const cb = row.querySelector('.calc-checkbox');
      row.addEventListener('click', (e) => {
        if (e.target !== cb) {
          cb.checked = !cb.checked;
        }
        activeCalcSelections[item.id] = cb.checked;
        row.classList.toggle('selected', cb.checked);
        updateCalcTotal();
      });
    });

    updateCalcTotal();
  }

  function updateCalcTotal() {
    const data = INDUSTRIES[currentIndustry];
    let total = 0;
    let selectedRowsHtml = '';

    data.calcItems.forEach(item => {
      if (activeCalcSelections[item.id]) {
        total += item.price;
        selectedRowsHtml += `
          <div class="breakdown-row">
            <span>${item.name}</span>
            <strong>${item.price === 0 ? '$0' : '$' + item.price}</strong>
          </div>
        `;
      }
    });

    calcTotalDisplay.textContent = `$${total.toLocaleString()}`;
    calcLineItems.innerHTML = selectedRowsHtml || `<div style="color: var(--text-dim); font-size: 0.85rem;">No services selected.</div>`;
  }

  // Industry Switcher Click Handlers
  indButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      indButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setIndustry(btn.dataset.industry);
    });
  });

  // Booking Modal Logic
  function openBookingModal(preselectedService = null) {
    bookingModal.classList.remove('hidden');
    bookingForm.classList.remove('hidden');
    bookingConfirmation.classList.add('hidden');

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('book-date');
    if (dateInput) {
      dateInput.min = tomorrow.toISOString().split('T')[0];
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }

    if (preselectedService && bookServiceSelect) {
      bookServiceSelect.value = preselectedService;
    }
  }

  function closeBookingModal() {
    bookingModal.classList.add('hidden');
  }

  if (headerBookBtn) headerBookBtn.addEventListener('click', () => openBookingModal());
  if (heroBookBtn) heroBookBtn.addEventListener('click', () => openBookingModal());
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeBookingModal);
  if (confDoneBtn) confDoneBtn.addEventListener('click', closeBookingModal);

  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
  });

  if (calcBookBtn) {
    calcBookBtn.addEventListener('click', () => {
      const data = INDUSTRIES[currentIndustry];
      openBookingModal(data.services[0]?.title);
    });
  }

  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-booking-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = "Confirming Appointment...";

    const payload = {
      name: document.getElementById('book-name').value,
      service: document.getElementById('book-service-select').value,
      date: document.getElementById('book-date').value,
      time: document.getElementById('book-time').value,
      phone: document.getElementById('book-phone').value,
      email: document.getElementById('book-email').value,
      industry: currentIndustry
    };

    try {
      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      bookingForm.classList.add('hidden');
      bookingConfirmation.classList.remove('hidden');

      confDetails.innerHTML = `
        <div><strong>Confirmation ID:</strong> ${result.booking_id}</div>
        <div><strong>Service:</strong> ${result.summary.service}</div>
        <div><strong>Scheduled For:</strong> ${result.summary.datetime}</div>
        <div><strong>Contact:</strong> ${result.summary.contact}</div>
        <div style="margin-top: 8px; font-size: 0.8rem; color: #10b981; font-weight: 600;">● ${result.summary.calendar_sync}</div>
        <div style="font-size: 0.8rem; color: #10b981; font-weight: 600;">● ${result.summary.sms_confirmation}</div>
      `;
    } catch (err) {
      alert("Could not process booking. Please try again or call our office directly.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Confirm Appointment & Sync Calendar";
    }
  });

  window.smbBooking = {
    openWithService: (serviceName) => openBookingModal(serviceName)
  };

  // AI Concierge Chat Logic
  function renderChatChips(chips) {
    chatQuickChips.innerHTML = chips.map(chip => `
      <button type="button" class="chat-chip" data-q="${chip.q}">${chip.q}</button>
    `).join('');

    chatQuickChips.querySelectorAll('.chat-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        handleUserQuery(btn.dataset.q, true);
      });
    });
  }

  function appendChatMessage(text, isUser = false) {
    const bubble = document.createElement('div');
    bubble.className = isUser ? 'user-bubble' : 'bot-bubble';
    bubble.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function handleUserQuery(question, isChip = false) {
    if (!question) return;

    appendChatMessage(question, true);

    const data = INDUSTRIES[currentIndustry];

    // Zero-token demo cache match
    if (isChip) {
      const match = data.agent.chips.find(c => c.q.toLowerCase() === question.toLowerCase());
      if (match) {
        setTimeout(() => {
          appendChatMessage(match.a, false);
        }, 300);
        return;
      }
    }

    // Custom query quota check
    if (remainingChats <= 0) {
      setTimeout(() => {
        appendChatMessage("🔒 Demo Limit Reached: You have tested the 5 free live AI questions. To install this 24/7 AI Receptionist on your business website, contact Michael Jay Diaz at michaeljayo.diaz@gmail.com.", false);
      }, 300);
      return;
    }

    // Call live backend AI proxy
    appendChatMessage("<em>Consulting clinic knowledge base...</em>", false);
    const thinkingBubble = chatMessages.lastElementChild;

    try {
      const res = await fetch('/api/smb-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question, industry: currentIndustry })
      });
      const jsonRes = await res.json();

      if (jsonRes.success && jsonRes.response) {
        thinkingBubble.innerHTML = `<p>${jsonRes.response}</p>`;
        if (typeof jsonRes.remaining_credits === 'number') {
          remainingChats = jsonRes.remaining_credits;
          updateChatDemoPill();
        }
      } else {
        thinkingBubble.innerHTML = `<p>${jsonRes.response || jsonRes.error || "Unable to reply at this time."}</p>`;
        if (jsonRes.quota_reached) {
          remainingChats = 0;
          updateChatDemoPill();
        }
      }
    } catch (e) {
      thinkingBubble.innerHTML = `<p>Network error connecting to AI Concierge.</p>`;
    }
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (query) {
      chatInput.value = '';
      handleUserQuery(query, false);
    }
  });

  chatTriggerBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
      chatInput.focus();
    }
  });

  chatCloseBtn.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
  });

  window.smbChat = {
    open: () => {
      chatWindow.classList.remove('hidden');
      chatInput.focus();
    },
    openAndAsk: (question) => {
      chatWindow.classList.remove('hidden');
      handleUserQuery(question, true);
    }
  };

  // Initialize with Dental Clinic
  setIndustry('wellness');
});
