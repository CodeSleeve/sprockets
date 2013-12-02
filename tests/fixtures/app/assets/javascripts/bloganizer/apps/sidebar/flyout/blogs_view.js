App.module('Sidebar.Flyout', function(Flyout, App, Backbone, Marionette, $, _) 
{
    Flyout.BlogView = Marionette.ItemView.extend({
        tagName: 'li',
        template: 'apps/sidebar/flyout/templates/blog',
        triggers: {
            'click' : 'blog:clicked'
        }
    });

    Flyout.BlogsView = Marionette.CompositeView.extend({
        itemView: Flyout.BlogView,
        itemViewContainer: '.blogs-region',
        triggers: {
            'click .js-all-stack-posts'     : 'all:stack:posts:clicked',
            'click .js-all-category-posts'  : 'all:category:posts:clicked',
            'click .js-edit'                : 'edit:stack:name:clicked',
            'click .js-sort'                : 'sort:clicked'
        }
    });
});