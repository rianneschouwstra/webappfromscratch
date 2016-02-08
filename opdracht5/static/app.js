(function(){
	'use strict'//Makes sure you can only use declared variables in your code. If you use undeclared variables your code might crash.

	var startDisplay = document.getElementById('start');
	var bestDisplay = document.getElementById('best');

	var app = {
		init: function(){

			// start routes
			routes.init();
		}
	};

	var routes = {
		init: function(){

			// use start as default to show
			window.location.hash = 'start';
			
			window.addEventListener('hashchange', function(hashObj) {
				var hash = hashObj.newURL.split('#')[1];

				// call sections.toggle
				sections.toggle(hash);
			}, false); // prevents default function (off)
		}
	};

	var sections = {
		toggle: function(route){

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