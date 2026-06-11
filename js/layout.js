(function () {
  const PHONE_RAW = '00355684980913';
  const PHONE_TEL = '+355684980913';
  const PHONE_DISPLAY = '+355 68 498 0913';
  const WHATSAPP_URL = 'https://wa.me/355684980913?text=' + encodeURIComponent('Përshëndetje! Dëshiroj të marr më shumë informacion për shërbimet tuaja.');
  const EMAIL = 'info@inovexa.al';

  const base = document.body.dataset.base || '';
  const page = document.body.dataset.page || '';

  const navItems = [
    { id: 'kryefaqja', label: 'Kryefaqja', href: base + 'index.html' },
    { id: 'rreth-nesh', label: 'Rreth Nesh', href: base + 'pages/rreth-nesh.html' },
    { id: 'sherbimet', label: 'Shërbimet', href: base + 'pages/sherbimet.html' },
    { id: 'projektet', label: 'Projektet', href: base + 'pages/projektet.html' },
    { id: 'blog', label: 'Blog', href: base + 'pages/blog.html' },
    { id: 'kontakt', label: 'Kontakt', href: base + 'pages/kontakt.html' }
  ];

  const footerLinks = {
    kompania: [
      { label: 'Rreth Nesh', href: base + 'pages/rreth-nesh.html' },
      { label: 'Si Punojmë', href: base + 'pages/sherbimet.html#procesi' },
      { label: 'Blog', href: base + 'pages/blog.html' },
      { label: 'Karriera', href: base + 'pages/karriera.html' }
    ],
    sherbimet: [
      { label: 'Web Development', href: base + 'pages/sherbimet.html#web' },
      { label: 'Aplikacione Mobile', href: base + 'pages/sherbimet.html#mobile' },
      { label: 'AI & Chatbots', href: base + 'pages/sherbimet.html#ai' },
      { label: 'ERP / CRM', href: base + 'pages/sherbimet.html#erp' }
    ],
    portofoli: [
      { label: 'Projektet', href: base + 'pages/projektet.html' },
      { label: 'E-Commerce', href: base + 'pages/projektet.html' },
      { label: 'Software', href: base + 'pages/projektet.html' }
    ],
    kontakt: [
      { label: 'Na Kontakto', href: base + 'pages/kontakt.html' },
      { label: 'Kërko Ofertë', href: base + 'pages/kontakt.html' },
      { label: 'WhatsApp', href: WHATSAPP_URL, external: true }
    ]
  };

  const waIcon = '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  function linkList(items) {
    return items.map(i =>
      `<li><a href="${i.href}"${i.external ? ' target="_blank" rel="noopener"' : ''}>${i.label}</a></li>`
    ).join('');
  }

  const headerHTML = `
<nav class="site-nav" id="navbar">
  <div class="site-nav-inner">
    <a href="${base}index.html" class="site-nav-logo">
      <img src="${base}assets/logo_inovexa_transparent.png" alt="Inovexa" class="site-nav-logo-img"/>
    </a>
    <div class="site-nav-pill">
      <ul class="site-nav-links">
        ${navItems.map(n => `<li><a href="${n.href}" class="${page === n.id ? 'active' : ''}">${n.label}</a></li>`).join('')}
      </ul>
    </div>
    <div class="site-nav-actions">
      <a href="${WHATSAPP_URL}" class="site-nav-wa" target="_blank" rel="noopener" aria-label="WhatsApp">${waIcon}</a>
      <a href="${base}pages/kontakt.html" class="site-nav-cta">Kërko Ofertë</a>
      <button class="site-nav-toggle" id="hamburger" type="button" aria-label="Hap menunë" aria-expanded="false" aria-controls="mobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="site-mobile-overlay" id="mobileOverlay" aria-hidden="true">
  <button class="site-mobile-backdrop" id="mobileBackdrop" type="button" aria-label="Mbyll menunë" tabindex="-1"></button>
  <div class="site-mobile-menu" id="mobileMenu" role="dialog" aria-modal="true" aria-label="Navigimi">
    <div class="site-mobile-menu-head">
      <span class="site-mobile-menu-title">Menu</span>
      <button class="site-mobile-close" id="mobileClose" type="button" aria-label="Mbyll menunë">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <nav class="site-mobile-nav">
      ${navItems.map(n => `<a href="${n.href}" class="site-mobile-link ${page === n.id ? 'active' : ''}">${n.label}</a>`).join('')}
    </nav>
    <div class="site-mobile-actions">
      <a href="${WHATSAPP_URL}" class="site-mobile-wa" target="_blank" rel="noopener">${waIcon}<span>Na shkruani në WhatsApp</span></a>
      <a href="${base}pages/kontakt.html" class="site-mobile-cta">Kërko Ofertë</a>
    </div>
  </div>
</div>`;

  const footerHTML = `
<footer class="site-footer">
  <div class="site-footer-inner">
    <div class="site-footer-grid">
      <div class="site-footer-brand">
        <a href="${base}index.html" class="site-footer-logo">
          <img src="${base}assets/logo_inovexa.png" alt="Inovexa"/>
        </a>
        <p>Transformojmë bizneset shqiptare përmes teknologjisë moderne dhe zgjidhjeve digjitale të personalizuara.</p>
      </div>
      <div class="site-footer-col"><h4>Kompania</h4><ul>${linkList(footerLinks.kompania)}</ul></div>
      <div class="site-footer-col"><h4>Shërbimet</h4><ul>${linkList(footerLinks.sherbimet)}</ul></div>
      <div class="site-footer-col"><h4>Portofoli</h4><ul>${linkList(footerLinks.portofoli)}</ul></div>
      <div class="site-footer-col"><h4>Kontakt</h4><ul>${linkList(footerLinks.kontakt)}</ul></div>
    </div>
    <div class="site-footer-contacts">
      <a href="mailto:${EMAIL}"><span class="fc-icon">✉</span>${EMAIL}</a>
      <a href="tel:${PHONE_TEL}"><span class="fc-icon">📞</span>${PHONE_DISPLAY}</a>
      <a href="${WHATSAPP_URL}" target="_blank" rel="noopener"><span class="fc-icon">💬</span>WhatsApp</a>
      <span class="site-footer-loc"><span class="fc-icon">📍</span>Tiranë, Shqipëri</span>
    </div>
    <div class="site-footer-bar">
      <p>© ${new Date().getFullYear()} Inovexa Shpk · Të gjitha të drejtat e rezervuara</p>
      <div class="site-footer-socials">
        <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" aria-label="WhatsApp" class="sf-social sf-wa">${waIcon}</a>
        <a href="#" aria-label="LinkedIn" class="sf-social">in</a>
        <a href="#" aria-label="Instagram" class="sf-social">ig</a>
        <a href="#" aria-label="Facebook" class="sf-social">fb</a>
      </div>
    </div>
  </div>
</footer>
<button id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Kthehu lart"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg></button>
<a href="${WHATSAPP_URL}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat në WhatsApp">${waIcon}</a>`;

  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = headerHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;

  window.INOVEXA_PHONE = { raw: PHONE_RAW, tel: PHONE_TEL, display: PHONE_DISPLAY, whatsapp: WHATSAPP_URL };

  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileClose = document.getElementById('mobileClose');

  function setMobileMenu(open) {
    if (!mobileOverlay || !hamburger) return;
    document.body.classList.toggle('menu-open', open);
    mobileOverlay.classList.toggle('open', open);
    mobileOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    hamburger.setAttribute('aria-label', open ? 'Mbyll menunë' : 'Hap menunë');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', () => setMobileMenu(!mobileOverlay.classList.contains('open')));
    mobileBackdrop?.addEventListener('click', () => setMobileMenu(false));
    mobileClose?.addEventListener('click', () => setMobileMenu(false));
    mobileMenu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMobileMenu(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileOverlay.classList.contains('open')) setMobileMenu(false);
    });
  }
})();
