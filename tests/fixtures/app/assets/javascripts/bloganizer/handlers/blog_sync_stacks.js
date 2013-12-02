App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.commands.setHandler('blogs:sync:stacks', function(blogs, finished_callback)
    {
        var promises = [];
        var updated = blogs.filter(function(blog)
        {
            return typeof blog.stacks !== 'undefined' && blog.stacks.length > 0;
        });

        _.each(updated, function(blog)
        {
            var promise = $.ajax({
                url: 'api/blogs/' + blog.id + '/stacks',
                type: 'POST', 
                data: {
                    'stacks' : blog.stacks
                }
            });

            promises.push(promise);
        });

        App.execute('when:done', promises, finished_callback);
    });
});