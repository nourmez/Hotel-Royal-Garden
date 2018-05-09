-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 09 Mai 2018 à 22:35
-- Version du serveur :  10.1.19-MariaDB
-- Version de PHP :  5.6.28

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
-- Structure de la table `agence voyage`
--

CREATE TABLE `agence voyage` (
  `Id_agence` int(11) NOT NULL,
  `nom_agence` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre_client_agence` int(11) NOT NULL,
  `Id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `chambre`
--

CREATE TABLE `chambre` (
  `Id_chambre` int(11) NOT NULL,
  `Type_chambre` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nombre_lit_chambre` int(11) NOT NULL,
  `Prix_chambre` float NOT NULL,
  `Id_reservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `Id_client` int(11) NOT NULL,
  `nom_client` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom_client` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_agence` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `desaire`
--

CREATE TABLE `desaire` (
  `Id_Desaire` int(11) NOT NULL,
  `Nom_Desaire` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_Entree` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `droit d'acces`
--

CREATE TABLE `droit d'acces` (
  `Id_droit` int(11) NOT NULL,
  `Nom_droit` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_pole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `droit d'acces`
--

INSERT INTO `droit d'acces` (`Id_droit`, `Nom_droit`, `Id_pole`) VALUES
(1, 'Chef', 1),
(2, 'Dev', 1);

-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

CREATE TABLE `employe` (
  `Id_employe` int(11) NOT NULL,
  `Nom_employe` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prenom_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Adresse_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date_empoche` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Poste_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Login_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Mdp_emplye` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_droit` int(11) NOT NULL,
  `Id_pole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `employe`
--

INSERT INTO `employe` (`Id_employe`, `Nom_employe`, `Prenom_emplye`, `Adresse_emplye`, `Date_empoche`, `Poste_emplye`, `Login_emplye`, `Mdp_emplye`, `Id_droit`, `Id_pole`) VALUES
(1, 'PINTO', 'Dani', '75000', '09/05/2018', 'Chef Dev', 'dpinto', 'dani', 1, 1),
(2, 'MEZRANI', 'Nourhene', '75000', '09/05/2018', 'Dev', 'nmezrani', 'nourhene', 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `entree`
--

CREATE TABLE `entree` (
  `Id_Entree` int(11) NOT NULL,
  `Nom_Entree` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_Entree` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

CREATE TABLE `menu` (
  `Id_menu` int(11) NOT NULL,
  `Nom_menu` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_PD` int(11) DEFAULT NULL,
  `Id_plat` int(11) DEFAULT NULL,
  `Id_Entree` int(11) DEFAULT NULL,
  `Id_Desaire` int(11) DEFAULT NULL,
  `prix` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `note hotel`
--

CREATE TABLE `note hotel` (
  `Id_note` int(11) NOT NULL,
  `Note_spa` int(11) NOT NULL,
  `Note_resto` int(11) NOT NULL,
  `Note_reception` int(11) NOT NULL,
  `Date_note` int(11) NOT NULL,
  `Id_client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `panier moyen`
--

CREATE TABLE `panier moyen` (
  `Id_panier` int(11) NOT NULL,
  `Jour_panier` date NOT NULL,
  `total__panier` float NOT NULL,
  `Id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `petit dej`
--

CREATE TABLE `petit dej` (
  `Id_PD` int(11) NOT NULL,
  `Nom_PD` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_PD` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `plat`
--

CREATE TABLE `plat` (
  `Id_plat` int(11) NOT NULL,
  `Nom_plat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ingredient_plat` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pole`
--

CREATE TABLE `pole` (
  `Id_pole` int(11) NOT NULL,
  `Nom_pole` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `pole`
--

INSERT INTO `pole` (`Id_pole`, `Nom_pole`) VALUES
(1, 'Développement');

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

CREATE TABLE `rapport` (
  `Id_rapport` int(11) NOT NULL,
  `Type` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_pole` int(11) NOT NULL,
  `Id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `Id_reservation` int(11) NOT NULL,
  `Type_resarvation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prix_reservation` float NOT NULL,
  `Annulation_reservation` tinyint(1) NOT NULL,
  `Date_debut` date NOT NULL,
  `Date_fin` date NOT NULL,
  `Id_client` int(11) NOT NULL,
  `Id_pole` int(11) NOT NULL,
  `Id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

CREATE TABLE `restaurant` (
  `Id_resto` int(11) NOT NULL,
  `Id_menu` int(11) NOT NULL,
  `Jour` date NOT NULL,
  `nbr_table` int(11) NOT NULL,
  `nbr_couver` int(11) NOT NULL,
  `Id_reservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `service divers`
--

CREATE TABLE `service divers` (
  `Id_service` int(11) NOT NULL,
  `Nom_service` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date_service` date NOT NULL,
  `Type_service` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_client` int(11) NOT NULL,
  `Id_employe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `Id_stock` int(11) NOT NULL,
  `Nom_stock` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Quantité_stock` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_employe` int(11) NOT NULL,
  `Id_pole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `agence voyage`
--
ALTER TABLE `agence voyage`
  ADD PRIMARY KEY (`Id_agence`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `chambre`
--
ALTER TABLE `chambre`
  ADD PRIMARY KEY (`Id_chambre`),
  ADD KEY `Id_reservation` (`Id_reservation`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`Id_client`),
  ADD KEY `Id_agence` (`Id_agence`);

--
-- Index pour la table `desaire`
--
ALTER TABLE `desaire`
  ADD PRIMARY KEY (`Id_Desaire`);

--
-- Index pour la table `droit d'acces`
--
ALTER TABLE `droit d'acces`
  ADD PRIMARY KEY (`Id_droit`),
  ADD KEY `Id_pole` (`Id_pole`);

--
-- Index pour la table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`Id_employe`),
  ADD KEY `Id_droit` (`Id_droit`),
  ADD KEY `Id_pole` (`Id_pole`);

--
-- Index pour la table `entree`
--
ALTER TABLE `entree`
  ADD PRIMARY KEY (`Id_Entree`);

--
-- Index pour la table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`Id_menu`),
  ADD KEY `Id_Entree` (`Id_Entree`),
  ADD KEY `Id_plat` (`Id_plat`),
  ADD KEY `service divers_ibfk_3` (`Id_PD`),
  ADD KEY `service divers_ibfk_4` (`Id_Desaire`);

--
-- Index pour la table `note hotel`
--
ALTER TABLE `note hotel`
  ADD PRIMARY KEY (`Id_note`),
  ADD KEY `Id_client` (`Id_client`);

--
-- Index pour la table `panier moyen`
--
ALTER TABLE `panier moyen`
  ADD PRIMARY KEY (`Id_panier`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `petit dej`
--
ALTER TABLE `petit dej`
  ADD PRIMARY KEY (`Id_PD`);

--
-- Index pour la table `plat`
--
ALTER TABLE `plat`
  ADD PRIMARY KEY (`Id_plat`);

--
-- Index pour la table `pole`
--
ALTER TABLE `pole`
  ADD PRIMARY KEY (`Id_pole`);

--
-- Index pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD PRIMARY KEY (`Id_rapport`),
  ADD KEY `Id_employe` (`Id_employe`),
  ADD KEY `Id_pole` (`Id_pole`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`Id_reservation`),
  ADD KEY `Id_employe` (`Id_employe`),
  ADD KEY `Id_pole` (`Id_pole`);

--
-- Index pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`Id_resto`),
  ADD KEY `Id_menu` (`Id_menu`),
  ADD KEY `Id_reservation` (`Id_reservation`);

--
-- Index pour la table `service divers`
--
ALTER TABLE `service divers`
  ADD PRIMARY KEY (`Id_service`),
  ADD KEY `Id_employe` (`Id_employe`),
  ADD KEY `service divers_ibfk_2` (`Id_client`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`Id_stock`),
  ADD KEY `Id_employe` (`Id_employe`),
  ADD KEY `Id_pole` (`Id_pole`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `agence voyage`
--
ALTER TABLE `agence voyage`
  MODIFY `Id_agence` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `chambre`
--
ALTER TABLE `chambre`
  MODIFY `Id_chambre` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `Id_client` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `desaire`
--
ALTER TABLE `desaire`
  MODIFY `Id_Desaire` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `droit d'acces`
--
ALTER TABLE `droit d'acces`
  MODIFY `Id_droit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `employe`
--
ALTER TABLE `employe`
  MODIFY `Id_employe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `entree`
--
ALTER TABLE `entree`
  MODIFY `Id_Entree` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `menu`
--
ALTER TABLE `menu`
  MODIFY `Id_menu` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `panier moyen`
--
ALTER TABLE `panier moyen`
  MODIFY `Id_panier` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `petit dej`
--
ALTER TABLE `petit dej`
  MODIFY `Id_PD` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `plat`
--
ALTER TABLE `plat`
  MODIFY `Id_plat` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pole`
--
ALTER TABLE `pole`
  MODIFY `Id_pole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `rapport`
--
ALTER TABLE `rapport`
  MODIFY `Id_rapport` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `Id_reservation` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `Id_resto` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `service divers`
--
ALTER TABLE `service divers`
  MODIFY `Id_service` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `Id_stock` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
