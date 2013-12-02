App.module("FavoritePosts", function (FavoritePosts, App, Backbone, Marionette, $, _)
{
	var API = 
	{
		showPosts : function(userId)
		{
			if (typeof userId === 'undefined') {
				userId = 'me';
			}

			App.execute('dispatcher:set:route', 'users:(id):posts:favorite', userId);
			FavoritePosts.controller = new FavoritePosts.Show.Controller();
			FavoritePosts.controller.showPosts(userId);
		}
	};

	FavoritePosts.Router = Marionette.AppRouter.extend(
	{
		appRoutes: {
			'users/:id/posts/favorite'		: 'showPosts'
		}
	});

	App.addInitializer(function() 
	{
		return new FavoritePosts.Router({ controller: API });
	});

	App.commands.setHandler('!route:favorite:posts', API.showPosts);

});