/* 
Primer controller

Comenzamos un nuevo día y llega un nuevo requerimiento.
Estamos trabajando en el controlador de un carrito de e-commerce y nos piden que, al agregar un item, el controlador debe devolver el mensaje "Item Agregado".

El líder técnico del área nos indica que para cumplir con este requerimiento debemos modificar la función de agregarItem para que reciba los parámetros req y res. Dicho esto, el líder técnico se aleja silenciosamente confiando plenamente en nuestras habilidades. */

let carritoController = {
   
    sacarItem: function(){},
    consultarItem: function(){},
    agregarItem: function(req, res){
       res.send("Item Agregado")
    },
    
 };
 
 module.exports = carritoController
 