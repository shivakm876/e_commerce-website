document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const loginLink = document.getElementById('login-link');
    const loginContainer = document.getElementById('login-container');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const registerLink = document.getElementById('register-link');
    const registerContainer = document.getElementById('register-container');
    const closeRegisterBtn = document.getElementById('close-register-btn');
    const loginReturnLink = document.getElementById('login-return-link');

    // Show the login form
    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        loginContainer.style.display = 'block'; // Show the login form
        registerContainer.style.display = 'none'; // Hide the register form
    });

    // Close the login form
    closeLoginBtn.addEventListener('click', function() {
        loginContainer.style.display = 'none'; // Hide the login form
    });

    // Show the register form
    registerLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        registerContainer.style.display = 'block'; // Show the register form
        loginContainer.style.display = 'none'; // Hide the login form
    });

    // Close the register form
    closeRegisterBtn.addEventListener('click', function() {
        registerContainer.style.display = 'none'; // Hide the register form
    });

    // Return to login form
    loginReturnLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.style.display = 'block'; // Show the login form
        registerContainer.style.display = 'none'; // Hide the register form
    });

    // Form validation functions
    window.validateForm = function() {
        // Add your login form validation logic here
        return true; // Return false to prevent form submission
    };

    window.validateRegisterForm = function() {
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false; // Prevent form submission
        }

        // Add additional registration form validation logic here
        return true; // Return true to allow form submission
    };
});