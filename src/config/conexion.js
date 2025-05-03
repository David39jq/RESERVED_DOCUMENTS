const mysql = require('mysql2/promise');

// Crear un pool de conexiones
const conexion = mysql.createPool({
    host: "localhost",
    database: "restaurante_db",
    user: "root",
    password: "" // Si tu MySQL no usa una contraseña, deja el campo vacío. Si usa, colócala aquí.
});

module.exports = conexion;
