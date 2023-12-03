async function accedeUsers() {
  const json = "https://jsonplaceholder.typicode.com/users";
  async function obtenerJSON() {
    return fetch(json)
      .then((response) => response.json())
      .catch((error) =>
        console.error("Se ha producido un error al obtener el JSON", error)
      );
  }
  const resultado = await obtenerJSON();
  pintarUsuarios(resultado);
}

function pintarUsuarios(listadoUsers) {
  for (let usuario of listadoUsers) {
    let tabla = document.getElementById("tablaUsuarios");
    let fila = tabla.insertRow(-1);
    let id = fila.insertCell(0);
    let username = fila.insertCell(1);
    let name = fila.insertCell(2);
    let email = fila.insertCell(3);
    let link = fila.insertCell(4);

    id.innerHTML = usuario.id;
    username.innerHTML = `<a href="user-info.html?id=${usuario.id}">${usuario.username}</a>`;
    name.innerHTML = usuario.name;
    email.innerHTML = usuario.email;
    link.innerHTML = `<a href="posts-info.html?id=${usuario.id}">Mostrar posts</a>`;
  }
}
accedeUsers();
