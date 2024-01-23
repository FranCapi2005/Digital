const express = require('express');
const mainRouter = require('./routers/mainRouter')

const app = express();

app.use(express.static('./public'));
app.use('/', mainRouter);

app.set('view engine', 'ejs');

app.listen(3030, () => {

    console.log('El servidor esta abierto en el puerto: 3030')

});