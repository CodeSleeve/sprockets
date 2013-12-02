App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('stack:fetch', function(id)
    {
        var stack = new Entities.Stack();

        stack.id = parseInt(id);
        stack.url = stack.url + '/' + id;
        stack.fetch();

        return stack;
    });
});