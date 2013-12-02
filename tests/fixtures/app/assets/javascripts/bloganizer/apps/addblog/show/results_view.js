App.module('AddBlog.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.ResultsEmptyView = Marionette.ItemView.extend({
        template: 'apps/addblog/show/templates/empty'
    });

    Show.ResultView = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'row',
        template: 'apps/addblog/show/templates/result',
        events : {
            'change .js-tagger'        : 'onChangeStack',
            'select2-open .js-tagger'  : 'onSelectStacks'
        },

        serializeData : function()
        {
            var data = this.model.toJSON();
            data.available_stacks = this.options.stacks.toJSON();
            return data;
        },

        onRender : function()
        {
            this.$el.find('.js-tagger').select2({
                placeholder: "Add this blog to stacks"
            });
        },

        onChangeStack : function(event) {
            this.model.stacks = event.val;
        },

        onSelectStacks : function(event) {
            this.model.stacks = this.$el.find('.js-tagger').select2('val');
        }
    });

    Show.ResultsView = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'result-items',
        itemView: Show.ResultView,
        emptyView: Show.ResultsEmptyView,
        
        itemViewOptions : function()
        {
            var data = { stacks: this.options.stacks };
            return data;
        }
    });
});