/* ── INOVEXA — të dhënat e projekteve (burim i vetëm) ── */
(function () {
  const DATA = {
    biblioteka: {
      theme: 'theme-library',
      cat: 'software',
      year: '2026',
      cover: 'assets/images/projects/biblioteka-kamez-hero.png',
      shortTitle: 'Smart Library',
      shortDesc: 'Platformë inteligjente për menaxhimin e bibliotekave — katalog, huazime, rezervime, anëtarë dhe statistika live.',
      liveLabel: 'Live · bibliotekakamez.al',
      client: 'Biblioteka e Qytetit Kamëz — Pallati i Kulturës “Artan Cuku”',
      title: 'Smart Library — Platformë Inteligjente për Menaxhimin e Bibliotekave',
      url: 'https://www.bibliotekakamez.al',
      type: 'MVP Institucional · Full-Stack · Platformë e Shkallëzueshme',
      desc: 'Smart Library është një platformë e avancuar për transformimin digjital të bibliotekave publike, e projektuar për të centralizuar menaxhimin e katalogut, huazimeve, rezervimeve, anëtarëve dhe komunikimit me qytetarët në një ekosistem të vetëm modern.',
      intro: [
        'Projekti u zhvillua si zgjidhje MVP për Bibliotekën e Qytetit Kamëz — Pallatin e Kulturës “Artan Cuku”, me synimin për të zëvendësuar proceset manuale dhe menaxhimin me Excel me një sistem të automatizuar, të sigurt dhe të shkallëzueshëm.',
        'Platforma krijon një eksperiencë moderne për qytetarët dhe stafin, duke transformuar një proces tradicional në një sistem të centralizuar dhe të orientuar drejt të dhënave.'
      ],
      problem: {
        title: 'Problemi që zgjidh',
        text: 'Shumë biblioteka vazhdojnë të operojnë me procese manuale për huazimin e librave, menaxhimin e inventarit dhe komunikimin me anëtarët. Kjo krijon vonesa, gabime dhe mungesë transparence.',
        points: [
          'Katalog online me kërkim të avancuar',
          'Menaxhim i plotë i huazimeve dhe rezervimeve',
          'Portal personal për anëtarët',
          'Panele të dedikuara për stafin dhe administratorët',
          'Statistika dhe raporte në kohë reale',
          'Automatizim i njoftimeve, gjobave dhe proceseve operacionale'
        ]
      },
      stats: [
        { v: '1 599', l: 'Tituj në katalog' },
        { v: '6 997', l: 'Kopje të menaxhuara' },
        { v: '4', l: 'Role përdoruesish' }
      ],
      featureGroups: [
        {
          title: 'Për Vizitorët',
          icon: '👁',
          items: [
            'Kërkim i avancuar sipas titullit, autorit, ISBN-së dhe kategorive',
            'Filtrim sipas zhanrit, gjuhës, vitit dhe disponueshmërisë',
            'Shfaqje e stokut në kohë reale',
            'Njoftime dhe evente të bibliotekës',
            'Rubrika “Libri i Javës”',
            'Informacion institucional dhe kontakt'
          ]
        },
        {
          title: 'Për Anëtarët',
          icon: '👤',
          items: [
            'Portal personal me histori huazimesh',
            'Rezervime online të librave',
            'Menaxhim profili dhe fjalëkalimi',
            'Njoftime automatike për afatet e kthimit',
            'Shikim i gjobave dhe historikut të pagesave',
            'Dashboard me statistika personale leximi'
          ]
        },
        {
          title: 'Për Stafin',
          icon: '📋',
          items: [
            'Menaxhim i shpejtë i librave dhe kopjeve',
            'Procesim huazimesh dhe kthimesh',
            'Menaxhim rezervimesh',
            'Njoftime operative për aktivitetet ditore'
          ]
        },
        {
          title: 'Për Administratorët',
          icon: '⚙️',
          items: [
            'Dashboard analitik me grafikë dhe statistika',
            'Menaxhim i plotë i katalogut dhe inventarit',
            'Gjurmueshmëri (Audit Log) për çdo veprim kritik',
            'Menaxhim i politikave të bibliotekës',
            'Eksporte profesionale në Excel dhe PDF',
            'CMS për njoftime dhe evente',
            'Import masiv librash nga Excel',
            'Raporte operative automatike me email alerts'
          ]
        }
      ],
      advanced: [
        'Statistika live në kohë reale',
        'State Machine për statusin e kopjeve',
        'Politika fleksibël sipas tipit të anëtarit',
        'Soft Delete për ruajtjen e historikut',
        'Njoftime automatike Email + In-App',
        'Health Monitoring Endpoint',
        'Maintenance Mode',
        'Faqe të personalizuara 403 / 404 / 500',
        'Integrim me Open Library për kopertina librash',
        'REST API për integrime të jashtme'
      ],
      stackDetailed: {
        Backend: ['Python 3.12+', 'Django 5', 'Django REST Framework', 'JWT Authentication', 'PostgreSQL', 'Swagger / OpenAPI'],
        Frontend: ['Django Templates', 'Tailwind CSS', 'Vanilla JavaScript', 'AJAX Search & Filtering', 'Responsive Design', 'Dark Mode'],
        'Infrastrukturë': ['PostgreSQL (Neon)', 'Gunicorn', 'WhiteNoise', 'Render Cloud Hosting', 'Environment-based Config']
      },
      result: 'Smart Library krijon një eksperiencë moderne për qytetarët dhe stafin e bibliotekës, duke transformuar një proces tradicional në një sistem të automatizuar, të centralizuar dhe të orientuar drejt të dhënave. Ky projekt demonstron aftësi të avancuara në projektimin e sistemeve, zhvillimin Full-Stack, modelimin e proceseve biznesore dhe ndërtimin e platformave të gatshme për përdorim real institucional.',
      stack: {
        frontend: 'Django Templates · Tailwind CSS · Vanilla JS · AJAX · Dark Mode',
        backend: 'Python 3.12+ · Django 5 · DRF · JWT',
        database: 'PostgreSQL (Neon)',
        deploy: 'Render · Gunicorn · WhiteNoise'
      },
      images: [
        'assets/images/projects/biblioteka-kamez-hero.png',
        'assets/images/projects/biblioteka-kamez-stats.png'
      ],
      tags: ['Django 5', 'PostgreSQL', 'Tailwind CSS', 'REST API', 'JWT', 'Dark Mode']
    },
    capital: {
      theme: 'theme-capital',
      cat: 'software',
      year: '2026',
      cover: 'assets/images/projects/capitalrise-kontrata.png',
      shortTitle: 'CapitalRise',
      shortDesc: 'ERP cloud për ndërtim — kontrata, punonjës, orë pune, pagesa, detyra dhe raporte financiare në një platformë.',
      liveLabel: 'Live · Vercel',
      client: 'CapitalRise',
      title: 'CapitalRise — Smart Construction & Workforce Management Platform',
      url: 'https://capitalrise-seven.vercel.app/',
      type: 'ERP Cloud · Ndërtim · Workforce Management',
      desc: 'CapitalRise është një platformë moderne ERP (Enterprise Resource Planning) e zhvilluar për kompanitë e ndërtimit, mirëmbajtjes, infrastrukturës dhe shërbimeve teknike, me qëllim centralizimin dhe automatizimin e proceseve operative, financiare dhe administrative.',
      intro: [
        'Platforma eliminon përdorimin e Excel-eve, dokumenteve të shpërndara dhe proceseve manuale, duke ofruar një sistem të vetëm për menaxhimin e kontratave, punonjësve, orëve të punës, pagesave, detyrave dhe raporteve financiare.'
      ],
      problem: {
        title: 'Çfarë zgjidh CapitalRise?',
        text: 'Shumica e kompanive të ndërtimit përballen me problematika si mungesa e kontrollit mbi kostot, menaxhimi manual i orëve dhe pagesave, raporte jo të sakta dhe dokumentacion i shpërndarë. CapitalRise adreson të gjitha këto sfida në një platformë të vetme.',
        points: [
          'Mungesë kontrolli mbi kostot reale të projekteve',
          'Menaxhim manual të orëve të punës',
          'Pagesa të paautomatizuara',
          'Raporte financiare jo të sakta',
          'Dokumentacion të shpërndarë',
          'Vështirësi në ndjekjen e progresit të kontratave',
          'Mungesë transparence për menaxhmentin'
        ]
      },
      stats: [
        { v: '7', l: 'Module kryesore' },
        { v: 'Cloud', l: 'Arkitekturë moderne' },
        { v: 'RBAC', l: 'Kontroll me role' }
      ],
      featureGroupsTitle: 'Modulet Kryesore',
      featureGroups: [
        {
          title: 'Contract Management',
          icon: '📋',
          items: [
            'Regjistrimi i kontratave me numër unik',
            'Kompania kontraktuese dhe vendndodhja e projektit',
            'Data fillimit dhe përfundimit, statusi i kontratës',
            'Dokumentacioni shoqërues dhe monitorimi i progresit',
            'Llogaritja automatike e fitimit'
          ],
          benefits: ['Kontroll i plotë mbi projektet aktive', 'Evidencë e centralizuar', 'Dokumentacion i organizuar']
        },
        {
          title: 'Employee Management',
          icon: '👷',
          items: [
            'Regjistrimi i stafit dhe informacion personal',
            'Pozicioni, norma orare dhe statusi aktiv/pasiv',
            'Historia e punësimit'
          ],
          benefits: ['Eliminim i regjistrave manualë', 'Evidencë e plotë e stafit']
        },
        {
          title: 'Work Hours Tracking',
          icon: '⏱',
          items: [
            'Orë pune ditore dhe orë shtesë',
            'Punë sipas projekteve dhe kontratave',
            'Histori javore dhe mujore'
          ],
          benefits: ['Kontroll i kostove reale', 'Llogaritje automatike të pagave', 'Transparencë e plotë']
        },
        {
          title: 'Payroll & Payments',
          icon: '💰',
          items: [
            'Gjenerim automatik i pagesave',
            'Pagesa sipas javëve dhe projekteve',
            'Histori pagesash dhe evidencë e detyrimeve'
          ],
          benefits: ['Reduktim i gabimeve', 'Kursim kohe', 'Raporte të sakta financiare']
        },
        {
          title: 'Task Management',
          icon: '✅',
          items: [
            'Krijimi i detyrave dhe caktimi i përgjegjësve',
            'Afatet, prioritetet dhe statuset'
          ],
          benefits: ['Rritje e produktivitetit', 'Kontroll mbi afatet']
        },
        {
          title: 'Dashboard Inteligjent',
          icon: '📊',
          items: [
            'Kontrata aktive, punonjës aktivë dhe pagesat',
            'Orët e punës, fitimet dhe projektet në progres',
            'Panel qendror për menaxhmentin'
          ],
          benefits: ['Vendimmarrje në kohë reale', 'Pamje e plotë e biznesit']
        },
        {
          title: 'Raporte & Business Intelligence',
          icon: '📈',
          items: [
            'Fitim/Humbje dhe shpenzime sipas projektit',
            'Produktiviteti i stafit dhe performanca financiare',
            'Raporte mujore dhe vjetore'
          ],
          benefits: ['Analizë e thelluar', 'Planifikim strategjik']
        }
      ],
      security: [
        'JWT Authentication',
        'Role Based Access Control (RBAC)',
        'Secure API Access',
        'Cloud Backups',
        'HTTPS Encryption',
        'Audit Logging'
      ],
      roles: [
        {
          title: 'Administrator',
          items: ['Menaxhim i plotë', 'Kontrata', 'Punonjës', 'Pagesa', 'Raporte']
        },
        {
          title: 'Manager',
          items: ['Menaxhim projektesh', 'Detyra', 'Orë pune', 'Raporte operative']
        },
        {
          title: 'Employee',
          items: ['Regjistrim orësh pune', 'Detyrat personale', 'Informacionet e tyre']
        }
      ],
      services: [
        {
          title: 'Setup & Konfigurim',
          items: ['Instalimi i sistemit', 'Konfigurimi sipas kompanisë', 'Migrimi i të dhënave']
        },
        {
          title: 'Personalizim',
          items: ['Përshtatje sipas proceseve', 'Module shtesë sipas kërkesës', 'Integrime me sisteme ekzistuese']
        },
        {
          title: 'Mirëmbajtje',
          items: ['Support teknik', 'Përditësime', 'Backup', 'Monitorim i vazhdueshëm']
        },
        {
          title: 'Hosting',
          items: ['Menaxhim i plotë i infrastrukturës cloud', 'Database cloud', 'API hosting', 'Website hosting']
        }
      ],
      bonus: {
        title: 'Website Profesional Falas',
        text: 'Për çdo klient që abonon platformën CapitalRise:',
        items: [
          'Website korporativ profesional',
          'Domain & hosting',
          'Dizajn modern',
          'Formular kontakti',
          'Optimizim SEO bazë'
        ]
      },
      stackDetailed: {
        Frontend: ['React.js', 'Vite', 'Tailwind CSS', 'Axios'],
        Backend: ['Node.js', 'Express.js', 'JWT Authentication', 'REST API'],
        Database: ['PostgreSQL', 'Neon Database (Cloud)'],
        'Frontend Hosting': ['Vercel'],
        'Backend Hosting': ['Render'],
        'Source Control': ['GitHub']
      },
      result: 'CapitalRise transformon menaxhimin operacional të kompanive të ndërtimit nga procese të shpërndara manuale në një platformë cloud të centralizuar, me kontroll financiar, transparencë për menaxhmentin dhe vendimmarrje në kohë reale.',
      stack: {
        frontend: 'React.js · Vite · Tailwind CSS · Axios',
        backend: 'Node.js · Express.js · JWT · REST API',
        database: 'PostgreSQL · Neon (Cloud)',
        deploy: 'Vercel · Render · GitHub'
      },
      images: [
        'assets/images/projects/capitalrise-kontrata.png',
        'assets/images/projects/capitalrise-punonjes.png'
      ],
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Vercel', 'JWT', 'ERP']
    },
    nabgroup: {
      theme: 'theme-nab',
      cat: 'web',
      year: '2024',
      cover: 'assets/images/projects/nabgroup-home.png',
      shortTitle: 'NAB Group Website',
      shortDesc: 'Website korporativ për kompani ndërtimi UK — portofol, shërbime, HSQE dhe 200+ projekte të përfunduara.',
      liveLabel: 'Live · nabgroup.uk',
      client: 'NAB Group Engineering Ltd',
      title: 'NAB Group — Website Korporativ Ndërtimi',
      url: 'https://www.nabgroup.uk/',
      type: 'Website Statik · WordPress',
      desc: 'Faqe interneti moderne dhe profesionale për kompani ndërtimi dhe inxhinierie me fokus në identitetin e kompanisë, eksperiencën 20+ vjeçare dhe projektet e realizuara.',
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
        'assets/images/projects/nabgroup-home.png'
      ],
      tags: ['WordPress', 'HTML/CSS', 'SEO', 'Responsive']
    },
    shortit: {
      theme: 'theme-shortit',
      cat: 'software',
      year: '2025',
      cover: 'assets/images/projects/shortit-dashboard.png',
      previewImages: [
        'assets/images/projects/shortit-login.png',
        'assets/images/projects/shortit-short.png'
      ],
      shortTitle: 'Sistemi i Shortit',
      shortDesc: 'Caktim automatik i mësuesve, përgjegjësve të katit dhe mbikëqyrësve MAS gjatë provimeve shkollore — me motor optimizimi OR-Tools.',
      liveLabel: 'Platformë Institucionale',
      client: 'ZVA & Ministria e Arsimit · Shqipëri',
      urlLabel: 'Platformë Mbikëqyrës Provimesh',
      title: 'Sistemi i Shortit — Caktim Inteligjent i Personelit gjatë Provimeve',
      type: 'Optimizim · Constraint Programming · FastAPI · Next.js',
      desc: 'Kur mijëra mësues duhet të shpërndahen në dhjetëra shkolla për provime kombëtare, shorti me Excel bëhet i ngadaltë, i gabueshëm dhe i pabalancuar. Ky sistem e zëvendëson me një motor matematikor që gjen zgjidhjen optimale brenda rregullave strikte arsimore.',
      intro: [
        'Platformë web për ZVA-t dhe Ministrinë e Arsimit që automatizon shortin e personelit: mësues mbikëqyrës, përgjegjës kati dhe mbikëqyrës nga Arsimi (MAS). Të dhënat ngarkohen nga Excel, shorti gjenerohet për 1 ose 4 provime njëkohësisht, dhe rezultatet eksportohen në Excel, PDF ose bundle për çdo ZVA.',
        'Në vend të orëve pune manuale, sistemi balancon ngarkesën, respekton kufizimet (jo te shkolla e vet, jo lënda e provimit, brenda ZVA-së) dhe llogarit automatikisht ~10% rezervë për çdo shkollë.'
      ],
      problem: {
        title: 'Pse na duhej automatizimi?',
        text: 'Gjatë provimeve kombëtare ose zonale, çdo shkollë ka nevojë për mbikëqyrës — mësues që mbikëqyrin klasa në shkolla të tjera. Për qindra shkolla dhe mijëra mësues, shorti manual krijon vonesa, gabime dhe mungesë transparence.',
        points: [
          'Hyrje në sistem dhe zgjedhje viti akademik',
          'Ngarkim i të dhënave nga Excel (ZVA, shkolla, mësues, provime)',
          'Kontroll i statusit të ngarkimit',
          'Gjenerim shorti — 1 provim ose 4 njëkohësisht',
          'Shqyrtim rezultatesh dhe përjashtime manuale',
          'Eksport raportesh Excel, PDF dhe bundle ZVA'
        ]
      },
      stats: [
        { v: '8', l: 'Module operative' },
        { v: '3', l: 'Lloje personeli' },
        { v: 'OR-Tools', l: 'Motor optimizimi' }
      ],
      featureGroupsTitle: 'Çfarë bën çdo modul',
      featureGroups: [
        {
          title: 'Të Dhënat',
          icon: '📂',
          items: [
            'Ngarkim drag & drop nga Excel për ZVA, shkolla, mësues dhe provime',
            'Skedar i vetëm “Institucioni” me 4 fletë (rekomandohet)',
            'Validim automatik i fushave dhe historik ngarkimesh'
          ]
        },
        {
          title: 'Statusi i Ngarkimit',
          icon: '📊',
          items: [
            'Pasqyrë live: sa ZVA, shkolla, mësues, provime janë ngarkuar',
            'Historiku i skedarëve me datë, orë dhe numër regjistrash'
          ]
        },
        {
          title: 'Short',
          icon: '🎲',
          items: [
            'Gjenerim për 1 provim ose 4 provime njëkohësisht',
            'Caktim mësues → shkollë → klasë, përgjegjës kati → kat, MAS → shkollë',
            'Rezerva ~10% dhe eksport automatik Excel pas gjenerimit'
          ]
        },
        {
          title: 'Mësues',
          icon: '👨‍🏫',
          items: [
            'Lista e filtruar me shkollë aktuale, caktim, provim dhe status rezervë',
            'Përjashtim manual për shortin e ardhshëm',
            'Eksport Excel i pamjes aktuale'
          ]
        },
        {
          title: 'Përgjegjës Kati',
          icon: '🏫',
          items: [
            '1 person për kat, jo te shkolla e vet, me balancim ngarkese',
            'Filtra sipas qytetit, ZVA-së, shkollës dhe provimit'
          ]
        },
        {
          title: 'Mbikëqyrës MAS',
          icon: '🏛',
          items: [
            '1 person MAS për shkollë/provim, me të njëjtat rregulla balancimi',
            'Status caktuar ose rezervë, me eksport Excel'
          ]
        },
        {
          title: 'Raportet',
          icon: '📋',
          items: [
            'Eksport Excel, PDF roster dhe bundle i plotë për ZVA',
            'Grupim ZVA → shkollë, snapshot historik shortesh'
          ]
        },
        {
          title: 'Audit',
          icon: '🔍',
          items: [
            'Modul gjurmimi i ndryshimeve — gati për integrim me Supabase',
            'Regjistrim kush ndryshoi çfarë dhe kur'
          ]
        }
      ],
      advanced: [
        'Google OR-Tools (CP-SAT) — zgjidhje optimale brenda 60 sek',
        'Balancim i barabartë i ngarkesës midis mësuesve',
        'Hard constraints: jo shkolla e vet, jo lënda e provimit',
        'Ndalesa manuale mësues ↔ shkollë',
        'Kapacitet shkollë = numri i klasave',
        'Rezerva automatike ~10% për mësues, përgjegjës kati dhe MAS',
        'Short kombëtar (city = Albania) ose brenda ZVA-së',
        'Eksport bundle ZVA me të gjitha caktimet'
      ],
      stackDetailed: {
        Backend: ['Python 3', 'FastAPI', 'Google OR-Tools', 'pandas', 'openpyxl', 'ReportLab'],
        Frontend: ['TypeScript', 'Next.js 14', 'React 18', 'Tailwind CSS', 'Axios'],
        Solver: ['CP-SAT Constraint Programming', 'Timeout 60s', 'Deri në 4 CPU cores'],
        'Të dhëna': ['PostgreSQL', 'Import/Export Excel', 'Snapshot raportesh']
      },
      result: 'Sistemi transformon një proces kritik institucional — shortin e provimeve — nga orë pune manuale në minuta, me transparencë, balancim dhe raporte të gatshme për ZVA-t dhe MAS-in. Demonstron aftësi në modelim të problemeve komplekse, optimizim matematikor dhe ndërtim platformash operacionale për sektorin publik.',
      stack: {
        frontend: 'Next.js 14 · React 18 · Tailwind CSS · TypeScript',
        backend: 'Python · FastAPI · OR-Tools',
        database: 'PostgreSQL',
        deploy: 'Lokal · API port 8000 · Frontend port 3000'
      },
      images: [
        'assets/images/projects/shortit-login.png',
        'assets/images/projects/shortit-dashboard.png',
        'assets/images/projects/shortit-short.png',
        'assets/images/projects/shortit-upload-status.png',
        'assets/images/projects/shortit-mesues.png',
        'assets/images/projects/shortit-pergjegjes-kati.png',
        'assets/images/projects/shortit-mas.png',
        'assets/images/projects/shortit-raporte.png'
      ],
      tags: ['FastAPI', 'Next.js', 'OR-Tools', 'PostgreSQL', 'Excel', 'Optimizim']
    }
  };

  const ORDER = ['capital', 'biblioteka', 'shortit', 'nabgroup'];
  const HOME_ORDER = ['capital', 'biblioteka'];

  function basePath() {
    return document.body?.dataset?.base || '';
  }

  function asset(path) {
    return basePath() + path;
  }

  function detailUrl(id) {
    return basePath() + 'pages/projekt.html?id=' + encodeURIComponent(id);
  }

  function get(id) {
    if (!id) return null;
    return DATA[String(id).trim()] || null;
  }

  function homeCardHtml(id, index) {
    const p = DATA[id];
    if (!p) return '';
    const href = detailUrl(id);
    const tags = p.tags.slice(0, 3).map(t => '<span class="home-proj-tag">' + t + '</span>').join('');
    const num = String(index + 1).padStart(2, '0');

    return (
      '<a href="' + href + '" class="home-proj-card reveal">' +
        '<div class="home-proj-visual">' +
          '<img src="' + asset(p.cover) + '" alt="' + p.shortTitle + '" loading="' + (index === 0 ? 'eager' : 'lazy') + '"' + (index === 0 ? ' fetchpriority="high"' : '') + '/>' +
          '<div class="home-proj-visual-shade"></div>' +
          '<span class="home-proj-live">' + p.liveLabel + '</span>' +
          '<span class="home-proj-index">' + num + '</span>' +
        '</div>' +
        '<div class="home-proj-body">' +
          '<span class="home-proj-client">' + p.client + '</span>' +
          '<h3 class="home-proj-title">' + p.shortTitle + '</h3>' +
          '<p class="home-proj-desc">' + p.shortDesc + '</p>' +
          '<div class="home-proj-foot">' +
            '<div class="home-proj-tags">' + tags + '</div>' +
            '<span class="home-proj-link">Shiko projektin' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
            '</span>' +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function renderHomeGrid(container) {
    if (!container) return;
    container.innerHTML = HOME_ORDER.map((id, i) => homeCardHtml(id, i)).join('');
  }

  function cardHtml(id) {
    const p = DATA[id];
    if (!p) return '';
    const href = detailUrl(id);
    const tags = p.tags.slice(0, 3).map(t => '<span class="proj-tag">' + t + '</span>').join('');

    return (
      '<a href="' + href + '" class="proj-card proj-card--featured proj-card--has-img reveal" data-id="' + id + '" data-cat="' + p.cat + '">' +
        '<div class="proj-card-visual">' +
          '<img class="proj-card-cover" src="' + asset(p.cover) + '" alt="' + p.shortTitle + '" loading="lazy"/>' +
          '<span class="proj-card-badge proj-card-badge--real">' + p.liveLabel + '</span>' +
          '<span class="proj-card-year">' + p.year + '</span>' +
        '</div>' +
        '<div class="proj-card-body">' +
          '<div class="proj-card-client">' + p.client + '</div>' +
          '<h3 class="proj-card-title">' + p.shortTitle + '</h3>' +
          '<p class="proj-card-desc">' + p.shortDesc + '</p>' +
          '<div class="proj-card-footer">' +
            '<div class="proj-card-tags">' + tags + '</div>' +
            '<span class="proj-card-arrow" aria-hidden="true">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
            '</span>' +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function renderGrid(container, ids) {
    if (!container) return;
    container.innerHTML = (ids || ORDER).map(id => cardHtml(id)).join('');
  }

  window.InovexaProjects = {
    DATA,
    ORDER,
    HOME_ORDER,
    get,
    asset,
    detailUrl,
    cardHtml,
    homeCardHtml,
    renderGrid,
    renderHomeGrid
  };
})();
