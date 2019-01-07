$(document).scroll(function() {
	if ($(document).scrollTop() > 0) {
		$('.top-nav').addClass('top-nav-aniamte');
	} else {
		$('.top-nav').removeClass('top-nav-aniamte');
	}
})
console.log($(window).width())
$(document).ready(function() {
	$('.configHeader').load('header.html', function() {
		var active = $(this).attr('data-active')
		if (active) {
			$(this).find('.' + active).addClass('active').siblings().removeClass('active');
		}
	});
	$('.configFoot').load('footer.html');
	$('.configHeader').on('click', '.dropdown-toggle', function() {
		if ($('.dropdown-menu').is(':visible')) {
			$('.dropdown-menu').slideUp(150)
		} else {
			$('.dropdown-menu').slideDown(150)
		}
	})
})
