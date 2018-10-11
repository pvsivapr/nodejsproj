var mysql = require('mysql');
var dbsettings = require('./dbcredents.json');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(dbsettings);

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();