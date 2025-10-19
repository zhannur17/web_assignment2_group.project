/* === Task 1. Form Validation === */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input[required]");
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.border = "2px solid red";
        } else {
          input.style.border = "1px solid #ccc";
        }
      });

      const email = form.querySelector("input[type='email']");
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        isValid = false;
        email.style.border = "2px solid red";
        alert("Please enter a valid email address");
      }

      const password = form.querySelector("input[type='password']");
      if (password && password.value.length < 6) {
        isValid = false;
        alert("Password must be at least 6 characters long");
      }

      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Please fill all fields correctly.");
      }
    });
  }


  /* === Task 3. Popup Subscription Form === */
  const openPopupBtn = document.querySelector("#openPopup");
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".close-popup");

  if (openPopupBtn && popup && closePopup) {
    openPopupBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.style.display = "none";
    });
  }

  /* === Task 4. Change Background Color === */
  const bgButton = document.querySelector("#change-bg");
  const colors = ["#ffefd5", "#e0ffff", "#ffe4e1", "#f0fff0", "#fafad2"];
  let colorIndex = 0;

  if (bgButton) {
    bgButton.addEventListener("click", () => {
      document.body.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    });
  }
});

/* GULNAZZZZZZZZZZZZ */
// main.js

// 1. Аккордеон для FAQs или Контент-секций
document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll('.advice-section h2'); 

  accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});

// 2. Всплывающее окно для формы подписки
document.addEventListener("DOMContentLoaded", function() {
  const popupButton = document.querySelector('.popup-btn');  // кнопка для открытия
  const popupForm = document.querySelector('.popup-form'); // сама форма
  const closeButton = document.querySelector('.close-btn'); // кнопка закрытия

  popupButton.addEventListener('click', function() {
    popupForm.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    popupForm.style.display = 'none';
  });

  // Закрытие формы при клике за пределы окна
  window.addEventListener('click', function(event) {
    if (event.target === popupForm) {
      popupForm.style.display = 'none';
    }
  });
});

// 3. Изменение фона с помощью кнопки
document.addEventListener("DOMContentLoaded", function() {
  const colorButton = document.querySelector('.change-bg-btn');
  const colors = ['#f4f4f4', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];

  colorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  });
});

// 4. Отображение текущей даты и времени
document.addEventListener("DOMContentLoaded", function() {
  const dateElement = document.querySelector('.date-time');
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  dateElement.textContent = `Current Date and Time: ${formattedDate}`;
});
// main.js

document.addEventListener("DOMContentLoaded", function() {
  // Изменение фона с помощью кнопки
  const colorButton = document.querySelector('.change-bg-btn');
  const colors = ['#f4f4f4', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];

  colorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  });
});


/* Symbat */ 


document.addEventListener("DOMContentLoaded", function() {
  const sidebarHeaders = document.querySelectorAll('.accordion-header');
  sidebarHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const bgButton = document.getElementById("change-bg");
  const colors = ["#fff0f5", "#1aa61aff", "#b3a41eff", "#1caee8ff", "#b82121ff"]; 
  let index = 0;

  bgButton.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; 
  });
});

/* New Zhannur */
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingValue = document.getElementById("rating-value");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("active");
      }
      ratingValue.textContent = `Your rating: ${index + 1}/5`;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const messageButton = document.getElementById("update-message");
  const messageParagraph = document.getElementById("message");

  messageButton.addEventListener("click", () => {
    messageParagraph.textContent = "Thank you for visiting Tripify!";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  //READ MORE TOGGLE
  const readMoreBtn = document.querySelector("#read-more-btn");
  const moreText = document.querySelector("#more-text");

  readMoreBtn.addEventListener("click", () => {
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      readMoreBtn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      readMoreBtn.textContent = "Read More";
    }
  });

  //RANDOM FACT FETCH
  const factBtn = document.querySelector("#fact-btn");
  const factText = document.querySelector("#fact-text");

  const travelFacts = [
    "The shortest flight in the world lasts only 57 seconds (between Westray and Papa Westray in Scotland).",
    "Japan has more than 5 million vending machines across the country.",
    "The Great Wall of China is not visible from space with the naked eye.",
    "Iceland has no mosquitoes!",
    "France is the most visited country in the world.",
  ];

  factBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * travelFacts.length);
    factText.textContent = travelFacts[randomIndex];
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("showTime");
  const out = document.getElementById("timeDisplay");
  if (!showBtn || !out) return;

  showBtn.addEventListener("click", () => {
    out.textContent = new Date().toLocaleTimeString();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "t" || e.key === "T") {
    document.body.classList.toggle("dark-theme");
  }
});





