
/**
 * Handlebars helper for testing if two values are not equal in a template
 */
Handlebars.registerHelper('diff', function (val1, val2, options) {

    if (val1 === val2) {
        return options.fn();
    }
    else {
        return options.inverse();
    }

});