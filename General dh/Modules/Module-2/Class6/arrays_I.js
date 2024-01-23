// arrays

let nombres = ["Francisco", "Juan", "Pedro", "Julian"];
let edades = [35, 67, 21, 32];
let valoresDeVerdad = [true, false, true, true];
let variados = ["Nacho", 43, true, true, edades];


// un dato concreto dentro de un array
console.log(valoresDeVerdad[1]);


// arrays dentro de arrays
console.log(variados[4][3]); // imprimirá 32, ya que indica que buscara en el array "edades" y imprimirá el indice nº3

 console.log(nombres[Math.floor(Math.random() * nombres.length)]);
                //  Math.floor(Math.random() ) Devuelve un valor random dentro de un array


// Metodos de arrays
// .push();
let colores = ["Azul", "Blanco", "Verde", "Morado"];

colores.push("Amarillo", "Gris"); 
console.log(colores);


// .pop();
let notas = [1, 2, 3, 4, 5, 6, 7, 8,];

let elUltimo = notas.pop();
console.log(elUltimo);


// .shift();
let animales = ["Perro", "Gato", "Canario", "Conejo"];

animales.shift();
console.log(animales);


// .unshift();
let autos = ["Toyota", "Volkswagen", "Ford", "Buggati", "Ferrari"];

autos.unshift("Lamborghini", "McLaren");
console.log(autos);


// .indexOf();
let electrodomesticos = ["Lavarropa", "Microondas", "Cafetera", "Horno"];

let electrodomiesticosChicos = electrodomesticos.indexOf("Cafetera");
console.log(electrodomiesticosChicos);


// .lastIndexOf();
let iOS = ["AirPods", "Iphone", "Ipad", "MacBook", "Apple Watch"];

let iOsX = iOS.lastIndexOf('Iphone');

if (iOsX != -1) {
    console.log("Lo encontré");
} else {
    console.log("No lo encontré")
}


// .join();
let metrajeCasa = [32, 76, 54, 657, 75, 636.65, 252, 643, 664];

let resultadoJunto = metrajeCasa.join(" - ");
console.log(resultadoJunto);


// .includes();
let materiasColegio = ["matematica", "Inglés", "Fisica", "Literatura", "Arte", "História"]

let buscarMaterias = materiasColegio.includes("matematica");
console.log(buscarMaterias);