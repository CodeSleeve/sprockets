App.module('Sidebar', function(Sidebar, App, Backbone, Marionette, $, _) {

	var API = {

		flyoutStack : function(stack)
		{
			Sidebar.flyoutController.showStackBlogs(stack);
		},

		flyoutCategory : function(category)
		{
			Sidebar.flyoutController.showCategoryBlogs(category);
		},
		
		flyoutHide : function()
		{
			if (typeof Sidebar.flyoutController.view === 'undefined') {
				return;
			}

			Sidebar.flyoutController.view.close();
			App.Region_SidebarFlyout.$el.hide();
		},

		refreshStacks : function()
		{
			Sidebar.showController.refreshStacks();
		},

		routeTo : function(route, options)
		{
			var controller = new Sidebar.Links.Controller({ controller: Sidebar.showController });
			controller.routeTo(route, options.id);
		},

		updateSearchText : function(text)
		{
			if (Sidebar.showController) {
				Sidebar.showController.updateSearchText(text);			
			}
		}

	};

	App.on('start', function() {
		Sidebar.showController = new Sidebar.Show.Controller();
		Sidebar.flyoutController = new Sidebar.Flyout.Controller();

		$(App.Region_Main.el).click(function()
		{
			App.execute('sidebar:flyout:hide');
		});
	});

	App.commands.setHandler('sidebar:flyout:stack', API.flyoutStack);
	App.commands.setHandler('sidebar:flyout:category', API.flyoutCategory);
	App.commands.setHandler('sidebar:flyout:hide', API.flyoutHide);

	App.vent.on('dispatcher:set:route', API.routeTo);
	App.vent.on('sidebar:refresh:stacks', API.refreshStacks);
    App.vent.on('follow:blog:success', API.refreshStacks);
    App.vent.on('sidebar:update:search:text', API.updateSearchText);

});