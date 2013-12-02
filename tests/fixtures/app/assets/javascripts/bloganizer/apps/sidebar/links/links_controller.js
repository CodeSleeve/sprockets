App.module('Sidebar.Links', function(Links, App, Backbone, Marionette, $, _) 
{
    Links.Controller = Marionette.Controller.extend({

        initialize : function(options)
        {
            // console.log(options);
        },

        test : function(id)
        {
            // console.log('sidebar:links:controller is going to try and set a current link?', id);
        },

        changeTextBox : function()
        {
            var routeId = App.request('dispatcher:route:id');
            App.vent.trigger('sidebar:update:search:text', routeId);
        },

        routeTo : function(route, id)
        {
            switch (route)
            {
                case 'users:(id):posts'             : return this.test(id);
                case 'users:(id):posts:read:later'  : return this.test(id);
                case 'users:(id):posts:favorite'    : return this.test(id);
                case 'stacks:(id):posts'            : return this.test(id);
                case 'blogs:(id):posts'             : return this.test(id);
                case 'categories:(id):posts'        : return this.test(id);
                case 'search:(id)'                  : return this.changeTextBox();
                default                             : console.log('unhandled route', route);
            }
        }

    });
});