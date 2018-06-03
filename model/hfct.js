let BDD = require('../model/BDD');
let bdd = new BDD();
function getName()
{
    query = "SELECT nomEmploye , prenomEmploye FROM employe WHERE id_employe = 2";
    bdd.connection.query(query, function(err, result){
        return document.getElementById('monNom').innerHTML = 'Bienvenue, ' + result[0].nomEmploye + ' '+result[0].prenomEmploye;
    });

}
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