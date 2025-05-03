const link = require("../config/link");
const conexion = require("../config/conexion");

const Menu = {
  obtenerDestacados: async () => {
    const [rows] = await conexion.execute(
      'SELECT * FROM menu WHERE destacado_semana = 1 LIMIT 3'
    );
    return rows;
  }
};

module.exports = Menu;




