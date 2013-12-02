
$(document).keydown(function(e) {
	if ($(this).data("keyboard-input")==="enabled") {
		var activeElem = $(".keyboard-input"),
			activeElemPos = Math.abs($(".keyboard-input .mCSB_container").position().top),
			pixelsToScroll = 60;

		if (e.which === 38) {
			e.preventDefault();
			if (pixelsToScroll > activeElemPos) {
				activeElem.mCustomScrollbar("scrollTo","top");
			}
			else {
				activeElem.mCustomScrollbar("scrollTo",(activeElemPos-pixelsToScroll),{scrollInertia:400,scrollEasing:"easeOutCirc"});
			}
		}
		else if (e.which===40) {
			e.preventDefault();
			activeElem.mCustomScrollbar("scrollTo",(activeElemPos+pixelsToScroll),{scrollInertia:400,scrollEasing:"easeOutCirc"});
		}
	}
});