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
    let name = document.querySelector("#signup-name").value;
    let email = document.querySelector("#signup-email").value;
    let password = document.querySelector("#signup-password").value;
    let errorText = document.querySelector("#signup-error");

    if(name === "" || email === "" || password === "") {
        errorText.textContent = 'Please fill in all fields';
    } else if (validateEmail(email) === false) {
        errorText.textContent = 'Please fill in a valid email';
    } else if (validatePassword(password) === false) {
        errorText.textContent = 'Please fill in a valid password';
    } else {
        let UserDetails = {
            name: name,
            email: email,
            password: password
        };
        localStorage.setItem('UserDetails', JSON.stringify(UserDetails));
        console.log('Stored Data Successfully');
        localStorage.setItem('isLoggedIn', 'true');
        window.location = 'dashboard.html';
    }

}

function login() {
    let email = document.querySelector("#login-email").value;
    let password = document.querySelector("#login-password").value;
    let errorText = document.querySelector("#login-error");

    let storedData = localStorage.getItem('UserDetails');
    let storedUserData = JSON.parse(storedData);

    if(email === "" || password === "") {
        errorText.textContent = 'Please fill in all fields';
    } else if (email === storedUserData.email && password === storedUserData.password) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location = 'dashboard.html';
    } else {
        errorText.textContent = 'Invalid email or password.';
    }
}

function init() {
    const SignupButton = document.querySelector("#signupbutton");
    SignupButton.addEventListener('click', signup);

    const LoginButton = document.querySelector("#loginbutton");
    LoginButton.addEventListener('click', login);
}

window.addEventListener('load', init);