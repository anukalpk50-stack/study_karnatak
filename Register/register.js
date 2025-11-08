  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm_password');
  const passwordError = document.getElementById('password-error');
  const registerForm = document.querySelector('.register-form');

  function validatePasswords() {
      if (passwordInput.value !== confirmPasswordInput.value) {
          passwordError.textContent = 'Passwords do not match.';
          return false;
      } else {
          passwordError.textContent = '';
          return true;
      }
  }

  // Provide real-time feedback as the user types
  confirmPasswordInput.addEventListener('keyup', validatePasswords);
  passwordInput.addEventListener('keyup', validatePasswords);

  registerForm.addEventListener('submit', function(event) {
      if (!validatePasswords()) {
          // Prevent form submission if passwords don't match
          event.preventDefault();
      } else {
          // Passwords match. Here you would typically send the data to the server.
          // For this example, we'll just log to the console.
          console.log('Form is valid and ready to be submitted.');
      }
  });