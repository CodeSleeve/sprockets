App.module('Sidebar.Show', function(Show, App, Backbone, Marionette, $, _) 
{
    Show.SearchView = Marionette.ItemView.extend(
    {
        className: 'form-search input-group-everything-after-this-take-this-off',
        template: 'apps/sidebar/show/templates/search',
        firstTimeRendered: true,

        initialize : function()
        {
            _.bindAll(this, 'onStartTyping', 'onStopTyping');
        },

        onRender : function()
        {
            if (this.firstTimeRendered && App.request('dispatcher:route') == 'search:(id)') {
                this.updateSearchText(App.request('dispatcher:route:id'));
            }

            this.firstTimeRendered = false;
            this.$el.find('.search-query').typing({ start: this.onStartTyping, stop: this.onStopTyping, delay: 500 });
        },

        onStartTyping : function(event, element)
        {
            element.css('background-color', '#fcfcfc');
        },

        onStopTyping : function(event, element)
        {
            element.css('background-color', '#inherit');
            this.trigger('search:for', element.val());
        },

        updateSearchText : function(text)
        {
            var element = this.$el.find('.search-query');

            if (element.val() != text) {
                element.val(text);
            }
        }
    });
});
