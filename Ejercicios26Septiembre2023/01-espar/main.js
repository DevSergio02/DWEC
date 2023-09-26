const num = prompt("Introduce un número: ");
!isNaN(num)
  ? num % 2 == 0
    ? alert("Es un número par")
    : alert("Es un número impar")
  : alert("No has introducido un número");
