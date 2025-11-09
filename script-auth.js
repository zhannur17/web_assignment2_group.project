// === SIGN UP ===
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !birthDate || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    const user = { firstName, lastName, birthDate, email, password };
    localStorage.setItem("tripifyUser", JSON.stringify(user));

    alert("Account created successfully! Redirecting to login...");
    window.location.href = "login.html";
  });
}

// === LOG IN ===
// === LOG IN ===
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("tripifyUser"));

    if (!storedUser) {
      alert("No account found. Please sign up first!");
      return;
    }

    // Проверяем email и пароль
    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      alert("Login successful!");
      window.location.href = "profile.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}


// === PROFILE PAGE ===
if (document.getElementById("profileInfo")) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const user = JSON.parse(localStorage.getItem("tripifyUser"));

  if (!isLoggedIn || !user) {
    alert("Please log in to access your profile.");
    window.location.href = "login.html";
  } else {
    document.getElementById("displayFirstName").textContent = user.firstName;
    document.getElementById("displayLastName").textContent = user.lastName;
    document.getElementById("displayBirthDate").textContent = user.birthDate;
    document.getElementById("displayEmail").textContent = user.email;
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    alert("You have been logged out.");
    window.location.href = "index.html";
  });
}

