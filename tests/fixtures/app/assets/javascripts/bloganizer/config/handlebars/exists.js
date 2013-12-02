
Handlebars.registerHelper('exists', function (val1, options) {
	
	console.log(options, this);

    if (typeof val1 !== "undefined" && val1 !== null) {
        return options.fn();
    }
    else {
        return options.inverse();
    }

});