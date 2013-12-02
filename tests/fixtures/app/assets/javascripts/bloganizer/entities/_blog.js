App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.Blog = Backbone.Model.extend({
		urlRoot: '../',
		url: 'api/blogs',

        initialize : function()
        {
            this.on('change:isOnhold', this.onChangeOnhold);
        },
        
        getIsFollowing : function()
        {
            if (typeof this.get('following') !== 'undefined') {
                return this.get('following');
            }

            return (this.get('stacks') && this.get('stacks').length);
        },

        getIsFollowingText : function()
        {
            return this.get('is_following') ? 'Following' : 'Follow';
        },

        getIsOnhold : function()
        {
            if (typeof this.get('onhold') !== 'undefined') {
                return this.get('onhold');
            }

            var stacks = this.get('stacks');

            if (!stacks) {
                return false;
            }

            return stacks.filter(function(stack) { return stack.get('title') == 'On Hold'; }).length > 0
        },

        getIsOnholdText : function()
        {
            return this.get('is_onhold') ? 'Take off hold' : 'Put on hold';
        },

        setIsOnhold : function(value)
        {
            var url = 'api/blogs/' + this.id + '/onhold';
            var type = "DELETE";

            if (value == true) {
                type = "POST";
            }

            this.set('onhold', value);
            return $.ajax({ url : url, type: type });
        },

        setIsFollowing : function(value)
        {
            this.set('following', value);
        },

        parse : function(response)
        {
            response.stacks = App.request('stack:entities', response.stacks);
            return response;
        },

        toJSON : function()
        {
            var data = Backbone.Model.prototype.toJSON.apply(this);
            if (data.stacks) {
             //   data.stacks = data.stacks.toJSON();
            }
            return data;
        }
	});
});