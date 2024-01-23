// bloque n3
/* Ruta GET perfil

Vayamos a nuestro perfil:
Queremos crear una ruta que use el método get y que apunte a "/perfil". Esta deberá devolver la variable saludo que está ya declarada.*/

const express = require('express');
const app = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get('/perfil', (req, res) => {
    res.send(saludo)
})