App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('stack:entity', function(attributes)
    {
        return new Entities.Stack(attributes);
    });
});