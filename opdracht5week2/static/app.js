// Source: Rover van Nispen: https://github.com/rovervannispen/Everything-Web-Minor/blob/gh-pages/web-app-from-scratch/assignments/opdracht%205/static/js/app.js
// Source: Sem Bakkum (sections.toggle - for)

(function(){
	'use strict'

	var startDisplay = document.getElementById('start');
	var utrechtDisplay = document.getElementById('weatherUtrecht');

	var app = {
		init: function(){

			routie({

				'start': function(){
					console.log('test');
					sections.toggle('start');
				},
				'weatherUtrecht': function(){
					sections.toggle('weatherUtrecht');
					weather.init();
				},
				'*': function(){
					startDisplay.classList.add('active');	
				}
			});

		}
	};

	var weather = {
		init: function(){

			var template = document.getElementById('weatherUtrecht');

			microAjax('http://api.openweathermap.org/data/2.5/weather?q=Utrecht&units=metric&appid=44db6a862fba0b067b1930da0d769e98', function(data){
				data = JSON.parse(data);

				console.log(data);

				var templateData = {
					city: data.name,
					temp: data.main.temp
				}

				console.log(templateData);

				Transparency.render(template, templateData);
			});

		}
	};

	var sections = {
		toggle: function(route){

			var allSections = document.querySelectorAll('section');
			var toggleSection = document.getElementById(route);

			console.log(allSections);
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