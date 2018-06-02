let BDD = require('./BDD');
let bdd = new BDD();

module.exports = class Auth {

    connexionUser (login, mdp) {
        //let query = "SELECT * FROM `identifiant` WHERE login='" + login + "' AND password='" + password + "';";
        //let query="SELECT `Id_employe`, `Nom_employe`, Prenom_emplye, `Id_droit`, `Id_pole` FROM `employe` WHERE `Login_emplye`= '" + login + "' AND `Mdp_emplye`='" + password + "';";
        let query="SELECT `id_employe`, `nomEmploye`, `prenomEmploye`, `adresseEmploye`, `dateEmbauche`, `posteEmploye`, `loginEmploye`, `mdpEmploye`, `id_droit`, `id_pole` FROM `employe` WHERE `loginEmploye`='"+ login +"' AND `mdpEmploye`='"+ mdp +"';";
        //let query="SELECT `id_employe`, `nomEmploye`, `prenomEmploye`, `adresseEmploye`, `dateEmbauche`, `posteEmploye`, `loginEmploye`, `mdpEmploye`, `id_droit`, `id_pole` FROM `employe` WHERE `loginEmploye`='dpinto' AND `mdpEmploye`='dani';";

        bdd.connection.query(query, function(err, rows, fields) {
            //var etat;

            if(err){
                console.log("Connexion échoué.");
                console.log(err);
                return;
                //etat = false;
            }else if(rows[0].id_droit == 1){
                /*test.defaultSession.cookies.set({url: 'http://myapp.com', name: 'prenom', value:row[0].prenomEmploye}, (error, cookies) => {
                    console.log(error, cookies)
                });*/

                //var monPrenom = rows[0].prenomEmploye;
                //callback(monPrenom);
                bdd.connection.end();
                window.location.href="./view/acceuil.html";

            }else if(rows[0].id_droit == 2){
                bdd.connection.end();
                //window.location.href="./view/acceuil2.html";
                //etat = true;
            }
            //return etat;
        });
        //return true;
    }
};