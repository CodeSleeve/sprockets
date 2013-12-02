App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('blog:create', function(rss_url)
    {
        var defer = new $.Deferred();
        var blog = new Entities.Blog();

        blog.set('rss_url', rss_url);
        blog.parse = function(response, options) {
            return response.blog;
        };

        blog.save({}, {
            success : function(model, response, options) {
                defer.resolve();
            }, 
            error : function(model, xhr, options) {
                defer.reject();
            }
        });

        blog.promise = defer.promise;
        return blog;
    });
});