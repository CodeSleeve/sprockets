App.module("FollowBlog", function (FollowBlog, App, Backbone, Marionette, $, _)
{
    var API = 
    {
        show : function(blogId, success, failure)
        {
            FollowBlog.controller = new FollowBlog.Show.Controller();
            FollowBlog.controller.show(blogId, success, failure);
        }
    };

    FollowBlog.Router = Marionette.AppRouter.extend(
    {
        appRoutes: {
            'follow/blog/:id'      : 'show'
        }
    });

    App.addInitializer(function() 
    {
        return new FollowBlog.Router({ controller: API });
    });

    App.commands.setHandler('follow:blog', API.show);
});