function logIn() {
  window.onload = function () {
    // Verificar el estado de la validación
    if (localStorage.getItem('validation') === 'valid') {
      // Cambiar el texto del elemento h1
      document.querySelector('h1').innerText = 'REGISTRADO';
    }
  }

  window.addEventListener('beforeunload', function () {
    // Limpiar el estado de la validación
    // localStorage.removeItem('validation');
  });
}

logIn();

