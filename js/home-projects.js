/* ── Kryefaqja — projektet e fundit (bento 2+1) ── */
(function () {
  const grid = document.getElementById('homeProjGrid');
  if (!grid || !window.LalVexaProjects) return;
  LalVexaProjects.renderHomeGrid(grid);
  if (window.LalVexaAnimate) LalVexaAnimate.refresh(grid);
})();
