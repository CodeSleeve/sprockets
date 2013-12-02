/**
 * Handlebars helper for returning a count
 */
Handlebars.registerHelper('count', function (theArray)
{
    if (!$.isArray(theArray)) {
        return 0;
    }

    return theArray.length;
});