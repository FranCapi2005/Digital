const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.send('Bienvenido al sitio!!!!!')
})

router.get('/', function(req, res) {
    res.send('Dejanos tu contacto')
});


module.exports = router