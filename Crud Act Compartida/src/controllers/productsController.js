const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

	index: (req, res) => { // (get) Root - Mostrar todos los productos
		
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render("products", {products})

	},

	detail: (req, res) => { // (get) Detail - Detalle de un producto

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		//va a comparar si el id que se esta buscando coincide con el id del JSON
		const singleProduct = products.find((product) => {

			return product.id == req.params.id;

		}) 

		res.render("detail", {singleProduct})

	},

	create: (req, res) => { // (get) Create - Formulario para crear
		
		res.render("product-create-form")
	},
	
	processCreate: (req, res) => { // (post) Create - Método para guardar la info
		
		// guardar el producto con la informacion del usuario
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		// traer la informacion del formulario
		// crear el objeto literal (producto) a sumar al array
		const newProduct = {
			id: products[products.length - 1].id + 1,
  			name: req.body.name,
  			price: req.body.price,
  			discount: req.body.discount,
  			category: req.body.category,
  			description: req.body.description,
  			image: req.file.filename
		}

		// pushear el objeto literal al array
		products.push(newProduct)

		// transformar en json
		// sobreescribir el archivo json
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))

		// mostrarle al usuario una vista (redirect)
		res.redirect("/products/detail/" + newProduct.id)
	},

	edit: (req, res) => { // (get) Update - Formulario para editar

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const productToEdit = products.find((product) => {

			return product.id == req.params.id;

		}) 

		res.render("product-edit-form", {productToEdit})

	},

	processEdit: (req, res) => { // (post) Update - Método para actualizar la info
		
		// leemos el json
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		// buscamos el producto a editar
		const id = req.params.id;

		let productToEdit = products.find(product => product.id == id)

		// creamos el producto "nuevo" que va a reemplazar al anterior
		productToEdit = {
			id: productToEdit.id,
  			name: req.body.name,
  			price: req.body.price,
  			discount: req.body.discount,
  			category: req.body.category,
  			description: req.body.description,
  			image: req.file != undefined ? req.file.filename : productToEdit.image 
		}

		// buscamos la posicion del producto a editar 
		let indice = products.findIndex(product => {
			return product.id == id
		});

		// reemplazamos
		products[indice] = productToEdit;
	

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
		res.redirect("/products/detail/" + productToEdit.id)

	},

	destroy : (req, res) => { // (delete) Delete - Eliminar un producto de la DB
		
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		// eliminar
		products = products.filter(product =>{
			
			return product.id != req.params.id;

		})

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))

		res.redirect("/")
	}
};

module.exports = controller;