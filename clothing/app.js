/**
 * GLAMOUR THE LABEL - E-Commerce App Logic
 * 24 Female Clothing Catalog, Multi-Currency, Filter/Sort, Cart Drawer, Wishlist & Checkout
 */

// ==========================================
// 1. PRODUCT CATALOG DATA (24 FEMALE STYLES)
// ==========================================
const PRODUCTS = [
  {
    id: 1,
    title: "French Cottagecore Ditsy Floral Slit Midi Dress",
    category: "dresses",
    salePrice: 16.99,
    originalPrice: 48.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 2840,
    badge: "FLASH SALE",
    badgeType: "flash",
    image: "assets/product_1.jpg",
    colors: ["#f7d794", "#778beb", "#f8a5c2"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Chiffon Polyester, non-stretch, breathable lining",
    description: "Romantic meadow floral print featuring a thigh-high slit, delicate sweetheart neckline, and flattering smocked back."
  },
  {
    id: 2,
    title: "Tokyo Streetwear Oversized Graphic Hoodie & Parachute Pants Set",
    category: "sets",
    salePrice: 24.99,
    originalPrice: 59.00,
    discount: 58,
    rating: 4.8,
    reviewsCount: 1420,
    badge: "HOT ITEM",
    badgeType: "hot",
    image: "assets/product_2.jpg",
    colors: ["#57606f", "#2f3542", "#a4b0be"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "80% Cotton, 20% Fleece Polyester",
    description: "The ultimate 2026 streetwear staple. Features a heavyweight oversized hoodie paired with adjustable toggled cargo parachute trousers."
  },
  {
    id: 3,
    title: "Emerald Lustrous Satin Cowl-Neck Evening Slip Gown",
    category: "dresses",
    salePrice: 21.49,
    originalPrice: 62.00,
    discount: 65,
    rating: 5.0,
    reviewsCount: 3890,
    badge: "TOP RATED",
    badgeType: "top-rated",
    image: "assets/product_3.jpg",
    colors: ["#10ac84", "#1e272e", "#c56cf0"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "97% Satin Poly, 3% Spandex with glossy sheen",
    description: "Liquid emerald satin with draped cowl neckline, cross-over open back straps, and floor-skimming mermaid drape."
  },
  {
    id: 4,
    title: "Vanilla Ribbed Knit 2-Piece Crop Cardigan & Midi Skirt Set",
    category: "sets",
    salePrice: 22.99,
    originalPrice: 55.00,
    discount: 58,
    rating: 4.9,
    reviewsCount: 1980,
    badge: "BESTSELLER",
    badgeType: "bestseller",
    image: "assets/product_4.jpg",
    colors: ["#f5f6fa", "#dcdde1", "#718093"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "70% Viscose, 30% Nylon fine ribbed knit",
    description: "Buttery soft cozy stretch rib knit. Long sleeve button-front cardigan coordinated with a high-waisted elasticized midi skirt."
  },
  {
    id: 5,
    title: "Downtown Faux-Leather Tailored Oversized Blazer Jacket",
    category: "outerwear",
    salePrice: 28.99,
    originalPrice: 79.99,
    discount: 64,
    rating: 4.8,
    reviewsCount: 2230,
    badge: "FLASH SALE",
    badgeType: "flash",
    image: "assets/product_5.jpg",
    colors: ["#2f3542", "#747d8c", "#8854d0"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "100% Polyurethane leather with satin lining",
    description: "Structured shoulder pads, notched lapel, front flap pockets, and buttery smooth faux vegan leather."
  },
  {
    id: 6,
    title: "Cozy Cable-Knit Mock Turtleneck Winter Sweater",
    category: "tops",
    salePrice: 18.49,
    originalPrice: 45.00,
    discount: 59,
    rating: 4.7,
    reviewsCount: 1640,
    badge: "HOT ITEM",
    badgeType: "hot",
    image: "assets/product_6.jpg",
    colors: ["#eccc68", "#ff7f50", "#70a1ff"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Acrylic thermal knit yarn",
    description: "Chunky cable-knit weave with drop-shoulder silhouette and ribbed mock turtleneck collar for maximum autumn layering warmth."
  },
  {
    id: 7,
    title: "Sunset Amber Ruffle Tiered Summer Sundress",
    category: "dresses",
    salePrice: 15.99,
    originalPrice: 39.99,
    discount: 60,
    rating: 4.8,
    reviewsCount: 1870,
    badge: "FLASH SALE",
    badgeType: "flash",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    colors: ["#ffa502", "#ff6348", "#2ed573"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "100% Rayon gauze, lightweight and airy",
    description: "Vibrant yellow tiered ruffle mini dress with halter tie neckline, open back, and flowing bohemian silhouette."
  },
  {
    id: 8,
    title: "Monochrome Minimalist Wool-Blend Belted Trench Coat",
    category: "outerwear",
    salePrice: 34.99,
    originalPrice: 89.00,
    discount: 61,
    rating: 4.9,
    reviewsCount: 3120,
    badge: "BESTSELLER",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    colors: ["#ced6e0", "#2f3542", "#dfe4ea"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Wool & Polyester blend with interior lining",
    description: "Chic editorial outerwear with storm flap, removable self-tie waist belt, horn buttons, and deep side welt pockets."
  },
  {
    id: 9,
    title: "Y2K Cropped Ribbed Baby Tee with Contrast Stitching",
    category: "tops",
    salePrice: 8.99,
    originalPrice: 24.00,
    discount: 63,
    rating: 4.6,
    reviewsCount: 4210,
    badge: "HOT ITEM",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    colors: ["#ff9ff3", "#54a0ff", "#5f27cd"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "95% Cotton, 5% Spandex stretch baby rib",
    description: "Vintage throwback crop tee with high crew neck, lettuce edge hem, and exposed colorful contrast stitching."
  },
  {
    id: 10,
    title: "High-Waisted Vintage Straight-Leg Mom Jeans",
    category: "pants",
    salePrice: 19.99,
    originalPrice: 52.00,
    discount: 62,
    rating: 4.9,
    reviewsCount: 5120,
    badge: "TOP RATED",
    badgeType: "top-rated",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    colors: ["#70a1ff", "#2f3542", "#dfe4ea"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "99% Cotton denim, 1% elastane comfort stretch",
    description: "Classic 90s vintage wash with flattering tummy-control high rise, rigid-look denim, and raw ankle hem."
  },
  {
    id: 11,
    title: "Scarlet Red Cross-Back Satin Party Mini Dress",
    category: "dresses",
    salePrice: 17.99,
    originalPrice: 49.00,
    discount: 63,
    rating: 4.9,
    reviewsCount: 2540,
    badge: "FLASH SALE",
    badgeType: "flash",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    colors: ["#ee5253", "#222f3e", "#00d2d3"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "Silky stretch poly satin",
    description: "Statement party mini dress with ruched body contouring, tiered ruffle hem, and sexy lace-up back design."
  },
  {
    id: 12,
    title: "Linen-Blend Relaxed Button-Up Resort Shirt",
    category: "tops",
    salePrice: 13.99,
    originalPrice: 36.00,
    discount: 61,
    rating: 4.7,
    reviewsCount: 1690,
    badge: "HOT ITEM",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=800&q=80",
    colors: ["#f1f2f6", "#2ed573", "#ffa502"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "55% Linen, 45% Cotton breathable weave",
    description: "Breezy vacation essential featuring drop shoulder, chest pocket, mother-of-pearl buttons, and rounded hemline."
  },
  {
    id: 13,
    title: "Sleek Seamless Sculpting Workout Biker Set",
    category: "sets",
    salePrice: 18.99,
    originalPrice: 48.00,
    discount: 60,
    rating: 4.8,
    reviewsCount: 3410,
    badge: "TOP RATED",
    badgeType: "top-rated",
    image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=800&q=80",
    colors: ["#2f3542", "#ff6b81", "#1e90ff"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "88% Nylon, 12% Spandex seamless 4-way stretch",
    description: "High-compression ribbed waistband shorts and supportive racerback padded sports bra with sweat-wicking tech."
  },
  {
    id: 14,
    title: "Wide-Leg Pleated Tailored Trousers in Sand Beige",
    category: "pants",
    salePrice: 21.99,
    originalPrice: 54.00,
    discount: 59,
    rating: 4.9,
    reviewsCount: 2780,
    badge: "BESTSELLER",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80",
    colors: ["#dcdde1", "#2f3542", "#718093"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Twill woven poly with fluid drape",
    description: "Clean aesthetic front pleats, hidden slide clasp, high-rise silhouette, and extra-long wide leg hem."
  },
  {
    id: 15,
    title: "Boho Chic Floral Lace Backless Sundress",
    category: "dresses",
    salePrice: 19.49,
    originalPrice: 52.00,
    discount: 63,
    rating: 4.8,
    reviewsCount: 1530,
    badge: "HOT ITEM",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    colors: ["#ffffff", "#f8a5c2", "#70a1ff"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "Embroidered cotton lace overlay with soft stretch slip",
    description: "Delicate crochet lace detailing, flowing A-line midi skirt, and romantic tied lace-up corset back."
  },
  {
    id: 16,
    title: "Vintage Washed Distressed Oversized Denim Jacket",
    category: "outerwear",
    salePrice: 26.99,
    originalPrice: 68.00,
    discount: 60,
    rating: 4.8,
    reviewsCount: 2980,
    badge: "TOP RATED",
    badgeType: "top-rated",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
    colors: ["#70a1ff", "#2f3542"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "100% Washed cotton denim",
    description: "Boyfriend fit distressed trucker jacket with dual chest pockets, copper hardware buttons, and raw frayed trim."
  },
  {
    id: 17,
    title: "Cargo Utility Low-Rise Wide Leg Street Pants",
    category: "pants",
    salePrice: 22.49,
    originalPrice: 58.00,
    discount: 61,
    rating: 4.7,
    reviewsCount: 2040,
    badge: "FLASH SALE",
    badgeType: "flash",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    colors: ["#57606f", "#2f3542", "#a4b0be"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Durable cotton twill",
    description: "6 functional utility flap pockets, adjustable ankle bungee toggles, and relaxed wide leg skate cut."
  },
  {
    id: 18,
    title: "Silky Cowl Neck Satin Camisole Top in Champagne",
    category: "tops",
    salePrice: 11.49,
    originalPrice: 29.00,
    discount: 60,
    rating: 4.9,
    reviewsCount: 3950,
    badge: "BESTSELLER",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800&q=80",
    colors: ["#f5cd79", "#2f3542", "#f8a5c2"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "96% Glossy poly satin, 4% elastane",
    description: "Versatile wardrobe staple with adjustable spaghetti straps, draped neckline, and double-layered bust."
  },
  {
    id: 19,
    title: "Autumn Knit Cozy Open-Front Cardigan Coat",
    category: "outerwear",
    salePrice: 25.99,
    originalPrice: 65.00,
    discount: 60,
    rating: 4.8,
    reviewsCount: 1820,
    badge: "HOT ITEM",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80",
    colors: ["#eccc68", "#747d8c", "#2f3542"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Chenille and acrylic soft knit blend",
    description: "Longline cozy knit cardigan with oversized patch pockets, ribbed cuffs, and plush thermal softness."
  },
  {
    id: 20,
    title: "Black Tie High-Slit Velvet Evening Gown",
    category: "dresses",
    salePrice: 27.99,
    originalPrice: 79.00,
    discount: 65,
    rating: 5.0,
    reviewsCount: 2190,
    badge: "TOP RATED",
    badgeType: "top-rated",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
    colors: ["#1e272e", "#c23616", "#192a56"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Plush stretch royal velvet with subtle sheen",
    description: "Red carpet glamour featuring an off-shoulder fold, sculpted corset boning, and daring thigh slit."
  },
  {
    id: 21,
    title: "Urban Skater Heavyweight Boxy Cropped Graphic Tee",
    category: "tops",
    salePrice: 10.99,
    originalPrice: 26.00,
    discount: 58,
    rating: 4.7,
    reviewsCount: 3100,
    badge: "FLASH SALE",
    badgeType: "flash",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    colors: ["#2f3542", "#ffffff", "#ff4757"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% 240GSM Heavyweight cotton",
    description: "Drop shoulder skater fit with screen-printed vintage typography and reinforced ribbed neck collar."
  },
  {
    id: 22,
    title: "Retro 70s Flare High-Rise Stretch Denim Trousers",
    category: "pants",
    salePrice: 23.49,
    originalPrice: 62.00,
    discount: 62,
    rating: 4.9,
    reviewsCount: 2470,
    badge: "BESTSELLER",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    colors: ["#3742fa", "#2f3542"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "75% Cotton, 23% Poly, 2% Spandex",
    description: "Elongating bell bottom silhouette with contouring waist, pocketless front, and retro high rise."
  },
  {
    id: 23,
    title: "Luxe 2-Piece Satin Pajama & Loungewear Set",
    category: "sets",
    salePrice: 19.99,
    originalPrice: 52.00,
    discount: 62,
    rating: 4.8,
    reviewsCount: 3820,
    badge: "HOT ITEM",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
    colors: ["#ff9ff3", "#f5cd79", "#2f3542"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Featherweight poly silk satin",
    description: "Silky notch-collar short-sleeve shirt with matching contrast-piped drawstring shorts for ultimate evening luxury."
  },
  {
    id: 24,
    title: "Tailored Belted Trench Vest & Bermuda Shorts Set",
    category: "sets",
    salePrice: 26.49,
    originalPrice: 68.00,
    discount: 61,
    rating: 4.8,
    reviewsCount: 1410,
    badge: "TOP RATED",
    badgeType: "top-rated",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    colors: ["#ced6e0", "#2f3542", "#f1f2f6"],
    sizes: ["S", "M", "L"],
    fabric: "Structured suiting blend with cotton pocket lining",
    description: "High-fashion summer suit consisting of a sleeveless double-breasted long vest and pleated high-rise bermudas."
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
const CURRENCY_RATES = {
  USD: { symbol: "$", rate: 1.0 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  CAD: { symbol: "CA$", rate: 1.36 },
  AUD: { symbol: "AU$", rate: 1.52 }
};

let currentCurrency = "USD";
let activeCategory = "all";
let activePriceFilter = "all";
let activeSort = "trending";
let searchQuery = "";

// Cart state loaded from localStorage
let cart = JSON.parse(localStorage.getItem("glamour_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("glamour_wishlist") || "[]");

// Coupon state
let activeCoupon = null; // e.g. { code: 'GLAM20', type: 'percent', value: 20 }

// ==========================================
// 3. INITIALIZATION & LIFECYCLE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initCountdownTimer();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  setupInitialCoupons();
});

// ==========================================
// 4. FLASH DEALS COUNTDOWN TIMER
// ==========================================
function initCountdownTimer() {
  let secondsRemaining = 4 * 3600 + 27 * 60 + 54; // 4h 27m 54s

  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!hoursEl || !minutesEl || !secondsEl) return;

  setInterval(() => {
    if (secondsRemaining > 0) {
      secondsRemaining--;
    } else {
      secondsRemaining = 24 * 3600; // Reset
    }

    const h = Math.floor(secondsRemaining / 3600);
    const m = Math.floor((secondsRemaining % 3600) / 60);
    const s = secondsRemaining % 60;

    hoursEl.textContent = String(h).padStart(2, "0");
    minutesEl.textContent = String(m).padStart(2, "0");
    secondsEl.textContent = String(s).padStart(2, "0");
  }, 1000);
}

// ==========================================
// 5. CURRENCY CONVERSION HELPER
// ==========================================
function formatPrice(amountInUSD) {
  const { symbol, rate } = CURRENCY_RATES[currentCurrency];
  const converted = (amountInUSD * rate).toFixed(2);
  return `${symbol}${converted}`;
}

// ==========================================
// 6. PRODUCT RENDERING & FILTERING
// ==========================================
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");
  if (!grid) return;

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    // Category filter
    if (activeCategory === "flash") {
      if (p.discount < 60) return false;
    } else if (activeCategory === "under20") {
      if (p.salePrice > 20) return false;
    } else if (activeCategory !== "all") {
      if (p.category !== activeCategory) return false;
    }

    // Price filter
    if (activePriceFilter === "under15" && p.salePrice >= 15) return false;
    if (activePriceFilter === "15-25" && (p.salePrice < 15 || p.salePrice > 25)) return false;
    if (activePriceFilter === "over25" && p.salePrice <= 25) return false;

    // Search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchCat) return false;
    }

    return true;
  });

  // Sorting
  if (activeSort === "price-low") {
    filtered.sort((a, b) => a.salePrice - b.salePrice);
  } else if (activeSort === "price-high") {
    filtered.sort((a, b) => b.salePrice - a.salePrice);
  } else if (activeSort === "discount") {
    filtered.sort((a, b) => b.discount - a.discount);
  } else if (activeSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // Trending / default order
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  // Update counts
  if (resultsCount) {
    resultsCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} Styles`;
  }

  // Check empty state
  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (noResults) noResults.classList.remove("hidden");
    return;
  } else {
    if (noResults) noResults.classList.add("hidden");
  }

  // Generate product cards
  grid.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const badgeClass = product.badgeType || "flash";

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-media">
          <img src="${product.image}" alt="${product.title}" class="card-img" loading="lazy">
          
          <div class="card-badges">
            <span class="badge-tag ${badgeClass}">${product.badge}</span>
            <span class="badge-tag flash">-${product.discount}%</span>
          </div>

          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(${product.id}, event)" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                  aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="${isWishlisted ? '#fa2c19' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <button class="card-quick-view-btn" onclick="openQuickView(${product.id})">
            👁️ Quick View
          </button>

          <!-- Quick Add Size Bar (Fast-fashion hover) -->
          <div class="card-quick-add-sizes">
            <span style="color:#bbb; font-size:0.68rem; margin-right:4px;">ADD:</span>
            ${product.sizes.map(size => `
              <button class="size-chip-btn" onclick="quickAddToCart(${product.id}, '${size}', event)">
                ${size}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="card-info">
          <h3 class="card-title" onclick="openQuickView(${product.id})" title="${product.title}">${product.title}</h3>
          
          <div class="card-pricing">
            <span class="sale-price">${formatPrice(product.salePrice)}</span>
            <span class="original-price">${formatPrice(product.originalPrice)}</span>
            <span class="discount-tag">-${product.discount}%</span>
          </div>

          <div class="card-meta">
            <div class="card-rating">
              <span class="star">★</span>
              <span>${product.rating.toFixed(1)}</span>
              <span>(${product.reviewsCount > 999 ? (product.reviewsCount / 1000).toFixed(1) + 'k' : product.reviewsCount})</span>
            </div>

            <div class="color-swatches">
              ${product.colors.map(color => `
                <span class="swatch-dot" style="background-color: ${color};" title="Available Color"></span>
              `).join('')}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// 7. EVENT LISTENERS & FILTER WIDGETS
// ==========================================
function setupEventListeners() {
  // Category Pills
  const pills = document.querySelectorAll(".category-pills .pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-category");
      renderProducts();
    });
  });

  // Header Nav Links
  const navItems = document.querySelectorAll(".nav-menu .nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      const filter = item.getAttribute("data-filter");
      filterByCategory(filter);
    });
  });

  // Price Filter
  const priceFilter = document.getElementById("priceFilter");
  if (priceFilter) {
    priceFilter.addEventListener("change", (e) => {
      activePriceFilter = e.target.value;
      renderProducts();
    });
  }

  // Sort Filter
  const sortBy = document.getElementById("sortBy");
  if (sortBy) {
    sortBy.addEventListener("change", (e) => {
      activeSort = e.target.value;
      renderProducts();
    });
  }

  // Currency Selector
  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect) {
    currencySelect.addEventListener("change", (e) => {
      currentCurrency = e.target.value;
      renderProducts();
      updateCartUI();
    });
  }

  // Search Input
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle("active", searchQuery.length > 0);
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.classList.remove("active");
        renderProducts();
      }
    });
  }

  // Cart Buttons
  const openCartBtn = document.getElementById("openCartBtn");
  if (openCartBtn) openCartBtn.addEventListener("click", openCart);

  // Wishlist Button
  const openWishlistBtn = document.getElementById("openWishlistBtn");
  if (openWishlistBtn) openWishlistBtn.addEventListener("click", openWishlist);

  // Mobile Menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "100%";
        navMenu.style.left = "0";
        navMenu.style.right = "0";
        navMenu.style.background = "#fff";
        navMenu.style.padding = "20px";
        navMenu.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
      }
    });
  }
}

function filterByCategory(category) {
  activeCategory = category;

  // Update pills UI
  const pills = document.querySelectorAll(".category-pills .pill");
  pills.forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-category") === category);
  });

  renderProducts();

  const catalog = document.getElementById("catalog");
  if (catalog) {
    catalog.scrollIntoView({ behavior: "smooth" });
  }
}

function resetFilters() {
  activeCategory = "all";
  activePriceFilter = "all";
  activeSort = "trending";
  searchQuery = "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  const priceFilter = document.getElementById("priceFilter");
  if (priceFilter) priceFilter.value = "all";

  const sortBy = document.getElementById("sortBy");
  if (sortBy) sortBy.value = "trending";

  filterByCategory("all");
}

// ==========================================
// 8. CART DRAWER & OPERATIONS
// ==========================================
function quickAddToCart(productId, size, event) {
  if (event) event.stopPropagation();
  addToCart(productId, size, 1);
  showToast(`Added ${size} to bag!`);
  openCart();
}

function addToCart(productId, size = "M", quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Find if already exists with same size
  const existing = cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      salePrice: product.salePrice,
      originalPrice: product.originalPrice,
      image: product.image,
      size: size,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
}

function updateCartItemQty(index, change) {
  if (!cart[index]) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast("Item removed from bag");
}

function saveCart() {
  localStorage.setItem("glamour_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const cartCountEl = document.getElementById("cartCount");
  const cartDrawerCount = document.getElementById("cartDrawerCount");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartEmptyState = document.getElementById("cartEmptyState");
  const cartFooter = document.getElementById("cartFooter");

  // Shipping progress
  const shippingMsg = document.getElementById("shippingMsg");
  const shippingProgressBar = document.getElementById("shippingProgressBar");

  // Totals
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartDiscount = document.getElementById("cartDiscount");
  const cartDiscountRow = document.getElementById("cartDiscountRow");
  const cartShipping = document.getElementById("cartShipping");
  const cartTotal = document.getElementById("cartTotal");

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountEl) cartCountEl.textContent = totalItemsCount;
  if (cartDrawerCount) cartDrawerCount.textContent = `(${totalItemsCount} items)`;

  if (cart.length === 0) {
    if (cartEmptyState) cartEmptyState.classList.remove("hidden");
    if (cartFooter) cartFooter.classList.add("hidden");
    if (cartItemsList) cartItemsList.innerHTML = "";
    if (shippingProgressBar) shippingProgressBar.style.width = "0%";
    if (shippingMsg) shippingMsg.innerHTML = "Add $29.00 more for <strong>FREE EXPRESS SHIPPING</strong>!";
    return;
  }

  if (cartEmptyState) cartEmptyState.classList.add("hidden");
  if (cartFooter) cartFooter.classList.remove("hidden");

  // Calculate Subtotal in USD
  const subtotalUSD = cart.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);

  // Free shipping threshold: $29 USD
  const threshold = 29.0;
  const progressPercent = Math.min(100, (subtotalUSD / threshold) * 100);
  if (shippingProgressBar) shippingProgressBar.style.width = `${progressPercent}%`;

  if (subtotalUSD >= threshold) {
    if (shippingMsg) shippingMsg.innerHTML = "🎉 <strong>CONGRATS!</strong> You have unlocked FREE Express Shipping!";
    if (cartShipping) cartShipping.textContent = "FREE";
  } else {
    const diff = (threshold - subtotalUSD);
    if (shippingMsg) shippingMsg.innerHTML = `Add <strong>${formatPrice(diff)}</strong> more for <strong>FREE EXPRESS SHIPPING</strong>!`;
    if (cartShipping) cartShipping.textContent = formatPrice(4.99);
  }

  // Calculate Discount
  let discountUSD = 0;
  if (activeCoupon) {
    if (activeCoupon.type === "percent") {
      discountUSD = subtotalUSD * (activeCoupon.value / 100);
    } else {
      discountUSD = Math.min(subtotalUSD, activeCoupon.value);
    }
    if (cartDiscountRow) cartDiscountRow.classList.remove("hidden");
    if (cartDiscount) cartDiscount.textContent = `-${formatPrice(discountUSD)}`;
  } else {
    if (cartDiscountRow) cartDiscountRow.classList.add("hidden");
  }

  const shippingCostUSD = (subtotalUSD >= threshold) ? 0 : 4.99;
  const grandTotalUSD = Math.max(0, subtotalUSD - discountUSD + shippingCostUSD);

  if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotalUSD);
  if (cartTotal) cartTotal.textContent = formatPrice(grandTotalUSD);

  // Render items list
  if (cartItemsList) {
    cartItemsList.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-specs">
            <span>Size: <strong>${item.size}</strong></span>
            <span>Qty: <strong>${item.quantity}</strong></span>
          </div>
          <div class="cart-item-pricing">
            <span class="cart-price-sale">${formatPrice(item.salePrice)}</span>
            <span class="cart-price-original">${formatPrice(item.originalPrice)}</span>
          </div>
          <div class="qty-controller">
            <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeCartItem(${idx})" title="Remove item">&times;</button>
      </div>
    `).join("");
  }
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================
// 9. COUPON WALLET SYSTEM
// ==========================================
function setupInitialCoupons() {
  // default auto-claim GLAM20
  claimCoupon("GLAM20", 20, "percent");
}

function claimCoupon(code, value, type = "percent") {
  activeCoupon = { code, value, type };
  const tag = document.getElementById("couponAppliedTag");
  const name = document.getElementById("appliedCouponName");
  const rate = document.getElementById("couponDiscountRate");

  if (tag && name && rate) {
    name.textContent = code;
    rate.textContent = type === "percent" ? `${value}%` : `$${value}`;
    tag.classList.remove("hidden");
  }

  // Update claim buttons
  const btn = document.getElementById(`couponBtn-${code}`);
  if (btn) {
    btn.textContent = "Applied ✓";
    btn.classList.add("claimed");
  }

  updateCartUI();
  showToast(`Coupon ${code} applied to your bag!`);
}

function applyEnteredCoupon() {
  const input = document.getElementById("couponInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === "GLAM20" || code === "GLAMOUR20") {
    claimCoupon("GLAM20", 20, "percent");
    input.value = "";
  } else if (code === "SAVE10") {
    claimCoupon("SAVE10", 10, "amount");
    input.value = "";
  } else if (code === "VIP25") {
    claimCoupon("VIP25", 25, "amount");
    input.value = "";
  } else {
    showToast("Invalid code! Try GLAM20, SAVE10, or VIP25");
  }
}

function removeCoupon() {
  activeCoupon = null;
  const tag = document.getElementById("couponAppliedTag");
  if (tag) tag.classList.add("hidden");
  updateCartUI();
  showToast("Coupon removed");
}

// ==========================================
// 10. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("Removed from wishlist");
  } else {
    wishlist.push(productId);
    showToast("Saved to wishlist ❤️");
  }

  localStorage.setItem("glamour_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts(); // refresh heart icon state
}

function updateWishlistUI() {
  const countEl = document.getElementById("wishlistCount");
  const drawerCount = document.getElementById("wishlistDrawerCount");
  const listEl = document.getElementById("wishlistItemsList");
  const emptyEl = document.getElementById("wishlistEmptyState");

  if (countEl) countEl.textContent = wishlist.length;
  if (drawerCount) drawerCount.textContent = `(${wishlist.length} items)`;

  if (wishlist.length === 0) {
    if (emptyEl) emptyEl.classList.remove("hidden");
    if (listEl) listEl.innerHTML = "";
    return;
  }

  if (emptyEl) emptyEl.classList.add("hidden");

  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));
  if (listEl) {
    listEl.innerHTML = wishlistedProducts.map(p => `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.title}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-title">${p.title}</div>
          <div class="cart-item-pricing">
            <span class="cart-price-sale">${formatPrice(p.salePrice)}</span>
            <span class="cart-price-original">${formatPrice(p.originalPrice)}</span>
          </div>
          <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.76rem; width: fit-content;" 
                  onclick="quickAddToCart(${p.id}, 'M'); toggleWishlist(${p.id}); closeWishlist();">
            Move to Bag
          </button>
        </div>
        <button class="remove-item-btn" onclick="toggleWishlist(${p.id})">&times;</button>
      </div>
    `).join("");
  }
}

function openWishlist() {
  const drawer = document.getElementById("wishlistDrawer");
  const overlay = document.getElementById("wishlistOverlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeWishlist() {
  const drawer = document.getElementById("wishlistDrawer");
  const overlay = document.getElementById("wishlistOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================
// 11. QUICK VIEW MODAL
// ==========================================
let qvSelectedSize = "M";

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  qvSelectedSize = product.sizes[0] || "M";

  const overlay = document.getElementById("quickViewOverlay");
  const content = document.getElementById("quickViewContent");
  if (!overlay || !content) return;

  content.innerHTML = `
    <div class="qv-media">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="qv-info">
      <span class="qv-badge">${product.badge} &bull; -${product.discount}% OFF</span>
      <h2 class="qv-title">${product.title}</h2>
      
      <div class="qv-pricing">
        <span class="sale">${formatPrice(product.salePrice)}</span>
        <span class="orig">${formatPrice(product.originalPrice)}</span>
      </div>

      <p class="qv-desc">${product.description}</p>

      <div class="qv-sizes-label">
        <span>Select Size:</span>
        <span class="qv-size-guide-link" onclick="openSizeGuideModal()">Size Guide</span>
      </div>

      <div class="qv-size-selector">
        ${product.sizes.map(size => `
          <button class="qv-size-btn ${size === qvSelectedSize ? 'active' : ''}" 
                  onclick="selectQvSize('${size}', this)">
            ${size}
          </button>
        `).join('')}
      </div>

      <button class="btn btn-primary qv-add-btn" onclick="addToCart(${product.id}, qvSelectedSize); closeQuickView(); openCart();">
        ADD TO SHOPPING BAG &bull; ${formatPrice(product.salePrice)}
      </button>

      <div class="qv-perks-list">
        <div>📦 <strong>Fabric:</strong> ${product.fabric}</div>
        <div>⚡ <strong>Delivery:</strong> Guaranteed arrival within 3-5 business days</div>
        <div>🔄 <strong>Return Policy:</strong> 45-day return guarantee & free pickup</div>
      </div>
    </div>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function selectQvSize(size, btn) {
  qvSelectedSize = size;
  const buttons = document.querySelectorAll(".qv-size-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function closeQuickView(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains("close-modal-btn")) {
    return;
  }
  const overlay = document.getElementById("quickViewOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================
// 12. CHECKOUT SIMULATION MODAL
// ==========================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your shopping bag is empty!");
    return;
  }

  closeCart();

  const overlay = document.getElementById("checkoutModalOverlay");
  const body = document.getElementById("checkoutBody");
  const successState = document.getElementById("orderSuccessState");

  // Summary lines
  const modalSubtotal = document.getElementById("modalSubtotal");
  const modalDiscount = document.getElementById("modalDiscount");
  const modalTotal = document.getElementById("modalTotal");

  const subtotalUSD = cart.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
  let discountUSD = 0;
  if (activeCoupon) {
    discountUSD = activeCoupon.type === "percent" 
      ? subtotalUSD * (activeCoupon.value / 100) 
      : Math.min(subtotalUSD, activeCoupon.value);
  }
  const grandTotalUSD = Math.max(0, subtotalUSD - discountUSD);

  if (modalSubtotal) modalSubtotal.textContent = formatPrice(subtotalUSD);
  if (modalDiscount) modalDiscount.textContent = `-${formatPrice(discountUSD)}`;
  if (modalTotal) modalTotal.textContent = formatPrice(grandTotalUSD);

  if (body) body.classList.remove("hidden");
  if (successState) successState.classList.add("hidden");

  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckoutModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains("close-modal-btn")) {
    return;
  }
  const overlay = document.getElementById("checkoutModalOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function handlePlaceOrder(event) {
  event.preventDefault();
  const btn = document.getElementById("placeOrderBtn");
  if (btn) {
    btn.innerHTML = `<span>PROCESSING PAYMENT...</span>`;
    btn.disabled = true;
  }

  setTimeout(() => {
    const body = document.getElementById("checkoutBody");
    const successState = document.getElementById("orderSuccessState");
    const refEl = document.getElementById("orderRefNumber");

    if (body) body.classList.add("hidden");
    if (successState) successState.classList.remove("hidden");

    // Random order reference
    const randomRef = `#GL-${Math.floor(1000000 + Math.random() * 9000000)}`;
    if (refEl) refEl.textContent = randomRef;

    // Reset button
    if (btn) {
      btn.innerHTML = `<span>COMPLETE PURCHASE</span> <span class="lock-icon">🔒</span>`;
      btn.disabled = false;
    }
  }, 1200);
}

function resetCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

// ==========================================
// 13. SIZE GUIDE MODAL
// ==========================================
function openSizeGuideModal() {
  const overlay = document.getElementById("sizeGuideOverlay");
  if (overlay) {
    overlay.classList.add("active");
  }
}

function closeSizeGuide(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains("close-modal-btn") && !event.target.classList.contains("btn")) {
    return;
  }
  const overlay = document.getElementById("sizeGuideOverlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
}

// ==========================================
// 14. NEWSLETTER & TOAST NOTIFICATION
// ==========================================
function handleNewsletter(event) {
  event.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (input && input.value) {
    showToast("🎉 VIP Welcome Voucher VIP15 sent to " + input.value);
    input.value = "";
  }
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("active");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 2800);
}
