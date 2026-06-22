/* ── Faqja e detajeve të projektit ── */
function renderProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const root = document.getElementById('projectDetail');
  const notFound = document.getElementById('projectNotFound');
  const loading = document.getElementById('projectLoading');

  function showNotFound() {
    if (loading) loading.hidden = true;
    if (root) { root.hidden = true; root.innerHTML = ''; }
    if (notFound) notFound.hidden = false;
    document.title = 'Projekt i panjohur — Inovexa';
  }

  if (!root) return;

  if (!window.InovexaProjects) {
    if (loading) loading.textContent = 'Gabim ngarkimi. Rifreskoni faqen.';
    return;
  }

  const p = InovexaProjects.get(id);
  if (!p) {
    showNotFound();
    return;
  }

  if (loading) loading.hidden = true;
  if (notFound) notFound.hidden = true;
  root.hidden = false;

  const base = document.body.dataset.base || '../';
  const asset = InovexaProjects.asset.bind(InovexaProjects);

  document.title = p.shortTitle + ' — Inovexa';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = p.shortDesc;

  const urlLabel = p.url
    ? p.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
    : (p.urlLabel || p.shortTitle.toLowerCase().replace(/\s+/g, '') + '.al');

  function showcaseFrame(src, i, loading) {
    return (
      '<figure class="proj-showcase-item' + (i === 0 ? ' is-featured' : '') + ' anim-showcase">' +
        '<div class="proj-showcase-frame">' +
          '<div class="proj-showcase-chrome" aria-hidden="true">' +
            '<span class="proj-showcase-dot"></span>' +
            '<span class="proj-showcase-dot"></span>' +
            '<span class="proj-showcase-dot"></span>' +
            '<span class="proj-showcase-url">' + urlLabel + '</span>' +
          '</div>' +
          '<div class="proj-showcase-screen">' +
            '<img src="' + asset(src) + '" alt="' + p.shortTitle + ' — pamje ' + (i + 1) + '" loading="' + loading + '"/>' +
          '</div>' +
        '</div>' +
      '</figure>'
    );
  }

  const previewList = (p.previewImages || p.images || []).slice(0, 2);

  const previewSection = previewList.length
    ? '<section class="proj-showcase proj-showcase--preview reveal-scale" aria-label="Pamje të sistemit">' +
        '<div class="proj-showcase-inner">' +
          '<div class="proj-showcase-head">' +
            '<span class="proj-showcase-eyebrow">Pamje të Sistemit</span>' +
          '</div>' +
          '<div class="proj-showcase-grid is-preview">' +
            previewList.map(function (src, i) {
              return showcaseFrame(src, i, i === 0 ? 'eager' : 'lazy');
            }).join('') +
          '</div>' +
        '</div>' +
      '</section>'
    : '';

  const fullGallerySection = p.images && p.images.length
    ? '<div class="proj-detail-block proj-detail-block--gallery reveal">' +
        '<h2 class="proj-detail-block-title">Pamje të Sistemit</h2>' +
        '<div class="proj-gallery-full">' +
          p.images.map(function (src, i) {
            return showcaseFrame(src, i, 'lazy');
          }).join('') +
        '</div>' +
      '</div>'
    : '';

  const introHtml = (p.intro || []).map(par => '<p class="proj-detail-desc">' + par + '</p>').join('');

  const problemHtml = p.problem
    ? '<div class="proj-detail-block proj-detail-problem">' +
        '<h2 class="proj-detail-block-title">' + p.problem.title + '</h2>' +
        '<p class="proj-detail-desc">' + p.problem.text + '</p>' +
        '<ul class="proj-detail-features">' +
          p.problem.points.map(pt => '<li>' + pt + '</li>').join('') +
        '</ul>' +
      '</div>'
    : '';

  const groupsHtml = (p.featureGroups || []).map(g => {
    const benefitsHtml = g.benefits && g.benefits.length
      ? '<div class="proj-detail-fgroup-benefits">' +
          g.benefits.map(b => '<span class="proj-detail-benefit">✔ ' + b + '</span>').join('') +
        '</div>'
      : '';
    return (
      '<div class="proj-detail-fgroup">' +
        '<div class="proj-detail-fgroup-head">' +
          '<span class="proj-detail-fgroup-icon">' + (g.icon || '✦') + '</span>' +
          '<h3>' + g.title + '</h3>' +
        '</div>' +
        '<ul class="proj-detail-fgroup-list">' +
          g.items.map(it => '<li>' + it + '</li>').join('') +
        '</ul>' +
        benefitsHtml +
      '</div>'
    );
  }).join('');

  const groupsTitle = p.featureGroupsTitle || 'Karakteristikat Kryesore';
  const groupsClass = (p.featureGroups && p.featureGroups.length > 4)
    ? 'proj-detail-fgroups proj-detail-fgroups--modules'
    : 'proj-detail-fgroups';

  const featuresHtml = (!p.featureGroups && p.features)
    ? '<div class="proj-detail-block">' +
        '<h2 class="proj-detail-block-title">Çfarë përfshin</h2>' +
        '<ul class="proj-detail-features">' +
          p.features.map(f => '<li>' + f + '</li>').join('') +
        '</ul>' +
      '</div>'
    : '';

  const advancedHtml = p.advanced && p.advanced.length
    ? '<div class="proj-detail-block">' +
        '<h2 class="proj-detail-block-title">Veçori të Avancuara</h2>' +
        '<div class="proj-detail-advanced">' +
          p.advanced.map(a => '<span class="proj-detail-adv-tag">' + a + '</span>').join('') +
        '</div>' +
      '</div>'
    : '';

  const securityHtml = p.security && p.security.length
    ? '<div class="proj-detail-block">' +
        '<h2 class="proj-detail-block-title">Siguria</h2>' +
        '<div class="proj-detail-advanced">' +
          p.security.map(s => '<span class="proj-detail-adv-tag proj-detail-adv-tag--secure">' + s + '</span>').join('') +
        '</div>' +
      '</div>'
    : '';

  const rolesHtml = p.roles && p.roles.length
    ? '<div class="proj-detail-block">' +
        '<h2 class="proj-detail-block-title">Role të Përdoruesve</h2>' +
        '<div class="proj-detail-roles">' +
          p.roles.map(r =>
            '<div class="proj-detail-role">' +
              '<h4>' + r.title + '</h4>' +
              '<ul>' + r.items.map(it => '<li>' + it + '</li>').join('') + '</ul>' +
            '</div>'
          ).join('') +
        '</div>' +
      '</div>'
    : '';

  const servicesHtml = p.services && p.services.length
    ? '<div class="proj-detail-block">' +
        '<h2 class="proj-detail-block-title">Shërbimet e Përfshira</h2>' +
        '<div class="proj-detail-fgroups proj-detail-fgroups--services">' +
          p.services.map(s =>
            '<div class="proj-detail-fgroup">' +
              '<div class="proj-detail-fgroup-head">' +
                '<span class="proj-detail-fgroup-icon">🛠</span>' +
                '<h3>' + s.title + '</h3>' +
              '</div>' +
              '<ul class="proj-detail-fgroup-list">' +
                s.items.map(it => '<li>' + it + '</li>').join('') +
              '</ul>' +
            '</div>'
          ).join('') +
        '</div>' +
      '</div>'
    : '';

  const bonusHtml = p.bonus
    ? '<div class="proj-detail-bonus">' +
        '<div class="proj-detail-bonus-icon">🎁</div>' +
        '<div>' +
          '<h2 class="proj-detail-block-title">' + p.bonus.title + '</h2>' +
          '<p>' + p.bonus.text + '</p>' +
          '<ul class="proj-detail-bonus-list">' +
            p.bonus.items.map(it => '<li>' + it + '</li>').join('') +
          '</ul>' +
        '</div>' +
      '</div>'
    : '';

  const stackDetailedHtml = p.stackDetailed
    ? Object.entries(p.stackDetailed).map(([group, items]) =>
        '<div class="proj-detail-stack-group">' +
          '<h4>' + group + '</h4>' +
          '<div class="proj-detail-stack-tags">' +
            items.map(it => '<span class="proj-detail-stack-tag">' + it + '</span>').join('') +
          '</div>' +
        '</div>'
      ).join('')
    : '';

  const stackSimple = p.stack && !p.stackDetailed
    ? Object.entries({ Frontend: p.stack.frontend, Backend: p.stack.backend, Database: p.stack.database, Deploy: p.stack.deploy })
        .map(([k, v]) => '<div class="proj-detail-stack-item"><strong>' + k + '</strong><span>' + v + '</span></div>')
        .join('')
    : '';

  const stackSidebar = p.stackDetailed || p.stack
    ? '<div class="proj-detail-side-card">' +
        '<h3>Stack Teknologjik</h3>' +
        (stackDetailedHtml
          ? '<div class="proj-detail-stack-detailed">' + stackDetailedHtml + '</div>'
          : '<div class="proj-detail-stack">' + stackSimple + '</div>') +
      '</div>'
    : '';

  const resultHtml = p.result
    ? '<div class="proj-detail-result">' +
        '<h2 class="proj-detail-block-title">Rezultati</h2>' +
        '<p>' + p.result + '</p>' +
      '</div>'
    : '';

  const liveBtn = p.url
    ? '<a href="' + p.url + '" class="btn-primary" target="_blank" rel="noopener">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
        'Shiko Live' +
      '</a>'
    : '';

  const statsHtml = p.stats.map(s =>
    '<div class="proj-detail-stat anim-stat">' +
      '<strong>' + s.v + '</strong><span>' + s.l + '</span>' +
    '</div>'
  ).join('');

  const sidebarHtml =
    '<aside class="proj-detail-sidebar reveal-right">' +
      '<div class="proj-detail-side-card">' +
        '<h3>Teknologjitë</h3>' +
        '<div class="proj-detail-tags">' +
          p.tags.map(t => '<span class="proj-tag">' + t + '</span>').join('') +
        '</div>' +
      '</div>' +
      stackSidebar +
      '<div class="proj-detail-side-card proj-detail-cta-card">' +
        '<h3>Interesuar?</h3>' +
        '<p>Dëshironi një projekt të ngjashëm? Konsultimi i parë është falas.</p>' +
        '<div class="proj-detail-actions">' +
          liveBtn +
          '<a href="' + base + 'pages/kontakt.html" class="btn-secondary">Kërko Ofertë →</a>' +
          '<a href="' + base + 'pages/projektet.html" class="proj-detail-back">← Të gjitha projektet</a>' +
        '</div>' +
      '</div>' +
    '</aside>';

  root.innerHTML =
    '<header class="proj-detail-hero">' +
      '<div class="proj-detail-hero-inner">' +
        '<nav class="breadcrumb proj-detail-crumb anim-hero-in anim-hero-in--d1">' +
          '<a href="' + base + 'index.html">Kryefaqja</a><span>/</span>' +
          '<a href="' + base + 'pages/projektet.html">Projektet</a><span>/</span>' +
          '<span>' + p.shortTitle + '</span>' +
        '</nav>' +
        '<div class="proj-detail-badges anim-hero-in anim-hero-in--d2">' +
          '<span class="proj-detail-live">' + p.liveLabel + '</span>' +
          '<span class="proj-detail-year">' + p.year + '</span>' +
        '</div>' +
        '<p class="proj-detail-client anim-hero-in anim-hero-in--d2">' + p.client + '</p>' +
        '<h1 class="proj-detail-title anim-hero-in anim-hero-in--d3">' + p.title + '</h1>' +
        (p.type ? '<p class="proj-detail-type anim-hero-in anim-hero-in--d4">' + p.type + '</p>' : '') +
        '<div class="proj-detail-stats">' + statsHtml + '</div>' +
      '</div>' +
    '</header>' +
    '<div class="proj-detail-body">' +
      '<div class="proj-detail-inner proj-detail-inner--layout">' +
        previewSection +
        sidebarHtml +
        '<div class="proj-detail-main">' +
          '<div class="proj-detail-block">' +
            '<h2 class="proj-detail-block-title">Rreth Projektit</h2>' +
            '<p class="proj-detail-desc proj-detail-desc--lead">' + p.desc + '</p>' +
            introHtml +
          '</div>' +
          problemHtml +
          (groupsHtml
            ? '<div class="proj-detail-block"><h2 class="proj-detail-block-title">' + groupsTitle + '</h2><div class="' + groupsClass + '">' + groupsHtml + '</div></div>'
            : featuresHtml) +
          securityHtml +
          rolesHtml +
          servicesHtml +
          advancedHtml +
          bonusHtml +
          resultHtml +
        '</div>' +
        fullGallerySection +
      '</div>' +
    '</div>';

  /* Scroll to top on project change */
  window.scrollTo(0, 0);

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    description: p.desc,
    url: 'https://inovexa.al/pages/projekt.html?id=' + id,
    image: 'https://inovexa.al/' + p.cover,
    creator: { '@type': 'Organization', name: 'Inovexa SHPK', url: 'https://inovexa.al/' },
    client: { '@type': 'Organization', name: p.client }
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(ld);
  document.body.appendChild(script);

  if (window.InovexaAnimate) {
    InovexaAnimate.refresh(root);
    document.body.classList.add('page-ready');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProjectDetail);
} else {
  renderProjectDetail();
}
