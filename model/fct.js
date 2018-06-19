let BDD = require('../model/BDD');
let bdd = new BDD();

/*
Récupère toutes les entrées disponible dans la base de données
Author : PINTO Dani
*/
function getLesEntrees(callback)
{

    $query= "SELECT `id_entree`, `nomEntree`, `Ingredient_Entree` FROM `entree`";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des entrées.");
            console.log(err);
            return;
        }else{
            callback(null,rows);
        }

        console.log("Récupération des entrées avec succés !");
    });

    //bdd.connection.end();
}

/*
Récupère tout les plats disponible dans la base de données
Author : PINTO Dani
*/
function getLesPlats(callback)
{

    $query= "SELECT * FROM plat";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des plats.");
            console.log(err);
            return;
        }else{
            callback(null,rows);
            console.log("Récupération des plats avec succés !");
        }
    });

    //bdd.connection.end();
}

/*
Récupère tout les desserts disponible dans la base de données
Author : PINTO Dani
*/
function getLesDessert(callback)
{

    $query= "SELECT * FROM dessert";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des desserts.");
            console.log(err);
            return;
        }else{
            callback(null, rows);
            console.log("Récupération des desserts avec succés !");
        }
    });

    //bdd.connection.end();
}

/*
Récupère les données nécessaires à l'affichage des tables de réservation pour le directeur de restauration
Author : PINTO Dani
*/
function getLesReservtionsRestauration(callback)
{

    $query ="SELECT `nomClient`, `prenomClient`, `nbLit`, `nbTable`, `nbCouvert`, `reservation`.`id_reservation`\n" +
            "FROM `reservation`, `chambre`, `client`, `restaurant`\n" +
            "WHERE `restaurant`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `client`.`id_client` = `reservation`.`id_client`\n" +
            "AND DATE('2018-05-21') = `reservation`.`dateDebut`\n" +
            "GROUP BY `reservation`.`id_client`";
    /*$query= "SELECT `nomClient`, `prenomClient`, `nbLit`, `nbTable`, `nbCouvert`, `reservation`.`id_reservation`\n" +
            "FROM `reservation`, `chambre`, `client`, `restaurant`\n" +
            "WHERE `chambre`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `restaurant`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `client`.`id_client` = `reservation`.`id_client`\n" +
            "AND DATE('2018-05-21') = `reservation`.`dateDebut`;";
    $query= "SELECT `nomClient`, `prenomClient`, `nbLit`, `nbTable`, `nbCouvert`\n" +
            "FROM `reservation`, `chambre`, `client`, `restaurant`\n" +
            "WHERE `chambre`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `restaurant`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `client`.`id_client` = `reservation`.`id_client`\n" +
            "AND DATE('2018-05-21') = `reservation`.`dateDebut`;";
            //"AND DATE(now()) = `reservation`.`dateDebut`;";*/

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des réservations.");
            console.log(err);
            return;
        }else{
            callback(null,rows);
            //console.log(rows);
        }

        console.log("Récupération des réservations avec succés !");
    });

    //bdd.connection.end();
}

/*
Permet de créer un nouveau menu dans la base de données
Author : PINTO Dani
*/
function creerMenu()
{

    var lesEntrees = document.getElementsByName('entree');
    var entree;
    for(var i = 0; i < lesEntrees.length; i++){
        if(lesEntrees[i].checked){
            entree = lesEntrees[i].value;
        }
    }

    var lesPlats = document.getElementsByName('plat');
    var plat;
    for(var i = 0; i < lesPlats.length; i++){
        if(lesPlats[i].checked){
            plat = lesPlats[i].value;
        }
    }

    var lesDesserts = document.getElementsByName('dessert');
    var dessert;
    for(var i = 0; i < lesDesserts.length; i++){
        if(lesDesserts[i].checked){
            dessert = lesDesserts[i].value;
        }
    }

    var nomMenu     = document.getElementsByName('nomDuMenu')[0].value;
    var prixMenu    = document.getElementsByName('prixDuMenu')[0].value;

    $query= "INSERT INTO `menu`(`nomMenu`, `id_PD`, `id_plat`, `id_entree`, `id_dessert`, `prixMenu`) " +
            "VALUES ('"+ nomMenu +"',"+ 1 +","+ plat +","+ entree +","+ dessert +","+ prixMenu +")";

    if(nomMenu != '' && prixMenu != '') {
        bdd.connection.query($query, function (err, rows, fields) {

            if (err) {
                console.log("Problème de création du menu." + err);
                alert('Veuillez remplir tout les champs.');
                return;
            } else {
                console.log("Création du menu avec succés !");
            }

            //callback(rows);
        });
    }else{
        alert('Veuillez remplir tout les champs.');
    }

    //bdd.connection.end();
}


