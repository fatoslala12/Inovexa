const BLOG_POSTS = [
  {
    id: 13, cat: 'web', catLabel: 'Web',
    title: 'Zhvillim website në Tiranë: çfarë duhet të kërkoni nga agjencia juaj IT',
    excerpt: 'Çmimi, afati, SEO dhe mirëmbajtja — udhëzues praktik për bizneset që kërkojnë website profesional në Shqipëri.',
    body: 'Kur kërkoni “zhvillim website Tiranë” ose “kompani web design Shqipëri”, ofertat mund të ndryshojnë shumë. Një website profesional nuk është vetëm dizajn: përfshin strategji përmbajtjeje, shpejtësi ngarkimi, optimizim SEO lokale, version mobil dhe plan mirëmbajtjeje. Pyetjet e duhura për agjencinë: a përdoret CMS i lehtë për ju, a merrni pronësinë e kodit, sa kushton mirëmbajtja vjetore dhe a përfshihet SSL + backup? Në Inovexa, çdo projekt web fillon me analizë të objektivave të biznesit — jo me template të përgjithshëm. Kjo është arsyeja pse klientët tanë shohin rritje të trafikut organik dhe më shumë kërkesa kontakti brenda muajve të parë.',
    image: '../assets/images/blog/web.jpg',
    readTime: '7 min', date: 'Qershor 2026'
  },
  {
    id: 14, cat: 'ai', catLabel: 'IT & Biznes',
    title: 'Transformimi digjital për PME në Shqipëri: nga ideja te rezultati në 90 ditë',
    excerpt: 'ERP, automatizim, AI dhe cloud — si të prioritizoni investimet teknologjike kur buxheti është i kufizuar.',
    body: 'Transformimi digjital nuk do të thotë të blini çdo softuer në treg. Për bizneset shqiptare, hapat me ROI më të shpejtë janë: (1) website + Google Business i optimizuar, (2) automatizim i proceseve repetitive (fatura, raporte, lead management), (3) integrim WhatsApp/CRM, (4) dashboard për vendimmarrje. AI dhe chatbot-ët vijnë pas — kur keni të dhëna të strukturuara. Në 90 ditë, një PME mund të kalojë nga Excel i shpërndarë në sistem të integruar me raporte real-time. Inovexa kombinon përvojë nga sektori publik dhe privat për të ndërtuar zgjidhje që respektojnë buxhetin dhe rregulloret lokale. Fokusi: më pak punë manuale, më shumë rritje të matshme.',
    image: '../assets/images/blog/digital.jpg',
    readTime: '8 min', date: 'Maj 2026'
  },
  {
    id: 1, cat: 'ai', catLabel: 'AI',
    title: 'Si mund ta ndihmojë Inteligjenca Artificiale biznesin tuaj në 2025',
    excerpt: 'AI nuk është më e ardhmja — është e tashmja. Zbuloni mënyra konkrete si bizneset shqiptare po përfitojnë nga automatizimi inteligjent.',
    body: 'Nga chatbot-ët që përgjigjen klientëve 24/7, deri te analiza automatike e të dhënave — AI po transformon mënyrën se si operojnë kompanitë e vogla dhe të mesme. Në këtë artikull eksplorojmë rastet më praktike: asistentë virtualë, gjenerim automatik i raporteve, personalizim i ofertave dhe optimizim i proceseve operative. ROI-ja matet jo në muaj, por në javë.',
    image: '../assets/images/blog/ai.jpg',
    readTime: '5 min', date: 'Qershor 2025'
  },
  {
    id: 2, cat: 'web', catLabel: 'Web',
    title: 'Pse çdo kompani ka nevojë për një website profesional sot',
    excerpt: 'Klienti vendos brenda 7 sekondave. Ja çfarë duhet të komunikojë website-i juaj për të fituar besimin.',
    body: 'Një website profesional nuk është luks — është investim. Shpejtësia, dizajni mobil-first, SEO dhe mesazhi i qartë janë faktorët që ndajnë kompanitë që rriten nga ato që mbeten prapa. Në 2025, 78% e konsumatorëve kërkojnë online para se të kontaktojnë një biznes. Nëse nuk jeni aty, nuk ekzistoni.',
    image: '../assets/images/blog/web.jpg',
    readTime: '4 min', date: 'Maj 2025'
  },
  {
    id: 3, cat: 'auto', catLabel: 'Automatizim',
    title: 'Automatizimi: sekreti i produktivitetit modern',
    excerpt: 'Çdo orë punë repetitive është orë e humbur. Mësoni si ta shmangni me workflow automation.',
    body: 'Fatura automatike, raporte, integrime CRM dhe workflow-ë të personalizuara — automatizimi kthen kohën e ekipit tuaj në vlerë reale për biznesin. Zgjidhje si n8n, Zapier ose sisteme custom mund të lidhin email-in, WhatsApp-in, Google Sheets dhe ERP-në tuaj në një rrjedhë të vetme pa prekur dorën.',
    image: '../assets/images/blog/auto.jpg',
    readTime: '6 min', date: 'Prill 2025'
  },
  {
    id: 4, cat: 'cloud', catLabel: 'Cloud',
    title: 'Cloud vs Server lokal: çfarë i përshtatet biznesit tuaj?',
    excerpt: 'Krahasim praktik i kostove, sigurisë dhe shkallëzueshmërisë për kompanitë shqiptare.',
    body: 'Cloud computing ofron fleksibilitet dhe kosto operative më të ulëta për startup-et, ndërsa serverët lokalë japin kontroll maksimal për të dhëna sensitive. Ekspertiza jonë nga AKSHI na ka mësuar që zgjidhja e duhur varet nga rregulloret, buxheti dhe nevojat e vazhdueshme të mirëmbajtjes — jo nga moda teknologjike.',
    image: '../assets/images/blog/cloud.jpg',
    readTime: '7 min', date: 'Mars 2025'
  },
  {
    id: 5, cat: 'security', catLabel: 'Siguri',
    title: '5 hapa për të mbrojtur të dhënat e biznesit tuaj online',
    excerpt: 'Siguria digjitale nuk është opsionale. Udhëzues praktik për MSE-të shqiptare.',
    body: 'SSL, backup automatik, autentifikim me dy faktorë, politika fjalëkalimesh dhe monitorim i aksesit — këto janë minimumi në 2025. Me përvojë në sisteme kritike qeveritare dhe shëndetësore, Inovexa ndërton platforma që respektojnë standardet më të larta të sigurisë së të dhënave.',
    image: '../assets/images/blog/security.jpg',
    readTime: '5 min', date: 'Shkurt 2025'
  },
  {
    id: 6, cat: 'mobile', catLabel: 'Mobile',
    title: 'Aplikacionet mobile: kur ia vlen investimi?',
    excerpt: 'Jo çdo biznes ka nevojë për app. Mësoni kur është koha e duhur dhe kur mjafton një website PWA.',
    body: 'Aplikacionet native japin performancë dhe akses offline, por kushtojnë më shumë. Progressive Web Apps (PWA) ofrojnë 80% të funksionalitetit me 40% të kostos. Analizojmë rastet kur app-i është domosdoshmëri: e-commerce me porosi të shpeshta, shërbime me lokacion, ose platforma me përdorues të përditshëm.',
    image: '../assets/images/blog/mobile.jpg',
    readTime: '5 min', date: 'Janar 2025'
  },
  {
    id: 7, cat: 'ai', catLabel: 'AI',
    title: 'Chatbot për WhatsApp: si ta automatizoni komunikimin me klientët',
    excerpt: 'Përgjigje 24/7, mbledhje lead-esh dhe rezervime — direkt nga WhatsApp Business.',
    body: 'WhatsApp është kanali #1 i komunikimit në Shqipëri. Integrimi i një chatbot-i inteligjent mund të përgjigjet pyetjeve më të shpeshta, të mbledhë kontakte dhe të planifikojë takime — pa punë manuale. Kombinojmë OpenAI/Claude me knowledge base të personalizuar për biznesin tuaj.',
    image: '../assets/images/blog/digital.jpg',
    readTime: '4 min', date: 'Dhjetor 2024'
  },
  {
    id: 8, cat: 'web', catLabel: 'Web',
    title: 'SEO lokale: si të gjendeni në Google nga klientët shqiptarë',
    excerpt: 'Google Business, fjalë kyçe lokale dhe përmbajtje në shqip — strategji që funksionon.',
    body: 'SEO lokale është arma sekrete e bizneseve që synojnë tregun shqiptar. Optimizimi i profilit Google Business, përmbajtje në gjuhën shqipe, backlink-e lokale dhe shpejtësia e faqes janë faktorët që na kanë ndihmuar klientët të rriten organikisht me 120% brenda 6 muajsh.',
    image: '../assets/images/blog/seo.jpg',
    readTime: '6 min', date: 'Nëntor 2024'
  },
  {
    id: 9, cat: 'auto', catLabel: 'ERP',
    title: 'ERP për biznese të vogla: nga Excel te sistemi i integruar',
    excerpt: 'Kur spreadsheet-et nuk mjaftojnë më — shenjat që keni nevojë për ERP.',
    body: 'Nëse menaxhoni stokun, faturat dhe klientët në Excel me 10 skedarë të ndryshëm, keni kaluar kohën e ERP-së. Një sistem i integruar si CapitalRise eliminon gabimet manuale, jep raporte real-time dhe rrit efikasitetin me 40%+. Filloni me modulet që ju duhen — mos blini gjithçka menjëherë.',
    image: '../assets/images/blog/erp.jpg',
    readTime: '7 min', date: 'Tetor 2024'
  },
  {
    id: 10, cat: 'cloud', catLabel: 'DevOps',
    title: 'DevOps për ekipet e vogla: deploy i shpejtë pa kompleksitet',
    excerpt: 'GitHub, Vercel, Render dhe Neon — stack modern që përdorim çdo ditë.',
    body: 'DevOps nuk është vetëm për korporata. Me GitHub Actions, Vercel për frontend, Render për backend dhe PostgreSQL në Neon, një ekip i vogël mund të deploy-ojë çdo ditë me zero downtime. Kjo është saktësisht stack-u që përdorim për CapitalRise dhe projektet tona.',
    image: '../assets/images/blog/devops.jpg',
    readTime: '5 min', date: 'Shtator 2024'
  },
  {
    id: 11, cat: 'web', catLabel: 'Startup',
    title: 'Si të nisni një startup teknologjike në Shqipëri në 2025',
    excerpt: 'Ide, MVP, financim dhe ekosistemi lokal — udhëzues praktik nga ekspertët.',
    body: 'Ekosistemi startup në Shqipëri po rritet. Hapat kryesorë: validoni idenë me 10 intervista klientësh, ndërtoni MVP brenda 4-8 javësh, përdorni cloud për të minimizuar kostot, dhe fokusoheni në një treg të vetëm para se të zgjeroni. Inovexa ofron konsultim falas për MVP.',
    image: '../assets/images/blog/startup.jpg',
    readTime: '8 min', date: 'Gusht 2024'
  },
  {
    id: 12, cat: 'security', catLabel: 'Të Dhëna',
    title: 'PostgreSQL: pse e zgjedhim për çdo projekt kritik',
    excerpt: 'Baza e të dhënave open-source më e besueshme — nga biblioteka deri te ERP.',
    body: 'PostgreSQL është zgjedhja jonë standarde për projekte kritike: Biblioteka Kamëz, CapitalRise, sisteme shëndetësore. Ofron ACID compliance, performancë të lartë, JSON support dhe ekosistem madh. Me përvojë DBA nga AKSHI dhe MedServ, e dimë si ta optimizojmë për prodhim.',
    image: '../assets/images/blog/data.jpg',
    readTime: '6 min', date: 'Korrik 2024'
  }
];

