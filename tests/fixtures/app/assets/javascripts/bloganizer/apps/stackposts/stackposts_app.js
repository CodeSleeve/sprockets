App.module("StackPosts", function (StackPosts, App, Backbone, Marionette, $, _)
{
	var API = 
	{
		showPosts : function(stackId)
		{
			App.execute('dispatcher:set:route', 'stacks:(id):posts', stackId);
			StackPosts.controller = new StackPosts.Show.Controller();
			StackPosts.controller.showPosts(stackId);
		}
	};

	StackPosts.Router = Marionette.AppRouter.extend(
	{
		appRoutes: {
			'stacks/:id/posts'		: 'showPosts'
		}
	});

	App.addInitializer(function() 
	{
		return new StackPosts.Router({ controller: API });
	});

	App.commands.setHandler('!route:stack:posts', API.showPosts);

});