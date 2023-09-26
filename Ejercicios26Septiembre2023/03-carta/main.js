let nombre;
let curso;
let localidad;
let fecha_inicio;
let fecha_fin;
const texto = String(`
Estimado NOMBRE,

Bienvenido al curso de CURSO que se celebrará en la localidad de LOCALIDAD entre las fechas FECHA_INICIO y FECHA_FIN. Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle

Atentamente,
La dirección.
`);

nombre = prompt("Introduce un nombre");
curso = prompt("Introduce un curso");
localidad = prompt("Introduce una localidad");
fecha_inicio = prompt("Introduce una fechad de inicio");
fecha_fin = prompt("Introduce una fecha de fin");

let textoReemplazado;
textoReemplazado = textoReemplazado.replace("NOMBRE", nombre);
textoReemplazado = textoReemplazado.replace("CURSO", curso);
textoReemplazado = textoReemplazado.replace("LOCALIDAD", localidad);
textoReemplazado = textoReemplazado.replace("FECHA_INICIO", fecha_inicio);
textoReemplazado = textoReemplazado.replace("FECHA_FIN", fecha_fin);

console.log(textoReemplazado.trim());
