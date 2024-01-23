let fs = require ('fs');
let leerJSON = fs.readFileSync('./autos.json', 'utf-8');

let auto = JSON.parse(leerJSON);

module.exports = auto