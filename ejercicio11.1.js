const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  let resultado = 0;
  for (let i = 0; i < list.length; i++) {
    switch (typeof list[i]) {
      case "number":
        resultado += list[i];
        break;
      case "string":
        resultado += list[i].length;
        break;
      default:
        throw new Error(`El dato '${list[i]}' no es un dato compatible`);
        break;
    }
  }
  return resultado;
}

let resultadoFinal = averageWord(mixedElements);
console.log(resultadoFinal);
