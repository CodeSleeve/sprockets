
Marionette.Application.prototype.navigate = function(route, options) {
	if (typeof options === 'undefined' || options === null) {
		options = {};
	}

	Backbone.history.navigate(route, options);
};

Marionette.Application.prototype.getCurrentRoute = function() {
	var frag = Backbone.history.getFragment();
	if (_.isEmpty(frag)) {
		return null;
	}

	return frag;
};

Marionette.Application.prototype.startHistory = function() {
	if (Backbone.history.started) {
		Backbone.history.started = false;
		Backbone.history.stop();
	}

	if (Backbone.history) {
		Backbone.history.start();
		Backbone.history.started = true;
	}
};

Marionette.Renderer.render = function(template, data){
	template = 'bloganizer/' + template;
	if (!JST[template]) throw "Template '" + template + "' not found!";
	return JST[template](data);
};