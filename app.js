var express = require("express");
var bodyParser = require("body-parser");

//for/if using common services
/*
var ConnService = require('./ProjFiles/Services/ConnectionService.js');
var conn = ConnService.GetConnection1();
*/

//for/if using seperate services if we use above lines then the connection will be created / will be called multiple times


var app = express();

/*
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
*/

var port = process.env.PORT || 3000;
// app.use(express.json());
// app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//var routes = require("./ProjFiles/Services/routes.js")(app, conn);//for common services
//var routes = require("./ProjFiles/Services/onthegoinfo.js")(app, conn);//for common services
//var routes = require("./ProjFiles/Services/seperateroutes.js")(app, conn);//for seperate services
var routes = require('./ProjFiles/Services/SeperatingEachService/seperateroutes.js');//for seperate services
//app.use('/api', routes);
app.use('/', routes);



/*
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
*/
var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});
