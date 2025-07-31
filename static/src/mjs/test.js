
  // Scroll to contact form
  function scrollToContact() {

    const contactSection = document.getElementById('contact');
    const contactSection1 = document.getElementById('services');
    const contactSection2 = document.getElementById('services1');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    if(contactSection1) {
      contactSection1.scrollIntoView({ behavior: 'smooth' });
    }
    if(contactSection2) {
      contactSection2.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Button: "Projekt starten"
  document.querySelector('.start-btn').addEventListener('click', scrollToContact);

  // Button: "Shop"
  document.querySelector('.shop-btn').addEventListener('click', () => {
    // Replace with your actual shop URL
    window.location.href = '/shop.html';
  });

  // All CTA "Starten" buttons in cards
  document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', scrollToContact);
  });

  // Form submission handler (optional logic)
  function submitForm(event) {
    event.preventDefault();

    const name = event.target.full_name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // You can send this data via fetch() or similar here
    console.log("Form submitted:", { name, email, message });

    alert('Danke! Wir haben deine Nachricht erhalten.');

    event.target.reset();
  }

  window.submitForm = submitForm; // Make accessible from HTML