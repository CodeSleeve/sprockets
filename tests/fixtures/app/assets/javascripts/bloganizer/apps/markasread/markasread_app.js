App.module('Services', function(Services, App, Backbone, Marionette, $, _) {

    var API = {};

    API.markAsRead = function(timeframe) {
        var request_url = false;
        var id = App.request('dispatcher:route:id');

        switch (App.request('dispatcher:route'))
        {
            case 'users:(id):posts': request_url = 'users/'+ id +'/posts/read-many'; break;
            case 'blogs:(id):posts:': request_url = 'blogs/'+ id +'/posts/read-many'; break;
            case 'stacks:(id):posts': request_url = 'stacks/'+ id +'/posts/read-many'; break;
            case 'categories:(id):posts': request_url = 'categories/' + id + '/posts/read-many'; break;
        }

        if (!request_url)
        {
            console.warn('not sure how to read-many ', App.request('dispatcher:route'))
            return;
        }

        smoke.signal('please wait while we clean up some posts for you', function() {}, 100000);

        var request = $.post(request_url, "date=" + timeframe);

        request.done(API.success);
        request.fail(API.failure);
    };

    API.success = function(response) {
        App.vent.trigger('mark:as:read:success', response);
        $('.smoke-base').remove();
    };

    API.failure = function(response) {
        App.vent.trigger('mark:as:read:error', response);
        $('.smoke-base').remove();
        smoke.alert("The server called me bad names. Really bad. Oh and I got an error too.");
    };

    App.commands.setHandler('mark:as:read', API.markAsRead);
});