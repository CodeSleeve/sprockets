$(document).ready(function() {

	$('.js-cancel-claim').click(function(event) {
		event.preventDefault();
        var form = $(this);
        
        bootbox.confirm('Are you sure you wish to remove this blog claim?', function(confirmed) {
			if (confirmed) {
				form.submit();
			}
        });
		
	});

});