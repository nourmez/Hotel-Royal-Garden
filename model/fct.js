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
                alert("Création du menu avec succés !");
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
        window.location.href="./view/modifReservation.html";
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

    /*
    $query= "SELECT `reservation`.`id_client`, `dateDebut`, `dateFin`, `id_chambre`, `nomClient`, `prenomClient`, SUM(`prixReservation`) as `prixTotal`, `etatReservation`\n" +
            "FROM `reservation`, `client`, `chambre`\n" +
            "WHERE `client`.`id_client` = `reservation`.`id_client`\n" +
            "AND `chambre`.`id_reservation` = `reservation`.`id_reservation`\n" +
            "GROUP BY `reservation`.`id_client`;";
    */
    $query= "SELECT `reservation`.`id_client`, `dateDebut`, `dateFin`, `id_chambre`, `nomClient`, `prenomClient`, `etatReservation`, `nbLit`\n" +
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
function validerFacture(idClient, prixTotal)
{
    var idEmploye = sessionStorage.getItem('idUtilisateur');

    if(confirm("Voulez-vous vraiment valider cette facturation ?")){
        $query= "UPDATE `reservation` SET `etatReservation`=1 WHERE `id_client`=" +idClient+ ";";

        bdd.connection.query($query, function (err, rows, fields) {

            if (err) {
                alert("Problème de validation de la facture.");
                console.log(err);
                return;
            }else{
                console.log("Validation de la facture avec succès !");
                bdd.connection.end();
                //window.location.reload(true);
            }
        });

        if (document.getElementById('reduction')!=0){
            prixTotal = prixTotal - (prixTotal*document.getElementById('reduction').value/100);
        }

        $querytwo= "INSERT INTO `reservation`(`typeResarvation`, `prixReservation`, `etatReservation`, `dateDebut`, `dateFin`, `id_client`, `id_pole`, `id_employe`) \n" +
                    "VALUES ('Validation facture',"+prixTotal+", '1', DATE(now()), DATE(now()), "+idClient+", 3, "+idEmploye+");";


        bdd.connection.query($querytwo, function (err, rows, fields) {

            if (err) {
                alert("Problème de validation de la facture.");
                console.log(err);
                return;
            }else{
                alert("Validation de la facture avec succès !");
                window.location.href="../view/facturesReception.html";
            }
        });
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
Sert à modifier une réservation de restauration en base de données
Author : PINTO Dani
*/
function getLaDemandeService(callback)
{
    var idDemande = sessionStorage.getItem('idDemandeService');

    $query= "SELECT `id_service`, `dateService`, `objetService`, `demanderService`, `etatDemande`, `id_client`, `id_employe` \n" +
        "FROM `servicedivers` \n" +
        "WHERE `id_service` = "+ idDemande +";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupèration de la demande service.");
            console.log(err);
            return;
        }else{
            console.log("Récupèration de la demande de service avec succès.");
            callback(null,rows);
        }

    });
}

/*
Sert à modifier une réservation de restauration en base de données
Author : PINTO Dani
*/
function voirDemandeService(idDemande)
{
    sessionStorage.setItem('idDemandeService', idDemande);
    window.location.href="../view/voirDemandeService.html";
}

/*
Sert à valider la demande d'un service
Author : PINTO Dani
*/
function validerLaDemandeService(idService)
{

    $query= "UPDATE `servicedivers` SET `etatDemande`=1 WHERE `id_service`="+idService+";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de validation de la demande service.");
            console.log(err);
            return;
        }else{
            console.log("Validation de la demande de service avec succès.");
            window.location.href="../view/voirDemandeService.html";
        }

    });
}

/*
Sert à valider la demande d'un service
Author : PINTO Dani
*/
function validerEtatRapport(idRapport)
{

    $query= "UPDATE `rapport` SET `etatRapport`=1 WHERE `id_rapport`="+idRapport+";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de validation du rapport.");
            console.log(err);
            return;
        }else{
            console.log("Validation du rapport avec succès.");
            window.location.href="../view/voirAlerte.html";
        }

    });
}

