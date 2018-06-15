let BDD = require('../model/BDD');
let bdd = new BDD();

//Récupère toutes les entrées disponible dans la base de données
function getLesEntrees() {

    $query= "SELECT * FROM entree";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des entrées.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Récupération des entrées avec succés !");
    });

    bdd.connection.end();
}

//Récupère tout les plats disponible dans la base de données
function getLesPlats() {

    $query= "SELECT * FROM plat";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des plats.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Récupération des plats avec succés !");
    });

    bdd.connection.end();
}

//Récupère tout les desserts disponible dans la base de données
function getLesDessert() {

    $query= "SELECT * FROM dessert";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des desserts.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Récupération des desserts avec succés !");
    });

    bdd.connection.end();
}

//Récupère les données nécessaires à l'affichage des tables de réservation pour le directeur de restauration
function getLesReservtionsRestauration(callback) {

    $query= "SELECT `nomClient`, `prenomClient`, `nbLit`, `nbTable`, `nbCouvert`\n" +
            "FROM `reservation`, `chambre`, `client`, `restaurant`\n" +
            "WHERE `chambre`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `restaurant`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `client`.`id_client` = `reservation`.`id_client`\n" +
            "AND DATE(now()) = `reservation`.`dateDebut`";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des réservations.");
            console.log(err);
            return;
        }else{
            callback(null,rows);
            console.log(fields);
        }

        console.log("Récupération des réservations avec succés !");
    });

    bdd.connection.end();
}

//Permet de créer un nouveau menu dans la base de données
function creerMenu(entree,plat,dessert,nom,prix) {

    $query= "INSERT INTO `menu`(`nomMenu`, `id_PD`, `id_plat`, `id_entree`, `id_dessert`, `prixMenu`) " +
        "VALUES ('"+ nom +"',"+ 0 +","+ plat +","+ entree +","+ dessert +","+ prix +")";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de création du menu.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Création du menu avec succés !");
    });

    bdd.connection.end();
}

//Sert à supprimer un menu en base de données
function supprimerMenu(idMenu) {

    $query= "DELETE FROM `menu` WHERE `id_menu`= "+ idMenu +";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de suppression du menu.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Suppression du menu avec succés !");
    });

    bdd.connection.end();
}

//Sert à supprimer une réservation de restauration en base de données
function supprimerRéservationRestauration(idReservation) {

    $query= "DELETE FROM `restaurant` WHERE `id_reservation`="+ idReservation +";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de suppression de la réservation de restaurant.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Suppression de la table du restaurant avec succés !");
    });

    bdd.connection.end();
}

function getName(callback)
{
    query = "SELECT `nomEmploye` FROM `employe` WHERE `loginEmploye`='dpinto'";
    bdd.connection.query(query, function(err, result)

    {
        if (err)
            callback(err,null);
        else
            callback(null,result[0].nomEmploye);

    });

}

