const mysql = require('mysql2/promise');


const conexion = mysql.createPool({
    host: "localhost",
    database: "restaurante_db",
    user: "root",
    password: ""// quitar la contraseña si su mysql no usa una contraseña y si usa colacar su contraseña
});

module.exports = conexion;






