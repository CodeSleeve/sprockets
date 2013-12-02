/**
 * Handlebars helper for rendering a date in a certain format
 */
Handlebars.registerHelper('date', function(options)
{
	var time = options.hash.time;
	var format = options.hash.format;
    
	if (!time) {
		return "Invalid date";
	}
	
	return moment(time).format(format)
});

