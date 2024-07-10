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
  true,
];
function averageWord(list) {
  let resultado = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      resultado = resultado + list[i];
    } else if (typeof list[i] === "string") {
      resultado = resultado + list[i].length;
    } else {
      console.log(`El dato '${list[i]}' no es compatible.`);
    }
  }
  let promedio = resultado / list.length;
  return promedio;
}

let resultadoFinal = averageWord(mixedElements);
console.log(resultadoFinal);
