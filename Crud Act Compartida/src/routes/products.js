// Requires

const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require ("path");



// Require Controller

const productsController = require('../controllers/productsController');



// Multer

const storage = multer.diskStorage({

    // donde guardamos los archivos
    destination : function(req, file, cb){
        cb(null, "public/images/products")
    },

    // que nombre tendra el archivo nuevo
    filename : function(req, file, cb){
        cb(null, file.fieldname + " - " + Date.now() + path.extname(file.originalname));
    }

});
const upload = multer({storage : storage})



// Devolver todos los productos  

router.get('/', productsController.index); 



// Devolver un producto 

router.get('/detail/:id/', productsController.detail); 



// Crear un producto

router.get('/create', productsController.create); 
    // upload.single permite que solo se suba 1 archivo en el <input type="file">
router.post('/create',upload.single("product-image"), productsController.processCreate); 



// Editar un producto 

router.get('/edit/:id/', productsController.edit); 
    // upload.single permite que solo se suba 1 archivo en el <input type="file">
router.put('/edit/:id', upload.single("product-image"), productsController.processEdit); 



// Eliminar un producto

router.delete('/delete/:id', productsController.destroy);



module.exports = router;