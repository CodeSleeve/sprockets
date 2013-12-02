App.module('Services.InfiniteScroll', function(InfiniteScroll, App, Backbone, Marionette, $, _)
{
    App.vent.on('infinitescroll:next:page', function(region, view, collection)
    {
        App.vent.trigger('infinitescroll:next:page:start', region, view, collection);

        if (typeof collection.current_page === 'undefined') {
            App.vent.trigger('infinitescroll:next:page:failure', region, view, collection);
        }

        collection.current_page++;
        collection.fetch({
            data    : 'page=' + view.collection.current_page,
            update  : true,
            remove  : false,
            success : function(model, response, options) {
                App.vent.trigger('infinitescroll:next:page:success', region, view, collection, response);
            },
            error : function(model, response, options) {
                App.vent.trigger('infinitescroll:next:page:failure', region, view, collection, response);  
            }
        });
    });
});