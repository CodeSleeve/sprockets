App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('reader:settings:entity', function()
    {
        return App.request('user:reader:settings:entity', 'me');
    });
});