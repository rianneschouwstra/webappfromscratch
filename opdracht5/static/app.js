(function(){
	'use strict'

	var app = {
		init: function(){

			// start routes
			routes.init();
		}
	};

	var routes = {
		init: function(){
			
			window.addEventListener('hashchange', function(hashObj) {
				var hash = hashObj.newURL.split('#')[1];

				// call sections.toggle
				sections.toggle(hash);
			}, false); // prevents default function (off)
		}
	};

	var sections = {
		toggle: function(route){

			var startDisplay = document.getElementById('start');
			var bestDisplay = document.getElementById('best)');

			if (route === 'start'){
				startDisplay.classList.add('active');
				bestDisplay.classList.remove('active');
			} else {
				startDisplay.classList.remove('active');
				bestDisplay.classList.add('active');
			}
		}
	};

	// start app
	app.init();

})();