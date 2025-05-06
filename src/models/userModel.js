// models/UserModel.js
const link = require("../config/link");
const conexion = require("../config/conexion");

const UserModel = {
  createUser: (userData, callback) => {
    const sql = 'INSERT INTO usuarios (nombre_usuario, email_usuario, telefono_usuario, password_usuario, id_rol_usuario) VALUES (?, ?, ?, ?, ?)';
    const values = [
      userData.nombre_usuario,
      userData.email_usuario,
      userData.telefono_usuario,
      userData.password_usuario,
      userData.id_rol_usuario || 1
    ];
    conexion.query(sql, values, callback);
  }
};

module.exports = UserModel;

