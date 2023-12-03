var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  var listaTareas = document.getElementById("lista-tareas");
  var nuevaTarea = document.createElement("p");
  nuevaTarea.textContent = document.getElementById("input").value;
  listaTareas.appendChild(nuevaTarea);
});
