App.module('Sidebar.Show', function(Show, App, Backbone, Marionette, $, _) 
{
	Show.Layout = Marionette.Layout.extend(
	{
		className: 'reader-sidebar',
		template: 'apps/sidebar/show/templates/layout',

		triggers : {
			'click .js-everything'	: 'everything:clicked',
			'click .js-read-later' 	: 'read:later:clicked',
			'click .js-favorites'	: 'favorites:clicked',
		},

		regions: {
			Region_Search: 			'.search-region',
			Region_Stacks: 			'.stacks-region',
			Region_Categories: 		'.categories-region',
			Region_Blogs: 			'.sidebar-blogs-region'
		}
	});
});