App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('stack:entities', function(models, options)
    {
        return new Entities.Stacks(models, options);
    });
});