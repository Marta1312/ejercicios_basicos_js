const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longitudMasLarga = stringList[0].length;
  for (i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longitudMasLarga) {
      longitudMasLarga = stringList[i].length;
    }
  }
  console.log(longitudMasLarga);
}

let start = Date.now();
findLongestWord(avengers);
let end = Date.now();
console.log("tiempo de ejecución:  ", end - start);
