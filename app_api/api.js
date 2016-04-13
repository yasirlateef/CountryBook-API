var express = require('express'),
		router = express.Router(),
		config = require('../config');


// Routes for Countries
router.get('/countries/all', function(req, res){
	res.json(config.countries);
});

router.get('/countries/:countryName',  function(req, res){
	var countries = config.countries,
			paramName = req.params.countryName;
			res.json(countryLookup(countries, paramName));
});

router.get('/countries/:countryName/:attrib',  function(req, res){
	var countries = config.countries,
			paramName = req.params.countryName,
			paramAttrib = req.params.attrib;

			var searchResult = countryFeatureLookup(countries, paramName, paramAttrib);

			res.json({ [paramAttrib] : searchResult});
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

var regionLookup = function(listOfRegions, listOfCountries, regionName){
	var found = false, countriesFound = []; 
	listOfRegions.forEach(function(currentItem, i){
		if(currentItem.title === regionName){
				listOfCountries.forEach(function (currentCountry, i){
					found = true;
					if(currentCountry.region === regionName){
						countriesFound.push(currentCountry);
					}
				});
		} else {
			response = {'message' : 'Region Not Found!'};
		}
		});
	if(found){
		return countriesFound;
	} else {
		return response;
	}
}

module.exports = router;