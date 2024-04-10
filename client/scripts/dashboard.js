function checkLoggedIn() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn && isLoggedIn === "true") {
    console.log("User is logged in");
  } else {
    window.location = "/";
  }
}

function signout() {
  localStorage.setItem("isLoggedIn", "false");
  window.location = "/";
}

function changeDashboardTitle() {
  let userDetails = JSON.parse(localStorage.getItem("UserDetails"));
  let TitleComponent = document.querySelector("#dashboard-title");
  TitleComponent.textContent = `${userDetails.name}'s Study Planner`;
}

function LoadCalendar() {
  // Set the desired width and height for the calendar
  const calendarWidth = "100%";
  const calendarHeight = "600px";
  const slotMinTime = "08:00:00"; // Example start time
  const slotMaxTime = "18:00:00"; // Example end time

  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridThreeDay",
    height: calendarHeight,
    width: calendarWidth,
    slotMinTime: slotMinTime,
    slotMaxTime: slotMaxTime,
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "timeGridThreeDay,timeGridWeek,dayGridMonth",
    },
    views: {
      timeGridThreeDay: {
        type: "timeGrid",
        duration: { days: 3 },
        buttonText: "3 Days",
      },
      timeGridWeek: {
        type: "timeGrid",
        duration: { days: 7 },
        buttonText: "Week",
      },
      dayGridMonth: {
        buttonText: "Month",
      },
    },
  });
  calendar.render();
}

window.addEventListener("load", checkLoggedIn);
window.addEventListener("load", LoadCalendar);
window.addEventListener("load", changeDashboardTitle);
