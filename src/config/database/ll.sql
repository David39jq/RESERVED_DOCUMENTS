INSERT INTO `menu` (`id_menu`, `nombre_plato`, `descripcion`, `precio`, `imagen_menu`, `id_categoria_menu`, `destacado_semana`) VALUES
(3, 'Lomo Saltado', 'Tradicional plato peruano con carne y papas fritas.', 25.00, 'assets/images/platos/lomo-fino.jpg', 1, 0),
(4, 'Tarta De Atún', 'Masa horneada rellena de una mezcla de atún, cebolla, huevo duro, aceitunas y condimentos, ideal como entrada o plato principal.', 35.00, 'assets/images/platos/tarta-atun.jpg', 1, 0),
(5, 'Dulce Misak', 'Postre tradicional de frutas locales endulzado con panela, con un toque de especias autóctonas.', 45.00, 'assets/images/cocteles/dulce-misak.jpg', 2, 0),
(6, 'Torta De Chocolate', 'Deliciosa y esponjosa torta elaborada con cacao puro, ideal para los amantes del chocolate, perfecta para cualquier ocasión', 15.00, 'assets/images/postres/torta-chocolate.jpg', 3, 0);

INSERT INTO `categorias_menu` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Platos'),
(2, 'cocteleria'),
(3, 'Postres'),
(4, 'Bebidas'),
(5, 'Ensaladas'),
(6, 'Sopas'),
(7, 'Comida Internacional'),
(8, 'Desayunos');

CREATE DATABASE IF NOT EXISTS restaurante_db DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE restaurante_db;