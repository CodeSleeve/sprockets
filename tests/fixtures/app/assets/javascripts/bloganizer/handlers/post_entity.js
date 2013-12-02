App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('post:entity', function()
    {
        return new Entities.Post();
    });
});