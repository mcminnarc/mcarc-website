// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      const isExpanded = mainNav.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
});
