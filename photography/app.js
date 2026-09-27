// Header background shift on scroll
const siteHeader = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

// Category Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const collageItems = document.querySelectorAll('.collage-item');
const itemCountEl = document.getElementById('itemCount');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    let visibleCount = 0;

    collageItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
        visibleCount++;
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(12px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });

    itemCountEl.textContent = `SHOWING ${visibleCount} PLATE${visibleCount === 1 ? '' : 'S'}`;
  });
});

// Fullscreen Lightbox
const lightbox = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxSpecs = document.getElementById('lightboxSpecs');
const lightboxClose = document.getElementById('lightboxClose');

collageItems.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('data-src');
    const title = item.getAttribute('data-title');
    const desc = item.getAttribute('data-desc');
    const specs = item.getAttribute('data-specs');

    lightboxImg.src = src;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    lightboxSpecs.innerHTML = specs || '';

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lightbox.classList.contains('active')) closeLightbox();
    if (contactModal.classList.contains('active')) closeContactModal();
  }
});

// Contact Inquiry Modal Logic
const contactModal = document.getElementById('contactModal');
const contactNavBtn = document.getElementById('contactNavBtn');
const contactClose = document.getElementById('contactClose');
const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyBtnLabel = document.getElementById('copyBtnLabel');
const emailText = document.getElementById('emailText');

function openContactModal(e) {
  if (e) e.preventDefault();
  contactModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeContactModal() {
  contactModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (contactNavBtn) {
  contactNavBtn.addEventListener('click', openContactModal);
}

if (contactClose) {
  contactClose.addEventListener('click', closeContactModal);
}

if (contactModal) {
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeContactModal();
  });
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText.textContent.trim()).then(() => {
      copyBtnLabel.textContent = 'Copied!';
      copyEmailBtn.style.background = '#c5a059';
      copyEmailBtn.style.color = '#0b0c0e';
      setTimeout(() => {
        copyBtnLabel.textContent = 'Copy';
        copyEmailBtn.style.background = '';
        copyEmailBtn.style.color = '';
      }, 2000);
    });
  });
}
