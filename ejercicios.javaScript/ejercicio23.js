const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

let peliculaPequena = [];
let peliculaMediana = [];
let peliculaGrande = [];

for (let movie of movies) {
  if (movie.durationInMinutes < 100) {
    peliculaPequena.push(movie);
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    peliculaMediana.push(movie);
  } else if (movie.durationInMinutes > 200) {
    peliculaGrande.push(movie);
  } else {
    console.log("Estás viendo un cortometraje o un documental de la 2");
  }
}

console.log("Las Peliculas pequeñas son:", peliculaPequena);
console.log("Las Peliculas medianas son:", peliculaMediana);
console.log("Las Peliculas grandes son:", peliculaGrande);