/*
Récupère les données nécessaires à l'affichage des menus
Author : PINTO Dani
*/
function getLesMenu(callback)
{

    $query= "SELECT `id_menu`, `nomMenu`, `nomEntree`, `nomDessert`, `nomPlat`, `prixMenu`\n" +
            "FROM `menu`, `entree`, `plat`, `dessert`\n" +
            "WHERE `menu`.`id_plat`=`plat`.`id_plat`\n" +
            "AND `menu`.`id_entree`=`entree`.`id_entree`\n" +
            "AND `menu`.`id_dessert`=`dessert`.`id_dessert`";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des données des menus.");
            console.log(err);
            return;
        }else{
            callback(null,rows);
            //console.log(rows);
        }

        console.log("Récupération des menus avec succés !");
    });

    //bdd.connection.end();
}

/*
Sert à supprimer une réservation de restauration en base de données
Author : PINTO Dani
*/
function supprimerRéservationRestauration(idReservation)
{
    let BDD = require('../model/BDD');
    let test = new BDD();

    if(confirm("Voulez vous vraiment supprimer cette réservation ?")){
        //TODO:Modifier les variables de BDD
        $query= "DELETE FROM `restaurant` WHERE `id_reservation`="+ idReservation +";";
        console.log($query);

        test.connection.query($query, function (err, rows, fields) {

            if (err) {
                console.log("Problème de suppression de la réservation de restaurant.");
                console.log(err);
                return;
            }else{
                console.log("Suppression de la table du restaurant avec succés !");
                window.location.reload(true);
            }

        });
    }
    else{
        alert("La réservation n'a pas été supprimée.")
    }
}

/*
Sert à modifier une réservation de restauration en base de données
Author : PINTO Dani
*/
function modifierRéservationRestauration(idReservation)
{

    if(confirm("Voulez vous vraiment modifier cette réservation ?")){
        sessionStorage.setItem('idDeLaReservation', idReservation);
        window.location.href="../view/modifReservation.html";
    }
    else{
        alert("La modification n'a pas été réalisée.")
    }
}

/*
Permet de récupérer la réservation à modifier
Author : PINTO Dani
*/
function getReservation(callback)
{
    var idReservation = sessionStorage.getItem('idDeLaReservation');

    $query= "SELECT `nomClient`, `prenomClient`, `nbTable`, `nbCouvert`\n" +
            "FROM `restaurant`, `reservation`, `client`\n" +
            "WHERE `restaurant`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `reservation`.`id_client` = `client`.`id_client`\n" +
            "AND `reservation`.`id_reservation` =" + idReservation + ";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de modification de la réservation de restaurant.");
            console.log(err);
            return;
        }else{
            callback(null,rows);
            //window.location.href="../view/modifReservation.html";
        }

    });
}

/*
Sert à supprimer un menu en base de données
Author : PINTO Dani
*/
function supprimerLeMenu(idMenu)
{

    if(confirm("Voulez-vous vraiment supprimer ce menu ?")){
        $query= "DELETE FROM `menu` WHERE `id_menu`="+ idMenu +";";

        bdd.connection.query($query, function (err, rows, fields) {

            if (err) {
                console.log("Problème de suppression de la réservation de restaurant.");
                console.log(err);
                return;
            }else{
                console.log("Suppression de la table du restaurant avec succés !");
                window.location.reload(true);
            }

        });
    }
    else{
        alert("La réservation n'a pas été supprimée.")
    }
}

/*
Récupère les données nécessaires à l'affichage des factures
Author : PINTO Dani
*/
function getLesFactures(callback)
{

    $query= "SELECT `reservation`.`id_client`, `dateDebut`, `dateFin`, `id_chambre`, `nomClient`, `prenomClient`, SUM(`prixReservation`) as `prixTotal`, `etatReservation`\n" +
            "FROM `reservation`, `client`, `chambre`\n" +
            "WHERE `client`.`id_client` = `reservation`.`id_client`\n" +
            "AND `chambre`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "GROUP BY `reservation`.`id_client`;";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupération des factures !");
            console.log(err);
            return;
        }else{
            callback(null,rows);
            console.log("Récupération des menus avec succés !");
        }
    });
}

