const language = localStorage.getItem('language');
const currentPage = window.location.pathname;
if (currentPage.includes('en') && language === 'serbian') {
  window.location.href = '/';
}

if (!currentPage.includes('en') && language === 'english') {
  window.location.href = 'en.html';
}

async function redirectByLocation() {
  try {
    const response = await fetch('https://ipwhois.app/json/');
    const data = await response.json();
    const country = data.country_code; 
    const redirectCountries = ['RS', 'ME', 'HR', 'BA']; 
    if (!redirectCountries.includes(country)) {
      localStorage.setItem('language', 'english');
      window.location.href = 'en.html';
    } else {
      localStorage.setItem('language', 'serbian');
    }
  } catch (error) {
    console.error('Error fetching geolocation:', error);
  }
}

const languageToggleRs = document.getElementById('language-toggle-rs');
const languageToggleMobileRs = document.getElementById('language-toggle-mobile-rs');

if (languageToggleRs) {
  languageToggleRs.addEventListener('click', function() {
    localStorage.setItem('language', 'serbian');
    window.location.href = '/';
  });
}

if (languageToggleMobileRs) {
  languageToggleMobileRs.addEventListener('click', function() {
    localStorage.setItem('language', 'serbian');
    window.location.href = '/';
  });
}

const languageToggleEn = document.getElementById('language-toggle-en');
const languageToggleMobileEn = document.getElementById('language-toggle-mobile-en');

if (languageToggleEn) {
  languageToggleEn.addEventListener('click', function() {
    localStorage.setItem('language', 'english');
    window.location.href = 'en.html';
  });
}

if (languageToggleMobileEn) {
  languageToggleMobileEn.addEventListener('click', function() {
    localStorage.setItem('language', 'english');
    window.location.href = 'en.html';
  });
}

if (!localStorage.getItem('language')) {
  redirectByLocation();
}
