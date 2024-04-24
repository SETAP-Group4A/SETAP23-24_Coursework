function LoadProfileDetails() {
  let userDetails = JSON.parse(localStorage.getItem("UserDetails"));
  let ProfileName = document.querySelector("#profileName");
  let ProfileEmail = document.querySelector("#profileEmail");
  ProfileName.textContent = `Name: ${userDetails.name}`;
  ProfileEmail.textContent = `Email: ${userDetails.email}`;
}

function EditProfileDetials() {
  let ProfileName = document.querySelector("#profileName");
  let ProfileEmail = document.querySelector("#profileEmail");

  let name = ProfileName.textContent.slipt(": ")[1];
  let email = ProfileEmail.textContent.slip(": ")[1];

  let nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('value', name);

  let emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('value', email);

  nameElement.innerHTML = 'Name: ';
  nameElement.appendChild(nameInput);

  emailElement.innerHTML = 'Email: ';
  emailElement.appendChild(emailInput);

  
}

window.addEventListener("load", LoadProfileDetails);
