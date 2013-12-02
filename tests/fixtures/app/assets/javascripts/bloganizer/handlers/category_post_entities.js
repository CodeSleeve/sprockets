App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('category:post:entities', function(categoryId)
    {
        var entities = new (Entities.CategoryPosts.extend({
            url: 'api/categories/' + categoryId + '/posts'
        }));

        entities.fetch();

        return entities;
    });
});