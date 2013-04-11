projecto
========

Angular-Node-Mongo-Postgres-Heroku seed project

### Prerequistes
#### Postgres
Install Postgres on your local machine and create a database. Based on your setup, derive the postgres database url which is of the following format:
	postgres://<user>:<password>@localhost/<database>
This URL needs to be set as the value for the DATABASE_URL in the file `run`
	postgres://postgres:postgres@localhost/projecto

#### Heroku
Install the heroku toolbelt for you OS from
	https://toolbelt.heroku.com/

#### Node JS
Install from
	http://nodejs.org/download/
Or you can install node.js from source by cloning :
	git clone git://github.com/joyent/node.git
	v0.10.3
	cd node/
	./configure 
	make
	sudo make install

### Create the heroku app 
	heroku apps:create <projectname>
	heroku addons:add mongohq 
	heroku addons:add heroku-postgresql
	heroku pg:promote HEROKU_POSTGRESQL_GREEN	
	heroku config -a <projectname>

### Clone and setup your project:
	git clone https://github.com/nikhilgk/projecto.git
	cd projecto 
	rm -r .git
	cd ..
	mv projecto <projectname>
	cd <projectname>
	npm install

In the file `run` change the value for `DATABASE_URL` from the Postgres install above. Please note that you cannot connect to the heroku postgres green database that you configured above from an external source. However you can connect to the mongohq database externally. To setup to connect to Mongo, in the file `run` set the value for the value`MONGOHQ_URL` from Heroku config. You can get this by running
	heroku config -a <projectname>
You can set this to any other mongo instance as long as it is of the form defined at `http://docs.mongodb.org/manual/reference/connection-string/`

The following urls can be used for testing your configuration:
	http://localhost:5000/ (Angular site)
	http://localhost:5000/dbload (Load to DB)
	http://localhost:5000/dbhello (Read from DB)
	http://localhost:5000/mongoload (Load to Mongo)
	http://localhost:5000/mongohello (Read from Mongo)

The following urls can be usedd for testing your Heroku deployment:
	http://<projectname>.herokuapp.com/ (Angular site)
	http://<projectname>.herokuapp.com/dbload (Load to DB)
	http://<projectname>.herokuapp.com/dbhello (Read from DB)
	http://<projectname>.herokuapp.com/mongoload (Load to Mongo)
	http://<projectname>.herokuapp.com/mongohello (Read from Mongo)