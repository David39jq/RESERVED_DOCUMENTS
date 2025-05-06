const bcrypt = require("bcryptjs");
const UserModel = require("../models/userModel");

const userController = {
  register: (req, res) => {
    const { nombre_usuario, email_usuario, telefono_usuario, password_usuario, confirm_password_usuario } = req.body;

    if (!nombre_usuario || !email_usuario || !telefono_usuario || !password_usuario || !confirm_password_usuario) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    if (password_usuario.length < 8 || password_usuario.length > 12) {
      return res.status(400).send('La contraseña debe tener entre 8 y 12 caracteres');
    }

    if (password_usuario !== confirm_password_usuario) {
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

    UserModel.createUser(userData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al registrar el usuario');
      }

      console.log()
      // Redirigir a la página de login después de un registro exitoso
      res.redirect('/login');  // Asegúrate de que esta ruta esté configurada en tu app.js
    });
  }
};

module.exports = userController;


  
