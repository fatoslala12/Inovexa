// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar') || document.querySelector('.site-nav');
  const backTop = document.getElementById('backTop');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  if (backTop) backTop.classList.toggle('show', window.scrollY > 400);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form
function handleSubmit() {
  const btn = event.target.closest('button');
  btn.textContent = '✅ Kërkesa u dërgua!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Dërgo Kërkesën';
    btn.style.background = '';
  }, 3000);
}

// Counter animation
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = target / 60;
        const suffix = el.dataset.suffix || (target >= 98 ? '%' : '+');
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current) + suffix;
        }, 25);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));
}

// Project filter
function filterProjects(btn, cat) {
  document.querySelectorAll('.proj-filter').forEach(b => {
    b.style.background = 'transparent';
    b.style.color = 'var(--text-mid)';
    b.style.borderColor = 'var(--border)';
  });
  btn.style.background = 'var(--brand)';
  btn.style.color = '#fff';
  btn.style.borderColor = 'var(--brand)';
  document.querySelectorAll('.proj-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}

document.querySelectorAll('.services-grid .service-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 60) + 'ms';
});

// Subtle parallax on homepage hero image
if (document.body.classList.contains('home-page')) {
  const heroImg = document.querySelector('.hero-single');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < 600) heroImg.style.transform = `translateY(${y * 0.04}px)`;
    }, { passive: true });
  }
}
