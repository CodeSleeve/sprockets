
/**
 * Handlebars helper for rendering a select box with the years
 * inspired by rails select_year ActionView::Helpers::DateHelper::select_year
 *
 * some usages (assume it is year 2013)
 * 
 * 	{{select_year}}
 * 	  <select>
 * 	    <option value="2013">2013</option>
 * 	    ...
 * 	    <option value="2023">2023</option>
 *    </select>
 *    
 * 
 *  {{select_year start_year=1984 end_year=2050 class="awesome-dates" data-birthday="year"}}
 *    <select class="awesome-dates" data-birthday="year">
 *      <option value="1984">1984</option>
 *      ...
 *      <option value="2050">2050</option>
 *    </select>
 *    
 *
 *   {{select_year selected="2015"}}
 *     <select>
 *      <option value="2013">2013</option>
 *      <option value="2014">2014</option>
 *      <option value="2015" selected>2015</option>
 *      ...
 *      <option value="2023">2023</option>
 *    </select>
 * * 
 */
(function(Handlebars) {

	function get_keys(obj)
	{
		var keys = [];

		for (var index in obj) {
			keys.push(index);
		}

		return keys;
	}

	function in_array(needle, haystack)
	{
		var length = haystack.length;
    	for(var i = 0; i < length; i++) {
        	if(haystack[i] == needle) return true;
    	}
    	return false;
	}

	function get_params(options)
	{
		var hash = options.hash;
		var params = {};
		var date = new Date;

		params.year_span = (hash.year_span) ? hash.year_span : 10;
		params.start_year = (hash.start_year && hash.start_year != 'now') ? hash.start_year : date.getFullYear();
		params.selected = (hash.selected) ? hash.selected : -1;
		params.end_year = (hash.end_year) ? hash.end_year : params.start_year + params.year_span;

		if (params.end_year == 'now') {
			params.end_year = date.getFullYear();
		}

		return params;
	}

	function get_attributes(options)
	{
		var attributes = {};
		var param_keys = get_keys(get_params(options));

		for (var key in options.hash) {
			if (!in_array(key, param_keys)) {
				attributes[key] = options.hash[key];
			}
		}

		return attributes;
	}

	function select_tag(options)
	{
		var attributes = get_attributes(options);
		var select = '<select';

		for(var index in attributes) {
			select += ' ' + index + '="' + attributes[index] + '"';
		}

		select += '>';
		return select;
	}

	function option_tag(options, index)
	{
		var params = get_params(options);
		var selected = "";

		if (index == params.selected) {
			selected = " selected";
		}

		return '<option value="' + index + '"' + selected + '>' + index + '</option>';
	}

	Handlebars.registerHelper('select_year', function(options)
	{
		var params = get_params(options);
		var select = select_tag(options);

		for (var i = params.start_year; i < params.end_year; i++) {
			select += option_tag(options, i);
		}

		select += '</select>';

		return new Handlebars.SafeString(select);
	});

})(Handlebars);