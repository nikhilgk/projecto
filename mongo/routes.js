var mongoose = require('mongoose')
var Person = mongoose.model('Person')

var routes = {};
routes.load = function(request, response) {
	var person = new Person({
        name: "John",
        surname: "Doe",
        age: 25,
        male: true
    })
    person.save();
	var person = new Person({
	    name: "Liza",
	    surname: "Kollan",
	    age: 19,
	    male: false
    })
    person.save();
	response.send('Hello World! - Person Created');
}

routes.hello = function(request, response) {
	Person.find({surname: "Doe" }, function (err, people) {
	    response.write(people[0].fullName() + " says : ");
	    response.end('Hello World!');
	});
}

module.exports = routes;
