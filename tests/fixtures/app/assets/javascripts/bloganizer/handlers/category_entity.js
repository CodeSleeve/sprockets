App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('category:entity', function(userId)
    {
        return new Entities.Category();
    });
});