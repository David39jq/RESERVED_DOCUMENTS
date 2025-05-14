const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/loginUsuario', loginController.verificarLogin);

module.exports = router;
