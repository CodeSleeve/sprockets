// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear in whatever order it 
// gets included (e.g. say you have require_tree . then the code will appear after all the directories 
// but before any files alphabetically greater than 'application.js' 
//
//= require jquery
//= require jquery-ui
//= require jquery.form
//= require jquery.bootstraper
//= require jquery.typing-0.2.0
//= require jquery.mCustomScrollbar
//= require jquery.sequence
//= require pickadate/picker
//= require pickadate/picker.date
//= require moment
//= require popup
//= require select2
//= require twitter/bootstrap
//= require underscore
//= require backbone
//= require backbone.marionette
//= require backbone.stickit
//= require backbone.syphon
//= require marionette.application.module
//= require backbone.model.computed
//= require handlebars
//= require bootbox.min
//= require smoke
//= require bloganizer/app
//= require_tree bloganizer
//= require app
//= require profiles
//= require claimBlogRequests
// using the mocks tree so I can mock out data however 
// I want it to be, until trav fixes the API then I'll only use
// when running karma/mocha tests
//-= require_tree mocks