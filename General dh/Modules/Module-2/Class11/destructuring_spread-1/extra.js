/* 2 */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* 3 */
let [posicionCero, ,posicionDos, ,posicionCuatro] = numeros
console.log(posicionCero, posicionDos, posicionCuatro);

/* 4 */
let almacenar ={
    nombre: 'Hunt',
    tipo: 'Perro',
    color: "Gris",
    raza: "Weimaraner"
};

let {nombre} = almacenar;

let {tipo} = almacenar;

let {color} = almacenar;

let {raza} = almacenar;

console.log(`Hola les presento a mi mascuta su nombre es ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}`);