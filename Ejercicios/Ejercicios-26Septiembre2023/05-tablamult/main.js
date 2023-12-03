const num = prompt("Introduce un número");

if (!isNaN(num) && num >= 0) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + "*" + i + "=" + num * i);
  }
} else {
  console.warn("Esto NO es un número, o se trata de un número negativo.");
}
