let BDD = require('../model/BDD');
let bdd = new BDD();

function getName() {
    query_getName = "SELECT nomEmploye , prenomEmploye FROM employe WHERE id_employe = 2";
    bdd.connection.query(query_getName, function (err, result) {
        return document.getElementById('monNom').innerHTML = 'Bienvenue, ' + result[0].nomEmploye + ' ' + result[0].prenomEmploye;
    });

}

function lesReservations() {

    querygetLesReservtions = "SELECT r.id_reservation, cl.nomClient, cl.prenomClient, ch.nbLit, ch.typeChambre, r.annulationReservation, ch.id_chambre, r.dateDebut, r.dateFin FROM reservation r, pole p,  employe e, chambre ch, client cl WHERE ch.id_reservation = r.id_reservation AND cl.id_client = r.id_client AND DATE(now()) >= r.dateDebut AND DATE(now()) <=r.dateFin AND p.id_pole= r.id_pole AND P.nomPole='Hébergement' AND e.id_employe = r.id_employe";

    bdd.connection.query(querygetLesReservtions, function (err, rows) {

        if (err) {
            console.log("Problème de récupération des données des réservations.");
            console.log(err);
            return;
        }
        else {
            var tab="";
            for (var i = 0; i <rows.length; i++) {
                tab= tab+'<tr><th id="">'+rows[i].id_chambre+'</th><th id="">'+rows[i].typeChambre+'</th><th id="">'+rows[i].nbLit+'</th><th id="">'+rows[i].dateDebut+'</th><th id="">'+rows[i].dateFin+'</th><th id="">'+rows[i].nomClient+' '+rows[i].prenomClient+'</th><th id="">'+rows[i].annulationReservation+'</th><th id=""><button onclick="modifReservationChambre('+rows[i].id_reservation+')">Modifier</button><button onclick="supprimeReservation('+rows[i].id_reservation+')">Supprimer</button></th></tr>';
            }
            return document.getElementById('tableaureservation').innerHTML = tab;
        }
    });
}

function lesAgences(){
    querygetLesAgences = "SELECT * FROM agence_voyage WHERE id_employe='2'";

    bdd.connection.query(querygetLesAgences, function (err, rows) {

        if (err) {
            console.log("Problème de récupération des données des agences voyage.");
            console.log(err);
            return;
        }
        else {
            var tab="";
            for (var i = 0; i <rows.length; i++) {
                tab= tab+'<tr><th>'+rows[i].id_agence+'</th><th>'+rows[i].nom_agence+'</th><th>'+rows[i].nbClientAgence+'</th><th><button onclick="modifGestionAgences('+rows[i].id_agence+')">Modifier</button><button onclick="supprimeAgences('+rows[i].id_agence+')">Supprimer</button></th></tr>';

            }
            return document.getElementById('tableauagence').innerHTML = tab;
        }
    });
}

function supprimeAgences(argument) {
    if(confirm("Voulez vous vraiment supprimer cette agence ?")){

        querygetSupprimeAgences = "DELETE FROM `agence_voyage` WHERE `id_agence`="+argument;
        bdd.connection.query(querygetSupprimeAgences);
        alert("Votre agence est supprimer!");
    }
    return window.location.reload();
}

function supprimeReservation(argument) {
    if(confirm("Voulez vous vraiment supprimer cette reservation ?")){

        querygetSupprimeReservation = "DELETE FROM `reservation` WHERE `id_reservation`="+argument;
        bdd.connection.query(querygetSupprimeReservation);
        alert("Votre Reservation est supprimer!");
    }
    return window.location.reload();
}
function modifGestionAgences(argument){
    window.location ='modifGestionAgences.html';
    querygetAgence = "SELECT * FROM agence_voyage WHERE id_agence="+argument;
    bdd.connection.query(querygetAgence, function (err, rows) {
        if (err) {
            console.log("Problème de récupération des données des agences voyage.");
            console.log(err);
            return;
        }
        else {
            document.getElementById('aNombre').innerHTML = document.getElementById('aNombre').value = rows[0].id_agence;
            document.getElementById('aNom').value = rows[0].nom_agence;
            document.getElementById('cNombre').value = rows[0].nbClientAgence;
        }
    })

}

function modifReservationChambre(argument){


    querygetReservtion= "SELECT cl.nomClient, cl.prenomClient, ch.nbLit, ch.typeChambre,   r.annulationReservation, ch.id_chambre, r.dateDebut, r.dateFin FROM reservation r, pole p,  employe e, chambre ch, client cl WHERE ch.id_reservation ="+argument+" AND ch.id_reservation =r.id_reservation AND cl.id_client = r.id_client AND p.id_pole= r.id_pole AND P.nomPole='Hébergement' AND e.id_employe = r.id_employe";

    bdd.connection.query(querygetReservtion, function (err, rows) {

        if (err) {
            console.log("Problème de récupération des données des réservations.");
            console.log(err);
            return;
        }
        else {
        }
    })
}