function checkLoggedIn() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn && isLoggedIn === 'true') {
        console.log('User is logged in');
    } else {
        window.location = '/';
    }
}

window.addEventListener('load', checkLoggedIn);
