
App.module('Dispatcher', function(Dispatcher, App, Backbone, Marionette, $, _) {

	var API = {};
	API.options = {};

	API.getRoute = function() {
		return API.route;
	};

	API.getRouteId = function() {
		return isNaN(parseInt(API.options.id)) ? API.options.id : parseInt(API.options.id);
	};

	API.getRouteOptions = function() {
		return API.options;
	};

	API.setRoute = function(route, options, uri) {
		API.route = route;

		if ($.type(options) === "object") {
			API.options = options;
		} else {
			API.options.id = options;
		}

		if (typeof uri === 'undefined') {
			uri = route;
			for (var index in API.options) {
				var searchFor = '(' + index + ')';
					while (uri.indexOf(searchFor) != -1) {
 					uri = uri.replace(searchFor, API.options[index]);
					}
			}

			API.uri = uri.replace(/:/g, '/');

		} else {
			API.uri = uri;
		}

		if (API.uri) {
			App.navigate('#' + API.uri);
		}

		App.vent.trigger('dispatcher:set:route', API.route, API.options);
	};

	App.commands.setHandler('dispatcher:set:route', API.setRoute);
	App.reqres.setHandler('dispatcher:route', API.getRoute);
	App.reqres.setHandler('dispatcher:route:id', API.getRouteId);
	App.reqres.setHandler('dispatcher:route:options', API.getRouteOptions);
});