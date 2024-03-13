
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.signin-form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        
        
        console.log('Email:', email);
        console.log('Password:', password);
        
        
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const emailValidationMessage = document.getElementById('email-validation');
    const passwordValidationMessage = document.getElementById('password-validation');

    emailInput.addEventListener('focus', function () {
        emailValidationMessage.textContent = 'Please enter a valid email address or phone number.';
        emailValidationMessage.style.color = 'orange';
    });

    passwordInput.addEventListener('focus', function () {
        passwordValidationMessage.textContent = 'Your password must contain between 4 and 60 characters.';
        passwordValidationMessage.style.color = 'orange';
    });
});
document.getElementById("showPasswordButton").addEventListener("click", function() {
    var passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      this.textContent = "Show";
    }
  });
  