/*
Sert à valider la demande d'un service
Author : PINTO Dani
*/
function enCoursEtatRapport(idRapport)
{

    $query= "UPDATE `rapport` SET `etatRapport`=2 WHERE `id_rapport`="+idRapport+";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de validation du rapport.");
            console.log(err);
            return;
        }else{
            console.log("Validation du rapport avec succès.");
            window.location.href="../view/voirAlerte.html";
        }

    });
}

/*
Sert à valider la demande d'un service
Author : PINTO Dani
*/
function refuserEtatRapport(idRapport)
{

    $query= "UPDATE `rapport` SET `etatRapport`=0 WHERE `id_rapport`="+idRapport+";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de refus du rapport.");
            console.log(err);
            return;
        }else{
            console.log("Validation du refus du rapport avec succès.");
            window.location.href="../view/voirAlerte.html";
        }

    });
}

/*
Sert à pouvoir modifier un rapport
Author : PINTO Dani
*/
function voirRapport(idRapport)
{
    sessionStorage.setItem('idRapport', idRapport);
    window.location.href="../view/voirAlerte.html";
}

/*
Sert à consulter un rapport
Author : PINTO Dani
*/
function getLeRapport(callback)
{
    var idRapport = sessionStorage.getItem('idRapport');

    $query= "SELECT `id_rapport`, `typeRapport`, `messageRapport`, `etatRapport`, `id_pole`, `id_employe` FROM `rapport` \n" +
            "WHERE `id_rapport` ="+idRapport+";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de récupèration du rapport.");
            console.log(err);
            return;
        }else{
            console.log("Récupèration du rapport avec succès.");
            callback(null,rows);
        }

    });
}

/*
Sert à valider la demande d'un service
Author : PINTO Dani
*/
function enCoursLaDemandeService(idService)
{

    $query= "UPDATE `servicedivers` SET `etatDemande`=2 WHERE `id_service`="+idService+";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de passage de la demande de service à 'En cours'.");
            console.log(err);
            return;
        }else{
            console.log("La demande de service a été passé à 'En cours' avec succès.");
            window.location.href="../view/voirDemandeService.html";
        }

    });
}

/*
Sert à refuser la demande d'un service
Author : PINTO Dani
*/
function refuserLaDemandeService(idService)
{

    $query= "UPDATE `servicedivers` SET `etatDemande`=0 WHERE `id_service`="+idService+";";

    bdd.connection.query($query, function (err, rows, fields) {

        if (err) {
            console.log("Problème de refus de la demande de service.");
            console.log(err);
            return;
        }else{
            console.log("La demande de service a été refusée avec succès.");
            window.location.href="../view/voirDemandeService.html";
        }

    });
}

