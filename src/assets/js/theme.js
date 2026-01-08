// Dark mode toggle functionality
(function() {
  'use strict';

  // Get theme from localStorage or use system preference
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  // Set theme on document root
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Toggle between light and dark
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize theme before page renders to prevent flash
  const initialTheme = getPreferredTheme();
  setTheme(initialTheme);

  // Set up toggle button when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  });
})();
