function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    const isLengthValid = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    return isLengthValid && hasUppercase && hasLowercase && hasDigit && hasSpecialCharacter;
}

function signup() {
    let name = document.querySelector("#signup-name");
    let email = document.querySelector("#signup-email");
    let password = document.querySelector("#signup-password");

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert('Please fill in all fields for signup.');
        return false;
    }

}

function login() {
    let email = document.querySelector("#login-email");
    let password = document.querySelector("#login-password");

    if (email.trim() === "" || password.trim() === "") {
        alert('Please fill in all fields for login.');
        return false;
    }
}

function init() {
    const SignupButton = document.querySelector("#signupbutton");
    SignupButton.addEventListener('click', signup);

    const LoginButton = document.querySelector("#loginbutton");
    LoginButton.addEventListener('click', login);
}

window.addEventListener('load', init);