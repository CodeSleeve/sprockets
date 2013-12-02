
App.module('Window.Resize', function(Resize, App, Backbone, Marionette, $, _) {

	var API = {};

	API.resize = _.debounce(function(event) {
		App.vent.trigger('window:resize', event);
	});

	$(window).resize(API.resize);

});
