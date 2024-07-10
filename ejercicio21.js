const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const mayoresDeEdad = [];
const menoresDeEdad = [];

for (let persona of users) {
  if (persona.years < 18) {
    menoresDeEdad.push(persona);
  } else {
    /* EL ELSE NO LLEVA NINGUNA CONDICION */
    mayoresDeEdad.push(persona);
  }
}

console.log("Usuarios menores de edad:", menoresDeEdad);
console.log("Usuarios mayores de edad:", mayoresDeEdad);
