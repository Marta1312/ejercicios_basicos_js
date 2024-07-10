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
  for (const element of list) {
    if (typeof element === "string") {
      resultado += element.length;
    } else {
      resultado += element;
    }
  }
  let promedio = resultado / list.length;
  console.log(promedio);
}

averageWord(mixedElements);