/*
Permet de récupèrer le nom de l'utilisateur connecté
Author : PINTO Dani
*/
function supprimerLigneFactures(idReservation)
{
    query = "DELETE FROM `reservation` WHERE `id_reservation` ="+ idReservation +";";

    if(confirm('Voulez-vous supprimer cette ligne de réservation ?')) {
        bdd.connection.query(query, function (err, result) {
            if (err) {
                callback(err, null);
                alert('Erreur de suppression de cette ligne de facture.');
                return;
            } else {
                window.location.reload(true);
            }
        });
    }
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
function drawChart(data, idDiv)
{
    AmCharts.makeChart( idDiv, {
        "type": "pie",
        "theme": "light",
        "colors": ["#72de62", "#51e8c2", "#7ac1d1", "#e8e581"],
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
Permet de récupérer les statistiques du nombre de couvert
Author : PINTO Dani
*/
function getStatsTables(callback)
{

    query = "SELECT COUNT(`reservation`.`id_reservation`) as nbTableReserver\n" +
            "FROM `reservation`, `restaurant`\n" +
            "WHERE `reservation`.`id_reservation` = `restaurant`.`id_reservation`\n" +
            "AND DATE(now()) BETWEEN `reservation`.`dateDebut` AND `reservation`.`dateFin`\n" +
            "AND `reservation`.`etatReservation` = 0\n" +
            "AND `reservation`.`id_pole`=1;";
    bdd.connection.query(query, function(err, result)
    {
        if (err) {
            return console.log(err, null);
        }else {
            var nombreTable = result[0].nbTableReserver;
            var tab = [{'title': 'Nombre de table réservées', 'value': nombreTable},{'title': 'Nombre de table total', 'value': 60}];

            callback(null, tab);
        }
    });
}

/*
Permet de récupérer le CA journalier
Author : PINTO Dani
*/
function getCAJournalier(callback)
{
    query = "SELECT SUM(`prixReservation`) as CAJournalier \n" +
            "FROM `reservation` \n" +
            "WHERE `typeResarvation` != 'Validation facture';";

    bdd.connection.query(query, function(err, result)
    {
        if (err) {
            return console.log(err, null);
        }else {
            var CAJournalier = result[0].CAJournalier;
            var tab = [{'title': 'CA Journalier', 'value': CAJournalier },{'title': 'Objectif', 'value': 100000}];

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
    if(idPole==4){
        query = "SELECT `id_rapport`, `typeRapport`, `messageRapport`, `etatRapport`, `id_pole`, `id_employe` \n" +
                "FROM `rapport`;";
    }else{
        query = "SELECT `id_rapport`, `typeRapport`, `messageRapport`, `etatRapport`, `id_pole`, `id_employe` \n" +
            "FROM `rapport` \n" +
            "WHERE `id_pole` = "+ idPole +";";
    }

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
function ajouterRapport(objet, message,idPole)
{
    /*
    var objet = document.getElementById('objetDemande').value;
    var message = document.getElementById('descriptionDemande').value;
    var idPole = document.getElementById('poles').value;
    */
    var idEmploye = sessionStorage.getItem('idUtilisateur');

    $query = "INSERT INTO `rapport`(`typeRapport`, `messageRapport`, `id_pole`, `id_employe`) " +
            "VALUES ('"+ objet +"','"+ message +"',"+ idPole +","+ idEmploye +");";

    if(objet != '' && message != '') {
        bdd.connection.query($query, function (err, result) {
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
    window.location.href="../index2.html";
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
                tab= tab+'<tr>' +
                        '<td id="">Nº '+rows[i].id_chambre+'</td>' +
                        '<td id="">'+rows[i].typeChambre+'</td>' +
                        '<td id="">'+rows[i].nbLit+'</td>' +
                        '<td id="">'+rows[i].dateDebut+'</td>' +
                        '<td id="">'+rows[i].dateFin+'</td>' +
                        '<td id="">'+rows[i].nomClient+' '+rows[i].prenomClient+'</td>' +
                        '<td id="">'+rows[i].etatReservation+'</td>' +
                        '<td id="">' +
                        '<i onclick="modifReservationChambre('+rows[i].id_reservation+')" class="fa fa-edit fa-fw"></i>' +
                        '<i onclick="supprimeReservation('+rows[i].id_reservation+')" class="fa fa-close fa-fw"></i>' +
                        '</td></tr>';
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
                tab= tab+'<tr>' +
                            '<td>Nº '+rows[i].id_agence+'</td>' +
                            '<td>'+rows[i].nomAgence+'</td>' +
                            '<td>'+rows[i].responsableAgence+'</td>' +
                            '<td>'+rows[i].mailAgence+'</td>' +
                            '<td>'+rows[i].telephoneAgence+'</td>' +
                            '<td>'+rows[i].nbClientAgence+'</td>' +
                            '<td>' +
                            '<i onclick="modifGestionAgences('+rows[i].id_agence+')" class="fa fa-edit fa-fw"></i>' +
                            '<i onclick="supprimeAgences('+rows[i].id_agence+')" class="fa fa-close fa-fw"></i>' +
                            '</td>' +
                            '</tr>';

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