async function obtenerPosts() {
  const json = `https://jsonplaceholder.typicode.com/posts`;
  const jsonuser = `https://jsonplaceholder.typicode.com/users`;
  console.log(json);
  async function obtenerJSON(url) {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) =>
        console.error("Se ha producido un error al obtener el JSON", error)
      );
  }
  const resultado_posts = await obtenerJSON(json);
  const resultado_user = await obtenerJSON(jsonuser);
  pintarPosts(resultado_posts, resultado_user);
}

function pintarPosts(posts, user) {
  let allposts = document.getElementById("posts-info");
  for (let post of posts) {
    let titulo = document.createElement("h2");
    titulo.textContent = post.title;
    allposts.appendChild(titulo);

    for (let userid of user) {
      if (post.userId == userid.id) {
        let usuario = document.createElement("a");
        usuario.href = `user-info.html?id=${userid.id}`;
        usuario.textContent = userid.username;
        allposts.appendChild(usuario);
      }
    }
    
    let texto = document.createElement("p");
    texto.textContent = post.body;
    allposts.appendChild(texto);
  }
}

obtenerPosts();
