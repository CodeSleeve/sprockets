App.module('FavoritePosts.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.Controller = Marionette.Controller.extend({
        showPosts: function(userId)
        {
            var posts = App.request('favorite:post:entities', userId);
            var view = new Show.PostsView({collection: posts});

            App.execute('when:done', posts, function()
            {
                App.execute('content:header:set', 'Favorite Posts');
                App.Region_Content.show(view);
            });

            this.listenTo(view, 'close', this.close);
            this.view = view;
        }
    });
});