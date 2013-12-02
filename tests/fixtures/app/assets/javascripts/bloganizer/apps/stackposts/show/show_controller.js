App.module('StackPosts.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.Controller = Marionette.Controller.extend(
    {
        showPosts: function(stackId)
        {
            var posts = App.request('stack:post:entities', stackId);
            var view = new Show.PostsView({collection: posts});

            App.execute('when:done', posts, function()
            {
                App.execute('content:header:set', 'Stack #' + stackId);
                App.Region_Content.show(view);
            });

            this.listenTo(view, 'close', this.close);
            this.view = view;
        }

    });
});