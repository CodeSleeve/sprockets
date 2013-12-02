App.module("Views", function (Views, App, Backbone, Marionette, $, _)
{
    Views.BasePost = Marionette.ItemView.extend({

        template: '_views/templates/basepost_collapsed',
        tagName: 'li',
        className: 'item row',
        triggers : {
            'click .js-toggle-post'         : 'toggle:post:clicked',
            'click .js-toggle-post-unread'  : 'toggle:post:read:clicked',
            'click .js-toggle-favorite'     : 'toggle:favorite:clicked',
            'click .js-toggle-read-later'   : 'toggle:read:later:clicked',
            'click .js-send-email'          : 'send:email:clicked',
            'click .js-share-with-facebook' : 'share:with:facebook:clicked',
            'click .js-share-with-twitter'  : 'share:with:twitter:clicked'
        },
        modelEvents: {
            'change:collapsed'              : 'render',
            'change:read'                   : 'render',
            'change:favorited'              : 'render',
            'change:marked_read_later'      : 'render'
        },

        onBeforeRender : function()
        {
            this.template = "_views/templates/basepost_collapsed";

            if (this.model && this.model.get('collapsed') === false) {
                this.template = "_views/templates/basepost_expanded";
            }
        },

        onTogglePostClicked : function()
        {
            if (typeof this.model.get('collapsed') === 'undefined')
            {
                this.model.set('read', true);
                this.model.attributes.collapsed = true;
            }

            this.model.set('collapsed', !this.model.get('collapsed'));
        },

        onTogglePostReadClicked : function()
        {
            this.model.set('read', !this.model.get('read'));
        },

        onToggleFavoriteClicked : function()
        {
            this.model.set('favorited', !this.model.get('favorited'));
        },

        onToggleReadLaterClicked : function()
        {
            this.model.set('marked_read_later', !this.model.get('marked_read_later'));
        },

        onShareWithFacebookClicked : function()
        {
            popup('http://www.facebook.com/sharer.php?u=' + this.model.get('url'));
        },

        onShareWithTwitterClicked : function()
        {
            popup('https://twitter.com/share?url=' + this.model.get('url'));            
        }
    });

});