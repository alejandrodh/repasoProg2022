var express = require('express');
var router = express.Router();
var productoController = require('../controllers/productoController')

router.get('/', productoController.index )
router.get('/unProducto/:loquequiera', productoController.show)







module.exports = router;