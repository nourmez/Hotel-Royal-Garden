let BDD = require('./BDD');
let bdd = new BDD();

module.exports = class Auth {

    connexionUser(login, mdp) {
        let query = "SELECT e.id_employe, e.nomEmploye, e.prenomEmploye, e.adresseEmploye, e.dateEmpoche, e.posteEmploye, e.loginEmploye, e.mdpEmploye, e.id_droit, e.id_pole, p.nomPole FROM employe e join pole p on p.id_pole = e.id_pole WHERE e.loginEmploye='" + login + "' AND e.mdpEmploye='" + mdp + "';";

        bdd.connection.query(query, function (err, rows, fields) {
            if (err) {
                console.log("Connexion échoué.");
                console.log(err);
                return;
                //etat = false;
            }
            else if (rows[0].nomPole == "Restauration")
            {
                bdd.connection.end();
                window.location.href = "./view/acceuil.html";

            }
            else if (rows[0].nomPole == "Hébergement")
            {
                bdd.connection.end();
                window.location.href = "view/hebergement.html";
            }
        });
    }
};