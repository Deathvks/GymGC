function logIn() {
  window.onload = function () {
    const validationStatus = localStorage.getItem('validation');
    const logoutStatus = localStorage.getItem('logout');
    const loginText = document.getElementById('login');

    if (validationStatus === 'valid') {
      loginText.innerText = 'REGISTRADO';
      document.getElementById('logout').style.visibility = 'visible';
      document.getElementById('logout').style.cursor = 'pointer';
      console.log("Logout button clicked");
    } else if (logoutStatus === 'true') {
      loginText.innerText = 'ENTRAR';
      loginText.style.cursor = 'pointer'; // Makes text a pointer on hover
      loginText.addEventListener('click', function () {
        window.location.href = "../form.html"; // Redirects when clicking "ENTER"
      });
    }
  };

  window.addEventListener('beforeunload', function () {
    const validationStatus = localStorage.getItem('validation');
    if (validationStatus === 'valid') {
      localStorage.setItem('validation', 'valid');
    }
  });
}

document.getElementById('logout').addEventListener('click', function () {
  localStorage.removeItem('validation');
  localStorage.setItem('logout', 'true');
  console.log("Validation status removed from localStorage");

  const loginText = document.getElementById('login');
  loginText.innerText = 'ENTRAR';
  loginText.style.cursor = 'pointer'; // Makes text a pointer on hover
  loginText.addEventListener('click', function () {
    window.location.href = "../form.html"; // Redirect when clicking "ENTER"
  });

  document.getElementById('logout').style.visibility = 'hidden';

  const PAGE = document.getElementById('login');
  PAGE.addEventListener('click', OTHER_PAGE);

  function OTHER_PAGE() {
    location.href = "../form.html";
  }
});

logIn();
