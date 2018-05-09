var mysql = require('mysql');

module.exports = class BDD {

    constructor () {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'test'
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