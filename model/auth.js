let BDD = require('./BDD');
let bdd = new BDD();

module.exports = class Auth {

    connexionUser (login, password) {
        //let query = "SELECT * FROM `identifiant` WHERE login='" + login + "' AND password='" + password + "';";
        let query="SELECT `Id_employe`, `Nom_employe`, `Prenom_emplye`, `Id_droit`, `Id_pole` FROM `employe` WHERE `Login_emplye`= '" + login + "' AND `Mdp_emplye`='" + password + "';";

        bdd.connection.query(query, function(err, rows, fields) {
            if(err){
                console.log("Connexion échoué.");
                console.log(err);
                return;
            }
            //const prenom = rows[0].login;
            console.log("Connexion réussi.", rows[0].id);
            window.location.href="./view/acceuil.html"
        });
    }
};