
/**
 * Handlebars helper for rendering a select box with the years
 * inspired by rails select_year ActionView::Helpers::DateHelper::select_year
 *
 * some usages
 * 
 * 	{{select_month}}
 * 	  <select>
 * 	    <option value="01">January</option>
 * 	    ...
 * 	    <option value="12">December</option>
 *    </select>
 *    
 * 
 *  {{select_month class="awesome-dates" data-birthday="month"}}
 *    <select class="awesome-dates" data-birthday="month">
 * 	    <option value="01">January</option>
 * 	    ...
 * 	    <option value="12">December</option>
 *    </select>
 *    
 *
 *   {{select_year selected="March"}}   or  {{select_year selected=3}}
 *     <select>
 * 	    <option value="01">January</option>
 * 	    <option value="02">February</option>
 * 	    <option value="03" selected>March</option>
 * 	    ...
 * 	    <option value="12">December</option>
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

		params.selected = (hash.selected) ? hash.selected : -1;
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

	function get_months(options)
	{
		return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	}

	function select_tag(options)
	{
		var attributes = get_attributes(options);
		var select = '<select';

		for(var index in attributes) {
			select += ' ' + index + '="' + attributes[index] + '"';
		}

		select += '>';
		select += get_option_tags(options);
		select += '</select>';

		return select;
	}

	function get_option_tags(options)
	{
		var option_tags = "";
		var params = get_params(options);
		var months = get_months(options);

		for (var index in months) {
			var _index = parseInt(index) + 1;
			var selected = "";

			if (_index == params.selected || months[index] == params.selected) {
				selected = " selected";
			}

			option_tags += '<option value="' + _index  + '"' + selected + '>' + months[index] + '</option>';
		}

		return option_tags;
	}

	Handlebars.registerHelper('select_month', function(options)
	{
		var select = select_tag(options);
		return new Handlebars.SafeString(select);
	});

})(Handlebars);