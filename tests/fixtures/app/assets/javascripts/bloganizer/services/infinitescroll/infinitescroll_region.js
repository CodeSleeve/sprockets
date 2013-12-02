App.module('Services.InfiniteScroll', function(InfiniteScroll, App, Backbone, Marionette, $, _)
{    
	App.vent.on('infinitescroll:next:page:success', function(region, view, collection)
    {
        region.isLoading(false);
    	region.$el.find('#loading-region').remove();
    });

	App.vent.on('infinitescroll:next:page:failure', function(region, view, collection)
    {
    	region.$el.find('#loading-region').remove();
    });

	App.vent.on('infinitescroll:next:page:start', function(region, view, collection)
    {
        region.isLoading(true);
    	region.$el.append(JST['bloganizer/services/infinitescroll/templates/loading']());
    });

	App.vent.on('window:scroll', function(event)
	{
		var region = App.Region_Content;

		if (!region.isLoading() && $(window).scrollTop() > $(document).height() - $(window).height() - Math.ceil($(window).height() / 10)) {
			App.vent.trigger('infinitescroll:next:page', region, region.currentView, region.currentView.collection);
		}
	});

	InfiniteScroll.Region = Marionette.Region.extend({
		el : '.scrollbar-region',

		isLoading : function(value)
		{
			if (typeof value !== 'undefined') {
				this._isLoading = value;
			}

			return this._isLoading;
		},

		onShow : function(view)
		{
			this.isLoading(false);
		}

	});

});