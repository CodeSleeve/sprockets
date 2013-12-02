App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('blog:entity', function()
    {
        return new Entities.Blog();
    });
});