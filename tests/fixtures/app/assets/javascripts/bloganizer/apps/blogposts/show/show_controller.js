App.module('BlogPosts.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.Controller = Marionette.Controller.extend(
    {
        showPosts: function(blogId)
        {
            var posts = App.request('blog:post:entities', blogId);
            var view = new Show.PostsView({collection: posts});

            App.execute('when:done', posts, function()
            {
                App.execute('content:header:set', 'Blog #' + blogId);
                App.Region_Content.show(view);
            });

            this.listenTo(view, 'close', this.close);
            this.view = view;
        }

    });
});