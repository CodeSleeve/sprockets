App.module("CategoryPosts", function (CategoryPosts, App, Backbone, Marionette, $, _)
{
	var API = 
	{
		showPosts : function(categoryId)
		{
			App.execute('dispatcher:set:route', 'categories:(id):posts', categoryId);
			CategoryPosts.controller = new CategoryPosts.Show.Controller();
			CategoryPosts.controller.showPosts(categoryId);
		}
	};

	CategoryPosts.Router = Marionette.AppRouter.extend(
	{
		appRoutes: {
			'categories/:id/posts'		: 'showPosts'
		}
	});

	App.addInitializer(function() 
	{
		return new CategoryPosts.Router({ controller: API });
	});

	App.commands.setHandler('!route:category:posts', API.showPosts);
});