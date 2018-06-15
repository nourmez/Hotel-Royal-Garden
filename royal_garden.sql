-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 08 Juin 2018 à 12:15
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Structure de la table `agenceVoyage`
--

CREATE TABLE `agenceVoyage` (
  `id_agence` int(11) NOT NULL,
  `nomAgence` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `responsableAgence` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mailAgence` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nbClientAgence` int(11) NOT NULL,
  `telephoneAgence` varchar(11) NOT NULL,
  `id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `agenceVoyage`
--

INSERT INTO `agenceVoyage` (`id_agence`, `nomAgence`,`responsableAgence`,`mailAgence`, `nbClientAgence`,`telephoneAgence`,`id_employe`) VALUES
(1, 'ag', 'agr', 'af@ag.com', 5,'0123456789', 2),
(2, 'ag2','agr2', 'af2@ag.com', 6,'0123456789', 2);

-- --------------------------------------------------------

--
-- Structure de la table `chambre`
--

CREATE TABLE `chambre` (
  `id_chambre` int(11) NOT NULL,
  `typeChambre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nbLit` int(1) NOT NULL,
  `prixChambre` float NOT NULL,
  `id_reservation` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `chambre`
--

INSERT INTO `chambre` (`id_chambre`, `typeChambre`, `nbLit`, `prixChambre`, `id_reservation`) VALUES
(1, 'Normal', 22, 40, 1),
(2, 'Luxe', 122, 180, 2),
(3, 'Luxe', 2, 150, 3),
(4, 'Normal', 1, 200, 4);

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id_client` int(11) NOT NULL,
  `nomClient` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenomClient` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_agence` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`id_client`, `nomClient`, `prenomClient`, `id_agence`) VALUES
