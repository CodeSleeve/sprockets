App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.FavoritePosts = Backbone.Collection.extend({
		page : 1,
		urlRoot: '../',
		model : Entities.Post
	});
});