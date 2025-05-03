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
