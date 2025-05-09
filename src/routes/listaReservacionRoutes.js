// listaReservacionRoutes.js
const express = require('express');
const ReservaController = require('../controllers/listaReservacionController');
const router = express.Router();

// Ruta para mostrar todas las reservas
router.get('/listaReservaciones', ReservaController.getAllReservas);

// Ruta para eliminar una reserva
router.get('/reservas/delete/:id_reserva', ReservaController.deleteReserva);

// Ruta para confirmar una reserva (si se necesita en el futuro)
router.get('/reservas/confirmar/:id_reserva', ReservaController.updateStatus);

module.exports = router;