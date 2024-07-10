const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let resultado = 0;
  for (let i = 0; i < numberList.length; i++) {
    resultado = resultado + numberList[i];
  }
  let promedio = resultado / numberList.length;
  return promedio;
}

let resultadoDeLaFuncion = average(numbers);
console.log(resultadoDeLaFuncion);
