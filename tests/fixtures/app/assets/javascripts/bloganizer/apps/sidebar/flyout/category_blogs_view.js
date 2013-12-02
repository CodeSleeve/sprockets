App.module('Sidebar.Flyout', function(Flyout, App, Backbone, Marionette, $, _) 
{
    Flyout.CategoryBlogView = Flyout.BlogView.extend({});

    Flyout.CategoryBlogsView = Flyout.BlogsView.extend({
        itemView: Flyout.CategoryBlogView,
        template: 'apps/sidebar/flyout/templates/category_blogs'
    });
});