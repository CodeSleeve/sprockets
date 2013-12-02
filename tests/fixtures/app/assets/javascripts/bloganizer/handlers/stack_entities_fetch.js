App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('stack:entities:fetch', function()
    {
        return App.request('user:stack:entities:fetch', 'me');
    });
});