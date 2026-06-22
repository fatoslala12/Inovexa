/* ── Kryefaqja — projektet e fundit (bento 2+1) ── */
(function () {
  const grid = document.getElementById('homeProjGrid');
  if (!grid || !window.InovexaProjects) return;
  InovexaProjects.renderHomeGrid(grid);
  if (window.InovexaAnimate) InovexaAnimate.refresh(grid);
})();
