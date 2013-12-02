App.module('ContentHeader.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.Controller = Marionette.Controller.extend(
    {
        show: function(headerText)
        {
            var view = new Show.View({headerText: headerText});
            App.Region_ContentHeader.show(view);

            this.listenTo(view, 'close', this.close);
            this.view = view;
        }

    });
});