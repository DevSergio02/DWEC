const correo = prompt("Introduce un correo electrónico");
const posicion = correo.indexOf("@");
console.log(correo.slice(0, posicion).trim());