const PER_PAGE = 6;
let currentPage = 1;
let currentFilter = 'all';

const grid = document.getElementById('blogGrid');
const pagination = document.getElementById('blogPagination');
const modal = document.getElementById('blogModal');
const modalContent = document.getElementById('blogModalContent');

function filteredPosts() {
  if (currentFilter === 'all') return BLOG_POSTS;
  return BLOG_POSTS.filter(p => p.cat === currentFilter);
}

function renderGrid() {
  const posts = filteredPosts();
  const totalPages = Math.ceil(posts.length / PER_PAGE) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * PER_PAGE;
  const pagePosts = posts.slice(start, start + PER_PAGE);

  grid.innerHTML = pagePosts.map(p => `
    <button class="blog-card reveal" data-id="${p.id}" type="button">
      <div class="blog-card-img">
        <img src="${p.image}" alt="${p.title}" loading="lazy"/>
        <span class="blog-card-cat blog-card-cat--${p.cat}">${p.catLabel}</span>
      </div>
      <div class="blog-card-body">
        <div class="blog-card-meta">${p.readTime} · ${p.date}</div>
        <h3 class="blog-card-title">${p.title}</h3>
        <p class="blog-card-excerpt">${p.excerpt}</p>
        <span class="blog-card-read">Lexo më shumë →</span>
      </div>
    </button>
  `).join('');

  grid.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => openArticle(+card.dataset.id));
  });

  document.querySelectorAll('.blog-grid .reveal').forEach(el => {
    el.classList.add('visible');
  });

  renderPagination(totalPages, posts.length);
}

