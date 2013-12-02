App.module('Sidebar.Flyout', function(Flyout, App, Backbone, Marionette, $, _) 
{
    Flyout.StackBlogView = Flyout.BlogView.extend({ });

    Flyout.StackBlogsView = Flyout.BlogsView.extend({
        itemView: Flyout.StackBlogView,
        template: 'apps/sidebar/flyout/templates/stack_blogs'
    });
});