App.module('StackPosts.Show', function(Show, App, Backbone, Marionette, $, _)
{

	Show.PostView = App.Views.BasePost.extend({ });

	Show.PostsView = Marionette.CollectionView.extend(
    {
		itemView: Show.PostView,
        tagName: 'ul'
	});

});