App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.Categories = Backbone.SortableCollection.extend({
		urlRoot: '../',
		model : Entities.Category,

		parse : function(response)
		{
			for (var index in response) {
				response[index].url = 'categories/' + response[index].id + '/posts';
				response[index].blogs = App.request('blog:entities', response[index].blogs);
			}
			return response;
		}
	});
});