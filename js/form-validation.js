const LOGIN_FORM = document.querySelector("#login form");

LOGIN_FORM.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validate the username
  const USERNAME_INPUT = LOGIN_FORM.querySelector("#username");
  const userEntered = USERNAME_INPUT.value.trim();
  if (USERNAME_INPUT.value === "") {
    document.getElementById("error-user").classList.remove("d-none");
    return;
  } else {
    document.getElementById("error-user").classList.add("d-none");
  }

  // Validate the email
  const EMAIL_INPUT = LOGIN_FORM.querySelector("#email");
  if (!/\w+@\w+\.\w+/.test(EMAIL_INPUT.value)) {
    document.getElementById("error-email").classList.remove("d-none");
    return;
  } else {
    document.getElementById("error-email").classList.add("d-none");
  }

  // Validate de password
  const PASSWORD_INPUT = LOGIN_FORM.querySelector("#pwd");
  if (PASSWORD_INPUT.value === "") {
    document.getElementById("error-pwd").classList.remove("d-none");
    return;
  } else {
    document.getElementById("error-pwd").classList.add("d-none");
  }

  // Validate the location
  const LOCATION_INPUT = LOGIN_FORM.querySelector("#location");
  if (LOCATION_INPUT.value === "") {
    document.getElementById("error-loc").classList.remove("d-none");
    return;
  } else {
    document.getElementById("error-loc").classList.add("d-none");
  }

  const usernameValid = USERNAME_INPUT.value !== "";
  const emailValid = /\w+@\w+\.\w+/.test(EMAIL_INPUT.value);
  const passwordValid = PASSWORD_INPUT.value !== "";
  const locationValid = LOCATION_INPUT.value !== "";

  if (usernameValid && emailValid && passwordValid && locationValid) {
    // Change the h1 text to "Registered"
    localStorage.setItem('validation', 'valid');
    document.getElementById("login").innerText = `¡Hola, ${userEntered}!`;
    document.getElementById("login").style.textAlign = 'center'; // Add this line to center the text  

    // Redirect after a while
    setTimeout(() => {
      location.href = "../index.html";
    }, 2000); // Change this if you want to redirect after a specific time
  }
});

LOGIN_FORM();

