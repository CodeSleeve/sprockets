App.module('TopNavbar.Show', function(Show, App, Backbone, Marionette, $, _)
{
	Show.Controller = Marionette.Controller.extend(
    {
        initialize : function()
        {
            var settings = App.request('reader:settings:entity');
            var view = new Show.View({model: settings});

            App.execute('when:done', settings, function() {
                App.Region_ReaderNavbar.show(view);
            });

            this.listenAll(view);
            this.view = view;
        },

        onAddBlogClicked : function()
        {
            App.execute('!route:add:blog');
        },

        onOlderThanNowClicked : function()
        {
            App.execute('mark:as:read', '1 minute');
        },

        onOlderThanDayClicked : function()
        {
            App.execute('mark:as:read', '1 day');
        },

        onOlderThanTwoDaysClicked : function()
        {
            App.execute('mark:as:read', '2 days');
        },

        onOlderThanThreeDaysClicked : function()
        {
            App.execute('mark:as:read', '3 days');
        },

        onOlderThanWeekClicked : function()
        {
            App.execute('mark:as:read', '1 week');
        },

        onOlderThanTwoWeeksClicked : function()
        {
            App.execute('mark:as:read', '2 weeks');
        },

        onOlderThanMonthClicked : function()
        {
            App.execute('mark:as:read', '1 month');
        }
    });
});