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

    console.log("📝 SQL Query: ", sql);
    console.log("📦 Values: ", values);

    conexion.query(sql, values, (err, result) => {
      if (err) {
        console.error("⛔ Error en la consulta SQL:", err.sqlMessage || err.message);
        console.error("⚠️ Código de Error:", err.code);
        console.error("🗄️ Error SQL:", err.sql);
        callback(err, null);
        return;
      }
      console.log("✅ Usuario insertado correctamente con ID:", result.insertId);
      callback(null, result);
    });
  }
};

module.exports = UserModel;


