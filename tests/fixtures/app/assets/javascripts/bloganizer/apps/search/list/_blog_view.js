App.module('Search.List', function(List, App, Backbone, Marionette, $, _)
{
    List.BlogView = Marionette.ItemView.extend({
        template: 'apps/search/list/templates/blog',
        tagName: 'li',
        className: 'blog-item row',
        triggers: {
            'mouseenter'                    : 'mouse:enter',
            'mouseleave'                    : 'mouse:leave',
            'click .js-toggle-following'    : 'toggle:following:clicked',
            'click .js-toggle-onhold'       : 'toggle:onhold:clicked',
            'click .js-make-note'           : 'make:note:clicked'
        },

        onMouseEnter : function()
        {
            this.$el.find('.js-controls').show();
        },

        onMouseLeave: function()
        {
            this.$el.find('.js-controls').hide();
        }
    });

});