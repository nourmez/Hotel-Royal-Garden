let BDD = require('./BDD');
let bdd = new BDD();

module.exports = class Reservation{

    dashboardRestauration(){

        let query = "SELECT nomClient, prenomClient, nbLit, nbTable, nbCouvert\n" +
            "FROM `chambre`, `restaurant`, `reservation`, `client`\n" +
            "WHERE `chambre`.`id_reservation`=`reservation`.`id_reservation`\n" +
            "AND `restaurant`.`id_reservation`=`reservation`.`id_reservation`\n" +
            "AND `reservation`.`id_client` = `client`.`id_client`\n" +
            "AND DATE(now()) BETWEEN `reservation`.`dateDebut` AND `reservation`.`dateFin`;";

        bdd.connection.query(query,function (err, rows, fields) {
            //var etat;

            if (err) {
                console.log("Connexion échoué.");
                console.log(err);
                return;
                //etat = false;
            }
            return rows;
        });
    }
};