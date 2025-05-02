// const express = require("express");
// const router = express.Router();
// const link = require("../config/link");

// /*
// router.get("/index", function(req, res){
//     if(!req.session,login){
//         res.render("login" (link));
//     }else{
//         res.render("index", {datos: req.session, link});
//     }
// });
// */

// router.get("/", function(req, res){
//     res.render("index",{link});
// });


// module.exports = router;

const express = require("express");
const router = express.Router();
const link = require("../config/link");
const conexion = require("../config/conexion"); // Importa tu conexión a la base de datos

router.get("/", function(req, res) {
  const queryPlatosDestacados = `
    SELECT nombre_plato, descripcion, precio, imganen_menu
    FROM menu
    -- WHERE destacado = 1
  `;

  conexion.query(queryPlatosDestacados, (error, platos) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Error al obtener los platos destacados");
    }
    const repetirSeccion = [{}, {}, {}]; // Un array con la cantidad de repeticiones deseadas
    res.render("index", { link: link, platos: platos, repetirSeccion: repetirSeccion });
  });
});

module.exports = router;