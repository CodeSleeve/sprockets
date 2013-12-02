/**
 * Handlebars helper for testing two values in a template
 */
/**
 * This block helper allows me to evaluate if two things are equal or not
 */
Handlebars.registerHelper('equal', function (val1, val2, options) {
	
    if (val1 === val2) {
        return options.fn();
    }
    else {
        return options.inverse();
    }

});