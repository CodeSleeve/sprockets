App.module("AddBlog", function (AddBlog, App, Backbone, Marionette, $, _)
{
    var API = 
    {
        show : function()
        {
            AddBlog.controller = new AddBlog.Show.Controller();
            AddBlog.controller.show();
        },

        sync : function(blogs, finished_callback)
        {
            AddBlog.syncController = new AddBlog.Sync.Controller();
            AddBlog.syncController.sync(blogs, finished_callback);
        }
    };

    AddBlog.Router = Marionette.AppRouter.extend(
    {
        appRoutes: {
            'add/blog'      : 'show'
        }
    });

    App.addInitializer(function() 
    {
        return new AddBlog.Router({ controller: API });
    });

    App.commands.setHandler('!route:add:blog', API.show);
});