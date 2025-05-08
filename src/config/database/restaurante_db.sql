-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-05-2025 a las 18:40:06
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12
CREATE DATABASE IF NOT EXISTS restaurante_db DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE restaurante_db;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_menu`
--

CREATE TABLE `categorias_menu` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias_menu`
--

INSERT INTO `categorias_menu` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Platos'),
(2, 'cocteleria'),
(3, 'Postres'),
(4, 'Bebidas'),
(5, 'Ensaladas'),
(6, 'Sopas'),
(7, 'Comida Internacional'),
(8, 'Desayunos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion_restaurante`
--

CREATE TABLE `informacion_restaurante` (
  `id_informacion_restaurante` int(11) NOT NULL,
  `direccion_restaurante` varchar(255) NOT NULL,
  `telefono_restaurante` varchar(15) NOT NULL,
  `email_restaurante` varchar(80) NOT NULL,
  `horario_atencion_restaurante` varchar(100) NOT NULL,
  `id_menu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `item_reserva`
--

CREATE TABLE `item_reserva` (
  `id_item_reserva` varchar(80) NOT NULL,
  `inicio_item_reserva` datetime NOT NULL,
  `fin_item_reserva` datetime NOT NULL,
  `hora_item_reserva` datetime NOT NULL,
  `observation_item_reserva` varchar(80) DEFAULT NULL,
  `id_reserva_item_reserva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `nombre_plato` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen_menu` varchar(50) NOT NULL,
  `id_categoria_menu` int(11) NOT NULL,
  `destacado_semana` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id_menu`, `nombre_plato`, `descripcion`, `precio`, `imagen_menu`, `id_categoria_menu`, `destacado_semana`) VALUES
(3, 'Lomo Saltado', 'Tradicional plato peruano con carne y papas fritas.', 25.00, 'assets/images/platos/lomo-fino.jpg', 1, 0),
(4, 'Tarta De Atún', 'Masa horneada rellena de una mezcla de atún, cebolla, huevo duro, aceitunas y condimentos, ideal como entrada o plato principal.', 35.00, 'assets/images/platos/tarta-atun.jpg', 1, 0),
(5, 'Dulce Misak', 'Postre tradicional de frutas locales endulzado con panela, con un toque de especias autóctonas.', 45.00, 'assets/images/cocteles/dulce-misak.jpg', 2, 0),
(6, 'Torta De Chocolate', 'Deliciosa y esponjosa torta elaborada con cacao puro, ideal para los amantes del chocolate, perfecta para cualquier ocasión', 15.00, 'assets/images/postres/torta-chocolate.jpg', 3, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesas`
--

CREATE TABLE `mesas` (
  `id_mesa` int(11) NOT NULL,
  `capacidad_mesa` int(11) NOT NULL,
  `disponible_mesa` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE `notificaciones` (
  `id_notificacion` int(11) NOT NULL,
  `mensaje_notificacion` text NOT NULL,
  `tipo_notificacion` enum('confirmacion','recordatorio','cancelacion') NOT NULL,
  `fecha_notificacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `leido_notificacion` tinyint(1) DEFAULT 0,
  `id_usuario_notificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opiniones`
--

CREATE TABLE `opiniones` (
  `id_opinion` int(11) NOT NULL,
  `comentario_opinion` text NOT NULL,
  `calificacion_opinion` tinyint(4) NOT NULL,
  `fecha_opinion` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_usuario_opinion` int(11) NOT NULL,
  `id_restaurante_opinion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id_reserva` int(11) NOT NULL,
  `fecha_reserva` date NOT NULL,
  `hora_reserva` time NOT NULL,
  `num_comensales_reserva` int(11) NOT NULL,
  `estado` enum('pendiente','confirmada','cancelada') DEFAULT 'pendiente',
  `id_usuario_reserva` int(11) NOT NULL,
  `id_mesa_reserva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurante`
--

CREATE TABLE `restaurante` (
  `id_restaurante` int(11) NOT NULL,
  `nombre_restaurante` varchar(100) NOT NULL,
  `id_mesa_restaurante` int(11) NOT NULL,
  `id_notificacion_restaurante` int(11) NOT NULL,
  `id_informacion_restaurante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` tinyint(4) NOT NULL,
  `nombre_rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `nombre_rol`) VALUES
(1, 'administrador'),
(2, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `email_usuario` varchar(80) NOT NULL,
  `telefono_usuario` varchar(15) NOT NULL,
  `password_usuario` varchar(100) NOT NULL,
  `id_rol_usuario` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `email_usuario`, `telefono_usuario`, `password_usuario`, `id_rol_usuario`) VALUES
(9, 'brayan', 'bratan@solis', '3005454', '$2b$10$wT7/tyyT6j8rUJ9hfhcSBu4ECyrMLGtQStcKuFP.huyN15DNkZllq', 1),
(10, 'david', 'david@solis', '3005454', '$2b$10$5GvFcvdH/noVozIBS1i4V.yLKPSmp33kBm1EjEOoXre79/7ohcMEa', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias_menu`
--
ALTER TABLE `categorias_menu`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `informacion_restaurante`
--
ALTER TABLE `informacion_restaurante`
  ADD PRIMARY KEY (`id_informacion_restaurante`),
  ADD KEY `id_menu` (`id_menu`);

--
-- Indices de la tabla `item_reserva`
--
ALTER TABLE `item_reserva`
  ADD PRIMARY KEY (`id_item_reserva`),
  ADD KEY `id_reserva_item_reserva` (`id_reserva_item_reserva`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`),
  ADD KEY `id_categoria_menu` (`id_categoria_menu`);

--
-- Indices de la tabla `mesas`
--
ALTER TABLE `mesas`
  ADD PRIMARY KEY (`id_mesa`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`id_notificacion`),
  ADD KEY `id_usuario_notificacion` (`id_usuario_notificacion`);

--
-- Indices de la tabla `opiniones`
--
ALTER TABLE `opiniones`
  ADD PRIMARY KEY (`id_opinion`),
  ADD KEY `id_usuario_opinion` (`id_usuario_opinion`),
  ADD KEY `id_restaurante_opinion` (`id_restaurante_opinion`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `id_usuario_reserva` (`id_usuario_reserva`),
  ADD KEY `id_mesa_reserva` (`id_mesa_reserva`);

--
-- Indices de la tabla `restaurante`
--
ALTER TABLE `restaurante`
  ADD PRIMARY KEY (`id_restaurante`),
  ADD KEY `id_mesa_restaurante` (`id_mesa_restaurante`),
  ADD KEY `id_notificacion_restaurante` (`id_notificacion_restaurante`),
  ADD KEY `id_informacion_restaurante` (`id_informacion_restaurante`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_rol_usuario` (`id_rol_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias_menu`
--
ALTER TABLE `categorias_menu`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `mesas`
--
ALTER TABLE `mesas`
  MODIFY `id_mesa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id_notificacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `opiniones`
--
ALTER TABLE `opiniones`
  MODIFY `id_opinion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `informacion_restaurante`
--
ALTER TABLE `informacion_restaurante`
  ADD CONSTRAINT `informacion_restaurante_ibfk_1` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id_menu`);

--
-- Filtros para la tabla `item_reserva`
--
ALTER TABLE `item_reserva`
  ADD CONSTRAINT `item_reserva_ibfk_1` FOREIGN KEY (`id_reserva_item_reserva`) REFERENCES `reservas` (`id_reserva`);

--
-- Filtros para la tabla `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`id_categoria_menu`) REFERENCES `categorias_menu` (`id_categoria`);

--
-- Filtros para la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD CONSTRAINT `notificaciones_ibfk_1` FOREIGN KEY (`id_usuario_notificacion`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `opiniones`
--
ALTER TABLE `opiniones`
  ADD CONSTRAINT `opiniones_ibfk_1` FOREIGN KEY (`id_usuario_opinion`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `opiniones_ibfk_2` FOREIGN KEY (`id_restaurante_opinion`) REFERENCES `restaurante` (`id_restaurante`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`id_usuario_reserva`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`id_mesa_reserva`) REFERENCES `mesas` (`id_mesa`);

--
-- Filtros para la tabla `restaurante`
--
ALTER TABLE `restaurante`
  ADD CONSTRAINT `restaurante_ibfk_1` FOREIGN KEY (`id_mesa_restaurante`) REFERENCES `mesas` (`id_mesa`),
  ADD CONSTRAINT `restaurante_ibfk_2` FOREIGN KEY (`id_notificacion_restaurante`) REFERENCES `notificaciones` (`id_notificacion`),
  ADD CONSTRAINT `restaurante_ibfk_3` FOREIGN KEY (`id_informacion_restaurante`) REFERENCES `informacion_restaurante` (`id_informacion_restaurante`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol_usuario`) REFERENCES `roles` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

