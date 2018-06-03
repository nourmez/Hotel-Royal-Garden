let BDD = require('../model/BDD');
let bdd = new BDD();
function getName()
{
    query = "SELECT nomEmploye , prenomEmploye FROM employe WHERE id_employe = 2";
    bdd.connection.query(query, function(err, result){
        return document.getElementById('monNom').innerHTML = 'Bienvenue, ' + result[0].nomEmploye + ' '+result[0].prenomEmploye;
    });

}