const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  // Creo un cajoncito vacío para despues guardar el resultado del bucle.
  let cajoncitoResultados = [];
  // Leo los elementos de la lista de uno en uno.
  for (let i = 0; i <= stringList.length - 1; i++) {
    // Calcula la longitud del elemento y lo guarda en una variable.
    let resultadito = stringList[i].length;
    // Almacena el resultado en cajoncito.
    cajoncitoResultados.push(resultadito);
  }
  // Inicializamos un valor para poder comparar el cajoncito de resultados con el que va a ser el mas grande
  let cajoncitoResultadosNumeroMasGrande = cajoncitoResultados[0];
  // Recorremos la lista de resultados.
  for (let j = 0; j < cajoncitoResultados.length; j++) {
    // Si el resultado es más grande que el inicial...
    if (cajoncitoResultadosNumeroMasGrande < cajoncitoResultados[j]) {
      // Lo cambiamos a la variable NUMERO MAS GRANDE.
      cajoncitoResultadosNumeroMasGrande = cajoncitoResultados[j];
    }
  }
  console.log(cajoncitoResultadosNumeroMasGrande);
}

let start = Date.now();
findLongestWord(avengers);
let end = Date.now();
console.log("tiempo de ejecución:  ", end - start);
