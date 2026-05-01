// ── Mobile hamburger menu ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  // Animate hamburger → X
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity = '';
  spans[2].style.transform = '';
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMenu();
  }
});

// ── Store link placeholders ──────────────────────────────────────────────
// Replace the href values below with your actual store URLs when available.
const IOS_URL     = '#';   // e.g. 'https://apps.apple.com/app/id6762950386'
const ANDROID_URL = '#';   // e.g. 'https://play.google.com/store/apps/details?id=com.admintca.note'

['ios-link', 'ios-link-bottom'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = IOS_URL;
});
['android-link', 'android-link-bottom'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = ANDROID_URL;
});

// ── Sticky nav shadow on scroll ──────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 2px 16px rgba(0,0,0,.08)'
    : '';
}, { passive: true });

// ── Smooth reveal on scroll (Intersection Observer) ──────────────────────
const revealEls = document.querySelectorAll(
  '.who-card, .step, .feature-card, .service-pill, .pricing-card, .privacy-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .45s ease, transform .45s ease';
  observer.observe(el);
});
