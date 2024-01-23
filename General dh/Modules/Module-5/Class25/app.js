const express = require("express");
const rutasProductos = require('./routes/productos.js');
const rutasMain = require('./router/main.js');

const app = express();

app.use('/productos', rutasProductos)
app.use('/', rutasMain)


app.listen(3030, () =>{
    console.log("Servidor corriendo exitosamente")
});
