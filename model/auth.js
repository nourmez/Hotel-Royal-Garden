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

            }else if(rows[0].id_droit == 1){

                bdd.connection.end();
                sessionStorage.setItem('nomUtilisateur', rows[0].loginEmploye);
                window.location.href="./view/restauration.html";

            }else if(rows[0].id_droit == 2){
                sessionStorage.setItem('nomUtilisateur', rows[0].loginEmploye);
                window.location.href="./view/hebergement.html";
                bdd.connection.end();
            }
        });
    }
};