App.module('CategoryPosts.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.Controller = Marionette.Controller.extend(
    {
        showPosts: function(categoryId)
        {
            var posts = App.request('category:post:entities', categoryId);
            var view = new Show.PostsView({collection: posts});

            App.execute('when:done', posts, function()
            {
                App.execute('content:header:set', 'Category #' + categoryId);
                App.Region_Content.show(view);
            });

            this.listenTo(view, 'close', this.close);
            this.view = view;
        }

    });
});