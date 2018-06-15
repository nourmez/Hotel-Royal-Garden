var mysql = require('mysql');

module.exports = class BDD {

    constructor () {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'royal_garden2'
        });

        this.connection.connect(function(err) {
            // in case of error
            if(err){
                console.log(err.code);
                console.log(err.fatal);
            }
        });
    }
};