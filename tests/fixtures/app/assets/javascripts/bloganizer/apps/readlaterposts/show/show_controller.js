App.module('ReadLaterPosts.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.Controller = Marionette.Controller.extend(
    {
        showPosts: function(userId)
        {
            var posts = App.request('readlater:post:entities', userId);
            var view = new Show.PostsView({collection: posts});

            App.execute('when:done', posts, function()
            {
                App.execute('content:header:set', 'Read Later Posts');
                App.Region_Content.show(view);
            });

            this.listenTo(view, 'close', this.close);
            this.view = view;
        }

    });
});