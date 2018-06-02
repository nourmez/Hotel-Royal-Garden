let Reservation = require('../model/reservation');
let reservation = new Reservation();

document.getElementById('deconnexion').addEventListener("click", () => {
    window.location.href="../index.html";
}, false);