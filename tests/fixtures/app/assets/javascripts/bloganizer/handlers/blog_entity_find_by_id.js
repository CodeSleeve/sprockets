App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('blog:entity:find:by:id', function(id)
    {
        var blog = new Entities.Blog({id: id});

        blog.id = id;
        blog.url += '/' + id;      
        blog.promise = blog.fetch();

        return blog;
    });
});

