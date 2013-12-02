App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.Blogs = Backbone.SortableCollection.extend({
		page: 1,
		model: Entities.Blog,
		urlRoot: '../',
		url: 'api/blogs',
		meta: {},

		fetchMore : function()
		{
			this.page++;
			this.fetch({ update : true, remove : false, data : 'search=' + this.searchText + '&page=' + this.page });

			return this;
		},

		parse : function(response)
		{
			this.meta = { 'current_page': response.current_page, 'from': response.from, 'last_page': response.last_page, 'per_page': response.per_page, 'to': response.to, 'total': response.total };
			return response.data;
		}
	});
});
