$(document).ready(function() {
	$('.js-take-off-hold')
	.removeAttr('href')
    .attr('style','cursor:pointer;')
	.on('click', takeOffHold);

	$('.js-put-on-hold')
	.removeAttr('href')
    .attr('style','cursor:pointer;')
	.on('click', putOnHold);

	/**
	 * Put a blog on hold
	 * @param  {Event} e 
	 * @return {void}
	 */
	function putOnHold (e) {
		e.preventDefault();
		var link = $(this);
		var blogId = $(this).attr('data-blog-id');
		var url = document.location.origin + '/api/blogs/' + blogId + '/put-on-hold';

		$.post(url)
		.done(function(data) {
			link
			.off('click', putOnHold)
			.on('click', takeOffHold)
			.empty()
			.append('<i class="icon-asterisk"></i> On Hold');
		});
	};

	/**
	 * Take a blog off hold.
	 * @param  {Event} e 
	 * @return {void}   
	 */
	function takeOffHold (e) {
		e.preventDefault();
		var link = $(this);
		var blogId = $(this).attr('data-blog-id');
		var url = document.location.origin + '/api/blogs/' + blogId + '/take-off-hold';

		$.ajax({
			type: "DELETE",
			url: url
		})
		.done(function(data) {
			link
			.off('click', takeOffHold)
			.on('click', putOnHold)
			.empty()
			.append('<i class="icon-asterisk"></i> Put on Hold');
		});
	};
})