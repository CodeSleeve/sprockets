App.module('AddBlog.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.DialogView = Marionette.Layout.extend({
        template: 'apps/addblog/show/templates/dialog',
        regions: {
            Region_Results: '.results-region'
        },
        triggers: {
            'click .js-done' : 'done:clicked'
        },
        
        initialize : function()
        {
            _.bindAll(this, 'onStartTyping', 'onStopTyping')
        },

        onRender : function()
        {
            this.$el.find('.search-query').typing({ start: this.onStartTyping, stop: this.onStopTyping, delay: 500 });
            this.onHideMoreResultsButton();
        },

        onHideMoreResultsButton : function()
        {
            this.$el.find('.js-more-results').hide();
        },

        onShowMoreResultsButton : function()
        {
            this.$el.find('.js-more-results').show();
        },

        onStartTyping : function (event, element)
        {
            element.css('background', '#fcfcfc');

            this.$el.find('.form-search i').removeClass('icon-search');
            this.$el.find('.form-search i').addClass('icon-spinner');
            this.$el.find('.form-search i').addClass('icon-spin');
        },
        
        onStopTyping : function (event, element)
        {
            element.css('background', 'inherit');
            this.trigger('search:for', element.val());
        },

        onStopSearch : function()
        {
            this.$el.find('.form-search i').addClass('icon-search');
            this.$el.find('.form-search i').removeClass('icon-spinner');
            this.$el.find('.form-search i').removeClass('icon-spin');
        }

    });
});