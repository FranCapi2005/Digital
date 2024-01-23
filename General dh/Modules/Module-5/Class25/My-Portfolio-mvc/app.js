// Paso N1
/* npm init -y */


// Paso N2
/* npm install express --save */

// Paso N3
const express = require('express'); 
const mainRoute = require('./routers/main');

const app = express();

app.use('/', mainRoute);

// Paso N4
app.listen(3030, () => {

    console.log('Servidor funcionando en puerto: 3030')

});

// Paso N5 
/* Estructurar las carpetas */

// Paso N6
/* Variable mainRoute (require) y app.use */