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
