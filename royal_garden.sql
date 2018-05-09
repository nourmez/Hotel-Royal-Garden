-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 09 mai 2018 à 13:52
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
-- Base de données :  `royal garden`
--

-- --------------------------------------------------------

--
-- Structure de la table `agence voyage`
--

DROP TABLE IF EXISTS `agence voyage`;
CREATE TABLE IF NOT EXISTS `agence voyage` (
  `Id_agence` int(11) NOT NULL AUTO_INCREMENT,
  `nom_agence` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre_client_agence` int(11) NOT NULL,
  `Id_employe` int(11) NOT NULL,
  PRIMARY KEY (`Id_agence`),
  KEY `Id_employe` (`Id_employe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `chambre`
--

DROP TABLE IF EXISTS `chambre`;
CREATE TABLE IF NOT EXISTS `chambre` (
  `Id_chambre` int(11) NOT NULL AUTO_INCREMENT,
  `Type_chambre` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nombre_lit_chambre` int(11) NOT NULL,
  `Prix_chambre` float NOT NULL,
  `Id_reservation` int(11) NOT NULL,
  PRIMARY KEY (`Id_chambre`),
  KEY `Id_reservation` (`Id_reservation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `Id_client` int(11) NOT NULL AUTO_INCREMENT,
  `nom_client` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom_client` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_agence` int(11) NOT NULL,
  PRIMARY KEY (`Id_client`),
  KEY `Id_agence` (`Id_agence`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `desaire`
--

DROP TABLE IF EXISTS `desaire`;
CREATE TABLE IF NOT EXISTS `desaire` (
  `Id_Desaire` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_Desaire` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_Entree` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_Desaire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `droit d'acces`
--

DROP TABLE IF EXISTS `droit d'acces`;
CREATE TABLE IF NOT EXISTS `droit d'acces` (
  `Id_droit` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_droit` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_pole` int(11) NOT NULL,
  PRIMARY KEY (`Id_droit`),
  KEY `Id_pole` (`Id_pole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

DROP TABLE IF EXISTS `employe`;
CREATE TABLE IF NOT EXISTS `employe` (
  `Id_employe` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_employe` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prenom_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Adresse_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date_empoche` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Poste_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Login_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Mdp_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_droit` int(11) NOT NULL,
  `Id_pole` int(11) NOT NULL,
  PRIMARY KEY (`Id_employe`),
  KEY `Id_droit` (`Id_droit`),
  KEY `Id_pole` (`Id_pole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `entree`
--

DROP TABLE IF EXISTS `entree`;
CREATE TABLE IF NOT EXISTS `entree` (
  `Id_Entree` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_Entree` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_Entree` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_Entree`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `Id_menu` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_menu` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_PD` int(11) DEFAULT NULL,
  `Id_plat` int(11) DEFAULT NULL,
  `Id_Entree` int(11) DEFAULT NULL,
  `Id_Desaire` int(11) DEFAULT NULL,
  `prix` float NOT NULL,
  PRIMARY KEY (`Id_menu`),
  KEY `Id_Entree` (`Id_Entree`),
  KEY `Id_plat` (`Id_plat`),
  KEY `service divers_ibfk_3` (`Id_PD`),
  KEY `service divers_ibfk_4` (`Id_Desaire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `note hotel`
--

DROP TABLE IF EXISTS `note hotel`;
CREATE TABLE IF NOT EXISTS `note hotel` (
  `Id_note` int(11) NOT NULL,
  `Note_spa` int(11) NOT NULL,
  `Note_resto` int(11) NOT NULL,
  `Note_reception` int(11) NOT NULL,
  `Date_note` int(11) NOT NULL,
  `Id_client` int(11) NOT NULL,
  PRIMARY KEY (`Id_note`),
  KEY `Id_client` (`Id_client`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `panier moyen`
--

DROP TABLE IF EXISTS `panier moyen`;
CREATE TABLE IF NOT EXISTS `panier moyen` (
  `Id_panier` int(11) NOT NULL AUTO_INCREMENT,
  `Jour_panier` date NOT NULL,
  `total__panier` float NOT NULL,
  `Id_employe` int(11) NOT NULL,
  PRIMARY KEY (`Id_panier`),
  KEY `Id_employe` (`Id_employe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `petit dej`
--

DROP TABLE IF EXISTS `petit dej`;
CREATE TABLE IF NOT EXISTS `petit dej` (
  `Id_PD` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_PD` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_PD` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_PD`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `plat`
--

DROP TABLE IF EXISTS `plat`;
CREATE TABLE IF NOT EXISTS `plat` (
  `Id_plat` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_plat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_plat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_plat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pole`
--

DROP TABLE IF EXISTS `pole`;
CREATE TABLE IF NOT EXISTS `pole` (
  `Id_pole` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_pole` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_pole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
CREATE TABLE IF NOT EXISTS `rapport` (
  `Id_rapport` int(11) NOT NULL AUTO_INCREMENT,
  `Type` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_pole` int(11) NOT NULL,
  `Id_employe` int(11) NOT NULL,
  PRIMARY KEY (`Id_rapport`),
  KEY `Id_employe` (`Id_employe`),
  KEY `Id_pole` (`Id_pole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `Id_reservation` int(11) NOT NULL AUTO_INCREMENT,
  `Type_resarvation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prix_reservation` float NOT NULL,
  `Annulation_reservation` tinyint(1) NOT NULL,
  `Date_debut` date NOT NULL,
  `Date_fin` date NOT NULL,
  `Id_client` int(11) NOT NULL,
  `Id_pole` int(11) NOT NULL,
  `Id_employe` int(11) NOT NULL,
  PRIMARY KEY (`Id_reservation`),
  KEY `Id_employe` (`Id_employe`),
  KEY `Id_pole` (`Id_pole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE IF NOT EXISTS `restaurant` (
  `Id_resto` int(11) NOT NULL AUTO_INCREMENT,
  `Id_menu` int(11) NOT NULL,
  `Jour` date NOT NULL,
  `nbr_table` int(11) NOT NULL,
  `nbr_couver` int(11) NOT NULL,
  `Id_reservation` int(11) NOT NULL,
  PRIMARY KEY (`Id_resto`),
  KEY `Id_menu` (`Id_menu`),
  KEY `Id_reservation` (`Id_reservation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `service divers`
--

DROP TABLE IF EXISTS `service divers`;
CREATE TABLE IF NOT EXISTS `service divers` (
  `Id_service` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_service` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date_service` date NOT NULL,
  `Type_service` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_client` int(11) NOT NULL,
  `Id_employe` int(11) NOT NULL,
  PRIMARY KEY (`Id_service`),
  KEY `Id_employe` (`Id_employe`),
  KEY `service divers_ibfk_2` (`Id_client`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `Id_stock` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_stock` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Quantité_stock` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_employe` int(11) NOT NULL,
  `Id_pole` int(11) NOT NULL,
  PRIMARY KEY (`Id_stock`),
  KEY `Id_employe` (`Id_employe`),
  KEY `Id_pole` (`Id_pole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `agence voyage`
--
ALTER TABLE `agence voyage`
  ADD CONSTRAINT `agence voyage_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `chambre`
--
ALTER TABLE `chambre`
  ADD CONSTRAINT `chambre_ibfk_1` FOREIGN KEY (`Id_reservation`) REFERENCES `reservation` (`Id_reservation`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `client_ibfk_1` FOREIGN KEY (`Id_agence`) REFERENCES `agence voyage` (`Id_agence`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `droit d'acces`
--
ALTER TABLE `droit d'acces`
  ADD CONSTRAINT `droit d'acces_ibfk_1` FOREIGN KEY (`Id_pole`) REFERENCES `pole` (`Id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `employe`
--
ALTER TABLE `employe`
  ADD CONSTRAINT `employe_ibfk_1` FOREIGN KEY (`Id_droit`) REFERENCES `droit d'acces` (`Id_droit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employe_ibfk_2` FOREIGN KEY (`Id_pole`) REFERENCES `pole` (`Id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`Id_Entree`) REFERENCES `entree` (`Id_Entree`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `menu_ibfk_2` FOREIGN KEY (`Id_plat`) REFERENCES `plat` (`Id_plat`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service divers_ibfk_3` FOREIGN KEY (`Id_PD`) REFERENCES `petit dej` (`Id_PD`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service divers_ibfk_4` FOREIGN KEY (`Id_Desaire`) REFERENCES `desaire` (`Id_Desaire`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `note hotel`
--
ALTER TABLE `note hotel`
  ADD CONSTRAINT `note hotel_ibfk_1` FOREIGN KEY (`Id_client`) REFERENCES `client` (`Id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `panier moyen`
--
ALTER TABLE `panier moyen`
  ADD CONSTRAINT `panier moyen_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD CONSTRAINT `rapport_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rapport_ibfk_2` FOREIGN KEY (`Id_pole`) REFERENCES `pole` (`Id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`Id_pole`) REFERENCES `pole` (`Id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`Id_menu`) REFERENCES `menu` (`Id_menu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `restaurant_ibfk_2` FOREIGN KEY (`Id_reservation`) REFERENCES `reservation` (`Id_reservation`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `service divers`
--
ALTER TABLE `service divers`
  ADD CONSTRAINT `service divers_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service divers_ibfk_2` FOREIGN KEY (`Id_client`) REFERENCES `client` (`Id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`Id_pole`) REFERENCES `pole` (`Id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
