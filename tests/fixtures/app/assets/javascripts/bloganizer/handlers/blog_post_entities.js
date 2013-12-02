App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('blog:post:entities', function(blogId)
    {
        var entities = new (Entities.BlogPosts.extend({
            url: 'api/blogs/' + blogId + '/posts'
        }));

        entities.fetch();

        return entities;
    });
});