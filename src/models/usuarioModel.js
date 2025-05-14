const conexion = require('../config/conexion');// Asegúrate de tener una conexión MySQL exportada aquí

const UsuarioModel = {};

// Buscar usuario por correo y contraseña
UsuarioModel.buscarPorCredenciales = (email, password, callback) => {
    const query = 'SELECT * FROM usuarios WHERE email_usuario = ? AND password_usuario = ?';
    conexion.query(query, [email, password], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = UsuarioModel;


