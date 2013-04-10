projecto
========

Angular-Node-Mongo-Postgres-Heroku seed project

### Prerequistes
Postgres: Install Postgres on your local machine and create a database. Based on your setup, derive the postgres database url which is of the following format:
	postgres://<user>:<password>@localhost/<database>
This URL needs to be set as the value for the DATABASE_URL in the file "run"
	postgres://postgres:postgres@localhost/projecto

Install the heroku toolbelt for you OS

### Install node.js from source:
	git clone git://github.com/joyent/node.git
	v0.10.3
	cd node/
	./configure 
	make
	sudo make install

### Clone and setup your project:
	git clone https://github.com/nikhilgk/projecto.git
	cd projecto 
	rm -r .git
	cd ..
	mv projecto <projectname>
	cd <projectname>
	npm install

### Create a heoku app 

heroku apps:create <projectname>
heroku addons:add mongohq 
heroku addons:add mongolab
heroku addons:add heroku-postgresql
heroku pg:promote HEROKU_POSTGRESQL_GREEN

heroku config -a <projectname>

