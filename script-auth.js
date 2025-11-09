const authForm = document.getElementById('authForm');
const toggleAuth = document.getElementById('toggleAuth');
let isLoginMode = false;  // Initially, we show the registration form

// Handle form submission (either login or registration)
if (authForm) {
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName')?.value.trim();
    const lastName = document.getElementById('lastName')?.value.trim();
    const dob = document.getElementById('dob')?.value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // If it's login mode
    if (isLoginMode) {
      const userData = localStorage.getItem(email);
      if (!userData) return alert('User not found. Please register first.');

      const user = JSON.parse(userData);

      if (user.password !== password) {
        return alert('Incorrect password.');
      }

      // Store logged-in user and redirect to profile page
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'profile.html';  // Redirect to profile page after login
    } else {
      // If it's registration mode
      if (!firstName || !lastName || !dob) {
        return alert('Please fill in all required fields.');
      }

      if (localStorage.getItem(email)) return alert('A user with this email already exists.');

      // Create a new user object
      const user = { firstName, lastName, dob, email, password };

      // Store the new user in localStorage
      localStorage.setItem(email, JSON.stringify(user));

      // Automatically log in the user after successful registration
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'profile.html';  // Redirect to profile page after registration
    }
  });

  // Toggle between login and registration forms
  toggleAuth.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;

    // Update the form title and button text
    document.getElementById('form-title').innerText = isLoginMode ? 'Log In' : 'Sign Up';
    document.getElementById('submitBtn').innerText = isLoginMode ? 'Log In' : 'Sign Up';

    // Toggle the visibility of the registration fields
    const registerFields = document.getElementById('registerFields');
    if (isLoginMode) {
      registerFields.style.display = 'none'; // Hide registration fields in login mode
      toggleAuth.innerText = 'Sign Up';      // Change link to show sign-up
    } else {
      registerFields.style.display = 'block'; // Show registration fields in sign-up mode
      toggleAuth.innerText = 'Log In';        // Change link to show login
    }
  });
}

// Profile page logic
if (window.location.pathname.includes('profile.html')) {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!user) {
    window.location.href = 'index.html';  // Redirect to homepage if no logged-in user found
  } else {
    document.getElementById('profileName').innerText = `${user.firstName} ${user.lastName}`;
    document.getElementById('profileEmail').innerText = user.email;
  }

  // Logout logic
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');  // Remove logged-in user from localStorage
    window.location.href = 'index.html';  // Redirect to the homepage after logging out
  });
}
