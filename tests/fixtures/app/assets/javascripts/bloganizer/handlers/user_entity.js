App.module('Entities', function(Entities, App, Backbone, Marionette, $, _)
{
   App.reqres.setHandler('user:entity', function(userId)
   {
      var user = new Entities.User({id: userId});
      
      user.fetch();

      return user;
   });
});