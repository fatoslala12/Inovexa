(function () {
  const ACCESS_KEY = (
    window.INOVEXA_CONTACT?.web3formsAccessKey ||
    '481d6e2a-241a-4041-a1d2-b7c93638a845'
  ).trim();

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

      const fd = new FormData(form);
      const name = fd.get('name') || '';
      const payload = {
        access_key: ACCESS_KEY,
        subject: `Kërkesë e re nga ${name} — Inovexa`,
        from_name: 'Inovexa Website',
        name,
        email: fd.get('email'),
        phone: fd.get('phone'),
        company: fd.get('company') || '—',
        companyType: fd.get('companyType') || '—',
        service: fd.get('service'),
        employees: fd.get('employees') || '—',
        message: fd.get('message'),
        botcheck: ''
      };

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        const result = await res.json();

        if (!res.ok || !result.success) {
          throw new Error(result.message || 'Dërgimi dështoi');
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
