const express = require('express');

const router = express.Router();

router.get('/:idProducto', function(req, res){
    res.send('Bienvenido a los detalles del producto ' + req.params.idProducto)
})

router.get('/:idProducto/comentarios/:idComentario?', 
function(req, res) {
    if(req.params.idComentario == undefined){
        res.send('Bienvenidos al comentarios del producto ' + req.params.idProducto)
    }else{
        res.send('Bienvenidos al comentarios del producto ' 
        + req.params.idProducto + ' y estas enfocado en el comentario ' + 
        req.params.idComentario)
    }
})

module.exports = router;