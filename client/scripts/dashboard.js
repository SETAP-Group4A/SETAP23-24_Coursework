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

function LoadCalender() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        contentHeight: 600
    });
    calendar.render();
}

window.addEventListener('load', checkLoggedIn);
window.addEventListener('load', LoadCalender);



