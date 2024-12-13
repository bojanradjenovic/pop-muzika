const toggleButton = document.getElementById('dark-mode-toggle');
const toggleButtonMobile = document.getElementById('dark-mode-toggle-mobile');
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('dark-mode');
  });
  document.querySelector('.navbar').classList.toggle('dark-mode');
  document.querySelector('h1').classList.toggle('dark-mode');
  // Toggle button icon
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '🌜';
    toggleButtonMobile.textContent = '🌜';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleButton.textContent = '🌞';
    toggleButtonMobile.textContent = '🌞';
    localStorage.setItem('darkMode', 'disabled');
  }
}
toggleButton.addEventListener('click', toggleDarkMode);
toggleButtonMobile.addEventListener('click', toggleDarkMode);

// Check system preference for dark mode
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Load dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled' || (darkMode === null && prefersDarkScheme)) {
  document.body.classList.add('dark-mode');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.add('dark-mode');
  });
  document.querySelector('.navbar').classList.add('dark-mode');
  document.querySelector('h1').classList.add('dark-mode');
  toggleButton.textContent = '🌜';
  toggleButtonMobile.textContent = '🌜';
} else {
  document.body.classList.remove('dark-mode');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('dark-mode');
  });
  document.querySelector('.navbar').classList.remove('dark-mode');
  document.querySelector('h1').classList.remove('dark-mode');
  toggleButton.textContent = '🌞';
  toggleButtonMobile.textContent = '🌞';
}