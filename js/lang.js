const language = localStorage.getItem('language');
const currentPage = window.location.pathname;
if (currentPage.includes('-en') && language === 'serbian') {
  const serbianPage = currentPage.replace('-en', '');
  window.location.href = serbianPage;
}
if(currentPage === '-en.html' && language === 'serbian') {
  window.location.href = '/pop-muzika';
}
if (!currentPage.includes('-en') && language === 'english') {
  const englishPage = currentPage.replace(/(\.html)?$/, '-en.html');
  window.location.href = englishPage;
}
async function redirectByLocation() {
    try {
      const response = await fetch('https://ipwhois.app/json/');
      const data = await response.json();
      const country = data.country_code; 
      const redirectCountries = ['RS', 'ME', 'HR', 'BA']; 
      if (!redirectCountries.includes(country)) {
        localStorage.setItem('language', 'english');
        const englishPage = currentPage.replace(/(\.html)?$/, '-en.html'); 
        window.location.href = englishPage;
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
    location.reload();
  });
}

if (languageToggleMobileRs) {
  languageToggleMobileRs.addEventListener('click', function() {
    localStorage.setItem('language', 'serbian');
    location.reload();
  });
}
const languageToggleEn = document.getElementById('language-toggle-en');
const languageToggleMobileEn = document.getElementById('language-toggle-mobile-en');

if (languageToggleEn) {
  languageToggleEn.addEventListener('click', function() {
    localStorage.setItem('language', 'english');
    location.reload();
  });
}
if (languageToggleMobileEn) {
  languageToggleMobileEn.addEventListener('click', function() {
    localStorage.setItem('language', 'english');
    location.reload();
  });
}

if (!localStorage.getItem('language')) {
  redirectByLocation();
}