var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var countries = require('./data/countries');

var app = express();

//Requiring the API
var api = require('./routes/api');

//Setting View Engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(__dirname + '/public'));

//Setting up the API
app.use('/api', api);

console.log('Express App listening to Port 8888');
app.listen(8888);

module.exports = app;
