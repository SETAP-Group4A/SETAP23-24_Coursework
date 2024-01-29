const prompt = require('prompt-sync')({signit: true});

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

function SignUp() {
    let name;
    let email;
    let password;
    name = prompt('Enter your name: ');
    while(true) {
        email = prompt('Please enter your email address:');
        if (email === null) {
            break;
        }
        if (validateEmail(email)) {
            console.log('Valid email address: ',email);
            break;
        } else {
            console.log('Invalid email address. Please try again.');
        };
    };
    while(true){
        password = prompt('Please enter your password:');
        if (password === null) {
            break;
        }
        if (validatePassword(password)) {
            console.log(' Valid password')
            break;
        } else {
            console.log('Invalid password. Please try again.')
        }
    }
    console.log('Welcome ', name);
    console.log('SignUp Complete');
}

function systemStart() {
    const question = prompt('Are you an existing user? [y/n]');
    if (question == 'y') {
        console.log('Loading Login System ...');
    } else if (question == 'n') {
        console.log('Loading SignUp System ...');
        SignUp();
    } else {
        console.log('Something went wrong Please try again');
        systemStart();
    };
}

systemStart();
