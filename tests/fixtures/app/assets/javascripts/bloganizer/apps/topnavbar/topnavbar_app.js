App.module('TopNavbar', function(TopNavbar, App, Backbone, Marionette, $, _) {

    App.on('start', function() {
        TopNavbar.controller = new TopNavbar.Show.Controller();
    });

});