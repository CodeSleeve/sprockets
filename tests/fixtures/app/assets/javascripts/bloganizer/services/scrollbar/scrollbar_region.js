App.module('Services.Scrollbar', function(Scrollbar, App, Backbone, Marionette, $, _) {

	Scrollbar.Region = Marionette.Region.extend({
		el : '.scrollbar-region',

		onShow : function(view) {
			var _this = this;
			
			view.$el.on('mouseenter', function(event) {
				_this.hoverOn(event);
			});

			view.$el.on('mouseleave .mCSB_container', function(event) {
				_this.hoverOff(event);
			});

			this.setupScrollbar(view);
			this.refreshHeight(view);

			this.listenTo(App.vent, 'window:resize', function(event) {
				_this.refreshHeight(view);
			});
		},

		hoverOn : function(event) {
			$(document).data({"keyboard-input":"enabled"});
			$(event.currentTarget).addClass("keyboard-input");
		},

		hoverOff : function(event) {
			$(document).data({"keyboard-input":"disabled"});
			$(event.currentTarget).removeClass("keyboard-input");
		},

		setupScrollbar : function(view) {
			view.$el.mCustomScrollbar({
				advanced:{ updateOnContentResize : true },
				scrollInertia: 0,
				theme:"dark-thick"
			});
		},

		refreshHeight : function(view) {
			var height = $(window).height() - this.$el.parent()[0].offsetTop;
			view.$el.height(height);
			view.$el.css('overflow', 'auto');
		}			
	});

});