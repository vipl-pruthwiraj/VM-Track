// Dummy credentials
const dummyUsername = "user";
const dummyPassword = "a";

// Generate random numbers for captcha
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    document.getElementById('captchaQuestion').innerText = `${num1} + ${num2} = `;
    return num1 + num2;
}

let correctCaptchaAnswer;

// Function to refresh the CAPTCHA
function refreshCaptcha() {
    correctCaptchaAnswer = generateCaptcha();
    document.getElementById('captchaAnswer').value = '';
}

// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captchaAnswer = parseInt(document.getElementById('captchaAnswer').value);
    
    let isValid = true;

    // Validate username
    if (username !== dummyUsername) {
        document.getElementById('errorUsername').innerText = 'Invalid username';
        isValid = false;
    } else {
        document.getElementById('errorUsername').innerText = '';
    }

    // Validate password
    if (password !== dummyPassword) {
        document.getElementById('errorPassword').innerText = 'Invalid password';
        isValid = false;
    } else {
        document.getElementById('errorPassword').innerText = '';
    }

    // Validate captcha
    if (captchaAnswer !== correctCaptchaAnswer) {
        document.getElementById('errorCaptcha').innerText = 'Incorrect captcha answer';
        isValid = false;
    } else {
        document.getElementById('errorCaptcha').innerText = '';
    }

    if (isValid) {
        // Trigger vehicle animation
        document.getElementById('vehicleAnimation').classList.add('animate');
        // alert("Login successful!");
    }

    // Clear captcha input
    document.getElementById('captchaAnswer').value = '';
});

// Refresh captcha when the page loads
document.addEventListener('DOMContentLoaded', function() {
    refreshCaptcha();
});

// Refresh captcha when the refresh button is clicked
document.getElementById('refreshCaptcha').addEventListener('click', function() {
    refreshCaptcha();
});

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type');
    const isPassword = passwordFieldType === 'password';
    passwordField.setAttribute('type', isPassword ? 'text' : 'password');
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});
