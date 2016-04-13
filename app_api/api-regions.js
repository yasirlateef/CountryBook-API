var express = require('express'),
		router = express.Router(),
		config = require('../config');


//Routes for Regions and subregions
router.get('/', function(req,res){
	res.json(config.regions);
});

router.get('/:regionName', function(req, res){
	var regions = config.regions,
			countries = config.countries;
	res.json(regionLookup(regions, countries, req.params.regionName));
});



//Helper Functions

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