// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar') || document.querySelector('.site-nav');
  const backTop = document.getElementById('backTop');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  if (backTop) backTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

/* ── Animacione scroll & stagger ── */
(function () {
  const STAGGER_GRIDS = [
    '.services-grid', '.capabilities-grid', '.why-compact',
    '.testimonials-grid', '.blog-grid', '.proj-grid', '.home-proj-grid',
    '.career-list', '.proj-gallery-full', '.proj-detail-stats',
    '.proj-showcase-grid.is-preview', '.proj-detail-main', '.proj-detail-sidebar',
    '.proj-detail-tags', '.proj-detail-stack-tags'
  ];

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function applyStagger(container, selector, step, max) {
    container.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = Math.min(i, max || 10) * (step || 65) + 'ms';
      if (!el.matches('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .anim-tag')) {
        el.classList.add('reveal');
      }
      if (!el.dataset.revealBound) {
        el.dataset.revealBound = '1';
        revealObserver.observe(el);
      }
    });
  }

  function initReveal(root) {
    const scope = root || document;
    scope.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach(el => {
      if (el.dataset.revealBound) return;
      el.dataset.revealBound = '1';
      revealObserver.observe(el);
    });

    STAGGER_GRIDS.forEach(sel => {
      scope.querySelectorAll(sel).forEach(grid => {
        if (grid.classList.contains('proj-detail-tags') || grid.classList.contains('proj-detail-stack-tags')) {
          grid.querySelectorAll('.proj-tag, .proj-detail-stack-tag').forEach((tag, i) => {
            tag.classList.add('anim-tag');
            tag.style.animationDelay = (i * 40) + 'ms';
          });
          return;
        }
        const childSel = grid.classList.contains('proj-detail-main')
          ? '.proj-detail-block, .proj-detail-bonus, .proj-detail-result'
          : grid.classList.contains('proj-detail-sidebar')
            ? '.proj-detail-side-card'
            : '.reveal, .proj-card, .home-proj-card, .blog-card, .service-card, .proj-showcase-item, .proj-detail-stat, .anim-stat';
        applyStagger(grid, childSel, grid.classList.contains('proj-detail-stats') ? 80 : 65, 8);
      });
    });
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      if (isNaN(target)) return;
      const suffix = el.dataset.suffix || (target >= 98 ? '%' : '+');
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.35 });

  function initCounters(root) {
    (root || document).querySelectorAll('[data-count]').forEach(el => {
      if (el.dataset.countBound) return;
      el.dataset.countBound = '1';
      counterObserver.observe(el);
    });
  }

  window.InovexaAnimate = {
    init: function (root) { initReveal(root); initCounters(root); },
    refresh: function (root) { initReveal(root); initCounters(root); }
  };

  requestAnimationFrame(() => document.body.classList.add('page-ready'));

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initReveal(); initCounters(); revealAboveFold(); });
  } else {
    initReveal();
    initCounters();
    revealAboveFold();
  }

  function revealAboveFold() {
    document.querySelectorAll(
      '.home-hero .reveal, .proj-hero-inner.reveal, .blog-hero-inner.reveal, .contact-hero-inner.reveal, .about-hero-grid.reveal'
    ).forEach((el, i) => {
      el.style.transitionDelay = Math.min(i * 70, 280) + 'ms';
      requestAnimationFrame(() => el.classList.add('visible'));
    });
  }
})();

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

// Project filter (legacy)
function filterProjects(btn, cat) {
  document.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}

// Subtle parallax on homepage hero image (desktop only)
if (document.body.classList.contains('home-page') && window.matchMedia('(min-width: 769px)').matches) {
  const heroImg = document.querySelector('.hero-single');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < 600) heroImg.style.transform = `translateY(${y * 0.04}px)`;
    }, { passive: true });
  }
}
