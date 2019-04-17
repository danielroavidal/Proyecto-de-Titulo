-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-04-2019 a las 20:15:01
-- Versión del servidor: 5.7.19
-- Versión de PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sab`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_alumno`
--

DROP TABLE IF EXISTS `tb_alumno`;
CREATE TABLE IF NOT EXISTS `tb_alumno` (
  `rut` int(10) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `correo` varchar(30) NOT NULL,
  PRIMARY KEY (`rut`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_categoria`
--

DROP TABLE IF EXISTS `tb_categoria`;
CREATE TABLE IF NOT EXISTS `tb_categoria` (
  `id_categoria` int(11) NOT NULL,
  `desc_categoria` varchar(30) NOT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `id_categoria` (`id_categoria`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_editorial`
--

DROP TABLE IF EXISTS `tb_editorial`;
CREATE TABLE IF NOT EXISTS `tb_editorial` (
  `id_editorial` int(11) NOT NULL,
  `desc_editorial` varchar(30) NOT NULL,
  PRIMARY KEY (`id_editorial`),
  UNIQUE KEY `id_editorial` (`id_editorial`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_editorial`
--

INSERT INTO `tb_editorial` (`id_editorial`, `desc_editorial`) VALUES
(1, 'Anaya Multimedia'),
(2, 'Thomson, 2004');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_idioma`
--

DROP TABLE IF EXISTS `tb_idioma`;
CREATE TABLE IF NOT EXISTS `tb_idioma` (
  `id_idioma` int(11) NOT NULL,
  `desc_idioma` varchar(30) NOT NULL,
  PRIMARY KEY (`id_idioma`),
  KEY `id_idioma` (`id_idioma`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_idioma`
--

INSERT INTO `tb_idioma` (`id_idioma`, `desc_idioma`) VALUES
(1, 'Español'),
(2, 'English');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_libro`
--

DROP TABLE IF EXISTS `tb_libro`;
CREATE TABLE IF NOT EXISTS `tb_libro` (
  `isbn` varchar(15) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `tema` varchar(200) NOT NULL,
  `editorial` int(4) NOT NULL,
  `idioma` int(4) NOT NULL,
  `edicion` int(4) NOT NULL,
  `cantidad` int(4) NOT NULL,
  PRIMARY KEY (`isbn`),
  UNIQUE KEY `isbn` (`isbn`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_libro`
--

INSERT INTO `tb_libro` (`isbn`, `autor`, `tema`, `editorial`, `idioma`, `edicion`, `cantidad`) VALUES
('9788441522022', 'DAVID FLANAGAN', 'JAVASCRIPT: LA GUIA DEFINITIVA', 1, 1, 2007, 1),
('9788441522021', 'DAVID FLANAGA', 'JAVASCRIPT: ', 1, 1, 2017, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_pedido`
--

DROP TABLE IF EXISTS `tb_pedido`;
CREATE TABLE IF NOT EXISTS `tb_pedido` (
  `id_pedido` int(5) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(15) NOT NULL,
  `rut` int(10) NOT NULL,
  `fecha_i` date NOT NULL,
  `fecha_t` date NOT NULL,
  `dias` int(11) NOT NULL,
  `cantidad` int(2) NOT NULL,
  `estado` int(1) NOT NULL,
  PRIMARY KEY (`id_pedido`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_pedido`
--

INSERT INTO `tb_pedido` (`id_pedido`, `isbn`, `rut`, `fecha_i`, `fecha_t`, `dias`, `cantidad`, `estado`) VALUES
(1, '9788441522022', 9577988, '2019-04-02', '2019-04-16', 9, 1, 1),
(5, '9788441522021', 9577988, '2019-04-15', '2019-04-18', 3, 1, 1),
(6, '9788441522021', 9577988, '2019-04-15', '2019-04-18', 3, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_qr`
--

DROP TABLE IF EXISTS `tb_qr`;
CREATE TABLE IF NOT EXISTS `tb_qr` (
  `isbn` varchar(15) NOT NULL,
  `codigo_qr` blob NOT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
