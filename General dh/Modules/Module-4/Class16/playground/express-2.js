// bloque n2
/*Ruta GET home

Exploremos los diferentes métodos que podemos usar con el módulo express.
Nuestro trabajo será, utilizando el método get, crear una ruta hacia "/home" que devuelva la frase "Hola, estamos en el home".  */

const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send("Hola, estamos en el home")
})