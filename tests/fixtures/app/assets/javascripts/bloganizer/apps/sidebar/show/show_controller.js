App.module('Sidebar.Show', function(Show, App, Backbone, Marionette, $, _) 
{
    Show.Controller = Marionette.Controller.extend(
    {
        initialize : function()
        {
            var stacks = App.request('stack:entities:fetch');
            var categories = App.request('category:entities');
            var settings = App.request('reader:settings:entity');

            var layout = new Show.Layout;
            var searchView = new Show.SearchView;
            var categoriesView = new Show.CategoriesView;
            var stacksView = new Show.StacksView;

            App.execute('when:done', [stacks, categories, settings], function()
            {
                stacksView.collection = stacksView.model = stacks;
                categoriesView.collection = categoriesView.model = categories;

                App.Region_Sidebar.show(layout);
                layout.Region_Search.show(searchView);
                layout.Region_Categories.show(categoriesView);
                layout.Region_Stacks.show(stacksView);
            });

            this.categoriesView = categoriesView;
            this.stacksView = stacksView;
            this.searchView = searchView;
            this.layout = layout;

            this.listenAll(layout);
            this.listenAll(stacksView);
            this.listenAll(categoriesView);
            this.listenAll(searchView);
        },

        onEverythingClicked : function()
        {
            App.execute('!route:user:posts');
        }, 

        onReadLaterClicked : function()
        {
            App.execute('!route:read:later:posts');
        },

        onFavoritesClicked : function()
        {
            App.execute('!route:favorite:posts');
        },

        onItemviewStackClicked : function(itemview)
        {
            App.execute('sidebar:flyout:stack', itemview.model);
        },

        onItemviewCategoryClicked : function(itemview)
        {
            App.execute('sidebar:flyout:category', itemview.model);
        },

        onAddStackClicked : function(itemview)
        {
            smoke.prompt("name your new stack?", function(result)
            {
                if (result === false) {
                    return;
                }

                var stack = App.request('stack:create', {title: result});

                itemview.collection.add(stack);
                itemview.view.render();
            });
        },

        onSortStacksClicked : function(view)
        {
            this.stacksView.collection.toggleAlphabetical();
            this.stacksView.render();
        },

        onSortCategoriesClicked : function(view)
        {
            this.categoriesView.collection.toggleAlphabetical();
            this.categoriesView.render();
        },

        onSearchFor : function(searchText)
        {
            App.execute('!route:search:list', searchText);
        },

        refreshStacks : function()
        {
            App.execute('when:done', this.stacksView.collection.fetch(), function()
            {
                this.stacksView.render();
                this.categoriesView.render();
            }, this);
        },

        updateSearchText : function(text)
        {
            this.searchView.updateSearchText(text);
        }
    });
});