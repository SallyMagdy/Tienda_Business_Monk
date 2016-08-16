/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function () {
	//Preloader 
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({
		'overflow': 'visible'
	});
})

$(document).ready(function () {
	$('body,html').animate({
		scrollTop: 0,
	})
});

$(document).ready(function () {


	//animated logo
	$(".navbar-brand").hover(function () {
		$(this).toggleClass("animated shake");
	});

	function setHeight() {
		windowHeight = $(window).innerHeight();
		$('.tryal').css('min-height', windowHeight);
	};
	setHeight();

	$(window).resize(function () {
		setHeight();
	});


	//animated scroll_arrow
	$(".img_scroll").hover(function () {
		$(this).toggleClass("animated infinite bounce");
	});

	//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
	wow = new WOW({
		mobile: false
	});
	wow.init();

	//MagnificPopup
	$('.image-link').magnificPopup({
		type: 'image'
	});



	//SmothScroll
	$('a[href*=#]').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({
					scrollTop: targetOffset
				}, 600);
				return false;
			}
		}
	});
	// To Top
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function () {
		($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass('cd-fade-out');
		}

	});

	//smooth scroll to top
	$back_to_top.on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, scroll_top_duration);
	});


});