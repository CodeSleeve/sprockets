App.module("Search", function (Search, App, Backbone, Marionette, $, _)
{
    var API = 
    {
        list : function(searchText, results)
        {
            App.execute('dispatcher:set:route', 'search:(id)', searchText);
            Search.controller = new Search.List.Controller();
            Search.controller.list(searchText, results);
        },

        searchForEverything : function(searchText)
        {
            var controller = new Search.Searcher.Controller();
            var results =  controller.searchFor(searchText);

            controller.close();
            return results;
        },

        searchForBlogs : function(searchText)
        {
            var controller = new Search.Searcher.Controller();
            var results =  controller.searchForBlogs(searchText);

            controller.close();
            return results;
        }
    };

    Search.Router = Marionette.AppRouter.extend(
    {
        appRoutes: {
            'search/:searchText'       : 'list'
        }
    });

    App.addInitializer(function() 
    {
        return new Search.Router({ controller: API });
    });

    App.commands.setHandler('!route:search:list', API.list);
    App.reqres.setHandler('search:for', API.searchForEverything);
    App.reqres.setHandler('search:for:blogs', API.searchForBlogs);

});