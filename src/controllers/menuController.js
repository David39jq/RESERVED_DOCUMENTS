const Menu = require('../models/menuModel');

exports.verMenu = async (req, res) => {
    try {
        const productos = await Menu.getAll(); // obtiene todos los productos del menú
        res.render('menu/menu', { productos }); // asegúrate que tu vista `menu.ejs` reciba esta variable
    } catch (err) {
        console.error(err);
        res.status(500).send('Error obteniendo el menú');
    }
};


