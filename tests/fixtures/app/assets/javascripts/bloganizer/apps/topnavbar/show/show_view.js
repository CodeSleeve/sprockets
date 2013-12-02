App.module('TopNavbar.Show', function(Show, App, Backbone, Marionette, $, _)
{
	Show.View = Marionette.ItemView.extend(
	{
		template: 'apps/topnavbar/show/templates/view',

		triggers : {
			'click .js-add-blog' 				: 'add:blog:clicked',
		},

		events : {
			'click .js-show-all-posts' 			: 'onShowAllPostsClicked',
			'click .js-show-only-new-posts'		: 'onShowOnlyNewPostsClicked',

			'click .js-show-all-blogs'			: 'onShowAllBlogsClicked',
			'click .js-show-only-updated-blogs'	: 'onShowOnlyUpdatedBlogsClicked',

			'click .js-show-unread-count'		: 'onShowUnreadCountClicked',
			'click .js-hide-unread-count'		: 'onHideUnreadCountClicked',

			'click .js-older-than-now'	 		: 'onOlderThanNowClicked',
			'click .js-older-than-day'			: 'onOlderThanDayClicked',
			'click .js-older-than-two-days'		: 'onOlderThanTwoDaysClicked',
			'click .js-older-than-three-days' 	: 'onOlderThanThreeDaysClicked',
			'click .js-older-than-week' 		: 'onOlderThanWeekClicked',
			'click .js-older-than-two-weeks' 	: 'onOlderThanTwoWeeksClicked',
			'click .js-older-than-month' 		: 'onOlderThanMonthClicked',
		},

		onShowAllPostsClicked : function(event)
		{
			event.preventDefault();

			this.model.set('show_new_items_only', false);
			this.model.save();

			this.render();
			this.trigger('show:all:posts:clicked');
		},
		
		onShowOnlyNewPostsClicked : function(event)
		{
			event.preventDefault();

			this.model.set('show_new_items_only', true);
			this.model.save();

			this.render();
			this.trigger('show:only:new:posts:clicked');
		},

		onShowAllBlogsClicked : function(event)
		{
			event.preventDefault();

			this.model.set('show_all_blogs', true);
			this.model.save();

			this.render();
			this.trigger('show:all:blogs:clicked');
		},

		onShowOnlyUpdatedBlogsClicked : function(event)
		{
			event.preventDefault();

			this.model.set('show_all_blogs', false);
			this.model.save();

			this.render();
			this.trigger('show:only:updated:blogs:clicked');
		},

		onShowUnreadCountClicked : function(event)
		{
			event.preventDefault();

			this.model.set('show_unread_count', true);
			this.model.save();

			this.render();
			this.trigger('show:unread:count:clicked');
		},

		onHideUnreadCountClicked : function(event)
		{
			event.preventDefault();

			this.model.set('show_unread_count', false);
			this.model.save();

			this.render();
			this.trigger('hide:unread:count:clicked');
		},

		onOlderThanNowClicked : function(event)
		{
			event.preventDefault();
			this.trigger('older:than:now:clicked', this);
		},

		onOlderThanDayClicked : function(event)
		{
			event.preventDefault();
			this.trigger('older:than:day:clicked', this);
		},

		onOlderThanTwoDaysClicked : function(event)
		{
			event.preventDefault();
			this.trigger('older:than:two:days:clicked', this);
		},

		onOlderThanThreeDaysClicked : function(event)
		{
			event.preventDefault();
			this.trigger('older:than:three:days:clicked', this);
		},

		onOlderThanWeekClicked : function(event)
		{
			event.preventDefault();
			this.trigger('older:than:week:clicked', this);
		},

		onOlderThanTwoWeeksClicked : function(event)
		{
			event.preventDefault();
			this.trigger('older:than:two:weeks:clicked', this);
		},

		onOlderThanMonthClicked : function(event)
		{
			event.preventDefault();
			this.trigger('older:than:month:clicked', this);
		}

	});

});