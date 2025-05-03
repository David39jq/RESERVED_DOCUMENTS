const express = require('express');
const router = express.Router();
const platosController = require('../controllers/platosDestacados');

router.get('/platos-destacados', platosController.obtenerPlatosDestacados);

module.exports = router;
