App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.Stacks = Backbone.SortableCollection.extend({
		urlRoot: '../',
		url: 'stacks',
		model : Entities.Stack,
		meta: {},

		parse : function(response)
		{
			this.meta = { 'current_page': response.current_page, 'from': response.from, 'last_page': response.last_page, 'per_page': response.per_page, 'to': response.to, 'total': response.total };

			for (var index in response.data)
			{
				response.data[index].url = 'stacks/' + response.data[index].id + '/posts';
				response.data[index].blogs = App.request('blog:entities', response.data[index].blogs);
			}

			return response.data;
		}
	});
});