var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var countries = require('./data/countries');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(__dirname + '/public'));

//Setting up the API
app.use('/api', require('./app_api/api'));
app.use('/api/regions', require('./app_api/api-regions'));

console.log('Express App listening to Port 8888');
app.listen(8888);

module.exports = app;
