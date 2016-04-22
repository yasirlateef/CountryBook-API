var http = require('http'),
    body = '';

http.get('http://api.worldbank.org/countries/kos?format=json', function(res){
	res.on('data', function(d){
		body +=d;
	})

	res.on('end',function(d){
		body=JSON.parse(body);
		var name;
		body[1].forEach(function(item){
			console.log(item.name);
		})
	})})
