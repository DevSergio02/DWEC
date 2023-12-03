let num = prompt("Introduce una edad: ");

if (!num != NaN) {
  while (num <= 18) {
    num = prompt("Error: Introduce una edad");
  }
  console.log("La edad introducida es mayor de 18");
} else {
  console.log("Esto no es un número.");
}
