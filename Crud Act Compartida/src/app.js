// Requires

const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE



// Express

const app = express();



// Middlewares

app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // Toma los datos del body
app.use(express.json()); // Toma los datos del body
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE



// Template Engines - EJS

app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas



// Systems - Use

const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products

app.use('/', mainRouter);
app.use('/products', productsRouter);



// Server Listen

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000")
})