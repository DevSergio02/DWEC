class Persona {
  constructor(nombre, apellidos, poblacion, edad, estudios, carnet_conducir) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.poblacion = poblacion;
    this._edad = edad;
    this._estudios = estudios;
    this.carnet_conducir = carnet_conducir;
  }

  set edad(edad) {
    if (typeof edad !== "number") {
      console.log("La edad debe ser un número.");
      return;
    }
    this._edad = edad;
  }

  get edad() {
    return this._edad;
  }

  set estudios(estudios) {
    if (typeof estudios !== "string") {
      console.log("Los estudios deben ser una cadena de texto.");
      return;
    }
    this._estudios = estudios;
  }

  get estudios() {
    return this._estudios;
  }
}

const personas = [
  new Persona("Juan", "Perez", "Madrid", 30, "Ingeniero", true),
  new Persona("Ana", "Lopez", "Barcelona", 25, "Abogada", false),
  new Persona("Pedro", "Gonzalez", "Sevilla", 35, "Médico", true),
];

const collator = new Intl.Collator("es");
personas.sort((a, b) => collator.compare(a.nombre, b.nombre));

personas.forEach((persona) => {
  let resultado = document.createElement("div");
  let resultado_contenido = document.createTextNode(
    `Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, Población: ${
      persona.poblacion
    }, Edad: ${persona.edad}, Estudios: ${
      persona.estudios
    }, Carnet de conducir: ${persona.carnet_conducir ? "Sí" : "No"}`
  );
  resultado.appendChild(resultado_contenido);
  let currentDive = document.getElementById("div");
  document.body.insertBefore(resultado, currentDive);
});
