// Аккордеон для секций Guide
document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll('.advice-section h2');
  accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
      const content = this.nextElementSibling;
      if (!content) return;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});

// Приветствие по времени суток
document.addEventListener("DOMContentLoaded", function() {
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
    const hour = new Date().getHours();
    greetingElement.textContent = hour < 12 ? 'Good Morning!' : (hour < 18 ? 'Good Afternoon!' : 'Good Evening!');
  }
});

// Обработка формы обратной связи (Support)
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    setTimeout(() => {
      const msg = document.getElementById('successMessage');
      if (msg) msg.style.display = 'block';

      const successSound = document.getElementById('successSound');
      if (successSound) successSound.play();

      setTimeout(() => {
        if (msg) msg.style.display = 'none';
      }, 3000);
    }, 2000);
  });
});
// Smooth Scroll and Active Link Highlighting
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove active class from all links
    document.querySelectorAll('.sidebar-fullheight a').forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    this.classList.add('active');

    // Scroll to the section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Плавная прокрутка и выделение активной ссылки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Удаляем класс active у всех ссылок
    document.querySelectorAll('.sidebar-fullheight a').forEach(link => link.classList.remove('active'));

    // Добавляем класс active к нажатой ссылке
    this.classList.add('active');

    // Прокручиваем к соответствующему разделу
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('supportForm');
    
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const successAlert = document.getElementById('successAlert');
            successAlert.style.display = 'block';
            
            // Scroll to success message
            successAlert.scrollIntoView({ behavior: 'smooth' });
            
            // Clear form
            supportForm.reset();
            
            // Hide alert after 5 seconds
            setTimeout(function() {
                successAlert.style.display = 'none';
            }, 5000);
        });
    }
});
