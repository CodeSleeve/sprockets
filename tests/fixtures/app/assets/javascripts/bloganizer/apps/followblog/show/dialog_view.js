App.module('FollowBlog.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.DialogView = Marionette.ItemView.extend({
        template: 'apps/followblog/show/templates/dialog',
        triggers: {
            'click .js-done' : 'done:clicked'
        },
        events : {
            'change .js-tagger'        : 'onChangeStack',
            'select2-open .js-tagger'  : 'onSelectStacks'
        },
        unique_id: 1,

        serializeData : function()
        {
            var data = {};

            data.blog = this.model.toJSON();
            data.stacks = this.collection.toJSON();

            return data;
        },

        onRender : function()
        {
            var scope = this;
            this.$el.find('.js-tagger').select2({
                placeholder: "Add this blog to stacks",
                multiple: true,
                tags : this.getTags(),
                createSearchChoice : function(term, data) { return scope.createSearchChoice(term, data, this); }
            });
        },

        createSearchChoice : function(term, data, event)
        {
            var results = [];

            var filter = $(data).filter(function() {
                return this.text.localeCompare(term) === 0;
            });

            if (filter.length === 0) {
                return { id: '_' + this.unique_id++, text : term };
            }
        },

        getTags : function()
        {
            var stacks = [];

            this.collection.each(function(stack)
            {
                stacks.push({id: stack.id, text: stack.get('title')});
            });

            return stacks;
        },

        onChangeStack : function(event)
        {
            if (!this.model.selected_stacks) {
                this.model.selected_stacks = {};
            }

            if (event.added && this.notAlreadySelected(event.added.text)) {
                this.model.selected_stacks[event.added.id] = event.added.text;
            }

            if (event.removed) {
                delete this.model.selected_stacks[event.removed.id];
            }
        },

        notAlreadySelected : function(text)
        {
            var notSelected = true;

            _.each(this.model.selected_stacks, function(stack)
            {
                notSelected = (stack === text) ? false : notSelected;
            });

            return notSelected;
        }

    });
});