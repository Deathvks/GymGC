let gym = [
  {
    whatever: "Sala de Boxeo",
  },
];

function initializeGym() {
  const GYM_FORM = document.getElementById("gym-form");
  GYM_FORM.addEventListener("submit", addSuggestions);

  showSuggestions();
}

function addSuggestions(event) {
  event.preventDefault();

  const WHATEVER = event.target.whatever.value;

  if (WHATEVER) {
    var checkbox = document.querySelector('input[name="remember"]');
    if (checkbox.checked) {
      gym.push({
        whatever: WHATEVER,
      });
    }

    // Vaciar el valor del campo de texto
    event.target.whatever.value = ""; // Esto borra el valor del input después de enviar el formulario
    document.getElementById("error-whatever").classList.add("d-none");
  } else {
    document.getElementById("error-whatever").classList.remove("d-none");
  }

  showSuggestions();
}

function showSuggestions() {
  const GYM_LIST = document.getElementById("gym-list");

  GYM_LIST.innerHTML = "";

  for (let i = 0; i < gym.length; i++)
    GYM_LIST.innerHTML += `<li>${gym[i].whatever}<button class="bt"onclick="deleteSuggestions(${i})">BORRAR</button></li>`;
}

function deleteSuggestions(gymId) {
  gym.splice(gymId, 1);

  showSuggestions();
}

initializeGym();

function checkVerify() {
  // Obtener el elemento del checkbox
  var checkbox = document.querySelector('input[name="remember"]');

  // Verificar si el checkbox está marcado al enviar el formulario
  function validarFormulario(event) {
    if (!checkbox.checked) {
      document.getElementById("error-check").classList.remove("d-none");
      event.preventDefault(); // Evitar que el formulario se envíe si el checkbox no está marcado
    } else {
      document.getElementById("error-check").classList.add("d-none");
    }
  }

  // Asignar la función de validación al evento 'submit' del formulario
  var formulario = document.querySelector("form"); // Asegúrate de reemplazar 'form' con el ID o selector de tu formulario
  formulario.addEventListener("submit", validarFormulario);
}

checkVerify();
