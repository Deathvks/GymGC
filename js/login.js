function logIn() {
  window.onload = function() {
    // Check validation status
    const validationStatus = localStorage.getItem('validation');
    if (validationStatus === 'valid') {
      // Change the text of the h1 element
      document.querySelector('h1').innerText = 'REGISTRADO';
      // Show element h1
      document.getElementById('logout').style.visibility = 'visible';
      console.log("Logout button clicked");
    }
  };

  window.addEventListener('beforeunload', function() {
    // Store validation status in LocalStorage
    localStorage.setItem('validation', 'valid');
  });
}

// Click event on element h1 with id="logout"
document.getElementById('logout').addEventListener('click', function() {
  // Clean LocalStorage
  localStorage.removeItem('validation');
  console.log("Validation status removed from localStorage");

  // Change the text of the h1 element
  document.querySelector('h1').innerText = 'REGISTRARSE';

  // Hide element h1
  document.getElementById('logout').style.visibility = 'hidden';

  const PAGE = document.getElementById('login');
  PAGE.addEventListener('click', OTHER_PAGE);

  function OTHER_PAGE() {
    location.href = "../form.html";
  }
});

logIn();