// arrays
let amigos = ["Coco", "Pablito", "Susana", "Francisco"];

let amigosJSON = JSON.stringify(amigos); // convierte a string
console.log(amigosJSON); 

let amigosOriginal = JSON.parse(amigosJSON); // recibe un string en formato JSON y lo convierte al objeto o al array que habian sido declarados originalmente  
console.log(amigosOriginal);


// objetos literales
let persona = {
    nombre: 'Juan',
    edad: 26,
    domicilio: "Calle Falsa 123"
};
console.log(persona);

let personaJSON = JSON.stringify(persona);
console.log(personaJSON);

let personaOriginal = JSON.parse(personaJSON);
console.log(personaOriginal);