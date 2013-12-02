App.module('AddBlog.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.Controller = Marionette.Controller.extend(
    {
        show: function()
        {
            var stacks = App.request('stack:entities:fetch');
            var blogs = App.request('blog:entities:find');

            var layout = new Show.DialogView({collection: blogs});
            var resultsView = new Show.ResultsView({collection: blogs, stacks : stacks});

            App.execute('when:done', [blogs, stacks], function()
            {
                App.Region_Dialog.show(layout);
                layout.Region_Results.show(resultsView);
            });

            this.listenAll(layout);
            this.listenAll(resultsView);
            this.listenTo(resultsView, 'close', this.close);

            this.layout = layout;
            this.resultsView = resultsView;
            this.blogs = blogs;
        },

        onSearchFor : function(search)
        {
            this.resultsView.collection = App.request('blog:entities:find', search);

            App.execute('when:done', this.resultsView.collection, function()
            {
                this.resultsView.render();
                this.layout.onStopSearch();
            }, this);
        },

        onDoneClicked : function()
        {
            var layout = this.layout;

            App.execute('blogs:sync:stacks', this.resultsView.collection, function(entities, response)
            {
                if (entities == null)
                {
                    alert('Got server error, try again later?');
                    console.warn(response);
                    return;
                }

                App.Region_Dialog.closeModal();
            });
        }

    });
});