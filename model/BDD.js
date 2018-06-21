var mysql = require('mysql');

module.exports = class BDD {

    constructor () {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'royal_garden'
        });
        /*
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'id6264570_root',
            password : 'daniBDD',
            database : 'id6264570_royal_garden'
        });
         */

        this.connection.connect(function(err) {
            // in case of error
            if(err){
                console.log(err.code);
                console.log(err.fatal);
            }
        });
    }
};