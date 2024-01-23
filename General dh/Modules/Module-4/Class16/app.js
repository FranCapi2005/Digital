const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => { 
// listen permite lanzar y abrir el server
    console.log(`servidor corriendo`)
});

//         PATH       HANDLER-Callback
app.get('/', (req, res) => {
//   Representa el RES 
    res.send(`Bienvenido al sitio`);
});

app.get('/contact', (req, res) => {
    res.send(`Contactanos`);
});

app.get('/un-array', (req, res) => {
    res.send(`[0,1,2,3,4,5,6,7,8,9,10]`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html')) 
});