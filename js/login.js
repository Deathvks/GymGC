function logIn() {
  window.onload = function () {
    // Check if validation status exists in LocalStorage
    const validationStatus = localStorage.getItem('validation');
    if (validationStatus === 'valid') {
      // Change the text of the h1 element
      document.querySelector('h1').innerText = 'REGISTRADO';
      // Show element h1
      document.getElementById('logout').style.visibility = 'visible';
      console.log("Logout button clicked");
    }
  };

  window.addEventListener('beforeunload', function () {
    // Store validation status in LocalStorage only if it's set to 'valid'
    const validationStatus = localStorage.getItem('validation');
    if (validationStatus === 'valid') {
      localStorage.setItem('validation', 'valid');
    }
  });
}

// Click event on element h1 with id="logout"
document.getElementById('logout').addEventListener('click', function () {
  // Clean LocalStorage
  localStorage.removeItem('validation');
  console.log("Validation status removed from localStorage");

  // Change the text of the h1 element
  document.querySelector('h1').innerText = 'REGISTRARSE';

  document.querySelector('h1').addEventListener('mouseover', function () {
    this.style.textDecoration = 'underline';
  });

  document.querySelector('h1').addEventListener('mouseout', function () {
    this.style.textDecoration = '';
  });

  // Hide element h1
  document.getElementById('logout').style.visibility = 'hidden';


  const PAGE = document.getElementById('login');
  PAGE.addEventListener('click', OTHER_PAGE);

  function OTHER_PAGE() {
    location.href = "../form.html";
  }
});

logIn();