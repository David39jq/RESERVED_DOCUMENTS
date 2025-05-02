// src/controllers/platosDestacadosController.js
const conexion = require('../config/conexion');

exports.obtenerPlatosDestacados = (req, res) => {
    const query = `
        SELECT nombre_plato, descripcion, precio, imganen_menu
        FROM menu
        -- WHERE destacado = 1  -- descomenta si luego agregas esta columna
    `;

    conexion.query(query, (error, resultados) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al obtener platos destacados');
            return;
        }

        // Verificar si no hay platos destacados
        if (resultados.length === 0) {
            console.log('No se encontraron platos destacados');
            res.render('inicio/platos-destacados/platosDestacados', { platos: [] });
        } else {
            // Pasamos los resultados a la vista
            res.render('inicio/platos-destacados/platosDestacados', { platos: resultados });
        }
    });
};