/*
Sert à supprimer un menu en base de données
Author : PINTO Dani
*/
function validerFacture(idClient)
{

    if(confirm("Voulez-vous vraiment valider cette facturation ?")){
        $query= "UPDATE `reservation` SET `etatReservation`=1 WHERE `id_client`=" +idClient+ ";";

        bdd.connection.query($query, function (err, rows, fields) {

            if (err) {
                alert("Problème de validation de la facture.");
                console.log(err);
                return;
            }else{
                alert("Validation de la facture avec succès !");
                window.location.reload(true);
            }
        });
    }
    else{

    }
}

/*
Permet de rediriger l'utilisateur sur la page de modification de la facture
Instancie une variable de sessionStorage avec l'id du client
Author : PINTO Dani
*/
function getFactures(idClient)
{
    if(confirm("Voulez vous vraiment modifier cette réservation ?")){
        sessionStorage.setItem('idClientFacture', idClient);
        window.location.href="../view/modifFacture.html";
    } else{
        alert("La modification n'a pas été réalisée.")
    }
}

/*
Permet de récupérer la facture à modifier
Author : PINTO Dani
*/
function getLaFacture(callback)
{
    var idFacture = sessionStorage.getItem('idClientFacture');

    $query= "SELECT `id_reservation`, `typeResarvation`, `prixReservation`, `etatReservation`, `dateDebut`, `dateFin`, `id_client`, `id_pole`, `id_employe` \n" +
            "FROM `reservation` \n" +
            "WHERE `id_client` = "+ idFacture +";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            alert("Problème d'affichage de la facture.");
            console.log(err);
            return;
        }else{
            callback(null, rows);
            //window.location.href="../view/modifReservation.html";
        }

    });
}


/*
Permet de récupérer la facture à modifier
Author : PINTO Dani
*/
function modifierLaFacture(callback)
{
    var idFacture = sessionStorage.getItem('idClientFacture');

    $query= "SELECT `id_reservation`, `typeResarvation`, `prixReservation`, `etatReservation`, `dateDebut`, `dateFin`, `id_client`, `id_pole`, `id_employe` \n" +
            "FROM `reservation` \n" +
            "WHERE `id_client` = "+ idFacture +";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            alert("Problème d'affichage de la facture.");
            console.log(err);
            return;
        }else{
            callback(null, rows);
            //window.location.href="../view/modifReservation.html";
        }

    });
}

/*
Sert à modifier une réservation de restauration en base de données
Author : PINTO Dani
*/
function modifierReservationRestaurant()
{

    var idReservation = sessionStorage.getItem('idDeLaReservation');
    var numeroTable = document.getElementById('nbTable').value;
    var nombreCouvert = document.getElementById('nbCouvert').value;

    $query= "UPDATE `restaurant` \n" +
            "SET `nbTable`="+ numeroTable +",`nbCouvert`="+ nombreCouvert +" \n" +
            "WHERE `id_reservation`=" + idReservation+ ";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de modification de la réservation de restaurant.");
            console.log(err);
            return;
        }else{
            console.log("Modification de la réservation de restaurant avec succès.");
            window.location.reload(true);
            //window.location.href="../view/modifReservation.html";
        }

    });
}

/*
Permet de récupèrer le nom de l'utilisateur connecté
Author : PINTO Dani
*/
function getName(callback)
{
    var loginUser = sessionStorage.getItem('nomUtilisateur');
    query = "SELECT `nomEmploye` FROM `employe` WHERE `loginEmploye`='"+loginUser+"';";

    bdd.connection.query(query, function(err, result)

    {
        if (err)
            callback(err,null);
        else
            callback(null,result[0].nomEmploye);

    });
}

/*
Permet de créer un chart donut avec le tableau de données passé en paramètres
Author : PINTO Dani
*/
function drawChart(data)
{

    var chart = AmCharts.makeChart( "chartdiv", {
        "type": "pie",
        "theme": "light",
        "colors": ["#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215", "#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333", "#000000", "#57032A", "#CA9726", "#990000", "#4B0C25"],
        "dataProvider": data,
        "titleField": "title",
        "valueField": "value",
        "labelRadius": 1,

        "radius": "20%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
            "enabled": false
        }
    } );
}

/*
Permet de récupérer les statistiques du nombre de couvert
Author : PINTO Dani
*/
function getStatsNbCouvert(callback)
{

    query = "SELECT SUM(`nbCouvert`) as `nbCouvert`, SUM(`nbCouvert`) as `nbCouvertTwo` FROM `restaurant`;";
    bdd.connection.query(query, function(err, result)
    {
        if (err) {
            return console.log(err, null);
        }else {
            var nombreDeCouvert = result[0].nbCouvert;
            var nombreDeCouvertTwo = result[0].nbCouvertTwo;
            var tab = [{'title': 'Nombre de couvert', 'value': nombreDeCouvert},{'title': 'Nombre de couvert two', 'value': nombreDeCouvertTwo}];

            callback(null, tab);
        }
    });
}

