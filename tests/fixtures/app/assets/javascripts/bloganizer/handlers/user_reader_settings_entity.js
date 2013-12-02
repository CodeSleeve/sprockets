App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('user:reader:settings:entity', function(userId)
    {
        var Entity = Entities.ReaderSettings.extend({
            url: 'api/users/' + userId + '/reader-settings'
        });

        entity = new Entity();
        entity.fetch();

        return entity;
    });
});