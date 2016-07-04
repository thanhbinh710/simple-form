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
	Step 1
=============================================== */
function addPhoto() {
	document.getElementById("input_file").click();
}

document.getElementById("input_file").addEventListener("click", showLoading);

function showLoading() {
	document.getElementById("add_photo").style.display = 'none';
	document.querySelector('img').src = "img/loading.gif";
}

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];

  if (file) {
		document.getElementById("add_photo").style.display = 'none';

		if ( /\.(jpe?g|png)$/i.test(file.name) ) {
			var reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = function() {
				preview.src = reader.result;
				document.getElementById("add_photo").style.display = 'none';
				document.getElementById("photo_upload_err").innerHTML = "";
				document.getElementById("step_1_button").disabled = false;
			}

		} else {
			document.getElementById("photo_upload_err").innerHTML = "You need to upload a photo";
			document.getElementById("add_photo").style.display = 'block';
			document.getElementById("step_1_button").disabled = true;
			preview.src ="";
		}

  }
}

function goStep2() {
	document.getElementById("step_1").style.display = 'none';
	document.getElementById("step_3").style.display = 'none';
	document.getElementById("step_2").style.display = 'block';
	document.getElementById("step_1_li").className = "completed";
	document.getElementById("step_2_li").className = "active";
	window.scrollTo(0, 0);
}

/* ==============================================
	Step 2
=============================================== */
document.getElementById("first_name").addEventListener("change", validateFirstName);

function validateFirstName() {
		var x = document.getElementById("first_name").value;
		if (!x.match(/\S/)) {
			document.getElementById("first_name_err").innerHTML = "This field cannot be empty";
			document.getElementById("step_2_button").disabled = true;
		} else {
			document.getElementById("first_name_err").innerHTML = "&nbsp;";
		}
}

document.getElementById("last_name").addEventListener("change", validateLastName);

function validateLastName() {
		var x = document.getElementById("last_name").value;
		if (!x.match(/\S/)) {
			document.getElementById("last_name_err").innerHTML = "This field cannot be empty";
			document.getElementById("step_2_button").disabled = true;
		} else {
			document.getElementById("last_name_err").innerHTML = "&nbsp;";
		}
}

document.getElementById("contact_number").addEventListener("change", validateContactNumber);

function validateContactNumber() {
		var x = document.getElementById("contact_number").value;
		if (!x.match(/\S/)) {
			document.getElementById("contact_number_err").innerHTML = "This field cannot be empty";
			document.getElementById("step_2_button").disabled = true;
		} else {
			document.getElementById("contact_number_err").innerHTML = "&nbsp;";
		}
}

document.getElementById("address").addEventListener("change", validateAddress);

function validateAddress() {
		var x = document.getElementById("address").value;
		if (!x.match(/\S/)) {
			document.getElementById("address_err").innerHTML = "This field cannot be empty";
			document.getElementById("step_2_button").disabled = true;
		} else {
			document.getElementById("address_err").innerHTML = "&nbsp;";
		}
}

$(document).ready(function() {
	$("fieldset > :input").keyup(function() {
			var $emptyFields = $('fieldset :input').filter(function() {
					return $.trim(this.value) === "";
			});

			if (!$emptyFields.length) {
					$('#step_2_button').prop("disabled", false);
			}
	});
});

function goStep3() {
	document.getElementById("step_2").style.display = 'none';
	document.getElementById("step_1").style.display = 'none';
	document.getElementById("step_3").style.display = 'block';
	document.getElementById("step_3_li").className = "completed";
	document.getElementById("step_2_li").className = "completed";
	window.scrollTo(0, 0);
}

/* ==============================================
	Step 3
=============================================== */


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
