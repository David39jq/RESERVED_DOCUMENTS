// ReservaController.js
const Reserva = require('../models/listaReservacionModel');

const ReservaController = {
  // Obtener todas las reservas
  getAllReservas: async (req, res) => {
    const fecha = req.query.fecha;  // Obtener la fecha desde la query string
    try {
      let reservas;
      if (fecha) {
        reservas = await Reserva.getByFecha(fecha);  // Método para obtener las reservas por fecha
      } else {
        reservas = await Reserva.getAll();  // Si no hay fecha, obtener todas las reservas
      }
      // Pasar las reservas y la fecha seleccionada a la vista
      res.render('admin/listaReservas/listaReservas', { reservas, fechaSeleccionada: fecha || '' });
    } catch (error) {
      res.status(500).send('Error al obtener las reservas');
    }
  },

  // Crear una nueva reserva
  createReserva: async (req, res) => {
    const { fecha_reserva, hora_reserva, num_comensales_reserva, id_usuario_reserva, id_mesa_reserva } = req.body;
    try {
      await Reserva.create({ fecha_reserva, hora_reserva, num_comensales_reserva, id_usuario_reserva, id_mesa_reserva });
      res.redirect('/reservas');
    } catch (error) {
      res.status(500).send('Error al crear la reserva');
    }
  },

  // Eliminar una reserva
  deleteReserva: async (req, res) => {
    const { id_reserva } = req.params;
    try {
      console.log('Eliminando reserva con ID:', id_reserva);  // Verifica el id de la reserva
      await Reserva.delete(id_reserva);
      res.redirect('/reservas');
    } catch (error) {
      console.error('Error al eliminar la reserva:', error);
      res.status(500).send('Error al eliminar la reserva');
    }
  },

  // Actualizar estado de la reserva
  updateStatus: async (req, res) => {
    const { id_reserva, estado } = req.params;
    try {
      await Reserva.updateStatus(id_reserva, estado);
      res.redirect('/reservas');
    } catch (error) {
      res.status(500).send('Error al actualizar el estado de la reserva');
    }
  }
};

module.exports = ReservaController;