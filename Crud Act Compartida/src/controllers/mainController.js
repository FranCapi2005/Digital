const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	index: (req, res) => {

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
		const visitedProducts = products.filter(product => {
			return product.category == "visited"
		});

		const inSaleProducts = products.filter(product => {
			return product.category == "in-sale"
		});

		res.render("index", {visitedProducts, inSaleProducts});
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;