let BDD = require('../model/BDD');
let bdd = new BDD();

function getName() {
    query_getName = "SELECT nomEmploye , prenomEmploye FROM employe WHERE id_employe = 2";
    bdd.connection.query(query_getName, function (err, result) {
        return document.getElementById('monNom').innerHTML = 'Bienvenue, ' + result[0].nomEmploye + ' ' + result[0].prenomEmploye;
    });

}

function lesReservations() {

    querygetLesReservtionsRestauration = "SELECT cl.nomClient, cl.prenomClient, ch.nbLit, ch.typeChambre, r.annulationReservation, ch.id_chambre, r.dateDebut, r.dateFin FROM reservation r, pole p,  employe e, chambre ch, client cl WHERE ch.id_reservation = r.id_reservation AND cl.id_client = r.id_client AND DATE(now()) = r.dateDebut AND p.id_pole= r.id_pole AND P.nomPole='Hébergement' AND e.id_employe = r.id_employe";

    bdd.connection.query(querygetLesReservtionsRestauration, function (err, rows) {

        if (err) {
            console.log("Problème de récupération des données des réservations.");
            console.log(err);
            return;
        }
        else {
            var tab="";
            for (var i = 0; i <rows.length; i++) {
                tab= tab+"<tr><th>"+rows[i].id_chambre+"</th><th>"+rows[i].typeChambre+"</th><th>"+rows[i].nbLit+"</th><th>"+rows[i].dateDebut+"</th><th>"+rows[i].dateFin+"</th><th>"+rows[i].nomClient+" "+rows[i].prenomClient+"</th><th>"+rows[i].annulationReservation+"</th></tr>";
            }
            return document.getElementById('tableaureservation').innerHTML = tab;
        }
    });
}

function lesAgences(){
    querygetLesReservtionsRestauration = "SELECT * FROM agence_voyage WHERE id_employe='2'";

    bdd.connection.query(querygetLesReservtionsRestauration, function (err, rows) {

        if (err) {
            console.log("Problème de récupération des données des agences voyage.");
            console.log(err);
            return;
        }
        else {
            var tab="";
            for (var i = 0; i <rows.length; i++) {
                tab= tab+"<tr><th>"+rows[i].id_agence+"</th><th>"+rows[i].nom_agence+"</th><th>"+rows[i].nbClientAgence+"</th></tr>";
            }
            return document.getElementById('tableauagence').innerHTML = tab;
        }
    });
}
