App.module('Services', function(Services, App, Backbone, Marionette, $, _) {

	App.commands.setHandler('when:done', function(entities, callback, context) {
		if (typeof context === 'undefined') {
			context = this;
		}

		if ($.type(callback) !== "function") {
			throw "Cannot call when:done without a callback";
		}

		var promises = []; 	//_.chain([entities]).flatten().pluck('promise').value();

		var _entities = entities;

		if (!_.isArray(entities)) {
			_entities = [entities];
		}

		_.each(_entities, function(entity) {
			if ($.type(entity.promise) === "function") {
				promises.push(entity.promise());
			} else {
				promises.push(entity.promise);
			}
		});

		$.when.apply($, promises).done(function(response, status) {
			callback.call(context, entities, response, status);
		}).fail(function(response, status) {
			callback.call(context, null, response, status, entities);
		});
	});

});
