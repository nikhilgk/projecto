var routes = {};


routes.load = function(request, response) {
	request.models.person.create([
	    {
	        name: "John",
	        surname: "Doe",
	        age: 25,
	        male: true
	    },
	    {
	        name: "Liza",
	        surname: "Kollan",
	        age: 19,
	        male: false
	    }
	], function (err, items) {
	    // err - description of the error or null
	    // items - array of inserted items
	});
	response.send('Hello World! - Person Created');
}

routes.hello = function(request, response) {
	request.models.person.find({surname: "Doe" }, 3, function (err, people) {
	    response.write(people[0].fullName() + " says : ");
	    response.end('Hello World!');
	});
}

module.exports = routes;
