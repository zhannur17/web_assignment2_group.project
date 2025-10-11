document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 

      const requiredInputs = form.querySelectorAll("input[required]");
      let isValid = true;

      
      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.border = "2px solid red"; 
          isValid = false;
        } else {
          input.style.border = "1px solid #ccc"; 
        }
      });

    
      const email = form.querySelector("input[type='email']");
      if (email && !email.value.includes("@")) {
        email.style.border = "2px solid red"; 
        alert("Please enter a valid email address");
        isValid = false;
      }

      const password = form.querySelector("input[type='password']");
      if (password && password.value.length < 6) {
        password.style.border = "2px solid red"; 
        alert("Password must be at least 6 characters long");
        isValid = false;
      }

      if (isValid) {
        alert("Form submitted successfully!");
        form.reset(); 
      } else {
        alert("Please fill all fields correctly.");
      }
    });
  }
});



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
