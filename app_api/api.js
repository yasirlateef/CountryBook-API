var express = require('express'),
		mongoose = require('mongoose'),
		router = express.Router();

router.get('/countries/all', function(req,res){
	var countries = global.app_mongoCollections.countries;
	countries.find({}).toArray(function(err, docs) {
		if(err)
			res.json(err)
		else
			res.json(docs);
	});	
	
});


router.get('/countries/:countryName',  function(req, res){
	var countries = global.app_mongoCollections.countries;
	countries.findOne({'name' : req.params.countryName}, function(err, doc){
		if(err)
			res.json(err)
		else 
			res.json(doc)
	})
});

router.get('/countries/:countryName/:attrib',  function(req, res){
	var countries = global.app_mongoCollections.countries;
	countries.findOne({'name' : req.params.countryName},  [req.params.attrib], function(err, doc){
		if(err)
			res.json(err)
		else 
			res.json(doc)
	});
});

router.get('/isocountrycodes/all', function(req, res){
	var isocountrynames = global.app_mongoCollections.isocountrynames;
	isocountrynames.find({}, function(err, docs){
		if(err)
			res.json(err)
		else 
			res.json(docs)
	})	
})

//Base Route for Query String
router.get('/isocountrycodes/search', function(req, res){
	var isocountrynames = global.app_mongoCollections.isocountrynames;
	isocountrynames.findOne({[req.query.attr] : [req.query.value] }, function(err, doc){
		if(err)
			res.json(err)
		else 
			res.json(doc)
	})	
})

router.get('/isolanguagecodes/all', function(req, res){
	var isolanguagenames = global.app_mongoCollections.isolanguagenames;
	isolanguagenames.find({}, function(err, docs){
		if(err)
			res.json(err)
		else 
			res.json(docs)
	})	
})

//Base Route for Query String
router.get('/isolanguagecodes/search/', function(req, res){
	var isolanguagenames = global.app_mongoCollections.isolanguagenames;
	isolanguagenames.findOne({[req.query.attr] : [req.query.value] }, function(err, doc){
		if(err)
			res.json(err)
		else 
			res.json(doc)
	})	
}) 

module.exports = {
	router_countries : router,
	router_regions : require('./api-regions')
}