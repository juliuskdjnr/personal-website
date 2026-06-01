// ── PAGE NAVIGATION ──
let currentPage = 'home';

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  triggerReveal();
}

// ── TRIANGLE MENU ──
let menuOpen = false;

function toggleMenu() {
  menuOpen ? closeMenu() : openMenu();
}

function openMenu() {
  menuOpen = true;
  const btn = document.getElementById('triangleBtn');
  const menu = document.getElementById('mobileMenu');
  btn.classList.remove('closing');
  btn.classList.add('open');
  menu.classList.add('open');
}

function closeMenu() {
  menuOpen = false;
  const btn = document.getElementById('triangleBtn');
  const menu = document.getElementById('mobileMenu');
  btn.classList.remove('open');
  btn.classList.add('closing');
  menu.classList.remove('open');
  setTimeout(() => btn.classList.remove('closing'), 400);
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (menuOpen && !e.target.closest('#triangleBtn') && !e.target.closest('#mobileMenu')) {
    closeMenu();
  }
});

// ── SCROLL REVEAL ──
function triggerReveal() {
  setTimeout(() => {
    const els = document.querySelectorAll('#page-' + currentPage + ' .reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
  }, 50);
}

// ── CONTACT FORM ──
function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (!name || !email || !message) {
    feedback.style.color = '#f55a5a';
    feedback.textContent = '⚠ Please fill in name, email, and message.';
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    feedback.style.color = '#f55a5a';
    feedback.textContent = '⚠ Please enter a valid email address.';
    return;
  }

  feedback.style.color = 'var(--accent)';
  feedback.textContent = "✓ Message sent! I'll get back to you within 24 hours.";
  feedback.classList.add('visible');
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';

  setTimeout(() => {
    feedback.classList.remove('visible');
    setTimeout(() => { feedback.textContent = ''; }, 350);
  }, 5000);
}

// ── NAVBAR SCROLL SHADOW ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.borderBottomColor = window.scrollY > 10
    ? 'rgba(255,255,255,0.12)'
    : 'rgba(255,255,255,0.07)';
});

// ── INIT ──
triggerReveal();
