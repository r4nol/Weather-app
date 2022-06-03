const { ipcRenderer } = require('electron');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const loc = document.getElementById('location');
const closeBtn = document.getElementById('close');
const minBtn = document.getElementById('minimise');

closeBtn.onclick = () => {
	ipcRenderer.send('close-app');
}

minBtn.onclick = () => {
	ipcRenderer.send('minimise-app');
}

function weatherBalloon(cityID) {
	var key = 'bc3615639ea9e1936dac97574b3603af';
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
		.then(function (resp) { return resp.json() }) // Convert data to json
		.then(function (data) {
			console.log(data);
			drawWeather(data); // Call drawWeather
		})
		.catch(function () {
			// catch any errors
		});
}

weatherBalloon(703448);

setInterval(() => {
	weatherBalloon(703448);
}, 60000);

function drawWeather(d) {
	var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

	description.innerText = d.weather[0].description;
	temp.innerHTML = celcius + '&deg;';
	loc.innerText = d.name;
}