/*
Récupère toutes les demandes de servicesDivers
Author : PINTO Dani
*/
function getLesServicesDivers(callback)
{
    query = "SELECT `id_service`, `dateService`, `objetService`, `demanderService`, `etatDemande`, `client`.`id_client`, `reservation`.`id_employe`, `nomClient`, `prenomClient`, `nbLit`\n" +
            "FROM `serviceDivers`, `client`, `chambre`, `reservation`\n" +
            "WHERE `serviceDivers`.`id_client` = `client`.`id_client`\n" +
            "AND `reservation`.`id_client` = `client`.`id_client`\n" +
            "AND `reservation`.`id_reservation` = `chambre`.`id_reservation`" +
            "GROUP BY `client`.`id_client`;";

    bdd.connection.query(query, function(err, rows)
    {
        if (err) {
            console.log(err, null);
            console.log('Problème de récupèration des alertes !');
            return;
        }else {
            console.log('Récupèration des alertes avec succès !');
            console.log(rows);
            callback(null, rows);
        }
    });
}

/*
Récupère toutes les alertes du pole "Restauration"
Author : PINTO Dani
*/
function getLesAlertes(callback)
{
    var idPole = sessionStorage.getItem('idPole');
    query = "SELECT `id_rapport`, `typeRapport`, `messageRapport`, `etatRapport`, `id_pole`, `id_employe` \n" +
            "FROM `rapport` \n" +
            "WHERE `id_pole` = "+ idPole +";";

    bdd.connection.query(query, function(err, rows)
    {
        if (err) {
            console.log(err, null);
            console.log('Problème de récupèration des alertes !');
            return;
        }else {
            console.log('Récupèration des alertes avec succès !')
            callback(null, rows);
        }
    });
}

/*
Permet d'ajouter une demande de service
Author : PINTO Dani
*/
function ajouterRapport()
{
    var objet = document.getElementById('objetDemande').value;
    var message = document.getElementById('descriptionDemande').value;
    var idPole = document.getElementById('poles').value;
    var idEmploye = sessionStorage.getItem('idUtilisateur');

    query = "INSERT INTO `rapport`(`typeRapport`, `messageRapport`, `id_pole`, `id_employe`) " +
            "VALUES ('"+ objet +"','"+ message +"',"+ idPole +","+ idEmploye +");";
    if(objet != '' && message != '') {
        bdd.connection.query(query, function (err, result) {
            if (err) {
                return console.log(err, null);
            } else {
                alert('Demande envoyée avec succès !');
                window.location.reload(true);
            }
        });
    }else{
        alert('Veuillez remplir tout les champs du formulaire.')
    }
}

/*
Récupère tout les poles
Author : PINTO Dani
*/
function getLesPoles(callback)
{
    query = "SELECT `id_pole`, `nomPole` FROM `pole` ORDER by nomPole;";

    bdd.connection.query(query, function(err, rows)
    {
        if (err) {
            console.log(err, null);
            console.log('Problème de récupèration des poles !');
            return;
        }else {
            console.log('Récupèration des poles avec succès !')
            callback(null, rows);
        }
    });
}

/*
Permet de déconnecter l'utilisateur à l'application
Author : PINTO Dani
*/
function deconnexion(){
    sessionStorage.clear();
    window.location.href="../index.html";
};


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
    querygetLesAgences = "SELECT * FROM agenceVoyage WHERE id_employe='2';";

    bdd.connection.query(querygetLesAgences, function (err, rows) {

        if (err) {
            console.log("Problème de récupération des données des agences voyage.");
            console.log(err);
            return;
        }else {
            var tab="";
            for (var i = 0; i <rows.length; i++) {
                tab= tab+'<tr><th>'+rows[i].id_agence+'</th><th>'+rows[i].nomAgence+'</th><th>'+rows[i].nbClientAgence+'</th><th><button onclick="modifGestionAgences('+rows[i].id_agence+')">Modifier</button><button onclick="supprimeAgences('+rows[i].id_agence+')">Supprimer</button></th></tr>';

            }
            return document.getElementById('tableauagence').innerHTML = tab;
        }
    });
}

