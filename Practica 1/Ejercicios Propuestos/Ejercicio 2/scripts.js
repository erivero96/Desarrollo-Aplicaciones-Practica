const form = document.getElementById('registroForm');

form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validación para el nombre
    const nombre = document.getElementById('nombre');
    const nombreError = document.getElementById('nombreError');
    if (!nombre.checkValidity()) {
        nombreError.textContent = nombre.validationMessage;
        isValid = false;
    } else {
        nombreError.textContent = '';
    }

    // Validación para el correo electrónico
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.checkValidity()) {
        emailError.textContent = email.validationMessage;
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validación para la contraseña
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (!password.checkValidity()) {
        passwordError.textContent = password.validationMessage;
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Validación para el teléfono
    const telefono = document.getElementById('telefono');
    const telefonoError = document.getElementById('telefonoError');
    if (!telefono.checkValidity()) {
        telefonoError.textContent = telefono.validationMessage;
        isValid = false;
    } else {
        telefonoError.textContent = '';
    }

    // Validación para la fecha de nacimiento
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const fechaNacimientoError = document.getElementById('fechaNacimientoError');
    if (!fechaNacimiento.checkValidity()) {
        fechaNacimientoError.textContent = fechaNacimiento.validationMessage;
        isValid = false;
    } else {
        fechaNacimientoError.textContent = '';
    }

    // Si el formulario no es válido, evita el envío
    if (!isValid) {
        event.preventDefault();
    }
});