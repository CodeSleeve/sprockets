App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.CategoryPosts = Backbone.Collection.extend({
		page : 1,
		urlRoot: '../',
		model : Entities.Post
	});
});