var express = require('express'),
		mongoose = require('mongoose'),
		cors = require('cors'),
		app = express(),
		api = require('./app_api/api');
		global.app_mongoCollections = {};



//Connecting to mlab DB
mongoose.connect('mongodb://cpduser:cpdpass@ds023418.mlab.com:23418/countrypedia', function(err){
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
app.use(express.static('app_client'));

// Routing
app.get('/', function(req,res){ res.sendFile(__dirname + '/app_client/ngSrc/views/index.html');});
app.use('/api', api.router_countries);
app.use('/api/regions', api.router_regions);
	
//Setting up port
app.listen(process.env.PORT || 2000);
console.log('App listening to Port 2000');

module.exports = app;