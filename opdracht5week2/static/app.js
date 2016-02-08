// Source: Rover van Nispen: https://github.com/rovervannispen/Everything-Web-Minor/blob/gh-pages/web-app-from-scratch/assignments/opdracht%205/static/js/app.js
// Source: Sem Bakkum (sections.toggle - for)

(function(){
	'use strict'

	var startDisplay = document.getElementById('start');
	var weatherTemplate = document.getElementById('weatherCity');
	

	var app = {
		init: function(){

			routie({
				'start': function(){
					sections.toggle('start');
				},
				'weatherUtrecht': function(){
					sections.toggle('weatherCity');
					weather.init('http://api.openweathermap.org/data/2.5/weather?id=2745912&units=metric&appid=44db6a862fba0b067b1930da0d769e98');
				},
				'weatherAmsterdam': function(){
					sections.toggle('weatherCity');
					weather.init('http://api.openweathermap.org/data/2.5/weather?id=2759794&units=metric&appid=44db6a862fba0b067b1930da0d769e98');
				},
				'weatherDeventer': function(){
					sections.toggle('weatherCity');
					weather.init('http://api.openweathermap.org/data/2.5/weather?id=2756987&units=metric&appid=44db6a862fba0b067b1930da0d769e98')
				},
				'*': function(){
					startDisplay.classList.add('active');	
				}
			});

		}
	};

	var weather = {
		init: function(urlCity){

			microAjax(urlCity, function(data){
				data = JSON.parse(data);

				var templateData = {
					city: data.name,
					country: data.sys.country,
					temp: data.main.temp,
					windSpeed: data.wind.speed,
					weatherType: data.weather[0].description,
					weatherIcon: data.weather[0].icon
				}
				var imgIcon = document.getElementById('weather-icon');

				imgIcon.src = 'http://openweathermap.org/img/w/'+templateData.weatherIcon+'.png';

				Transparency.render(weatherTemplate, templateData);
			});

		}
	};

	var sections = {
		toggle: function(route){

			var allSections = document.querySelectorAll('section');
			var toggleSection = document.getElementById(route);

			// console.log(allSections);

			// Source For Loop Sem Bakkum: https://github.com/SemBakkum/SemBakkum.github.io/tree/master/WAFS/Week%201/Exercise%205
			for (var c = 0; c < allSections.length; c++) {
				allSections[c].classList.remove('active');
			}

			toggleSection.classList.toggle('active');

		}
	};

	// start app
	app.init();

})();
