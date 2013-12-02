App.module("ContentHeader", function (ContentHeader, App, Backbone, Marionette, $, _)
{
    var API = 
    {
        setHeader : function(headerText)
        {
            ContentHeader.controller = new ContentHeader.Show.Controller();
            ContentHeader.controller.show(headerText);
        }
    };

    App.commands.setHandler('content:header:set', API.setHeader);
});