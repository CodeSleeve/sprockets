App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('favorite:post:entities', function(userId)
    {
        var entities = new (Entities.FavoritePosts.extend({
            url: 'api/users/' + userId + '/favorite-posts'
        }));

        entities.fetch();

        return entities;
    });
});