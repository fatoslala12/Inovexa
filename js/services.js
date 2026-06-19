// Service filter pills
document.querySelectorAll('.svc-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.svc-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('.svc-card[data-cat]').forEach(card => {
      card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
    });
  });
});

// Stagger reveal on service cards
document.querySelectorAll('.svc-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 50) + 'ms';
});
