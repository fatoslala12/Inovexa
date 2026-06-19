// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar') || document.querySelector('.site-nav');
  const backTop = document.getElementById('backTop');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  if (backTop) backTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

// Scroll reveal with stagger inside grids
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

['.services-grid', '.capabilities-grid', '.why-compact', '.testimonials-grid', '.blog-grid', '.proj-grid', '.home-proj-grid', '.career-list'].forEach(sel => {
  document.querySelectorAll(sel).forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 8) * 65}ms`;
    });
  });
});

// Smooth anchor scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const nav = document.querySelector('.site-nav');
    const offset = (nav ? nav.offsetHeight : 72) + 16;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

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
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || (target >= 98 ? '%' : '+');
      let current = 0;
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.floor(target * eased);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
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
