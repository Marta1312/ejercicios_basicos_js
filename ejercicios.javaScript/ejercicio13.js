const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function nameFinder(listaDeNombres, nombreBuscado) {
  let indiceNombreEncontrado = listaDeNombres.indexOf(nombreBuscado);
  if (indiceNombreEncontrado != -1) {
    return { encontrado: true, indice: indiceNombreEncontrado };
  } else {
    return { encontrado: false, indice: undefined };
  }
}

let resultadoEjercicio = nameFinder(names, "Marc");

// console.log(resultadoEjercicio);

console.log(resultadoEjercicio.encontrado);
console.log(resultadoEjercicio.indice);
