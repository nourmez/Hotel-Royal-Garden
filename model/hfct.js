let BDD = require('../model/BDD');
let bdd = new BDD();

function getName() {
    query_getName = "SELECT nomEmploye , prenomEmploye FROM employe WHERE id_employe = 2";
    bdd.connection.query(query_getName, function (err, result) {
        return document.getElementById('monNom').innerHTML = 'Bienvenue, ' + result[0].nomEmploye + ' ' + result[0].prenomEmploye;
    });

}

function getLesReservtionsRestauration(callback) {

    querygetLesReservtionsRestauration = "SELECT cl.nomClient, cl.prenomClient, ch.nbLit, ch.typeChambre, r.annulationReservation, ch.id_chambre" +
        ", r.dateDebut, r.dateFin FROM reservation r, chambre ch, client cl WHERE ch.id_reservation = r.id_reservation" +
        "AND c.id_client = r.id_client AND DATE(now()) = r.dateDebut";

    bdd.connection.query(querygetLesReservtionsRestauration, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des réservations.");
            console.log(err);
            return;
        } else {
            callback(null, rows);
            console.log(fields);
        }

        console.log("Récupération des réservations avec succés !");
    });
}