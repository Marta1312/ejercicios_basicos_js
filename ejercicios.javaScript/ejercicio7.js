function greaterNumber(numberOne, numberTwo) {
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    console.log("Introduce numerito porque hay algo que no es un numero");
  } else {
    if (numberOne < numberTwo) {
      console.log(numberTwo);
    } else if (numberOne > numberTwo) {
      console.log(numberOne);
    } else if (numberOne === numberTwo) {
      console.log("Son iguales");
    } else {
      console.log("Ni idea bro");
    }
  }
}

greaterNumber(1, 6);
greaterNumber(8, 6);
greaterNumber(6, 6);
greaterNumber("6", 6);
greaterNumber("Quesito", 6);
greaterNumber("Quesito", "Quesito");
