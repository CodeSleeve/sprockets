App.module('Search.List', function(List, App, Backbone, Marionette, $, _)
{
    List.Controller = Marionette.Controller.extend(
    {
        list: function(searchText, results)
        {
            results = (typeof results !== 'undefined') ? results : App.request('search:for', searchText);

            var view = new List.SearchView({collection: results});

            App.execute('when:done', results, function()
            {
                App.Region_Content.show(view);
            });

            App.execute('content:header:set', 'Results for ' + searchText);

            this.listenTo(view, 'close', this.close);
            this.listenAll(view);

            this.view = view;
        },

        failFollowBlog : function(response)
        {
            alert('Got an error, cannot follow at this time');
            console.warn(response);
        },

        onItemviewToggleFollowingClicked : function(itemview)
        {
            App.execute('follow:blog', itemview.model.id, function(entities, response)
            {
                itemview.model.set('is_following', true);
                itemview.render();
            }, this.failFollowBlog);
        },

        onItemviewToggleOnholdClicked : function(itemview)
        {
            var onhold = itemview.model.get('is_onhold');

            itemview.model.set('is_onhold', !onhold);
            itemview.render();
        }

    });
});