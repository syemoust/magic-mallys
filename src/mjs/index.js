document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------
  // Toggle Navigation Menu
  // ------------------------------
  const toggleBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  toggleBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });

  // ------------------------------
  // Language Detection & Redirection
  // ------------------------------
  const userLang = (navigator.language || navigator.userLanguage).toLowerCase();
  const currentPath = window.location.pathname;

  console.log(currentPath)
  const langMap = {
    fr: '/fr/index.html',
    es: '/es/',
    de: '/de/index.html',
    en: '/en/',
  };

  const langPrefix = userLang.split('-')[0];
  const redirectPath = langMap[langPrefix] || langMap.en;

  if (!currentPath.startsWith(redirectPath)) {
    window.location.replace(redirectPath);
  }

  const isFrench = langPrefix === 'fr';
  const isGerman = langPrefix === 'de';
  const isEnglish = langPrefix === 'en';
  const isSpanish = langPrefix === 'es';

  // ------------------------------
  // Form Submission Handling
  // ------------------------------
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const f = event.target;

      let greeting = 'Hello';
      let thankYouMsg = 'Thank you for your message!';

      if (isFrench) {
        greeting = 'Bonjour';
        thankYouMsg = 'Merci pour votre message !';
      } else if (isGerman) {
        greeting = 'Hallo';
        thankYouMsg = 'Danke für Ihre Nachricht!';
      } else if (isSpanish) {
        greeting = 'Hola';
        thankYouMsg = '¡Gracias por tu mensaje!';
      }

      console.log("Submitted:", {
        name: f.full_name.value,
        email: f.email.value,
        message: f.message.value
      });

      alert(`${greeting}, ${thankYouMsg}`);
      f.reset();
    });
  }
});