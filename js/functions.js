/* ==============================================
	Sticky nav
=============================================== */
$(window).scroll(function(){
    'use strict';
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
/* ==============================================
	Common
=============================================== */

jQuery(function($) {
	"use strict";
	function centerModal() {
		$(this).css('display', 'block');
		var $dialog = $(this).find(".modal-dialog"),
			offset = ($(window).height() - $dialog.height()) / 2,
			bottomMargin = parseInt($dialog.css('marginBottom'), 10);
		if (offset < bottomMargin) offset = bottomMargin;
		$dialog.css("margin-top", offset);
	}
	$('.modal').on('show.bs.modal', centerModal);
	$('.modal-popup .close-link').click(function(event){
		event.preventDefault();
		$('.modal').modal('hide');
	});
	$(window).on("resize", function() {
		$('.modal:visible').each(centerModal);
	});
});


<!-- Accordion -->
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('icon_plus_alt2 icon_minus_alt2');
}
$('.panel-group').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

<!-- Cat nav onclick active -->
$('ul#cat_nav li a').on('click', function(){
    $('ul#cat_nav li a.active').removeClass('active');
    $(this).addClass('active');
});