function renderPagination(totalPages, totalPosts) {
  if (!pagination) return;
  let html = '';

  html += `<button class="blog-page-btn" id="blogPrev" ${currentPage === 1 ? 'disabled' : ''}>←</button>`;

  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="blog-page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }

  html += `<button class="blog-page-btn" id="blogNext" ${currentPage === totalPages ? 'disabled' : ''}>→</button>`;
  html += `<span class="blog-page-info">Faqja ${currentPage} nga ${totalPages} · ${totalPosts} artikuj</span>`;

  pagination.innerHTML = html;

  pagination.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = +btn.dataset.page;
      renderGrid();
      document.querySelector('.blog-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.getElementById('blogPrev')?.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderGrid(); }
  });
  document.getElementById('blogNext')?.addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderGrid(); }
  });
}

function openArticle(id) {
  const p = BLOG_POSTS.find(x => x.id === id);
  if (!p || !modal) return;

  modalContent.innerHTML = `
    <div class="blog-modal-header">
      <button class="blog-modal-close" aria-label="Mbyll">&times;</button>
      <img class="blog-modal-img" src="${p.image}" alt="${p.title}"/>
    </div>
    <div class="blog-modal-body">
      <div class="blog-modal-meta"><span class="blog-card-cat blog-card-cat--${p.cat}" style="position:static;display:inline-block;margin-right:8px">${p.catLabel}</span>${p.readTime} · ${p.date}</div>
      <h2 class="blog-modal-title">${p.title}</h2>
      <div class="blog-modal-content">${p.body}</div>
    </div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalContent.querySelector('.blog-modal-close').onclick = closeArticle;
}

function closeArticle() {
  modal?.classList.remove('open');
  document.body.style.overflow = '';
}

if (modal) {
  modal.addEventListener('click', e => { if (e.target === modal) closeArticle(); });
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeArticle(); });

document.querySelectorAll('.blog-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.blog-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    currentPage = 1;
    renderGrid();
  });
});

if (grid) renderGrid();
