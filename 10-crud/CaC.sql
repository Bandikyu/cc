-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 11-12-2022 a las 15:51:14
-- Versión del servidor: 5.7.40
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `CaC`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'categoria 1'),
(2, 'categoria 2'),
(3, 'categoria promo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `titulo` varchar(155) NOT NULL,
  `contenido` varchar(155) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `titulo`, `contenido`, `createdAt`, `updatedAt`) VALUES
(1, 'bueno', '', '2022-12-11 00:38:04', '2022-12-11 00:38:04'),
(2, 'Se envia sin problemas', '', '2022-12-11 00:38:22', '2022-12-11 00:38:22'),
(3, 'Probamos con mas de un campo', '', '2022-12-11 00:42:13', '2022-12-11 00:42:13'),
(4, 'un titulo', 'algo de contenido', '2022-12-11 00:51:20', '2022-12-11 00:51:20'),
(5, 'un titulo', 'algo de contenido', '2022-12-11 02:15:32', '2022-12-11 02:15:32'),
(6, 'un titulo', 'algo de contenido', '2022-12-11 02:15:36', '2022-12-11 02:15:36'),
(7, 'adasd', 'adadad', '2022-12-11 02:16:51', '2022-12-11 02:16:51'),
(8, 'asda', 'as123123', '2022-12-11 02:19:52', '2022-12-11 02:19:52'),
(9, 'un titulo', 'asdada', '2022-12-11 02:21:39', '2022-12-11 02:21:39'),
(10, 'asda', 'asdad', '2022-12-11 02:22:15', '2022-12-11 02:22:15'),
(11, 'un titulo', 'asdada', '2022-12-11 02:25:32', '2022-12-11 02:25:32'),
(12, 'bueno', 'adasda', '2022-12-11 02:27:32', '2022-12-11 02:27:32'),
(13, 'Se envia sin problemas', '123123123', '2022-12-11 02:31:25', '2022-12-11 02:31:25'),
(14, 'bueno', 'Nuevo', '2022-12-11 15:50:01', '2022-12-11 15:50:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 NOT NULL,
  `promo` tinyint(1) NOT NULL DEFAULT '0',
  `categoria_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `promo`, `categoria_id`) VALUES
(1, 'cosa1', 'una descripcion', 0, 1),
(2, 'cosa 2', 'otra desc', 1, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
