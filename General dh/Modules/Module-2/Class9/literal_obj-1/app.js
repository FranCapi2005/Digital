const peliculasFavoritas = require('./module-exports/peliculas');
let peliculasLista = require('./module-exports/peliculas');

console.log(peliculasLista);

for(let i = 0; i<peliculasFavoritas.length; i++){
    console.log("Pelicula", peliculasFavoritas[i].id);
    console.log("Clasificacion", peliculasFavoritas[i].rating);
    console.log("Premios Otorgados", peliculasFavoritas[i].awards);
    console.log("Duracion", peliculasFavoritas[i].length);
    console.log("Precio", peliculasFavoritas[i].price);
    console.log("Genero", peliculasFavoritas[i].genre);
    console.log("--------------------------------------");
};
let fs = require('fs');
let lecturaMensajeTexto = fs.readFileSync(__dirname + '/module-exports/mensaje.txt', 'utf-8');
console.log(lecturaMensajeTexto)