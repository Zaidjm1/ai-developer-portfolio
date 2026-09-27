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
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});
