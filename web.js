var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/app'));


//*******************DB Start
var pg = require('pg');
var orm = require("orm");

app.use(orm.express(process.env.DATABASE_URL, {
    define: function (db, models) {
		db.load("./db/models", function (err) {
		    console.log("Loaded Models")
		});
	    models.person = db.models.person;    
    }
}));

var dbroutes = require("./db/routes")
app.get('/dbload', dbroutes.load)
app.get('/dbhello', dbroutes.hello);
//*******************DB End

//*******************Mongo Start
//Based on https://github.com/madhums/nodejs-express-mongoose-demo
var mongoose = require('mongoose')

mongoose.connect(process.env.MONGOHQ_URL)
var models_path = __dirname + '/mongo/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
})

var mongoroutes = require("./mongo/routes")
app.get('/mongoload', mongoroutes.load)
app.get('/mongohello', mongoroutes.hello);
//*******************Mongo End


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

