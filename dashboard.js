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

window.addEventListener('load', checkLoggedIn);

