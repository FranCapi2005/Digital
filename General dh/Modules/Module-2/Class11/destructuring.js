// destructuring de arrays
let colores = ["blanco", "azul", "amarillo", "rojo", "verde"];

let [colorBlanco, colorAzul, colorVerde] = colores
console.log(colorAzul);

// destructuring de objeto literal
let persona = {
    nombre: "Denise",
    edad: 23,
    profesion: "Programadora",
    seriesFavoritas: ["Breaking bad", "Game of thrones", "Friends"]
};

let {nombre, profesion} = persona;
console.log(nombre, profesion)