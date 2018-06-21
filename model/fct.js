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

    $query= "SELECT `nomClient`, `prenomClient`, `nbLit`, `nbTable`, `nbCouvert`, reservation.`id_reservation`\n" +
            "FROM `reservation`, `chambre`, `client`, `restaurant`\n" +
            "WHERE `chambre`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `restaurant`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "AND `client`.`id_client` = `reservation`.`id_client`\n" +
            "AND DATE('2018-05-21') = `reservation`.`dateDebut`;";
    /*$query= "SELECT `nomClient`, `prenomClient`, `nbLit`, `nbTable`, `nbCouvert`\n" +
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

    alert($query);

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de création du menu." + err);
            return;
        }else{
            console.log("Création du menu avec succés !");
        }

        //callback(rows);
    });

    //bdd.connection.end();
}


/*
Récupère les données nécessaires à l'affichage des menus
Author : PINTO Dani
*/
function getLesMenu(callback)
{

    $query= "SELECT `nomMenu`, `nomEntree`, `nomDessert`, `nomPlat`, `prixMenu`\n" +
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
Sert à supprimer un menu en base de données
Author : PINTO Dani
*/
function supprimerMenu(idMenu)
{

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
            "WHERE `restaurant`.`id_restaurant` = `reservation`.`id_reservation`\n" +
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
Permet de créer un chart column avec le tableau de données passé en paramètres
Author : MEZRANI Nourhene
*/

function drawChartAvis(data,idDiv)
{
      var chart = AmCharts.makeChart(idDiv, {
        "type": "serial",
          "theme": "light",
          "dataProvider": data,
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0,
            "title":"Nombres des clients"
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillColors": '#72de62',
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "visits"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "Notes",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
          },
          "export": {
            "enabled": true
          }

      });
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
Récupère toutes les alertes et servicesDivers
Author : PINTO Dani
*/
function getLesAlertes(callback)
{
    query = "SELECT `id_service`, `dateService`, `objetService`, `demanderService`, `etatDemande`, `client`.`id_client`, `reservation`.`id_employe`, `nomClient`, `prenomClient`, `nbLit`\n" +
            "FROM `serviceDivers`, `client`, `chambre`, `reservation`\n" +
            "WHERE `serviceDivers`.`id_client` = `client`.`id_client`\n" +
            "AND `reservation`.`id_client` = `client`.`id_client`\n" +
            "AND `reservation`.`id_reservation` = `chambre`.`id_reservation`";

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
function ajouterDemandeService()
{
    var objet = document.getElementById('objetDemande');
    var message = document.getElementById('descriptionDemande');

    query = "INSERT INTO `serviceDivers`(`objetService`, `demanderService`) VALUES (" + objet + "," + message + ");";
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
Permet de déconnecter l'utilisateur à l'application
Author : PINTO Dani
*/
function deconnexion(){
    sessionStorage.clear();
    window.location.href="../index.html";
};

/*
Select tout les resrvations chambres
Author : Mezrani Nourhene
*/

function lesReservations() {

    querygetLesReservtions = "SELECT r.id_reservation, cl.nomClient, cl.prenomClient, ch.nbLit, ch.typeChambre, r.etatReservation, ch.id_chambre, r.dateDebut, r.dateFin FROM reservation r, pole p,  employe e, chambre ch, client cl WHERE ch.id_reservation = r.id_reservation AND cl.id_client = r.id_client AND DATE(now()) >= r.dateDebut AND DATE(now()) <=r.dateFin AND p.id_pole= r.id_pole AND P.nomPole='Hébergement' AND e.id_employe = r.id_employe";

    bdd.connection.query(querygetLesReservtions, function (err, rows) {

        if (err) {
            console.log("Problème de récupération des données des réservations.");
            console.log(err);
            return;
        }
        else {
            var tab="";
            for (var i = 0; i <rows.length; i++) {
                tab= tab+'<tr><th id="">'+rows[i].id_chambre+'</th><th id="">'+rows[i].typeChambre+'</th><th id="">'+rows[i].nbLit+'</th><th id="">'+rows[i].dateDebut+'</th><th id="">'+rows[i].dateFin+'</th><th id="">'+rows[i].nomClient+' '+rows[i].prenomClient+'</th><th id="">'+rows[i].etatReservation+'</th><th id=""><a onclick="modifReservationChambre('+rows[i].id_reservation+')"><i class="fa fa-edit fa-fw"></i></a><a onclick="supprimeReservation('+rows[i].id_reservation+')"><i class="fa fa-close fa-fw"></i></a</th></tr>';
            }
            return document.getElementById('tableaureservation').innerHTML = tab;
        }
    });
}

/*
Select tout les agences
Author : Mezrani Nourhene
*/

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
                tab= tab+'<tr><th>'+rows[i].id_agence+'</th><th>'+rows[i].nomAgence+'</th><th>'+rows[i].responsableAgence+'</th><th>'+rows[i].mailAgence+'</th><th>'+rows[i].telephoneAgence+'</th><th>'+rows[i].nbClientAgence+'</th><th><a onclick="modifGestionAgences('+rows[i].id_agence+')"><i class="fa fa-edit fa-fw"></i></a><a onclick="supprimeAgences('+rows[i].id_agence+')"><i class="fa fa-close fa-fw"></i></a></th></tr>';

            }
            return document.getElementById('tableauagence').innerHTML = tab;
        }
    });
}

