/**
 * This just triggers a window:scroll event anytime the window is scrolled
 * used for implementing infinite scroll 
 */
App.module('Window.Scroll', function(Scroll, App, Backbone, Marionette, $, _) {
    var API = {};

    API.scroll = _.debounce(function(event) {
        App.vent.trigger('window:scroll', event);
    });

    $(window).scroll(API.scroll);
});
