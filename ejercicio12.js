const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  let unicos = [];
  for (let elemento of list) {
    if (!unicos.includes(elemento)) {
      unicos.push(elemento);
    }
  }
  return unicos;
}

let resultado = removeDuplicates(duplicates);
console.log(resultado);