/*
suppression tout les agences
Author : Mezrani Nourhene
*/

function supprimeAgences(argument) {
    if(confirm("Voulez vous vraiment supprimer cette agence ?")){

        querygetSupprimeAgences = "DELETE FROM `agenceVoyage` WHERE `id_agence`="+argument;
        bdd.connection.query(querygetSupprimeAgences);
        alert("Votre agence est supprimer!");
    }
    return window.location.reload();
}

/*
suppression tout les resrvations chambres
Author : Mezrani Nourhene
*/

function supprimeReservation(argument) {
    if(confirm("Voulez vous vraiment supprimer cette reservation ?")){

        querygetSupprimeReservation = "DELETE FROM `reservation` WHERE `id_reservation`="+argument;
        bdd.connection.query(querygetSupprimeReservation);
        alert("Votre Reservation est supprimer!");
    }
    return window.location.reload();
}

/*
confirmation avant modification tout les agences
Author : Mezrani Nourhene
*/

function modifGestionAgences(argument){
    if(confirm("Voulez vous vraiment modifier cette agence ?")){
        sessionStorage.setItem('idAgences', argument);
        window.location.href ='modifGestionAgences.html';
    }
}
/*
afficher valeurs a modifier tout les agences
Author : Mezrani Nourhene
*/
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
            document.getElementById('aResponsable').value = rows[0].responsableAgence;
            document.getElementById('aE-mail').value = rows[0].mailAgence;
            document.getElementById('aTelephone').value = rows[0].telephoneAgence;
            document.getElementById('cNombre').value = rows[0].nbClientAgence;
        }
    });

    //bdd.connection.end();
}

/*
confirmation avant modification tout les resrvations chambres
Author : Mezrani Nourhene
*/

function modifReservationChambre(argument){
    if(confirm("Voulez vous vraiment modifier cette réservation ?")){
        sessionStorage.setItem('idChambre', argument);
    }
    window.location.href ='modifReservationChambre.html';
}

/*
afficher valeurs a modifier tout les resrvations chambres
Author : Mezrani Nourhene

*/
function modifReservationChambreM(){

    querygetReservtion= "SELECT cl.nomClient, cl.prenomClient, ch.nbLit, ch.typeChambre,   r.etatReservation, ch.id_chambre, r.dateDebut, r.dateFin FROM reservation r, pole p,  employe e, chambre ch, client cl WHERE ch.id_reservation ="+sessionStorage.getItem('idChambre')+" AND ch.id_reservation =r.id_reservation AND cl.id_client = r.id_client AND p.id_pole= r.id_pole AND P.nomPole='Hébergement' AND e.id_employe = r.id_employe";

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
            document.getElementById('sReservation').value = rows[0].etatReservation;
        }
    })
}

