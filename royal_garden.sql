-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 22 juin 2018 à 13:00
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `royal_garden`
--

-- --------------------------------------------------------

--
-- Structure de la table `agencevoyage`
--

DROP TABLE IF EXISTS `agencevoyage`;
CREATE TABLE IF NOT EXISTS `agencevoyage` (
  `id_agence` int(11) NOT NULL AUTO_INCREMENT,
  `nomAgence` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `responsableAgence` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mailAgence` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nbClientAgence` int(11) NOT NULL,
  `telephoneAgence` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_employe` int(11) NOT NULL,
  PRIMARY KEY (`id_agence`),
  KEY `id_employe` (`id_employe`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `agencevoyage`
--

INSERT INTO `agencevoyage` (`id_agence`, `nomAgence`, `responsableAgence`, `mailAgence`, `nbClientAgence`, `telephoneAgence`, `id_employe`) VALUES
(1, 'ag', 'agrespon', 'af@ag.com', 5, '0123456789', 2),
(2, 'ag2', 'agrespon2', 'af2@ag.com', 6, '0123456789', 2),
(3, 'ag3', 'agrespon3', 'af3@ag.com', 7, '0123456789', 2),
(4, 'ag4', 'agrespon4', 'af4@ag.com\r\n', 8, '0123456789', 2),
(5, 'ag5', 'agrespon5', 'af5@ag.com', 7, '0123456789', 2),
(6, 'ag6', 'agrespon6', 'af6@ag.com\r\n', 9, '0123456789', 2);

-- --------------------------------------------------------

--
-- Structure de la table `chambre`
--

DROP TABLE IF EXISTS `chambre`;
CREATE TABLE IF NOT EXISTS `chambre` (
  `id_chambre` int(11) NOT NULL AUTO_INCREMENT,
  `typeChambre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nbLit` int(1) NOT NULL,
  `prixChambre` float NOT NULL,
  `id_reservation` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_chambre`),
  KEY `id_reservation` (`id_reservation`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `chambre`
--

INSERT INTO `chambre` (`id_chambre`, `typeChambre`, `nbLit`, `prixChambre`, `id_reservation`) VALUES
(1, 'Versailles', 100, 140, 2),
(2, 'Versailles', 101, 140, NULL),
(3, 'Versailles', 102, 140, NULL),
(4, 'Versailles', 103, 140, NULL),
(5, 'Versailles', 104, 140, NULL),
(6, 'Versailles', 105, 140, NULL),
(7, 'Versailles', 106, 140, NULL),
(8, 'Versailles', 107, 140, NULL),
(9, 'Versailles', 108, 140, NULL),
(10, 'Versailles', 109, 140, NULL),
(11, 'Versailles', 110, 140, NULL),
(12, 'Versailles', 111, 140, NULL),
(13, 'Versailles', 112, 140, NULL),
(14, 'Versailles', 113, 140, NULL),
(15, 'Versailles', 114, 140, NULL),
(16, 'Versailles', 115, 140, NULL),
(17, 'Versailles', 116, 140, NULL),
(18, 'Versailles', 117, 140, NULL),
(19, 'Versailles', 118, 140, NULL),
(20, 'Versailles', 119, 140, NULL),
(21, 'Suites Babylone', 200, 200, 5),
(22, 'Suites Babylone\r\n', 201, 200, NULL),
(23, 'Suites Babylone\r\n', 202, 200, NULL),
(24, 'Suites Babylone\r\n', 203, 200, NULL),
(25, 'Suites Babylone\r\n', 204, 200, NULL),
(26, 'Suites Babylone\r\n', 205, 200, NULL),
(27, 'Suites Babylone\r\n', 206, 200, NULL),
(28, 'Suites Babylone\r\n', 207, 200, NULL),
(29, 'Suites Babylone\r\n', 208, 200, NULL),
(30, 'Suites Babylone\r\n', 209, 200, NULL),
(31, 'Suites Babylone\r\n', 210, 200, NULL),
(32, 'Suites Babylone\r\n', 211, 200, NULL),
(33, 'Suites Babylone\r\n', 212, 200, NULL),
(34, 'Suites Babylone\r\n', 213, 200, NULL),
(35, 'Suites Babylone\r\n', 214, 200, NULL),
(36, 'Suites Babylone\r\n', 215, 200, NULL),
(37, 'Suites Babylone\r\n', 216, 200, NULL),
(38, 'Suites Babylone\r\n', 217, 200, NULL),
(39, 'Suites Babylone\r\n', 218, 200, NULL),
(40, 'Suites Babylone\r\n', 219, 200, NULL),
(41, 'Suites Eden', 300, 350, 8),
(42, 'Suites Eden', 301, 350, NULL),
(43, 'Suites Eden', 302, 350, NULL),
(44, 'Suites Eden', 303, 350, NULL),
(45, 'Suites Eden', 304, 350, NULL),
(46, 'Suites Eden', 305, 350, NULL),
(47, 'Suites Eden', 306, 350, NULL),
(48, 'Suites Eden', 307, 350, NULL),
(49, 'Suites Eden', 308, 350, NULL),
(50, 'Suites Eden', 309, 350, NULL),
(51, 'Suites Eden', 310, 350, NULL),
(52, 'Suites Eden', 311, 350, NULL),
(53, 'Suites Eden', 312, 350, NULL),
(54, 'Suites Eden', 313, 350, NULL),
(55, 'Suites Eden', 314, 350, NULL),
(56, 'Suites Eden', 315, 350, NULL),
(57, 'Suites Eden', 316, 350, NULL),
(58, 'Suites Eden', 317, 350, NULL),
(59, 'Suites Eden', 318, 350, NULL),
(60, 'Suites Eden', 319, 350, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `nomClient` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenomClient` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_agence` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_client`),
  KEY `Id_agence` (`id_agence`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `nomClient`, `prenomClient`, `id_agence`) VALUES
(1, 'DEMERS', 'Joseph', NULL),
(2, 'LACROIX', 'Satordi', NULL),
(3, 'CLICHE', 'Noelle', NULL),
(4, 'MAROIS', 'Adèle', NULL),
(5, 'NEUFVILLEA', 'Mallory', NULL),
(6, 'BEAUFORT', 'Louis', NULL),
(7, 'DEMERS ', 'Satordi', NULL),
(8, 'DEMERS ', 'Noelle', NULL),
(9, 'DEMERS ', 'Adèle', NULL),
(10, 'DEMERS ', 'Mallory', NULL),
(11, 'DEMERS ', 'Louis', NULL),
(12, 'LACROIX', 'Joseph', NULL),
(13, 'LACROIX', 'Noelle', NULL),
(14, 'LACROIX', 'Adèle', NULL),
(15, 'LACROIX', 'Mallory', NULL),
(16, 'LACROIX', 'Louis', NULL),
(17, 'CLICHE', 'Joseph', NULL),
(18, 'CLICHE', 'Satordi', NULL),
(19, 'CLICHE', 'Adèle', NULL),
(20, 'CLICHE', 'Mallory', NULL),
(21, 'CLICHE', 'Louis', NULL),
(22, 'MAROIS', 'Joseph', NULL),
(23, 'MAROIS', 'Satordi', NULL),
(24, 'MAROIS', 'Noelle', NULL),
(25, 'MAROIS', 'Mallory', NULL),
(26, 'MAROIS', 'Louis', NULL),
(27, 'NEUFVILLEA', 'Joseph', NULL),
(28, 'NEUFVILLEA', 'Satordi', NULL),
(29, 'NEUFVILLEA', 'Noelle', NULL),
(30, 'NEUFVILLEA', 'Adèle', NULL),
(31, 'NEUFVILLEA', 'Louis', NULL),
(32, 'BEAUFORT', 'Joseph', NULL),
(33, 'BEAUFORT', 'Satordi', NULL),
(34, 'BEAUFORT', 'Noelle', NULL),
(35, 'BEAUFORT', 'Adèle', NULL),
(36, 'BEAUFORT', 'Mallory', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `dessert`
--

DROP TABLE IF EXISTS `dessert`;
CREATE TABLE IF NOT EXISTS `dessert` (
  `id_dessert` int(11) NOT NULL AUTO_INCREMENT,
  `nomDessert` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredient_dessert` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_dessert`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `dessert`
--

INSERT INTO `dessert` (`id_dessert`, `nomDessert`, `ingredient_dessert`) VALUES
(1, 'Fromage affiné', ''),
(2, 'Mille-feuille croquant, aux deux vanilles', ''),
(3, 'Bonbon caramélisé à la noisette du Piémont', ''),
(4, 'Baba', 'Ananas rôti au gingembre, crème glacée au rhum brun'),
(5, 'Pomme cuite façon satin', 'caramel au beurre salé'),
(6, 'Chocolat glacé à la critronnelle', 'croustillant à la fleur de cacao'),
(7, 'Sablé aux fraises', 'confiture acidulée au vinaigre de Barolo');

-- --------------------------------------------------------

--
-- Structure de la table `droitacces`
--

DROP TABLE IF EXISTS `droitacces`;
CREATE TABLE IF NOT EXISTS `droitacces` (
  `id_droit` int(11) NOT NULL AUTO_INCREMENT,
  `nomDroit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_pole` int(11) NOT NULL,
  PRIMARY KEY (`id_droit`),
  KEY `Id_pole` (`id_pole`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `droitacces`
--

INSERT INTO `droitacces` (`id_droit`, `nomDroit`, `id_pole`) VALUES
(1, 'Chef', 1),
(2, 'Dev', 1);

-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

DROP TABLE IF EXISTS `employe`;
CREATE TABLE IF NOT EXISTS `employe` (
  `id_employe` int(11) NOT NULL AUTO_INCREMENT,
  `nomEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenomEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresseEmploye` varchar(2555) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateEmbauche` date NOT NULL,
  `posteEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `loginEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdpEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_droit` int(11) NOT NULL,
  `id_pole` int(11) NOT NULL,
  PRIMARY KEY (`id_employe`),
  KEY `Id_droit` (`id_droit`),
  KEY `Id_pole` (`id_pole`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `employe`
--

INSERT INTO `employe` (`id_employe`, `nomEmploye`, `prenomEmploye`, `adresseEmploye`, `dateEmbauche`, `posteEmploye`, `loginEmploye`, `mdpEmploye`, `id_droit`, `id_pole`) VALUES
(1, 'PINTO', 'Dani', '30 rue de Turbigo, 75003 Paris', '2018-06-18', 'Chef de restauration', 'dpinto', 'dani', 1, 1),
(2, 'MEZRANI', 'Nourhene', '30 rue de Turbigo, 75003 Paris', '2018-06-18', 'Chef d\'hebergement', 'nmezrani', 'nourhene', 2, 2),
(3, 'HANIQUE', 'Killian', '30 rue de Turbigo, 75003 Paris', '2018-06-18', 'Chef de Réception', 'khanique', 'killian', 1, 3),
(4, 'CUSSAC', 'Benoît', '30 rue de Turbigo, 75003 Paris', '2018-06-19', 'Directeur Générale', 'bcussac', 'benoit', 1, 4),
(5, 'BOUKEROUI', 'Elias', '30 rue de Turbigo, 75003 Paris', '2018-06-19', 'Employe', 'eboukeroui', 'elias', 1, 8);

-- --------------------------------------------------------

--
-- Structure de la table `entree`
--

DROP TABLE IF EXISTS `entree`;
CREATE TABLE IF NOT EXISTS `entree` (
  `id_entree` int(11) NOT NULL AUTO_INCREMENT,
  `nomEntree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_Entree` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_entree`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `entree`
--

INSERT INTO `entree` (`id_entree`, `nomEntree`, `Ingredient_Entree`) VALUES
(1, 'Rouget de Méditérranée', 'Mariné au safran bio, gelée de poisson de roche, Girolles, amandes'),
(2, 'Raviole de langoustine et homard', 'sauce à l\'oseille'),
(3, 'Les Bouchées de la Reine', ''),
(4, 'Pressé de foie gras et anguille fumée', 'Navet fane, betterave, Gelée de cidre'),
(5, 'Boeuf de Salers en fin tartare', 'Caviar d\'Aquitaine Prunier, Concombre mariné, aneth'),
(6, 'Ris de veau rôti', 'Fenouil, carotte confite, sauce au vin jaune');

-- --------------------------------------------------------

--
-- Structure de la table `evaluation`
--

DROP TABLE IF EXISTS `evaluation`;
CREATE TABLE IF NOT EXISTS `evaluation` (
  `id_evaluation` int(90) NOT NULL AUTO_INCREMENT,
  `noteRestauration` int(1) DEFAULT NULL,
  `noteHebergement` int(1) DEFAULT NULL,
  `noteReception` int(1) DEFAULT NULL,
  `noteGourvernanteGenerale` int(1) DEFAULT NULL,
  `noteSpaManager` int(1) DEFAULT NULL,
  `noteChefMaintenance` int(1) DEFAULT NULL,
  `id_client` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_evaluation`),
  KEY `id_client` (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `evaluation`
--

INSERT INTO `evaluation` (`id_evaluation`, `noteRestauration`, `noteHebergement`, `noteReception`, `noteGourvernanteGenerale`, `noteSpaManager`, `noteChefMaintenance`, `id_client`) VALUES
(1, 2, 2, 5, 4, 2, 5, 1),
(2, 2, 2, 4, 5, 3, 5, 2),
(3, 3, 4, 2, 2, 4, 2, 3),
(4, 5, 3, 4, 1, 2, 3, 4),
(5, 2, 3, 4, 5, 1, 2, 5),
(6, 3, 1, 2, 4, 3, 4, 6),
(7, 4, 3, 1, 2, 5, 4, 7),
(8, 3, 4, 2, 1, 4, 5, 8),
(9, 2, 5, 3, 2, 1, 4, 9),
(10, 5, 1, 4, 3, 2, 5, 10),
(11, 1, 2, 5, 4, 3, 5, 11),
(12, 2, 3, 1, 5, 4, 3, 12),
(13, 3, 4, 2, 4, 1, 4, 13),
(14, 4, 5, 3, 2, 1, 3, 14),
(15, 5, 1, 4, 3, 2, 4, 15),
(16, 1, 2, 5, 4, 3, 4, 16),
(17, 2, 3, 1, 5, 4, 3, 17),
(18, 3, 4, 2, 1, 5, 2, 18),
(19, 4, 5, 3, 2, 1, 2, 19),
(20, 5, 1, 4, 3, 5, 2, 20),
(21, 1, 2, 5, 4, 3, 5, 21),
(22, 2, 3, 1, 5, 4, 4, 22),
(23, 3, 4, 2, 1, 5, 4, 23),
(24, 4, 5, 3, 2, 5, 1, 24),
(25, 5, 1, 4, 3, 3, 2, 25);

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id_menu` int(11) NOT NULL AUTO_INCREMENT,
  `nomMenu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_PD` int(11) DEFAULT NULL,
  `id_plat` int(11) DEFAULT NULL,
  `id_entree` int(11) DEFAULT NULL,
  `id_dessert` int(11) DEFAULT NULL,
  `prixMenu` float NOT NULL,
  PRIMARY KEY (`id_menu`),
  KEY `Id_Entree` (`id_entree`),
  KEY `Id_plat` (`id_plat`),
  KEY `service divers_ibfk_3` (`id_PD`),
  KEY `service divers_ibfk_4` (`id_dessert`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `menu`
--

INSERT INTO `menu` (`id_menu`, `nomMenu`, `id_PD`, `id_plat`, `id_entree`, `id_dessert`, `prixMenu`) VALUES
(1, 'Initial Menu', 1, 1, 1, 1, 25),
(2, 'Elias', 1, 2, 2, 2, 55),
(3, 'Killian', 1, 3, 3, 3, 69),
(4, 'menu4', 1, 4, 4, 4, 66),
(5, 'menu 5', 1, 5, 5, 5, 25),
(6, 'menu6', 1, 6, 6, 6, 46),
(7, 'menu 7', 1, 6, 6, 7, 30);

-- --------------------------------------------------------

--
-- Structure de la table `paniermoyen`
--

DROP TABLE IF EXISTS `paniermoyen`;
CREATE TABLE IF NOT EXISTS `paniermoyen` (
  `id_panier` int(11) NOT NULL AUTO_INCREMENT,
  `datePanier` date NOT NULL,
  `totalPanier` float NOT NULL,
  `id_employe` int(11) NOT NULL,
  PRIMARY KEY (`id_panier`),
  KEY `Id_employe` (`id_employe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `petitdejeuner`
--

DROP TABLE IF EXISTS `petitdejeuner`;
CREATE TABLE IF NOT EXISTS `petitdejeuner` (
  `id_PD` int(11) NOT NULL AUTO_INCREMENT,
  `nomPD` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_PD` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_PD`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `petitdejeuner`
--

INSERT INTO `petitdejeuner` (`id_PD`, `nomPD`, `Ingredient_PD`) VALUES
(1, 'Chocolat Chaud', '');

-- --------------------------------------------------------

--
-- Structure de la table `plat`
--

DROP TABLE IF EXISTS `plat`;
CREATE TABLE IF NOT EXISTS `plat` (
  `id_plat` int(11) NOT NULL AUTO_INCREMENT,
  `nomPlat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_plat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_plat`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `plat`
--

INSERT INTO `plat` (`id_plat`, `nomPlat`, `Ingredient_plat`) VALUES
(1, 'Homard casier de la côte d\'Opale', 'émulsion d\'une bisque crémeuse, vinaigrette au corail frais'),
(2, 'Turbot sauvage', 'mousserons, ail des ours, bergamote'),
(3, 'Saint-Pierre de pêche côtière', 'blanc de blette, poulpe de roche, Supions, cresson de fontaine'),
(4, 'Côtes et selle d\'agneau de lait de Lozère', 'carottes de Créances, Jus d\'un navarin parfumé'),
(5, 'Pigeonneau de Vendée rôti', 'cerises et navets glacés, Condiment oseille, sauce au Porto'),
(6, 'Filet de veau fermier cuit en cocotte', 'céleri rave fondant, girolles, petit épeautre de Haute-Provence, jus de veau');

-- --------------------------------------------------------

--
-- Structure de la table `pole`
--

DROP TABLE IF EXISTS `pole`;
CREATE TABLE IF NOT EXISTS `pole` (
  `id_pole` int(11) NOT NULL AUTO_INCREMENT,
  `nomPole` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_pole`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `pole`
--

INSERT INTO `pole` (`id_pole`, `nomPole`) VALUES
(1, 'Restauration'),
(2, 'Hébergement'),
(3, 'Réception'),
(4, 'Directeur'),
(5, 'Gouvernante Générale'),
(6, 'SPA Manager'),
(7, 'Chef de maintenance'),
(8, 'Employe');

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
CREATE TABLE IF NOT EXISTS `rapport` (
  `id_rapport` int(11) NOT NULL AUTO_INCREMENT,
  `typeRapport` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `messageRapport` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `etatRapport` tinyint(1) NOT NULL DEFAULT '0',
  `id_pole` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL,
  PRIMARY KEY (`id_rapport`),
  KEY `Id_employe` (`id_employe`),
  KEY `Id_pole` (`id_pole`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `rapport`
--

INSERT INTO `rapport` (`id_rapport`, `typeRapport`, `messageRapport`, `etatRapport`, `id_pole`, `id_employe`) VALUES
(1, 'Test', 'Axel', 0, 1, 1),
(2, 'Test', 'Killian', 0, 2, 1),
(3, 'Test', 'Dani', 0, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id_reservation` int(11) NOT NULL AUTO_INCREMENT,
  `typeResarvation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prixReservation` float NOT NULL,
  `etatReservation` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateDebut` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateFin` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_pole` int(11) NOT NULL,
  `id_employe` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_reservation`),
  KEY `Id_employe` (`id_employe`),
  KEY `Id_pole` (`id_pole`),
  KEY `id_client` (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id_reservation`, `typeResarvation`, `prixReservation`, `etatReservation`, `dateDebut`, `dateFin`, `id_client`, `id_pole`, `id_employe`) VALUES
(1, 'Restaurant', 120, '1', '2018-05-30', '2018-05-21', 1, 1, 1),
(2, 'Hebergement', 150, '1', '2018-06-21', '2018-06-22', 1, 2, 1),
(3, 'Spa', 124, '1', '2018-05-21', '2018-05-22', 1, 6, 1),
(4, 'Restaurant', 120, '0', '2018-05-21', '2018-05-22', 4, 1, 1),
(5, 'Hebergement', 200, '0', '2018-05-21', '2018-05-22', 4, 2, 1),
(6, 'Spa', 120, '0', '2018-05-21', '2018-05-22', 4, 6, 1),
(7, 'Restaurant', 120, '0', '2018-05-29', '2018-05-22', 5, 1, 1),
(8, 'Hebergement', 170, '0', '2018-05-21', '2018-05-22', 5, 2, 1),
(9, 'Spa', 120, '0', '2018-05-21', '2018-05-22', 5, 6, 1),
(10, 'Hebergement', 140, '0', '2018-06-22', '2018-07-30', 7, 2, 2),
(11, 'Spa', 120, '0', '2018-06-22', '2018-07-30', 7, 6, 3),
(12, 'Hebergement', 200, '0', '2018-06-22', '2018-07-30', 8, 2, 2),
(13, 'Restaurant', 140, '0', '2018-06-28', '2018-07-30', 8, 1, 1),
(14, 'Hebergement', 350, '0', '2018-06-22', '2018-07-30', 9, 2, 2),
(15, 'Hebergement', 350, '0', '2018-06-22', '2018-07-30', 10, 2, 2),
(16, 'Spa', 200, '0', '2018-06-22', '2018-07-30', 10, 6, 2),
(17, 'Hebergement', 200, '0', '2018-06-22', '2018-07-30', 16, 2, 2),
(18, 'Restaurant', 160, '0', '2018-06-25', '2018-07-30', 16, 1, 1),
(19, 'Spa', 140, '0', '2018-06-22', '2018-07-30', 16, 6, 2),
(20, 'Hebergement', 350, '0', '2018-06-22', '2018-07-30', 17, 2, 2),
(21, 'Spa', 300, '0', '2018-06-22', '2018-07-30', 17, 6, 2),
(22, 'Restaurant', 250, '0', '2018-06-26', '2018-07-30', 17, 1, 2),
(23, 'Hebergement', 200, '0', '2018-06-22', '2018-07-30', 25, 2, 2),
(24, 'Restaurant', 140, '0', '2018-06-27', '2018-07-30', 25, 1, 2),
(25, 'Spa', 100, '0', '2018-06-22', '2018-07-30', 25, 6, 2),
(26, 'Hebergement', 140, '0', '2018-06-22', '2018-07-30', 7, 2, 2),
(27, 'Hebergement', 140, '0', '2018-06-22', '2018-07-30', 7, 2, 2),
(28, 'Hebergement', 140, '0', '2018-06-22', '2018-07-30', 7, 2, 2),
(29, 'Hebergement', 140, '0', '2018-06-22', '2018-07-30', 7, 2, 2),
(30, 'Hebergement', 140, '0', '2018-06-22', '2018-07-30', 7, 2, 2),
(31, 'Hebergement', 140, '0', '2018-06-22', '2018-07-30', 7, 2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE IF NOT EXISTS `restaurant` (
  `id_restaurant` int(11) NOT NULL AUTO_INCREMENT,
  `id_menu` int(11) NOT NULL,
  `dateConceptionMenu` date NOT NULL,
  `nbTable` int(11) NOT NULL,
  `nbCouvert` int(11) NOT NULL,
  `id_reservation` int(11) NOT NULL,
  PRIMARY KEY (`id_restaurant`),
  KEY `Id_menu` (`id_menu`),
  KEY `Id_reservation` (`id_reservation`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `restaurant`
--

INSERT INTO `restaurant` (`id_restaurant`, `id_menu`, `dateConceptionMenu`, `nbTable`, `nbCouvert`, `id_reservation`) VALUES
(1, 4, '2018-06-25', 1, 6, 18),
(2, 2, '2018-06-18', 44, 4, 4),
(3, 3, '2018-06-18', 64, 2, 7),
(4, 6, '2018-06-26', 2, 8, 22),
(5, 7, '2018-06-27', 6, 12, 24),
(6, 6, '2018-06-28', 2, 8, 13),
(7, 7, '2018-06-29', 6, 12, 7),
(8, 4, '2018-06-30', 6, 13, 1);

-- --------------------------------------------------------

--
-- Structure de la table `servicedivers`
--

DROP TABLE IF EXISTS `servicedivers`;
CREATE TABLE IF NOT EXISTS `servicedivers` (
  `id_service` int(11) NOT NULL AUTO_INCREMENT,
  `dateService` date NOT NULL,
  `objetService` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `demanderService` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `etatDemande` tinyint(1) NOT NULL DEFAULT '0',
  `id_client` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL,
  PRIMARY KEY (`id_service`),
  UNIQUE KEY `id_service` (`id_service`),
  KEY `Id_employe` (`id_employe`),
  KEY `service divers_ibfk_2` (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `servicedivers`
--

INSERT INTO `servicedivers` (`id_service`, `dateService`, `objetService`, `demanderService`, `etatDemande`, `id_client`, `id_employe`) VALUES
(1, '2018-06-18', 'Lecteur carte', 'Le lecteur carte ne fonctionne plus.', 0, 5, 1),
(2, '2018-06-14', 'Eau froide', 'La douche ne fournit que de l\'eau froide. La douche ne fournit que de l\'eau froide. La douche ne fournit que de l\'eau froide. La douche ne fournit que de l\'eau froide. La douche ne fournit que de l\'eau froide. La douche ne fournit que de l\'eau froide. La douche ne fournit que de l\'eau froide. La douche ne fournit que de l\'eau froide. ', 1, 4, 2),
(3, '2018-06-18', 'Tahiti Douche', 'Le client désire un Tahiti Douche parfum Noix de Coco.', 2, 1, 1),
(4, '2018-06-18', 'Roses', 'Mise à disposition d\'un bouquet de roses à l\'arrivée.', 3, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `id_stock` int(11) NOT NULL AUTO_INCREMENT,
  `nomStock` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qteStock` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL,
  `id_pole` int(11) NOT NULL,
  PRIMARY KEY (`id_stock`),
  KEY `Id_employe` (`id_employe`),
  KEY `Id_pole` (`id_pole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `chambre`
--
ALTER TABLE `chambre`
  ADD CONSTRAINT `chambre_ibfk_1` FOREIGN KEY (`id_reservation`) REFERENCES `reservation` (`id_reservation`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Contraintes pour la table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `client_ibfk_1` FOREIGN KEY (`id_agence`) REFERENCES `agencevoyage` (`id_agence`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `droitacces`
--
ALTER TABLE `droitacces`
  ADD CONSTRAINT `droitacces_ibfk_1` FOREIGN KEY (`id_pole`) REFERENCES `pole` (`id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `employe`
--
ALTER TABLE `employe`
  ADD CONSTRAINT `employe_ibfk_1` FOREIGN KEY (`id_droit`) REFERENCES `droitacces` (`id_droit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employe_ibfk_2` FOREIGN KEY (`id_pole`) REFERENCES `pole` (`id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `evaluation`
--
ALTER TABLE `evaluation`
  ADD CONSTRAINT `evaluation_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`);

--
-- Contraintes pour la table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`id_entree`) REFERENCES `entree` (`id_entree`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `menu_ibfk_2` FOREIGN KEY (`id_plat`) REFERENCES `plat` (`id_plat`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service divers_ibfk_3` FOREIGN KEY (`id_PD`) REFERENCES `petitdejeuner` (`id_PD`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service divers_ibfk_4` FOREIGN KEY (`id_dessert`) REFERENCES `dessert` (`id_dessert`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `paniermoyen`
--
ALTER TABLE `paniermoyen`
  ADD CONSTRAINT `paniermoyen_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD CONSTRAINT `rapport_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rapport_ibfk_2` FOREIGN KEY (`id_pole`) REFERENCES `pole` (`id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`id_pole`) REFERENCES `pole` (`id_pole`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservation_ibfk_3` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id_menu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `restaurant_ibfk_2` FOREIGN KEY (`id_reservation`) REFERENCES `reservation` (`id_reservation`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `servicedivers`
--
ALTER TABLE `servicedivers`
  ADD CONSTRAINT `servicedivers_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `servicedivers_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`id_pole`) REFERENCES `pole` (`id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
