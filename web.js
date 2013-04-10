var express = require('express');
var pg = require('pg');
var orm = require("orm");
var dbroutes = require("./dbroutes")



var app = express();
app.use(express.static(__dirname + '/app'));
console.log(process.env.DATABASE_URL)

//app.use(orm.express("postgres://postgres:postgres@localhost/projecto", {
app.use(orm.express(process.env.DATABASE_URL, {
	
    define: function (db, models) {
		db.load("./dbmodels", function (err) {
		    console.log("Loaded Models")
		});
	    models.person = db.models.person;    
    }
}));

app.get('/dbload', dbroutes.dbload)
app.get('/dbhello', dbroutes.dbhello);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

