// const link = require("../config/link");
// const conexion = require("../config/conexion");

// exports.obtenerPlatosDestacados = (req, res) => {
//   const queryPlatosDestacados = `
//     SELECT nombre_plato, descripcion, precio, imagen_menu
//     FROM menu
//     -- WHERE destacado = 1
//   `;

//   conexion.query(queryPlatosDestacados, (error, platos) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).send("Error al obtener los platos destacados");
//     }
    
//     res.render("platosDestacados", { link: link, platos: platos });
//   });
// };

const Menu = require('../models/platosDestacados');

const renderIndex = async (req, res) => {
  try {
    const destacados = await Menu.obtenerDestacados(); // Esto debería devolver un arreglo de objetos
    console.log(destacados); // Añadir un console.log para verificar la estructura de los datos
    res.render('index', { destacados });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar la página principal');
  }
};

module.exports = {
  renderIndex
};



