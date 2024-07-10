// PRIMERA PARTE //

const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...

jedi.edad = ( jedi.edad + 6 ) ;
console.log(jedi);

// SEGUNDA PARTE //

let nombre = "Leia" ;
let apellido = "Organa" ;
let edad = 20 ;

console.log("Soy " + nombre + " " + apellido + " tengo " + edad + " años y soy una princesa de Alderaan.") ;

console.log(`Soy ${nombre} ${apellido} tengo ${edad} años y soy una princesa de Alderaan.`);


// TERCERA PARTE // 

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

console.log(sable1.precio+sable2.precio);

// CUARTA PARTE // 

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

precioBaseGlobal = precioBaseGlobal+15000;

console.log(`${precioBaseGlobal} créditos`);

nave1.precioFinal = precioBaseGlobal+nave1.precioBase;
nave2.precioFinal = precioBaseGlobal+nave2.precioBase;

console.log(`${nave1.precioFinal} es el precio final de la nave 1`);
console.log(`${nave2.precioFinal} es el precio final de la nave 2`);
