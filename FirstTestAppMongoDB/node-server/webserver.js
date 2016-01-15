/**
 * Created by Hasan on 1/11/2016.
 */

var express = require('express');
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var path = require('path');
var app = express();

var users = require("./userHandler");

var dataBaseName = "userData";
var mongoPort = "27017";
var rootPath = path.normalize(__dirname + '/../');
mongoose.connect('mongodb://localhost:' + mongoPort + '/' + dataBaseName);

app.use(express.static(rootPath + '/app'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/json'}));
app.use(methodOverride());


// get all Users
app.get('/data/', users.getUsers);

app.post('/data/save', users.saveUser);

app.delete('/data/delete/:user_id', users.deleteUser);


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("Mongo is using port " + mongoPort + " and using database " + dataBaseName);
console.log("App listening on port 8080");