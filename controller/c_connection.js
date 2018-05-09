document.getElementById('seConnecter').addEventListener("click", () => {
    let Auth = require('./model/auth');
    let authentification = new Auth();

    let login=document.getElementById('identifiant').value;
    let mdp=document.getElementById('motdepasse').value;

    authentification.connexionUser(login, mdp);
}, false);