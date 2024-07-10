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
    if (longitudMasLarga < stringList[i].length) {
      longitudMasLarga = stringList[i].length;
    }
  }
  console.log(longitudMasLarga);
}

findLongestWord(avengers);
