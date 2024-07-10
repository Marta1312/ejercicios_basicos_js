const toys = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" },
];

for (juguete of toys) {
  if (juguete.name.includes("gato")) {
    const index = toys.indexOf(juguete);
    toys.splice(index, 1); /* Desde la posición index elimina UNO */
  }
}

/* NO SE POR QUÉ FurReal Friends gato interactivo sigue saliendo impreso en el console.log */

console.log(toys);
