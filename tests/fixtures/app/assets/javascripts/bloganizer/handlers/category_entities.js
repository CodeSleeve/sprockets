App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('category:entities', function()
    {
        return App.request('user:category:entities', 'me');
    });
});