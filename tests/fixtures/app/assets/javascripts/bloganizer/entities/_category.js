App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.Category = Backbone.Model.extend({
		urlRoot: '../',

		toJSON : function()
		{
			var data = Backbone.Model.prototype.toJSON.apply(this);
			if (data.blogs) {
				data.blogs = data.blogs.toJSON();
			}
			return data;
		}
	});
});