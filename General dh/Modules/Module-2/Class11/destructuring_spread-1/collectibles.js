const { log } = require('console');
let fs = require ('fs');

function importar(marca){

    let archivo = "";

    switch (marca) {
        case "Hot Toys":
            archivo = 'figuras1.json'
            break;
        case "Bandai":
            archivo = 'figuras2.json'
            break;
        case "Star Wars":
            archivo = 'figuras3.json'
            break;
    }

    let rutaArchivo = './datos_f/' + archivo;

    let figuras = JSON.parse(fs.readFileSync(rutaArchivo, 'utf-8'));

    return figuras
};


module.exports = importar
// crear una funcion y exportar la funcion, (module.exports). Importar en app.js y llamarla por c/u de los json
