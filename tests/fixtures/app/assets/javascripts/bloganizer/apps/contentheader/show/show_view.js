App.module('ContentHeader.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.View = Marionette.ItemView.extend({
        template: 'apps/contentheader/show/templates/view',

        serializeData : function()
        {
            var data = {};
            data.text = this.options.headerText;

            return data;
        }

    });
});