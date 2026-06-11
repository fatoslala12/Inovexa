const PROJECTS = {
  biblioteka: {
    theme: 'theme-library',
    client: 'Bashkia Kamëz',
    title: 'Biblioteka Kamëz — Sistem Menaxhimi Bibliotekar',
    url: 'https://www.bibliotekakamez.al',
    type: 'Platformë Digjitale · Sistem i Plotë',
    desc: 'Krijim i platformës së plotë digjitale për bibliotekën publike të Bashkisë Kamëz. Menaxhon katalogun (autorë, zhanre, kopje me barkod), qarkullimin (huazime, kthime, rezervime), rolet e përdoruesve (admin, staf, anëtarë), politikat dhe gjobat. Qendër kulturore dhe edukative për komunitetin.',
    stats: [
      { v: '1 599', l: 'Tituj në katalog' },
      { v: '6 997', l: 'Kopje të lira' },
      { v: '48h', l: 'Afat huazimi' }
    ],
    features: [
      'Katalog i plotë: autorë, botues, zhanre, etiketa dhe kopje me barkod',
      'Qarkullim: huazime, kthime, rezervime dhe politika gjobash',
      'Role: administrator, staf biblioteke dhe anëtarë',
      'Faqe publike: katalog, njoftime, evente, libri i javës, orar',
      'Dashboard statistikor: statuset e kopjeve në kohë reale',
      'Deploy i sigurt në VPS Hetzner me Dokploy dhe firewall'
    ],
    stack: {
      frontend: 'HTML · JavaScript ES6 · Tailwind CSS · react-router-dom',
      backend: 'Django · Python',
      database: 'PostgreSQL',
      deploy: 'VPS Hetzner · Dokploy · Firewall i konfiguruar'
    },
    images: [
      '../assets/images/projects/biblioteka-kamez-hero.png',
      '../assets/images/projects/biblioteka-kamez-stats.png'
    ],
    tags: ['Django', 'PostgreSQL', 'Tailwind CSS', 'React Router']
  },
  capital: {
    theme: 'theme-capital',
    client: 'CapitalRise',
    title: 'CapitalRise — Sistem Inteligjent Menaxhimi për Ndërtim',
    url: 'https://capitalrise-seven.vercel.app/',
    type: 'ERP · Platformë Integruese',
    desc: 'Platformë e integruar digjitale për bizneset e ndërtimit — menaxhon kontratat, punonjësit, orët e punës, pagesat dhe raportet në një sistem të vetëm. Rrit efikasitetin operacional dhe ofron kontroll të plotë mbi proceset e kompanisë.',
    stats: [
      { v: '8+', l: 'Module kryesore' },
      { v: 'Real-time', l: 'Tracking kontratash' },
      { v: 'CSV', l: 'Eksport raportesh' }
    ],
    features: [
      'Menaxhim kontratash dhe projekte ndërtimi me status live',
      'Lista punonjësish: role, vende pune, paga, taksim',
      'Orë pune, pagesa dhe kontrata në një panel të vetëm',
      'Raporte, backup, audit trail dhe njoftime',
      'Filtra avancuar sipas statusit, lokacionit dhe rolit',
      'Dashboard administratori me UI modern teal'
    ],
    stack: {
      frontend: 'React.js · JavaScript ES6 · Tailwind CSS · react-router-dom',
      backend: 'Node.js · Express',
      database: 'PostgreSQL (Neon)',
      deploy: 'Vercel · Render · Neon · GitHub'
    },
    images: [
      '../assets/images/projects/capitalrise-kontrata.png',
      '../assets/images/projects/capitalrise-punonjes.png'
    ],
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Vercel']
  },
  nabgroup: {
    theme: 'theme-nab',
    client: 'NAB Group Engineering Ltd',
    title: 'NAB Group — Website Korporativ Ndërtimi',
    url: 'https://www.nabgroup.uk/',
    type: 'Website Statik · WordPress',
    desc: 'Faqe interneti moderne dhe profesionale për kompani ndërtimi dhe inxhinierie me fokus në identitetin e kompanisë, eksperiencën 20+ vjeçare dhe projektet e realizuara. Reflekton profesionalizmin, cilësinë dhe standardet e larta të industrisë së ndërtimit.',
    stats: [
      { v: '200+', l: 'Kontrata të përfunduara' },
      { v: '20+', l: 'Vite eksperiencë' },
      { v: '100%', l: 'Responsive design' }
    ],
    features: [
      'Prezantim i historisë, ekipit dhe vlerave të kompanisë',
      'Portofol projektesh: Newcastle, St James Centre, Battersea',
      'Seksione shërbimesh: RC Frame, Fit Out, Concrete & Slipforms',
      'Health & Safety, akreditime dhe testimoniale klientësh',
      'Formular kontakti dhe prezencë profesionale online',
      'Optimizim SEO, shpejtësi dhe siguri'
    ],
    stack: {
      frontend: 'HTML · CSS · WordPress',
      backend: 'WordPress CMS',
      database: 'MySQL',
      deploy: 'Hosting profesional · SSL · SEO'
    },
    images: [
      '../assets/images/projects/nabgroup-home.png'
    ],
    tags: ['WordPress', 'HTML/CSS', 'SEO', 'Responsive']
  }
};

