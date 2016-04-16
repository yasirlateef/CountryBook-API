var express = require('express'),
		router = express.Router(),
		config = require('../config'),
		countries = config.countries;

// Routes for Countries
router.get('/countries/all', function(req, res){
	res.json(config.countries);
});

router.get('/countries/:countryName',  function(req, res){
	var paramName = req.params.countryName;
			res.json(countryLookup(countries, paramName));
});

router.get('/countries/:countryName/:attrib',  function(req, res){
	var paramName = req.params.countryName,
			paramAttrib = req.params.attrib;

			var searchResult = countryFeatureLookup(countries, paramName, paramAttrib);

			res.json({ [paramAttrib] : searchResult});
});

// Route for Search Query String
router.get('/search/', function(req, res){
	res.json(lookupNamebyISO(countries, req.query.isocode));
});

//Helper Functions
var countryLookup = function(listOfCountries, countryName){
	var response;
	listOfCountries.forEach(function(currentItem, i){
		if(currentItem.name === countryName){
			response = currentItem;
			return;
		};
	});
	return response;
}

var countryFeatureLookup = function(listOfCountries, countryName, countryAttrib){
	var response;
	listOfCountries.forEach(function(currentItem, i){
		if(currentItem.name === countryName){
			response = currentItem[countryAttrib];
			return;
		};
	});
	return response;
}

var lookupNamebyISO = function(listOfCountries, isoCode){
	var response;
	listOfCountries.forEach(function(currentItem, i){
		if(currentItem.altSpellings[0].toLowerCase() === isoCode.toLowerCase()){
			response = { 'name' :  currentItem.name };
			return;
		};
	});
	return response;
}
module.exports = router;