var express = require('express'),
		mongoose = require('mongoose'),
		cors = require('cors'),
		app = express(),
		api = require('./app_api/api');
		global.app_mongoCollections = {};

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/apidev', function(err){
	if(err)
		console.log(err)
	else
		console.log('Connected Successfully!');
		global.app_mongoCollections = {
			countries : mongoose.connection.db.collection('countries'),
			isocountrynames : mongoose.connection.db.collection('isocountrynames'),
			isolanguagenames : mongoose.connection.db.collection('isolanguagenames'),
			regions : mongoose.connection.db.collection('regions')
		}
});

// Middleware
app.use(cors());
app.use(express.static('public'));

// Routing
app.use('/api', api.router_countries);
app.use('/api/regions', api.router_regions);
	
//Setting up port
app.listen(process.env.PORT || 2000);
console.log('App listening to Port 2000');

module.exports = app;