const express = require('express');

const app = express();

const mainRouter = require('./routes/mainRoutes')

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.listen(3030, () => {

    console.log('El servidor esta abierto en el puerto: 3030')

});