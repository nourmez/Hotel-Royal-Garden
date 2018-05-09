let BDD = require('./BDD');
let bdd = new BDD();

module.exports = class Auth {

    connexionUser (login, password) {
        let query = "SELECT * FROM `identifiant` WHERE login='" + login + "' AND password='" + password + "';";

        bdd.connection.query(query, function(err, rows, fields) {
            if(err){
                console.log("Connexion échoué.");
                console.log(err);
                return;
            }

            console.log("Connexion réussi.", rows[0].id);
            window.location.href="./view/acceuil.html"
        });
    }
};