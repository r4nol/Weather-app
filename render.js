function weatherBalloon( cityID ) {
	var key = 'bc3615639ea9e1936dac97574b3603af';
	fetch('http://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
    console.log(data)
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
}

weatherBalloon( 703448  );

  function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
} 


