App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
	Entities.UserPosts = Backbone.Collection.extend({
		page : 1,
		urlRoot: '../',
		model : Entities.Post,
        parse : function(response)
        {
            this.current_page = response.current_page;
            this.from = response.from;
            this.last_page = response.last_page;
            this.per_page = response.per_page;
            this.to = response.to;
            this.total = response.total;

            return response.data;
        }
	});
});
