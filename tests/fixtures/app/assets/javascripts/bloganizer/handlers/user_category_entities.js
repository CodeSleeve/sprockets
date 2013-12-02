App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('user:category:entities', function(userId)
    {
        var entities = new (Entities.Categories.extend({
            url: 'api/users/' + userId + '/categories'
        }));

        entities.fetch();

        return entities;
    });
});