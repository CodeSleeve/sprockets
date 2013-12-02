App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('stack:post:entities', function(stackId)
    {
        var entities = new (Entities.StackPosts.extend({
            url: 'api/stacks/' + stackId + '/posts'
        }));

        entities.fetch();

        return entities;
    });
});