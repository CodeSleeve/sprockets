App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('user:post:entities', function(userId)
    {
        var entities = new (Entities.UserPosts.extend({
            url: 'api/users/' + userId + '/posts'
        }));

        entities.fetch();

        return entities;
    });
});