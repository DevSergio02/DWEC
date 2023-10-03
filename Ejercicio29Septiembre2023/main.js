let num = prompt("Introduce un número: ");

while (isNaN(num)) {
  num = prompt("ERROR: Introduce un número: ");
}

for (let i = 1; i <= 10; i++) {
  let resultado = document.createElement("div");
  let resultado_contenido = document.createTextNode(
    num + "*" + i + "=" + num * i
  );
  resultado.appendChild(resultado_contenido);
  let currentDive = document.getElementById("div");
  document.body.insertBefore(resultado, currentDive);
}
