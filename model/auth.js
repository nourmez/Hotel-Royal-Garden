let BDD = require('./BDD');
let bdd = new BDD();

module.exports = class Auth {

    connexionUser (login, mdp) {
        let query="SELECT `id_employe`, `nomEmploye`, `prenomEmploye`, `adresseEmploye`, `dateEmbauche`, `posteEmploye`, `loginEmploye`, `mdpEmploye`, `id_droit`, `id_pole` FROM `employe` WHERE `loginEmploye`='"+ login +"' AND `mdpEmploye`='"+ mdp +"';";

        bdd.connection.query(query, function(err, rows) {
            //var etat;

            if(err){
                console.log("Connexion échoué.");
                console.log(err);
                return;

            } else {
                sessionStorage.setItem('nomUtilisateur', rows[0].loginEmploye);
                sessionStorage.setItem('idUtilisateur', rows[0].id_employe);
                sessionStorage.setItem('idPole', rows[0].id_pole);

                if (rows[0].id_pole == 1) {

                        window.location.href = "./view/restauration.html";
                        bdd.connection.end();

                } else if (rows[0].id_pole == 2) {

                        window.location.href = "./view/hebergement.html";
                        bdd.connection.end();

                } else if (rows[0].id_pole == 3) {

                        window.location.href = "./view/reception.html";
                        bdd.connection.end();
                } else if (rows[0].id_pole == 4) {

                    window.location.href = "./view/directeurGenerale.html";
                    bdd.connection.end();
                }
                else if (rows[0].id_pole == 8) {

                    window.location.href = "./view/employe.html";
                    bdd.connection.end();
                }
            }
        });
    }
};