(function () {
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

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.contact-submit');
      if (!btn || btn.disabled) return;

      const original = btn.innerHTML;
      btn.disabled = true;
      btn.classList.add('success');
      btn.innerHTML = '✅ Kërkesa u dërgua me sukses!';

      setTimeout(() => {
        btn.disabled = false;
        btn.classList.remove('success');
        btn.innerHTML = original;
        form.reset();
        pills.forEach(p => p.classList.remove('active'));
        if (employeesInput) employeesInput.value = '';
      }, 3500);
    });
  }
})();
