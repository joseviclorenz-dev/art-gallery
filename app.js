// Gallery Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const artCards = document.querySelectorAll('.art-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    artCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Lightbox Modal Logic
const modal = document.getElementById('artModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');

function openLightbox(title, meta, desc, imgSrc) {
  modalImg.src = imgSrc;
  modalTitle.textContent = title;
  modalMeta.textContent = meta;
  modalDesc.textContent = desc;
  modal.classList.add('active');
}

function closeLightbox() {
  modal.classList.remove('active');
}

// Attach Click Event to all Art Cards automatically
artCards.forEach(card => {
  card.addEventListener('click', () => {
    // 1. Get elements inside the clicked card
    const img = card.querySelector('img');
    const title = card.querySelector('h3, .art-title');
    const meta = card.querySelector('.art-meta, p');
    const desc = card.getAttribute('data-description') || '';

    // 2. Extract values (or fallback if empty)
    const imgSrc = img ? img.src : '';
    const titleText = title ? title.textContent : '';
    const metaText = meta ? meta.textContent : '';

    // 3. Open modal with the clicked card's data
    openLightbox(titleText, metaText, desc, imgSrc);
  });
});

// Close Modal when clicking background
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeLightbox();
  }
});