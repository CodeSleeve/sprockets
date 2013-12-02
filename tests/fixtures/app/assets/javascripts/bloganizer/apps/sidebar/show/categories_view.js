App.module('Sidebar.Show', function(Show, App, Backbone, Marionette, $, _) 
{
    Show.CategoryView = Marionette.ItemView.extend(
    {
        tagName: 'li',
        template: 'apps/sidebar/show/templates/category',
        triggers: {
            'click' : 'category:clicked'
        }
    });

    Show.CategoriesView = Marionette.CompositeView.extend(
    {
        itemView: Show.CategoryView,
        itemViewContainer: "#reader_sidebar_categories > ul",
        template: 'apps/sidebar/show/templates/categories',
        triggers: {
            'click .js-sort':   'sort:categories:clicked'
        },
        serializeData : function()
        {
            var data = this.model.toJSON();
            data.sort_by = (this.model.comparators.current == 'a_to_z') ? '' : '-alt';
            data.collapsed = "in";
            return data;
        }
    });
});