function supprimeAgences(argument) {
    if(confirm("Voulez vous vraiment supprimer cette agence ?")){

        querygetSupprimeAgences = "DELETE FROM `agenceVoyage` WHERE `id_agence`="+argument;
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
    if(confirm("Voulez vous vraiment modifier cette agence ?")){
        sessionStorage.setItem('idAgences', argument);
        window.location.href ='modifGestionAgences.html';
    }
}
function modifGestionAgencesM(){
    querygetAgence = "SELECT * FROM agenceVoyage WHERE id_agence="+sessionStorage.getItem('idAgences');

    bdd.connection.query(querygetAgence, function (err, rows) {
        if (err) {
            console.log("Problème de récupération des données des agences voyage.");
            console.log(err);
            return;
        }
        else {
            document.getElementById('aNombre').value = rows[0].id_agence;
            document.getElementById('aNom').value = rows[0].nomAgence;
            document.getElementById('cNombre').value = rows[0].nbClientAgence;
        }
    });

    //bdd.connection.end();
}

function modifReservationChambre(argument){
    if(confirm("Voulez vous vraiment modifier cette réservation ?")){
        sessionStorage.setItem('idChambre', argument);
    }
    window.location.href ='modifReservationChambre.html';
}

function modifReservationChambreM(){

    querygetReservtion= "SELECT cl.nomClient, cl.prenomClient, ch.nbLit, ch.typeChambre,   r.annulationReservation, ch.id_chambre, r.dateDebut, r.dateFin FROM reservation r, pole p,  employe e, chambre ch, client cl WHERE ch.id_reservation ="+sessionStorage.getItem('idChambre')+" AND ch.id_reservation =r.id_reservation AND cl.id_client = r.id_client AND p.id_pole= r.id_pole AND P.nomPole='Hébergement' AND e.id_employe = r.id_employe";

    bdd.connection.query(querygetReservtion, function (err, rows) {

        if (err) {
            console.log("Problème de récupération des données des réservations.");
            console.log(err);
            return;
        }
        else {
            document.getElementById('cNombre').value = rows[0].id_chambre;
            document.getElementById('cType').value = rows[0].typeChambre;
            document.getElementById('lNombre').value = rows[0].nbLit;
            document.getElementById('eDate').value = rows[0].dateDebut;
            document.getElementById('sDate').value = rows[0].dateFin;
            document.getElementById('nClient').value = rows[0].nomClient;
            document.getElementById('pClient').value = rows[0].prenomClient;
            document.getElementById('sReservation').value = rows[0].annulationReservation;
        }
    })
}

function modifAgences(){
    var nomAgence = document.getElementById('aNom').value;
    var nbClientAgence = document.getElementById('cNombre').value;
    var idAgence = document.getElementById('aNombre').value;

    queryModification="UPDATE agenceVoyage SET `nomAgence`='"+ nomAgence +"',`nbClientAgence`="+ nbClientAgence +" WHERE `id_agence`=" + idAgence + ";";

    if(confirm("Voulez vous vraiment modifier cette agence ?")) {
        bdd.connection.query(queryModification, function (err, rows) {
            if (err) {
                console.log("Problème de modification de la réservation.");
                console.log(err);
                return;
            } else {
                console.log("Modification de la réservation avec succès.");
                window.location.href = '../view/gestionAgences.html';
            }
        });
    }else{
        console.log('Modification annulée !');
    }

    //bdd.connection.end();
}

function modifChambre(){
    queryModificationC="UPDATE reservation r, pole p,  employe e, chambre ch, client cl SET cl.nomClient='"+document.getElementById('nClient').value +"', cl.prenomClient='"+document.getElementById('pClient').value +"', ch.nbLit='"+document.getElementById('lNombre').value +"', ch.typeChambre='"+document.getElementById('cType').value +"', r.annulationReservation='"+document.getElementById('sReservation').value +"', r.dateDebut='"+document.getElementById('eDate').value +"', r.dateFin='"+document.getElementById('sDate').value +"' WHERE r.id_reservation="+sessionStorage.getItem('idChambre')+" AND ch.id_chambre="+document.getElementById('cNombre').value +" AND ch.id_reservation =r.id_reservation AND cl.id_client = r.id_client AND p.id_pole= r.id_pole AND P.nomPole='Hébergement' AND e.id_employe = r.id_employe";

    if(confirm('Voulez-vous vraiment modifier cette réservation ?')) {
        bdd.connection.query(queryModificationC, function (err, rows) {
            if (err) {
                console.log("Problème de modification de la réservation.");
                console.log(err);
                return;
            }
            else {
                console.log("Modification de la réservation avec succès.");
                window.location.href = "../view/centralReservationChambre.html";
                return;
            }
        })
    }
}