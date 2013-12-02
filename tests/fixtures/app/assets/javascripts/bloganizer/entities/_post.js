App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.Post = Backbone.Model.extend({
		urlRoot: '../',
		
		initialize : function()
		{
			this.on('change:read', this.onChangeRead);
			this.on('change:favorited', this.onChangeFavorited);
			this.on('change:marked_read_later', this.onChangeMarkedReadLater);
		},

		getFavoritedText : function()
		{
			return (this.get('favorited') === true) ? 'Unfavorite' : 'Favorite';
		},

		getReadLaterText : function()
		{
			return (this.get('marked_read_later') === true) ? 'Marked As Read Later' : 'Read This Post Later';
		},

		getUnreadText : function ()
		{
			return (this.get('read') === true) ? 'Keep Unread' : 'Read It';
		},

		onChangeRead : function()
		{
			var url = 'api/posts/' + this.id + '/read';
			var type = "DELETE";

			if (this.get('read') == true) {
				type = "POST";
			}

			return $.ajax({ url : url, type: type });
		},

		onChangeFavorited : function()
		{
			var url = 'api/posts/' + this.id + '/favorite-posts';
			var type = 'DELETE';

			if (this.get('favorited') == true) {
				type = 'POST';
			}

			return $.ajax({ url : url, type: type });
		},

		onChangeMarkedReadLater : function()
		{
			var url = 'api/posts/' + this.id + '/read-later-posts';
			var type = 'DELETE';

			if (this.get('marked_read_later') == true) {
				type = 'POST';
			}

			return $.ajax({ url : url, type: type });
		}
	});
});