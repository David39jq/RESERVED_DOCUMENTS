const conexion = require("../config/conexion");

const UserModel = {
  createUser: async (data) => {
    const sql = `
      INSERT INTO usuarios 
      (nombre_usuario, email_usuario, telefono_usuario, password_usuario, id_rol_usuario)
      VALUES (?, ?, ?, ?, ?)`;

    const values = [
      data.nombre_usuario,
      data.email_usuario,
      data.telefono_usuario,
      data.password_usuario,
      data.id_rol_usuario
    ];

    await conexion.execute(sql, values);
  }
};

module.exports = UserModel;
