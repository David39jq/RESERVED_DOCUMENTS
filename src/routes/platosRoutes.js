const express = require('express');
const router = express.Router();
const platosController = require('../controllers/indexController');

router.get('/destacados', menuController.mostrarPlatosDestacados);

module.exports = router;

