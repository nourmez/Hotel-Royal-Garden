let BDD = require('../model/BDD');
let bdd = new BDD();

//Récupère toutes les entrées disponible dans la base de données
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

//Récupère tout les plats disponible dans la base de données
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

//Récupère tout les desserts disponible dans la base de données
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

//Récupère les données nécessaires à l'affichage des tables de réservation pour le directeur de restauration
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

//Permet de créer un nouveau menu dans la base de données
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


//Récupère les données nécessaires à l'affichage des menus
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

//Sert à supprimer un menu en base de données
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

//Sert à supprimer une réservation de restauration en base de données
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

//Sert à modifier une réservation de restauration en base de données
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

//Permet de récupérer la réservation à modifier
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

//Sert à modifier une réservation de restauration en base de données
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

//Permet de créer un chart donut avec le tableau de données passé en paramètres
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

//Permet de récupérer les statistiques du nombre de couvert
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

//Récupère toutes les alertes et servicesDivers
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

//Permet d'ajouter une demande de service
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

//Permet de déconnecter l'utilisateur à l'application
function deconnexion(){
    window.location.href="../index.html";
};