// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/regUsuario', (req, res, next) => {
    console.log("👉 Llegó al endpoint /regUsuario");
    next();
  });

router.post('/regUsuario', userController.register);

module.exports = router;
