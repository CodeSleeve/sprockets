App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    /**
     * Sends a list of stacks in the format { <id>: <name> } to the server for attaching to this
     * specific blog and then executes a callback when finished.
     *
     * Here is an example of some stacks and (new stacks) we should create
     * 
     *   {
     *      '_newstack' : 'newstack',
     *      '8'         : 'On Hold',
     *      '17'        : 'Cool Stack 17'
     *   }
     *
     * As you can see anything that starts with _ is a stack that should be created
     * 
     */
    App.commands.setHandler('blog:attach:to:stacks', function(blog, stacks, call_finished_callback)
    {
        var promise = $.ajax({
            url: 'api/blogs/' + blog.id + '/stacks',
            type: 'POST', 
            data: {
                'stacks' : stacks
            }
        });

        App.execute('when:done', promise, call_finished_callback);
    });
});