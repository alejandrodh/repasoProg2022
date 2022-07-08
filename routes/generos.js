var express = require('express');
var router = express.Router();
var generoController = require('../controllers/generoController')

router.get('/:id/peliculas/', generoController.show)







module.exports = router;