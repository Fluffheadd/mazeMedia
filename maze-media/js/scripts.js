$(document).ready(function() {

	// Mobile Menu
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		$('section#mobile nav').toggleClass('active');
	});

	// Parallax Hero
	$('#hero').parallax({
		imageSrc: 'img/hero.png',
		naturalWidth: 2000,
		naturalHeight: 1333,
		zIndex: 1,
		speed: 0.4
	});

	// Square Boxes
	function boxesHeight() {
		var width = $('.brand, .service, .outlet').width();
		var squareHeight = width / 1
		$('.brand, .service, .outlet').height(squareHeight);
	}
	$(window).resize(boxesHeight);
	boxesHeight();

	// Smooth Scroll
	var navbarHeight = 75
	$('.anchor').click(function(e) {
		e.preventDefault();
		var scrollTo = $(this).attr('data-anchor');
		$('html, body').animate({
			scrollTop: $(scrollTo).offset().top - navbarHeight
		}, 900);
	});

	// Hero Content Fade on Scroll
	function contentFade() {
		$(window).scroll(function() {
			$(".intro").css("opacity", 1 - $(window).scrollTop() / 350);
		});
	}
	contentFade();

	// Header Effects on Scroll
	function headerScroll() {
		var scrollTop = $(document).scrollTop();
		if (scrollTop > 0) {
			$('header, #mobile').addClass('scrolled');
		} else {
			$('header, #mobile').removeClass('scrolled');
		}
	}
	$(window).scroll(headerScroll);
	headerScroll();
});
