App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('blog:entities', function(models, options)
    {
        return new Entities.Blogs(models, options);
    });
});