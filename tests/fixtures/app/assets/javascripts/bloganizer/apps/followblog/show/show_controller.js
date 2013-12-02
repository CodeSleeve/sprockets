App.module('FollowBlog.Show', function(Show, App, Backbone, Marionette, $, _)
{
    Show.Controller = Marionette.Controller.extend(
    {
        show: function(blogId, success, failure)
        {
            var stacks = App.request('stack:entities:fetch');
            var blog = App.request('blog:entity:find:by:id', blogId);

            var layout = new Show.DialogView({model: blog, collection: stacks});

            App.execute('when:done', [blog, stacks], function()
            {
                App.Region_Dialog.show(layout);
            });

            this.listenAll(layout);
            this.listenTo(layout, 'close', this.close);

            this.layout = layout;
            this.blog = blog;
            this.stacks = stacks;
            this.success = success;
            this.failure = failure;
        },

        onDoneClicked : function(args)
        {
            var controller = this;
            App.execute('blog:attach:to:stacks', args.model, args.model.selected_stacks, function(entities, response)
            {
                if (entities == null && controller.failure) {
                    controller.failure(response);
                }

                if (entities == null) {
                    return App.vent.trigger('follow:blog:failure');
                }

                App.vent.trigger('follow:blog:success');

                if (controller.success) {
                    controller.success(entities, response);
                }

                App.Region_Dialog.closeModal();
            });
        }

    });
});