function logIn() {
  window.onload = function () {
    const validationStatus = localStorage.getItem('validation');
    const logoutStatus = localStorage.getItem('logout');
    const loginText = document.getElementById('login');

    if (validationStatus === 'valid') {
      loginText.innerText = 'REGISTRADO';
      document.getElementById('logout').style.visibility = 'visible';
      document.getElementById('logout').style.cursor = 'pointer';
    } else if (logoutStatus === 'true' || !validationStatus) {
      loginText.innerText = 'ENTRAR';
      loginText.style.cursor = 'pointer';
      // Configurar el evento de clic aquí para redirigir a form.html
      loginText.addEventListener('click', function () {
        window.location.href = "../form.html";
      });
    }
  };

  window.addEventListener('beforeunload', function () {
    const validationStatus = localStorage.getItem('validation');
    if (validationStatus === 'valid') {
      localStorage.setItem('validation', 'valid');
    }
  });

  // Añadir evento de clic al botón de logout
  document.getElementById('logout').addEventListener('click', function () {
    // Mostrar el pop-up
    document.getElementById('miPopup').style.display = 'block';
  });

  // Añadir la lógica del pop-up
  var popup = document.getElementById("miPopup");
  var span = document.getElementsByClassName("close")[0];
  var buttonConfirm = document.getElementById("confirm");
  var buttonCancel = document.getElementById("cancel");

  span.onclick = function() {
      popup.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = "none";
      }
  }

  buttonConfirm.onclick = function() {
      localStorage.removeItem('validation');
      localStorage.setItem('logout', 'true');
      document.getElementById('login').innerText = 'ENTRAR';
      document.getElementById('logout').style.visibility = 'hidden';
      popup.style.display = "none";
  }



  buttonCancel.onclick = function() {
      popup.style.display = "none";
  }
}

logIn();