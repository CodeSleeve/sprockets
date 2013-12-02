(function(Backbone) {
	var _sync = Backbone.sync;

	Backbone.sync = function(method, entity, options) {

		if (typeof options === 'undefined') {
			options = {};
		}

		var promise = _sync(method, entity, options);

		if (!entity.promise && method === 'read') {
			entity.promise = promise;
		}

		return promise;
	}

})(Backbone);