(1, 'DEMERS', 'Joseph', NULL),
(2, 'LACROIX', 'Satordi', NULL),
(3, 'CLICHE', 'Noelle', NULL),
(4, 'MAROIS', 'Adèle', NULL),
(5, 'NEUFVILLE', 'Mallory', NULL),
(6, 'BEAUFORT', 'Louis', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `dessert`
--

CREATE TABLE `dessert` (
  `id_dessert` int(11) NOT NULL,
  `nomDessert` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredient_dessert` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `dessert`
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
-- Structure de la table `droitAcces`
--

CREATE TABLE `droitAcces` (
  `id_droit` int(11) NOT NULL,
  `nomDroit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_pole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `droitAcces`
--

INSERT INTO `droitAcces` (`id_droit`, `nomDroit`, `id_pole`) VALUES
(1, 'Chef', 1),
(2, 'Dev', 1);

-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

CREATE TABLE `employe` (
  `id_employe` int(11) NOT NULL,
  `nomEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenomEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresseEmploye` varchar(2555) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateEmbauche` date NOT NULL,
  `posteEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `loginEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdpEmploye` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_droit` int(11) NOT NULL,
  `id_pole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `employe`
--

INSERT INTO `employe` (`id_employe`, `nomEmploye`, `prenomEmploye`, `adresseEmploye`, `dateEmbauche`, `posteEmploye`, `loginEmploye`, `mdpEmploye`, `id_droit`, `id_pole`) VALUES
(1, 'PINTO', 'Dani', '75000', '0000-00-00', 'Chef Dev', 'dpinto', 'dani', 1, 2),
(2, 'MEZRANI', 'Nourhene', '75000', '0000-00-00', 'Dev', 'nmezrani', 'nourhene', 2, 3);

-- --------------------------------------------------------

--
-- Structure de la table `entree`
--

CREATE TABLE `entree` (
  `id_entree` int(11) NOT NULL,
  `nomEntree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_Entree` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `entree`
--

INSERT INTO `entree` (`id_entree`, `nomEntree`, `Ingredient_Entree`) VALUES
(1, 'Rouget de Méditérranée', 'Mariné au safran bio, gelée de poisson de roche, Girolles, amandes'),
(2, 'Raviole de langoustine et homard', 'sauce à l''oseille'),
(3, 'Les Bouchées de la Reine', ''),
(4, 'Pressé de foie gras et anguille fumée', 'Navet fane, betterave, Gelée de cidre'),
(5, 'Boeuf de Salers en fin tartare', 'Caviar d''Aquitaine Prunier, Concombre mariné, aneth'),
(6, 'Ris de veau rôti', 'Fenouil, carotte confite, sauce au vin jaune');

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `nomMenu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_PD` int(11) DEFAULT NULL,
  `id_plat` int(11) DEFAULT NULL,
  `id_entree` int(11) DEFAULT NULL,
  `id_dessert` int(11) DEFAULT NULL,
  `prixMenu` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `menu`
--

INSERT INTO `menu` (`id_menu`, `nomMenu`, `id_PD`, `id_plat`, `id_entree`, `id_dessert`, `prixMenu`) VALUES
(1, 'Initial Menu', 1, 1, 1, 1, 25),
(2, 'Elias', 1, 1, 1, 1, 55),
(3, 'Killian', 1, 1, 1, 1, 69),
(4, 'DANI', 1, 1, 1, 1, 44);

-- --------------------------------------------------------

--
-- Structure de la table `notehotel`
--

CREATE TABLE `noteHotel` (
  `id_noteHotel` int(11) NOT NULL,
  `noteSpa` int(1) NOT NULL,
  `noteRestaurant` int(1) NOT NULL,
  `noteReception` int(1) NOT NULL,
  `dateNote` date NOT NULL,
  `id_client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `panierMoyen`
--

CREATE TABLE `panierMoyen` (
  `id_panier` int(11) NOT NULL,
  `datePanier` date NOT NULL,
  `totalPanier` float NOT NULL,
  `id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `petitDejeuner`
--

CREATE TABLE `petitDejeuner` (
  `id_PD` int(11) NOT NULL,
  `nomPD` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_PD` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `petitDejeuner`
--

INSERT INTO `petitDejeuner` (`id_PD`, `nomPD`, `Ingredient_PD`) VALUES
(1, 'Chocolat Chaud', '');

-- --------------------------------------------------------

--
-- Structure de la table `plat`
--

CREATE TABLE `plat` (
  `id_plat` int(11) NOT NULL,
  `nomPlat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_plat` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `plat`
--

INSERT INTO `plat` (`id_plat`, `nomPlat`, `Ingredient_plat`) VALUES
(1, 'Homard casier de la côte d''Opale', 'émulsion d''une bisque crémeuse, vinaigrette au corail frais'),
(2, 'Turbot sauvage', 'mousserons, ail des ours, bergamote'),
(3, 'Saint-Pierre de pêche côtière', 'blanc de blette, poulpe de roche, Supions, cresson de fontaine'),
(4, 'Côtes et selle d''agneau de lait de Lozère', 'carottes de Créances, Jus d''un navarin parfumé'),
(5, 'Pigeonneau de Vendée rôti', 'cerises et navets glacés, Condiment oseille, sauce au Porto'),
(6, 'Filet de veau fermier cuit en cocotte', 'céleri rave fondant, girolles, petit épeautre de Haute-Provence, jus de veau');

-- --------------------------------------------------------

--
-- Structure de la table `pole`
--

CREATE TABLE `pole` (
  `id_pole` int(11) NOT NULL,
  `nomPole` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
--
-- Contenu de la table `pole`
--

INSERT INTO `pole` (`id_pole`, `nomPole`) VALUES
(1, 'Développement'),
(2, 'Test'),
(3, 'Hébergement');

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

CREATE TABLE `rapport` (
  `id_rapport` int(11) NOT NULL,
  `typeRapport` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `messageRapport` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_pole` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id_reservation` int(11) NOT NULL,
  `typeResarvation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prixReservation` float NOT NULL,
  `annulationReservation` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateDebut` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateFin` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_pole` int(11) NOT NULL,
  `id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `reservation`
--

INSERT INTO `reservation` (`id_reservation`, `typeResarvation`, `prixReservation`, `annulationReservation`, `dateDebut`, `dateFin`, `id_client`, `id_pole`, `id_employe`) VALUES
(1, 'Restaurant', 120, 0, '2018-05-21', '2018-05-21', 1, 1, 1),
(2, 'TEST', 200, 0, '2018-05-21', '2018-05-22', 2, 1, 1),
(3, 'JsaisPas', 124, 0, '2018-05-21', '2018-05-22', 3, 1, 2),
(4, 'JsaisPas', 124, 0, '2018-05-21', '2018-05-22', 4, 1, 2),
(5, 'champ', 25, 0, '2018-06-08', '2018-07-07', 1, 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

CREATE TABLE `restaurant` (
  `id_restaurant` int(11) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `dateConceptionMenu` date NOT NULL,
  `nbTable` int(11) NOT NULL,
  `nbCouvert` int(11) NOT NULL,
  `id_reservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `restaurant`
--

INSERT INTO `restaurant` (`id_restaurant`, `id_menu`, `dateConceptionMenu`, `nbTable`, `nbCouvert`, `id_reservation`) VALUES
(1, 1, '2018-06-06', 33, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `serviceDivers`
--

CREATE TABLE `serviceDivers` (
  `id_service` int(11) NOT NULL,
  `nomService` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateService` date NOT NULL,
  `typeService` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL,
  `nomStock` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qteStock` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL,
  `id_pole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `agenceVoyage`
--
ALTER TABLE `agenceVoyage`
  ADD PRIMARY KEY (`id_agence`),
  ADD KEY `id_employe` (`id_employe`);

--
-- Index pour la table `chambre`
--
ALTER TABLE `chambre`
  ADD PRIMARY KEY (`id_chambre`),
  ADD KEY `id_reservation` (`id_reservation`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`),
  ADD KEY `Id_agence` (`id_agence`);

--
-- Index pour la table `dessert`
--
ALTER TABLE `dessert`
  ADD PRIMARY KEY (`id_dessert`);

--
-- Index pour la table `droitAcces`
--
ALTER TABLE `droitAcces`
  ADD PRIMARY KEY (`id_droit`),
  ADD KEY `Id_pole` (`id_pole`);

--
-- Index pour la table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`id_employe`),
  ADD KEY `Id_droit` (`id_droit`),
  ADD KEY `Id_pole` (`id_pole`);

--
-- Index pour la table `entree`
--
ALTER TABLE `entree`
  ADD PRIMARY KEY (`id_entree`);

--
-- Index pour la table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`),
  ADD KEY `Id_Entree` (`id_entree`),
  ADD KEY `Id_plat` (`id_plat`),
  ADD KEY `service divers_ibfk_3` (`id_PD`),
  ADD KEY `service divers_ibfk_4` (`id_dessert`);

--
-- Index pour la table `noteHotel`
--
ALTER TABLE `noteHotel`
  ADD PRIMARY KEY (`id_noteHotel`),
  ADD KEY `Id_client` (`id_client`);

--
-- Index pour la table `panierMoyen`
--
ALTER TABLE `panierMoyen`
  ADD PRIMARY KEY (`id_panier`),
  ADD KEY `Id_employe` (`id_employe`);

--
-- Index pour la table `petitDejeuner`
--
ALTER TABLE `petitDejeuner`
  ADD PRIMARY KEY (`id_PD`);

--
-- Index pour la table `plat`
--
ALTER TABLE `plat`
  ADD PRIMARY KEY (`id_plat`);

--
-- Index pour la table `pole`
--
ALTER TABLE `pole`
  ADD PRIMARY KEY (`id_pole`);

--
-- Index pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD PRIMARY KEY (`id_rapport`),
  ADD KEY `Id_employe` (`id_employe`),
  ADD KEY `Id_pole` (`id_pole`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `Id_employe` (`id_employe`),
  ADD KEY `Id_pole` (`id_pole`),
  ADD KEY `id_client` (`id_client`);

--
-- Index pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id_restaurant`),
  ADD KEY `Id_menu` (`id_menu`),
  ADD KEY `Id_reservation` (`id_reservation`);

--
-- Index pour la table `serviceDivers`
--
ALTER TABLE `serviceDivers`
  ADD PRIMARY KEY (`id_service`),
  ADD KEY `Id_employe` (`id_employe`),
  ADD KEY `service divers_ibfk_2` (`id_client`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_stock`),
  ADD KEY `Id_employe` (`id_employe`),
  ADD KEY `Id_pole` (`id_pole`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `agenceVoyage`
--
ALTER TABLE `agenceVoyage`
  MODIFY `id_agence` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `chambre`
--
ALTER TABLE `chambre`
  MODIFY `id_chambre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `dessert`
--
ALTER TABLE `dessert`
  MODIFY `id_dessert` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `droitAcces`
--
ALTER TABLE `droitAcces`
  MODIFY `id_droit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `employe`
--
ALTER TABLE `employe`
  MODIFY `id_employe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `entree`
--
ALTER TABLE `entree`
  MODIFY `id_entree` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `panierMoyen`
--
ALTER TABLE `panierMoyen`
  MODIFY `id_panier` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `petitDejeuner`
--
ALTER TABLE `petitDejeuner`
  MODIFY `id_PD` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `plat`
--
ALTER TABLE `plat`
  MODIFY `id_plat` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pole`
--
ALTER TABLE `pole`
  MODIFY `id_pole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `rapport`
--
ALTER TABLE `rapport`
  MODIFY `id_rapport` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id_restaurant` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `serviceDivers`
--
ALTER TABLE `serviceDivers`
  MODIFY `id_service` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
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
  ADD CONSTRAINT `client_ibfk_1` FOREIGN KEY (`id_agence`) REFERENCES `agenceVoyage` (`id_agence`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `droitAcces`
--
ALTER TABLE `droitAcces`
  ADD CONSTRAINT `droitacces_ibfk_1` FOREIGN KEY (`id_pole`) REFERENCES `pole` (`id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `employe`
--
ALTER TABLE `employe`
  ADD CONSTRAINT `employe_ibfk_1` FOREIGN KEY (`id_droit`) REFERENCES `droitacces` (`id_droit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employe_ibfk_2` FOREIGN KEY (`id_pole`) REFERENCES `pole` (`id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`id_entree`) REFERENCES `entree` (`id_entree`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `menu_ibfk_2` FOREIGN KEY (`id_plat`) REFERENCES `plat` (`id_plat`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service divers_ibfk_3` FOREIGN KEY (`id_PD`) REFERENCES `petitDejeuner` (`id_PD`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service divers_ibfk_4` FOREIGN KEY (`id_dessert`) REFERENCES `dessert` (`id_dessert`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `noteHotel`
--
ALTER TABLE `noteHotel`
  ADD CONSTRAINT `notehotel_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `panierMoyen`
--
ALTER TABLE `panierMoyen`
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
-- Contraintes pour la table `serviceDivers`
--
ALTER TABLE `serviceDivers`
  ADD CONSTRAINT `servicedivers_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `servicedivers_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`id_pole`) REFERENCES `pole` (`id_pole`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
