App.module('Sidebar.Flyout', function(Flyout, App, Backbone, Marionette, $, _) 
{
    Flyout.Controller = Marionette.Controller.extend(
    {
        showBlogs : function(view)
        {
            App.Region_SidebarFlyout.show(view);
            App.Region_SidebarFlyout.$el.show();

            this.view = view;

            this.listenTo(view, 'close', this.close);
            this.listenAll(view);
        },

        showStackBlogs : function(stack)
        {
            var view = new Flyout.StackBlogsView({model: stack, collection: stack.get('blogs')});
            this.showBlogs(view);
        },

        showCategoryBlogs : function(category)
        {
            var view = new Flyout.CategoryBlogsView({model: category, collection: category.get('blogs')});
            this.showBlogs(view);
        },

        onItemviewBlogClicked : function(itemview)
        {
            App.execute('!route:blog:posts', itemview.model.id);
            App.execute('sidebar:flyout:hide');
        },

        onAllStackPostsClicked : function()
        {
            App.execute('!route:stack:posts', this.view.model.id);
            App.execute('sidebar:flyout:hide');
        },

        onAllCategoryPostsClicked : function()
        {
            App.execute('!route:category:posts', this.view.model.id);
            App.execute('sidebar:flyout:hide');
        },

        onEditStackNameClicked : function(args)
        {
            var title = args.model.get('title');
            smoke.prompt('what would you like to rename ' + title + ' as?', function(result)
            {
                if (result === false) return;
                args.model.set('title', result);
                args.model.save();
            });
        },

        onSortClicked : function(args)
        {
            args.view.collection.toggleAlphabetical();
            args.view.render();
        }

    });
});