App.module("UserPosts", function (UserPosts, App, Backbone, Marionette, $, _) {

	var API = 
	{
		showPosts : function(userId)
		{
			if (typeof userId === 'undefined') {
				userId = 'me';
			}

			App.execute('dispatcher:set:route', 'users:(id):posts', userId);
			UserPosts.controller = new UserPosts.Show.Controller();
			UserPosts.controller.showPosts(userId);
		}
	};

	UserPosts.Router = Marionette.AppRouter.extend(
	{
		appRoutes: {
			'users/:id/posts'		: 'showPosts',
		}
	});

	App.addInitializer(function() 
	{
		return new UserPosts.Router({ controller: API });
	});

	App.commands.setHandler('!route:user:posts', API.showPosts);

});