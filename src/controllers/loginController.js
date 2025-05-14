const usuarioModel = require('../models/usuarioModel');

exports.verificarLogin = (req, res) => {
    const { email_usuario, password_usuario } = req.body;

    if (!email_usuario || !password_usuario) {
        return res.send("⚠️ Faltan datos de login");
    }

    usuarioModel.buscarPorCredenciales(email_usuario, password_usuario, (err, results) => {
        if (err) {
            console.error("❌ Error en la base de datos:", err);
            return res.status(500).send("Error interno");
        }

        if (results.length > 0) {
            req.session.usuario = {
                id: results[0].id_usuario,
                nombre: results[0].nombre_usuario,
                email: results[0].email_usuario,
                rol: results[0].id_rol_usuario
            };
            console.log("✅ Sesión iniciada:", req.session.usuario);
            return res.redirect('/');
        } else {
            return res.send("❌ Usuario o contraseña incorrectos");
        }
    });
};


