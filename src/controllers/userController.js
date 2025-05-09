const bcrypt = require("bcryptjs");
const UserModel = require("../models/userModel");

const userController = {
  register: async (req, res) => {
    const {
      nombre_usuario,
      email_usuario,
      telefono_usuario,
      password_usuario,
      confirm_password_usuario
    } = req.body;

    if (!nombre_usuario || !email_usuario || !telefono_usuario || !password_usuario || !confirm_password_usuario) {
      return res.status(400).send("Todos los campos son obligatorios.");
    }

    if (password_usuario !== confirm_password_usuario) {
      return res.status(400).send("Las contraseñas no coinciden.");
    }

    try {
      const hashedPassword = await bcrypt.hash(password_usuario, 10);

      const userData = {
        nombre_usuario,
        email_usuario,
        telefono_usuario,
        password_usuario: hashedPassword,
        id_rol_usuario: 2
      };

      await UserModel.createUser(userData); // ← asegúrate de que devuelva una promesa
      return res.redirect("/login?registro=exito");//toma el mensaje "bienbenido, ya puede inisiar sesion" de userRouter.js

    } catch (error) {
      console.error("❌ Error en el registro:", error);
      return res.status(500).send("Error interno del servidor.");
    }
  },

  login: async (req, res) => {
    // ...
  }
};

module.exports = userController;
