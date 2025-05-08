const bcrypt = require("bcryptjs");
const UserModel = require("../models/userModel");

const userController = {
  register: (req, res) => {
    console.log("👉 Datos recibidos en el servidor:", req.body);

    const {
      nombre_usuario,
      email_usuario,
      telefono_usuario,
      password_usuario,
      confirm_password_usuario,
    } = req.body;

    // Validación básica
    if (!nombre_usuario || !email_usuario || !telefono_usuario || !password_usuario || !confirm_password_usuario) {
      console.log("⛔ Error: Campos vacíos o faltantes");
      return res.status(400).send('Todos los campos son obligatorios');
    }

    if (password_usuario.length < 8 || password_usuario.length > 12) {
      console.log("⛔ Error: Contraseña no cumple con el largo requerido");
      return res.status(400).send('La contraseña debe tener entre 8 y 12 caracteres');
    }

    if (password_usuario !== confirm_password_usuario) {
      console.log("⛔ Error: Las contraseñas no coinciden");
      return res.status(400).send('Las contraseñas no coinciden');
    }

    const hashedPassword = bcrypt.hashSync(password_usuario, 10);

    const userData = {
      nombre_usuario,
      email_usuario,
      telefono_usuario,
      password_usuario: hashedPassword,
      id_rol_usuario: 1
    };

    console.log("✅ Datos listos para guardar en la BD:", userData);

    UserModel.createUser(userData, (err, result) => {
      if (err) {
        console.error("⛔ Error al registrar en la base de datos:", err);
        return res.status(500).send('Error al registrar el usuario');
      }

      console.log("✅ Usuario registrado con éxito, redirigiendo a Login...");
      return res.redirect('/login'); // <--- REDIRECCIÓN FUNCIONAL
    });
  }
};

module.exports = userController;
