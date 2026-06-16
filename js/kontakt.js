(function () {
  const WEB3_KEY = (
    window.INOVEXA_CONTACT?.web3formsAccessKey ||
    '481d6e2a-241a-4041-a1d2-b7c93638a845'
  ).trim();

  const COMPANY_LABELS = {
    startup: 'Startup',
    sme: 'PME / Biznes i Vogël',
    enterprise: 'Korporatë / Ndërmarrje e Madhe',
    agency: 'Agjenci Marketing / Kreative',
    public: 'Institucion Publik',
    ngo: 'OJQ / Non-profit',
    freelancer: 'Freelancer / Individ',
    other: 'Tjetër'
  };

  const form = document.getElementById('contactForm');
  const pills = document.querySelectorAll('.contact-pill');
  const employeesInput = document.getElementById('employees');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      if (employeesInput) employeesInput.value = pill.dataset.value;
    });
  });

  function collectFormData(fd) {
    const name = (fd.get('name') || '').trim();
    return {
      name,
      email: (fd.get('email') || '').trim(),
      phone: fd.get('phone') || '—',
      company: fd.get('company') || '—',
      companyType: COMPANY_LABELS[fd.get('companyType')] || fd.get('companyType') || '—',
      service: fd.get('service') || '—',
      employees: fd.get('employees') || '—',
      message: fd.get('message') || '—'
    };
  }

  function emailJsReady() {
    const cfg = window.INOVEXA_EMAIL || {};
    const hasKey = cfg.publicKey && cfg.publicKey !== 'PASTE_PUBLIC_KEY_HERE';
    const hasTemplate = cfg.templateId && cfg.templateId !== 'PASTE_TEMPLATE_ID_HERE';
    return cfg.serviceId && hasKey && hasTemplate && window.emailjs;
  }

  async function sendViaEmailJS(data) {
    const cfg = window.INOVEXA_EMAIL;
    emailjs.init({ publicKey: cfg.publicKey });
    await emailjs.send(cfg.serviceId, cfg.templateId, {
      client_name: data.name,
      client_email: data.email,
      client_phone: data.phone,
      client_company: data.company,
      company_type: data.companyType,
      service: data.service,
      employees: data.employees,
      client_message: data.message
    });
  }

  async function sendViaWeb3Forms(data) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3_KEY,
        subject: `Kërkesë e re nga ${data.name} · Inovexa SHPK`,
        from_name: 'Inovexa SHPK',
        email: data.email,
        replyto: data.email,
        'Emri / Mbiemër': data.name,
        'Email': data.email,
        'Telefoni': data.phone,
        'Kompania': data.company,
        'Lloji i kompanisë': data.companyType,
        'Shërbimi': data.service,
        'Numri i punonjësve': data.employees,
        'Mesazhi': data.message,
        botcheck: ''
      })
    });
    const result = await res.json();
    if (!res.ok || !result.success) {
      throw new Error(result.message || 'Dërgimi dështoi');
    }
  }

  function showBtnState(btn, state, text) {
    btn.classList.remove('success', 'error');
    if (state) btn.classList.add(state);
    btn.innerHTML = text;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.contact-submit');
      if (!btn || btn.disabled) return;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const original = btn.innerHTML;
      btn.dataset.originalHtml = original;
      btn.disabled = true;
      showBtnState(btn, null, 'Duke dërguar...');

      const data = collectFormData(new FormData(form));

      try {
        if (emailJsReady()) {
          await sendViaEmailJS(data);
        } else {
          await sendViaWeb3Forms(data);
        }

        showBtnState(btn, 'success', '✅ Kërkesa u dërgua me sukses!');
        form.reset();
        pills.forEach(p => p.classList.remove('active'));
        if (employeesInput) employeesInput.value = '';
      } catch {
        showBtnState(btn, 'error', '❌ Gabim gjatë dërgimit. Provoni përsëri ose na shkruani në WhatsApp.');
      }

      setTimeout(() => {
        btn.disabled = false;
        btn.classList.remove('success', 'error');
        btn.innerHTML = original;
      }, 4000);
    });
  }
})();
