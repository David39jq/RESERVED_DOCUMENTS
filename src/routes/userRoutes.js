const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/regUsuario', userController.register); // ✅ debe ser una función
router.post('/loginUsuario', userController.login);

router.get('/login', (req, res) => {
  const mensajeRegistro = req.query.registro === 'exito' ? "¡Bienvenido! Ya puede iniciar sesión." : null;
  res.render('login/login');
});

router.get('/sign-up', (req, res) => {
  res.render('registrarse/Sign-up');
});

module.exports = router;
