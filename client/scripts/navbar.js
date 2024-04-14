function signout() {
  localStorage.setItem("isLoggedIn", "false");
  window.location = "/";
}

function LoadDashboard() {
  window.location = "/dashboard";
}

function LoadProfile() {
  window.location = "/profile";
}

function LoadSettings() {
  window.location = "/settings";
}

function ChangeTitle() {
  let userDetails = JSON.parse(localStorage.getItem("UserDetails"));
  let TitleComponent = document.querySelector("#dashboard-title");
  TitleComponent.textContent = `${userDetails.name} Study Planner`;
}

window.addEventListener("load", ChangeTitle);
