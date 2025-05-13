const db = require("../config/conexion"); // mysql2 con promesas

const Menu = {
    getAll: async () => {
        const [results] = await db.query('SELECT * FROM menu'); // o 'menu' si ese es el nombre correcto
        return results;
    }
};

module.exports = Menu;


