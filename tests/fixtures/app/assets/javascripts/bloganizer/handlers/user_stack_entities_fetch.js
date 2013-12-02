App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('user:stack:entities:fetch', function(userId)
    {
        var entities = new (Entities.Stacks.extend({
            url: 'api/users/' + userId + '/stacks'
        }));

        entities.fetch();

        return entities;
    });
});