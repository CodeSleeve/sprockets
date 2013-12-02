App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('blog:entities:find', function(search)
    {
        var blogs = new Entities.Blogs;

        blogs.searchText = search;

        if (typeof search !== 'undefined') {
            blogs.fetch({ data : 'search=' + search + '&page=' + blogs.page });
        }

        return blogs;
    });
});