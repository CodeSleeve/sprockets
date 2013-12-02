App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.ReaderSettings = Backbone.Model.extend({
		urlRoot: 'api/users/me/reader-settings',

		parse : function(response)
		{
			response.blogs_collapsed = _.isTrue(response.blogs_collapsed);
			response.show_all_blogs	= _.isTrue(response.show_all_blogs);
			response.show_new_items_only = _.isTrue(response.show_new_items_only);
			response.show_unread_count = _.isTrue(response.show_unread_count);
			response.zen_mode = _.isTrue(response.zen_mode);

			return response;
		},

		getShowUpdatedPostsOnlyChecked : function()
		{
			return this.get('show_new_items_only') ? "check" : "check-empty";
		},

		getShowAllPostsChecked : function()
		{
			return !this.get('show_new_items_only') ? "check" : "check-empty";
		},

		getShowUnreadCountChecked : function()
		{
			return this.get('show_unread_count') ? "check" : "check-empty";
		},

		getHideUnreadCountChecked : function()
		{
			return !this.get('show_unread_count') ? "check" : "check-empty";
		},

		getShowAllBlogsChecked : function()
		{
			return this.get('show_all_blogs') ? "check" : "check-empty";
		},

		getShowUpdatedBlogsOnlyChecked : function()
		{
			return !this.get('show_all_blogs') ? "check" : "check-empty";
		}

	});
});