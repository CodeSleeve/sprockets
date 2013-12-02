Marionette.Region.Dialog = Marionette.Region.extend({
	el : '#dialog-region',

	onShow : function(view)
	{
		var region = this;

		// this.$el.show();
		view.$el.addClass('modal');
		view.$el.on('hidden', function() {
			view.close();

			if (region.controller !== 'undefined' && region.controller !== null) {
				region.controller.close();
				region.controller = null;
			}

		});

		view.$el.modal('show');
	},

	closeModal : function()
	{
		// this.$el.hide();
		this.currentView.$el.modal('hide');
		this.close();
	}

});
