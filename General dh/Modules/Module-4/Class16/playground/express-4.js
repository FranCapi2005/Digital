// bloque n4
/*Ruta GET agregar producto
Queremos enviar a la vista un producto vacío:

Para empezar, debemos crear la variable producto. Esta tendrá que almacenar un objeto con las siguientes propiedades: tipoProducto, precio y cantidad, en donde, cada una de ellas deberá tener como valor null, ya que, de momento, no tenemos ningún dato.
Por último, debemos crear una ruta que use el método get y que apunte a "/producto/agregar". Esta deberá devolver la variable producto que creaste. */

const express = require('express');
const app = express();

let producto = {
    tipoProducto : null,
    precio : null,
    cantidad : null,
}
app.get('/producto/agregar', (req, res) => {
    res.send(producto)
})