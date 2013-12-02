App.module('Search.List', function(List, App, Backbone, Marionette, $, _)
{
    List.SearchView = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'search-listing',

        getItemView : function(item)
        {
            // for now itemviews share same template
            // later will replace this in universal search
            return List.BlogView
        }
    });

});