window.addEventListener("load", function () {
  const codigopostal = document.querySelector("#codigoPostal");
  const numeroentero = document.querySelector("#numeroEntero");
  const numeroreal = document.querySelector("#numeroReal");
  const telefono = document.querySelector("#telefono");
  const telefonointernacional = document.querySelector(
    "#telefonointernacional"
  );
  const fecha = document.querySelector("#fecha");
  const email = document.querySelector("#email");
  const dni = document.querySelector("#dni");
  const url = document.querySelector("#url");
  const tarjeta = document.querySelector("#tarjetaCredito");
  const pass = document.querySelector("#contrasena");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    evento.stopPropagation();
    let valido = true;

    if (!validaCodigoPostal(codigopostal)) {
      valido = false;
    }

    if (!validaNumeroEntero(numeroentero)) {
      valido = false;
    }

    if (!validaNumeroreal(numeroreal)) {
      valido = false;
    }

    if (!validaTelefono(telefono)) {
      valido = false;
    }

    if (!validaTelefonoInternacional(telefonointernacional)) {
      valido = false;
    }

    if (!validaFecha(fecha)) {
      valido = false;
    }

    if (!validaEmail(email)) {
      valido = false;
    }
    if (!validaDNI(dni)) {
      valido = false;
    }

    if (!validaURL(url)) {
      valido = false;
    }

    if (!validaTarjetaCredito(tarjeta)) {
      valido = false;
    }

    if (!validaContrasena(pass)) {
      valido = false;
    }

    if (valido) {
      formulario.submit();
    }
  });

  function validaCodigoPostal(valor) {
    const er_codigopostal = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    const codigopostal_fix = valor.value.trim();
    if (codigopostal_fix.match(er_codigopostal)) {
      marcarValido(valor);
      return true;
    } else {
      marcarError(valor, "El código postal no es correcto");
      return false;
    }
  }

  function validaNumeroEntero(numeroEntero) {
    // Aquí implementa la validación del número entero
    // Retorna true si es válido, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaNumeroreal(numeroReal) {
    // Aquí implementa la validación del número real
    // Retorna true si es válido, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaTelefono(telefono) {
    // Aquí implementa la validación del número de teléfono
    // Retorna true si es válido, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaTelefonoInternacional(telefonointernacional) {
    // Aquí implementa la validación del número de teléfono internacional
    // Retorna true si es válido, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaFecha(fecha) {
    // Aquí implementa la validación de la fecha
    // Retorna true si es válida, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaEmail(email) {
    // Aquí implementa la validación del correo electrónico
    // Retorna true si es válido, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaDNI(dni) {
    // Aquí implementa la validación del número de DNI
    // Retorna true si es válido, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaURL(url) {
    // Aquí implementa la validación de la URL
    // Retorna true si es válida, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaTarjetaCredito(tarjeta) {
    // Aquí implementa la validación de la tarjeta de crédito
    // Retorna true si es válida, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function validaContrasena(contrasena) {
    // Aquí implementa la validación de la contraseña
    // Retorna true si es válida, de lo contrario, retorna false
    return true; // Reemplaza esto con la lógica de validación real
  }

  function marcarError(valor, mensaje) {
    valor.parentNode.querySelector(".error-feedback").textContent = mensaje;
    valor.parentNode.classList.remove("error");
  }

  function marcarValido(valor) {
    valor.parentNode.querySelector(".error-feedback").textContent = "";
    valor.parentNode.classList.remove("error");
  }
});
