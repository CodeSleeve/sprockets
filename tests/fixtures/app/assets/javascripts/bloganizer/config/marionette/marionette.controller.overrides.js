
Marionette.Controller.prototype.listenAll = function(obj)
{
    var controller = this;

    this.listenTo(obj, 'all', function() {
        controller.triggerMethod.apply(this, arguments)
    });
}