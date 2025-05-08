// Modelo Reserva.js
const link = require("../config/link");
const db = require("../config/conexion");

const Reserva = {
  // Método para obtener todas las reservas
  getAll: () => {
    return db.query('SELECT * FROM reservas');
  },

  // Método para obtener reservas por fecha
  getByFecha: (fecha) => {
    return db.query('SELECT * FROM reservas WHERE fecha_reserva = ?', [fecha]);
  },

  // Método para agregar una nueva reserva
  create: (data) => {
    const { fecha_reserva, hora_reserva, num_comensales_reserva, id_usuario_reserva, id_mesa_reserva } = data;
    return db.query(
      'INSERT INTO reservas (fecha_reserva, hora_reserva, num_comensales_reserva, id_usuario_reserva, id_mesa_reserva) VALUES (?, ?, ?, ?, ?)', 
      [fecha_reserva, hora_reserva, num_comensales_reserva, id_usuario_reserva, id_mesa_reserva]
    );
  },

  // Método para eliminar una reserva
  delete: (id_reserva) => {
    return db.query('DELETE FROM reservas WHERE id_reserva = ?', [id_reserva]);
  },

  // Método para actualizar el estado de una reserva
  updateStatus: (id_reserva, estado) => {
    return db.query('UPDATE reservas SET estado = ? WHERE id_reserva = ?', [estado, id_reserva]);
  }
};

module.exports = Reserva;