/*
modification  l'agences
Author : Mezrani Nourhene
*/

function modifAgences(){
    var nomAgence = document.getElementById('aNom').value;
    var responsableAgence = document.getElementById('aResponsable').value;
    var mailAgence = document.getElementById('aE-mail').value;
    var telephoneAgence = document.getElementById('aTelephone').value;
    var nbClientAgence = document.getElementById('cNombre').value;
    var idAgence = document.getElementById('aNombre').value;

    queryModification="UPDATE agenceVoyage SET `nomAgence`='"+ nomAgence +"',`responsableAgence`='"+ responsableAgence +"',`mailAgence`='"+ mailAgence +"',`telephoneAgence`="+ telephoneAgence +",`nbClientAgence`="+ nbClientAgence +" WHERE `id_agence`=" + idAgence + ";";

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

/*
modification  chambre
Author : Mezrani Nourhene
*/

function modifChambre(){
    queryModificationC="UPDATE reservation r, pole p,  employe e, chambre ch, client cl SET cl.nomClient='"+document.getElementById('nClient').value +"', cl.prenomClient='"+document.getElementById('pClient').value +"', ch.nbLit='"+document.getElementById('lNombre').value +"', ch.typeChambre='"+document.getElementById('cType').value +"', r.etatReservation='"+document.getElementById('sReservation').value +"', r.dateDebut='"+document.getElementById('eDate').value +"', r.dateFin='"+document.getElementById('sDate').value +"' WHERE r.id_reservation="+sessionStorage.getItem('idChambre')+" AND ch.id_chambre="+document.getElementById('cNombre').value +" AND ch.id_reservation =r.id_reservation AND cl.id_client = r.id_client AND p.id_pole= r.id_pole AND P.nomPole='Hébergement' AND e.id_employe = r.id_employe";

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

/*
Permet de récupérer les statistiques du nombre de remblisage
Author : Mezrani Nourhene
*/
function getStatsRemplissage(callback)
{

    query = "SELECT COUNT(id_reservation)AS reservation FROM `reservation` WHERE `etatReservation`='1' AND `typeResarvation`='Hebergement';";
    bdd.connection.query(query, function(err, result)
    {
        if (err) {
            return console.log(err, null);
        }else {
            var nombreDeReservation = result[0].reservation;
            var tab = [{'title': 'Nombre de chambre reserver', 'value': nombreDeReservation},{'title': 'Nombre de chambre', 'value':60}];

            callback(null, tab);
        }
    });
}
/*
Permet de récupérer les statistiques du nombre d'avis
Author : Mezrani Nourhene
*/

function getStatsAvis(callback)
{

    query = "SELECT noteHebergement,COUNT( `noteHebergement`) AS hebergement FROM `evaluation` GROUP BY `noteHebergement`;";
    bdd.connection.query(query, function(err, result)
    {
        if (err) {
            return console.log(err, null);
        }else {
        var note =[0,0,0,0,0];
        for(var i = 0; i <result.length; i++){
        note[i] = result[i].hebergement;
        }
            var tab =[
                {
                    "Notes":"1",
                    "visits":note[0],
                },
                {
                    "Notes":"2",
                    "visits":note[1],
                },
                {
                    "Notes":"3",
                    "visits":note[2],
                },
                {
                    "Notes":"4",
                    "visits":note[3],
                },
                {
                    "Notes":"5",
                    "visits":note[4],
                }];


/*                     result[i].noteHebergement,
                                        "visits": result[i].hebergement ,*/
                };

        callback(null, tab);
    });
}