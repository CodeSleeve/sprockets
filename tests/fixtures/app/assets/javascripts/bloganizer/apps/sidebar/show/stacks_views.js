App.module('Sidebar.Show', function(Show, App, Backbone, Marionette, $, _) 
{
    Show.StackView = Marionette.ItemView.extend(
    {
        tagName: 'li',
        template: 'apps/sidebar/show/templates/stack',
        triggers: {
            'click' : 'stack:clicked'
        }
    });

    Show.StacksView = Marionette.CompositeView.extend(
    {
        itemView: Show.StackView,
        itemViewContainer: '#reader_sidebar_stacks > ul',
        template: 'apps/sidebar/show/templates/stacks',
        triggers: {
            'click .js-add' :   'add:stack:clicked',
            'click .js-sort':   'sort:stacks:clicked'
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