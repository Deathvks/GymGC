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
    GYM_LIST.innerHTML += `<li>${gym[i].whatever}<button class="bt" onclick="deleteSuggestions(${i})">BORRAR</button><button class="bt" onclick="editSuggestions(${i})">EDITAR</button></li><br>`;
}

function deleteSuggestions(gymId) {
  gym.splice(gymId, 1);

  showSuggestions();
}

function editSuggestions(gymId) {
  const editInput = document.getElementById('editInput');
  editInput.value = gym[gymId].whatever;
  const modal = new bootstrap.Modal(document.getElementById('editModal'));
  modal.show();
  // Save the gymId to use it in the saveEdit function
  document.getElementById('editModal').dataset.gymId = gymId;

  // Listen to the 'keydown' event for the text field
  editInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Avoid default Enter behavior (like submitting a form)
      saveEdit(); // Call the save Edit() function when you press Enter
    }
  });
}

function saveEdit() {
  const editInput = document.getElementById('editInput');
  const newValue = editInput.value;
  const gymId = document.getElementById('editModal').dataset.gymId; // We get the saved gymId

  if (newValue.trim() !== '') {
    gym[gymId].whatever = newValue;
    const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
    showSuggestions();
  } else {
    alert('Por favor ingrese un valor válido.');
  }
}

initializeGym();

function checkVerify() {
  // Get the checkbox item
  var checkbox = document.querySelector('input[name="remember"]');

  // Check if the checkbox is checked when submitting the form
  function validarFormulario(event) {
    if (!checkbox.checked) {
      document.getElementById("error-check").classList.remove("d-none");
      event.preventDefault(); // Evitar que el formulario se envíe si el checkbox no está marcado
    } else {
      document.getElementById("error-check").classList.add("d-none");
    }
  }

  // Assign the validation function to the 'submit' event of the form
  var formulario = document.querySelector("form");
  formulario.addEventListener("submit", validarFormulario);
}

checkVerify();
