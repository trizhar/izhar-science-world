const coverImage = document.querySelector('.cover-image');
window.addEventListener('scroll', () => {
  if (!coverImage) return;
  const y = Math.min(window.scrollY / 700, 1);
  coverImage.style.filter = `saturate(${1.02 - y * 0.08}) contrast(1.02) blur(${y * 1.8}px)`;
  coverImage.style.transform = `scale(${1.01 + y * 0.035})`;
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  cards.forEach(card => {
    const show = f === 'all' || card.dataset.category.includes(f);
    card.classList.toggle('hidden', !show);
  });
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeButton = document.querySelector('.lightbox-close');

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox(){
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImg.removeAttribute('src');
}

if (closeButton) closeButton.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
