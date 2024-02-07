function checkLoggedIn() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn && isLoggedIn === 'true') {
        console.log('User is logged in');
    } else {
        window.location = '/';
    }
}

function signout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location = '/';
}

function init() {
    const SignOutButton = document.querySelector('#signout');
    SignOutButton.addEventListener('click', signout);
}

window.addEventListener('load', checkLoggedIn);
window.addEventListener('load', init);

