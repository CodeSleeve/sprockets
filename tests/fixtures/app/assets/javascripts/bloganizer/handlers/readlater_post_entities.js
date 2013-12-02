App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('readlater:post:entities', function(userId)
    {
        var entities = new (Entities.ReadLaterPosts.extend({
            url: 'api/users/' + userId + '/read-later-posts'
        }));

        entities.fetch();

        return entities;
    });
});