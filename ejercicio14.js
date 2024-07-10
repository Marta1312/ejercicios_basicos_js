const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  let contadorObjetos = {};
  for (let i = 0; i < list.length; i++) {
    if (contadorObjetos[list[i]]) {
      contadorObjetos[list[i]]++;
    } else {
      contadorObjetos[list[i]] = 1;
    }
  }
  return contadorObjetos;
}

let resultado = repeatCounter(words);
console.log(resultado);
