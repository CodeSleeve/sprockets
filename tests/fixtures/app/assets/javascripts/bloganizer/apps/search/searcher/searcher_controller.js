App.module('Search.Searcher', function(Searcher, App, Backbone, Marionette, $, _)
{
    Searcher.Controller = Marionette.Controller.extend(
    {
        searchFor: function(searchText)
        {
            return this.searchForBlogs(searchText);
        },

        searchForBlogs : function(searchText)
        {
            var results = App.request('blog:entities:find', searchText);

            return results;
        }

    });
});