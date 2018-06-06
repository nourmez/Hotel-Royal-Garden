var mysql = require('mysql');

module.exports = class BDD {

    constructor () {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'GADDelta15122013',
            database : 'royal_garden'
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