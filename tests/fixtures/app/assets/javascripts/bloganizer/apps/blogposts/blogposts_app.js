App.module("BlogPosts", function (BlogPosts, App, Backbone, Marionette, $, _)
{
	var API = 
	{
		showPosts : function(blogId)
		{
			App.execute('dispatcher:set:route', 'blogs:(id):posts', blogId);
			BlogPosts.controller = new BlogPosts.Show.Controller();
			BlogPosts.controller.showPosts(blogId);
		}
	};

	BlogPosts.Router = Marionette.AppRouter.extend(
	{
		appRoutes: {
			'blogs/:id/posts'		: 'showPosts'
		}
	});

	App.addInitializer(function() 
	{
		return new BlogPosts.Router({ controller: API });
	});

	App.commands.setHandler('!route:blog:posts', API.showPosts);

});