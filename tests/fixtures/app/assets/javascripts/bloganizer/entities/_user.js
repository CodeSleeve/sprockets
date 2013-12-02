App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
   Entities.User = Backbone.Model.extend({
      urlRoot: 'api/users'
   });
});
