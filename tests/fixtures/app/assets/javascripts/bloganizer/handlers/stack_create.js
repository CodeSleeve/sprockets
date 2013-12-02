App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
    App.reqres.setHandler('stack:create', function(attributes)
    {
        var stack = new Entities.Stack(attributes);

        stack.url = 'api/users/me/stacks';
        stack.promise = stack.save();

        stack.blogs = App.request('blog:entities');

        return stack;
    });
});