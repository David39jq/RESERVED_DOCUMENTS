const Menu = require('../models/platosDestacados');


//llmar platos destacados
// const renderIndex = async (req, res) => {
//   try {
//     const destacados = await Menu.obtenerDestacados(); // Esto debería devolver un arreglo de objetos
//     // console.log(destacados); // Añadir un console.log para verificar la estructura de los datos
//     res.render('index', { destacados });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error al cargar la página principal');
//   }
// };
const renderIndex = async (req, res) => {
  try {
    const destacados = await Menu.obtenerDestacados();
    console.log('🥘 Platos destacados:', destacados);

    res.render('index', { destacados });
  } catch (error) {
    console.error('❌ Error al renderizar index.ejs:', error);
    res.status(500).send('Error al cargar la página principal');
  }
};

module.exports = {
  renderIndex
};



