const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let resultado = 0;
  for (let i = 0; i < numberList.length; i++) {
    resultado = resultado + numberList[i];
  }
  return resultado;
}

// PARA SACAR EL RESULTADO DE LA FUNCION FUERA DE ELLA.

let resultadoDeLaFuncion = sumNumbers(numbers);
console.log("resultado de fuera de la funcion: ", resultadoDeLaFuncion);
