App.module("ReadLaterPosts", function (ReadLaterPosts, App, Backbone, Marionette, $, _)
{
	var API = 
	{
		showPosts : function(userId)
		{
			if (typeof userId === 'undefined') {
				userId = 'me';
			}

			App.execute('dispatcher:set:route', 'users:(id):posts:read:later', userId);
			ReadLaterPosts.controller = new ReadLaterPosts.Show.Controller();
			ReadLaterPosts.controller.showPosts(userId);
		}
	};

	ReadLaterPosts.Router = Marionette.AppRouter.extend(
	{
		appRoutes: {
			'users/:id/posts/read/later'		: 'showPosts'
		}
	});

	App.addInitializer(function() 
	{
		return new ReadLaterPosts.Router({ controller: API });
	});

	App.commands.setHandler('!route:read:later:posts', API.showPosts);

});