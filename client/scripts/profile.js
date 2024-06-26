function LoadProfileDetails() {
  let userDetails = JSON.parse(localStorage.getItem("UserDetails"));
  if (userDetails) {
    let ProfileName = document.querySelector("#profileName");
    let ProfileEmail = document.querySelector("#profileEmail");
    ProfileName.textContent = `Name: ${userDetails.name}`;
    ProfileEmail.textContent = `Email: ${userDetails.email}`;
  }
}

function EditProfileDetials() {
  let ProfileName = document.querySelector("#profileName");
  let ProfileEmail = document.querySelector("#profileEmail");

  let name = ProfileName.textContent.split(": ")[1];
  let email = ProfileEmail.textContent.split(": ")[1];

  let nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('value', name);

  let emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('value', email);

  ProfileName.innerHTML = 'Name: ';
  ProfileName.appendChild(nameInput);

  ProfileEmail.innerHTML = 'Email: ';
  ProfileEmail.appendChild(emailInput);

  let saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.setAttribute('class', 'btn btn-primary'); 
  saveButton.onclick = function() {
    if (nameInput.value.trim() !== '' && validateEmail(emailInput.value)) {
      saveProfile(nameInput.value, emailInput.value);
    } else {
      if (nameInput.value.trim() === '') {
        let nameErrorMessage = document.createElement('div');
        nameErrorMessage.textContent = 'Please fill in a valid Name.';
        nameErrorMessage.style.color = 'red';
        ProfileName.appendChild(nameErrorMessage);
      }
      if (!validateEmail(emailInput.value)) {
        let emailErrorMessage = document.createElement('div');
        emailErrorMessage.textContent = 'Please enter a valid email address.';
        emailErrorMessage.style.color = 'red';
        ProfileEmail.appendChild(emailErrorMessage);
      }
    }
  };

  let editProfileButton = document.querySelector("#editProfileButton");
  editProfileButton.insertAdjacentElement('afterend', saveButton);
}

function saveProfile(name, email) {
  let userDetails = JSON.parse(localStorage.getItem("UserDetails"));
  userDetails.name = name;
  userDetails.email = email;
  localStorage.setItem("UserDetails", JSON.stringify(userDetails));

  LoadProfileDetails();

  let ProfileName = document.querySelector("#profileName");
  let ProfileEmail = document.querySelector("#profileEmail");
  ProfileName.textContent = `Name: ${name}`;
  ProfileEmail.textContent = `Email: ${email}`;
  
  window.location.reload();
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

window.addEventListener("load", LoadProfileDetails);