const overlay = document.getElementById('projModal');
const modalBody = document.getElementById('projModalContent');

function openProject(id) {
  const p = PROJECTS[id];
  if (!p || !overlay) return;

  const gallery = p.images && p.images.length
    ? `<div class="proj-modal-gallery">${p.images.map((src, i) => `<img src="${src}" alt="${p.title} — pamje ${i + 1}" loading="lazy"/>`).join('')}</div>`
    : '';

  const stack = p.stack ? `
    <div class="proj-modal-section">
      <h4>Stack Teknologjik</h4>
      <div class="proj-modal-stack">
        <div><strong>Frontend</strong><span>${p.stack.frontend}</span></div>
        <div><strong>Backend</strong><span>${p.stack.backend}</span></div>
        <div><strong>Database</strong><span>${p.stack.database}</span></div>
        <div><strong>Deploy</strong><span>${p.stack.deploy}</span></div>
      </div>
    </div>` : '';

  const liveBtn = p.url
    ? `<a href="${p.url}" class="btn-primary" target="_blank" rel="noopener">Shiko Live →</a>`
    : `<a href="kontakt.html" class="btn-primary">Kërko Ofertë →</a>`;

  modalBody.innerHTML = `
    <div class="proj-modal-header ${p.theme}">
      <button class="proj-modal-close" aria-label="Mbyll">&times;</button>
      <div class="proj-modal-client">${p.client}</div>
      <h2 class="proj-modal-title">${p.title}</h2>
      ${p.type ? `<div class="proj-modal-type">${p.type}</div>` : ''}
    </div>
    <div class="proj-modal-body">
      ${gallery}
      <p class="proj-modal-desc">${p.desc}</p>
      <div class="proj-modal-stats">
        ${p.stats.map(s => `<div class="proj-modal-stat"><strong>${s.v}</strong><span>${s.l}</span></div>`).join('')}
      </div>
      <div class="proj-modal-section">
        <h4>Çfarë përfshin</h4>
        <ul class="proj-modal-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      ${stack}
      <div class="proj-modal-section">
        <h4>Teknologjitë</h4>
        <div class="proj-modal-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="proj-modal-cta">
        ${liveBtn}
        <button class="btn-secondary proj-modal-close-btn">Mbyll</button>
      </div>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.proj-modal-close').onclick = closeProject;
  overlay.querySelector('.proj-modal-close-btn').onclick = closeProject;
}

function closeProject() {
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.id));
});

if (overlay) {
  overlay.addEventListener('click', e => { if (e.target === overlay) closeProject(); });
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });

document.querySelectorAll('.proj-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('.proj-card').forEach(card => {
      card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
    });
  });
});
