App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.StackPosts = Backbone.Collection.extend({
		page : 1,
		urlRoot: '../',
		model : Entities.Post
	});
});