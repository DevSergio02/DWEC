document.addEventListener("DOMContentLoaded", function () {
  const correo = document.getElementById("floatingInput");
  const clave = document.getElementById("floatingPassword");
  const formulario = document.getElementById("formulario-signin");
  const json = "https://jsonplaceholder.typicode.com/users";

  async function obtenerJSON() {
    return fetch(json)
      .then((response) => response.json())
      .catch((error) =>
        console.error("Se ha producido un error al obtener el JSON", error)
      );
  }

  formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();
    evento.stopPropagation();
    try {
      const datosJSON = await obtenerJSON();

      if (
        datosJSON.find((usuario) => usuario.email === correo.value) &&
        datosJSON.find((usuario) => usuario.address.zipcode === clave.value)
      ) {
        formulario.submit();
        window.location.href = "./pages/users.html";
      } else {
        const div = document.getElementById("error_login");
        div.style.display = "block";
      }
    } catch (error) {
      console.error("Se ha producido un error al validar el formulario", error);
    }
  });
});
