let fs = require('fs');
let rutaArchivo = './biciletas.json'
let biciletas = fs.readFileSync(rutaArchivo, 'utf-8');

let bicicletasJSON = JSON.parse(biciletas);

module.exports = bicicletasJSON;