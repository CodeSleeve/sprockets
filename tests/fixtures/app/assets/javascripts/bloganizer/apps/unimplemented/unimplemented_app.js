App.module("UnImplemented", function (UnImplemented, App, Backbone, Marionette, $, _)
{
    var API = 
    {
        notImplemented : function()
        {
            smoke.alert('sorry this feature is not yet implemented');
        }
    };

    UnImplemented.Router = Marionette.AppRouter.extend(
    {
        appRoutes: {
            'blogs/popular'     : 'notImplemented',
            'blogs/trending'    : 'notImplemented',
            'stacks/popular'    : 'notImplemented'
        }
    });

    App.addInitializer(function() 
    {
        return new UnImplemented.Router({ controller: API });
    });
});