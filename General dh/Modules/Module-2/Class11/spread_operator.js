// spread operator en Arrays

let clubesUno = ["Boca", "San Lorenzo", "River"];
let clubesDos = ["Racing", "Lanus", "Defensa y Justicia"];
let todosLosClubes = [...clubesUno, ...clubesDos];

console.log(todosLosClubes)

let parte = ["los", "cumplas"];
let oracion = ["que", ...parte, "feliz"];

console.log(oracion);

// spread operator en Objetos Literales

let auto = {marca: "Ferrari", kilometros: 0, anio: 2019};
let corredorUno = {nombre: "Vettel", edad: 32, ...auto};
let corredorDos = {nombre: "Leclerc", edad: 21, ...auto};

console.log(corredorUno);
console.log(corredorDos);

// spread y funciones

let notas = [9.2, 8.5, 4.5, 3.2, 10.0];
Math.min(...notas);

