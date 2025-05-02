const express = require('express');
const router = express.Router();
const platosController = require('../controllers/platosDestacod');

router.get('/platos-destacados', platosController.obtenerPlatosDestacados);

module.exports = router;
