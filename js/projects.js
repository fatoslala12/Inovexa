/* ── Faqja Projektet — grid + filtra ── */
(function () {
  const grid = document.getElementById('projGrid');
  if (grid && window.InovexaProjects) {
    InovexaProjects.renderGrid(grid, InovexaProjects.ORDER);
    if (window.InovexaAnimate) InovexaAnimate.refresh(grid);
  }

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
})();
