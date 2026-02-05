document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.getElementById('contactBtn');

  contactBtn.addEventListener('click', () => {
    alert('Thanks for your interest! This is a demo website.');
  });

  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Add entrance animation
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 * (index + 1));
  });
});
