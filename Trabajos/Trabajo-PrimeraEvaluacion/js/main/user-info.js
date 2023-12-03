function obtenerID() {
  const parametroURL = new URLSearchParams(window.location.search);
  const id = parametroURL.get("id");
  return id;
}

async function accedeUser(id) {
  if (id) {
    const json = `https://jsonplaceholder.typicode.com/users?id=${encodeURIComponent(
      id
    )}`;
    console.log(json);
    async function obtenerJSON() {
      return fetch(json)
        .then((response) => response.json())
        .catch((error) =>
          console.error("Se ha producido un error al obtener el JSON", error)
        );
    }
    const resultado = await obtenerJSON();
    pintarUsuario(resultado);
  } else {
    console.error("No se ha podido obtener un ID válido");
  }
}

function pintarUsuario(usuario) {
  for (var user of usuario) {
    const userinfo = document.getElementById("userinfo");
    const iduser = document.getElementById("id");
    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const street = document.getElementById("street");
    const suite = document.getElementById("suite");
    const city = document.getElementById("city");
    const zipcode = document.getElementById("zipcode");

    const lat = document.getElementById("lat");
    const lng = document.getElementById("lng");

    const phone = document.getElementById("phone");
    const website = document.getElementById("website");

    const companyname = document.getElementById("company-name");
    const catchphrase = document.getElementById("catchphrase");
    const bs = document.getElementById("bs");

    userinfo.innerHTML += user.username;
    iduser.innerHTML += user.id;
    username.innerHTML += user.username;
    name.innerHTML += user.name;
    email.innerHTML += user.email;

    street.innerHTML += user.address.street;
    suite.innerHTML += user.address.suite;
    city.innerHTML += user.address.city;
    zipcode.innerHTML += user.address.zipcode;

    lat.innerHTML += user.address.geo.lat;
    lng.innerHTML += user.address.geo.lng;

    phone.innerHTML += user.phone;
    website.innerHTML += user.website;

    companyname.innerHTML += user.company.name;
    catchphrase.innerHTML += user.company.catchPhrase;
    bs.innerHTML += user.company.bs;

    const boton = document.getElementById("boton-posts");
    boton.innerHTML = "";
    boton.innerHTML = `<a href="posts-info.html?id=${user.id}" class="btn btn-primary">Mostrar posts</a>`;
  }
}

accedeUser(obtenerID());
