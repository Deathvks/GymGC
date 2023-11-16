const LOGIN_FORM = document.querySelector("#login form");

LOGIN_FORM.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validamos el nombre de usuario
  const USERNAME_INPUT = LOGIN_FORM.querySelector("#username");
  if (USERNAME_INPUT.value === "") {
    document.getElementById("error-user").classList.remove("d-none");
    return;
  } else {
    document.getElementById("error-user").classList.add("d-none");
  }

  // Validamos el email
  const EMAIL_INPUT = LOGIN_FORM.querySelector("#email");
  if (!/\w+@\w+\.\w+/.test(EMAIL_INPUT.value)) {
    document.getElementById("error-email").classList.remove("d-none");
    return;
  } else {
    document.getElementById("error-email").classList.add("d-none");
  }

  // Validamos la contraseña
  const PASSWORD_INPUT = LOGIN_FORM.querySelector("#pwd");
  if (PASSWORD_INPUT.value === "") {
    document.getElementById("error-pwd").classList.remove("d-none");
    return;
  } else {
    document.getElementById("error-pwd").classList.add("d-none");
  }

  // Validamos la localidad
  const LOCATION_INPUT = LOGIN_FORM.querySelector("#location");
  if (LOCATION_INPUT.value === "") {
    document.getElementById("error-loc").classList.remove("d-none");
    return;
  } else {
    document.getElementById("error-loc").classList.add("d-none");
  }

  // Si todas las validaciones son correctas, redireccionamos a otra página web
  location.href = "../index.html";
});

LOGIN_FORM();