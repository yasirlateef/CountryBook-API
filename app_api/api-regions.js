var express = require('express'),
		mongoose = require('mongoose'),
		router = express.Router();



router.get('/all', function(req, res){
	var regions = global.app_mongoCollections.regions;
	regions.find().toArray(function(err,docs){
		if(err)
			res.json(err)
		else
			res.json(docs)
	})
});

router.get('/:regName', function(req, res){
	var regions = global.app_mongoCollections.regions;
	var countries = global.app_mongoCollections.countries;
	var response = {};
	regions.findOne({'title' : req.params.regName}, function(err,doc){
		if(err)
			res.json(err)
		else
			response.region = doc;
	});
	countries.find({'region': req.params.regName}).toArray(function(err,docs){
		if(err)
			res.json(err)
		else
			response.countriesbyRegion = docs;
			res.json(response);
	});
});


router.get('/:regionName/:subRegion', function(req, res){
	var countries = global.app_mongoCollections.countries;
	countries.find({'region' : req.params.regionName, 'subregion' : req.params.subRegion}).toArray(function(err, docs){
		if(err)
			res.json(err)
		else
		res.json(docs)
	})
});


module.exports = router;