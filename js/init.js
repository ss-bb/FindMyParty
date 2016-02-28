function init(){

	$(function(){
	var windowH = $(window).height();
	var bannerH = $('#banner').height();
	if(windowH > bannerH) {                            
		$('#banner').css({'height':($(window).height() - 50)+'px'});
		$('#bannertext').css({'height':($(window).height() - 50)+'px'});
	}                                                                               
	$(window).resize(function(){
		var windowH = $(window).height();
		var bannerH = $('#banner').height();
		var differenceH = windowH - bannerH;
		var newH = bannerH + differenceH;
		var truecontentH = $('#bannertext').height();
		if(windowH < truecontentH) {
			$('#banner').css({'height': (newH - 50)+'px'});
			$('#bannertext').css({'height': (newH - 50)+'px'});
		}
		if(windowH > truecontentH) {
			$('#banner').css({'height': (newH - 50)+'px'});
			$('#bannertext').css({'height': (newH - 50)+'px'});
		}

	})          
	});

	$(document).ready(function () {

	$(document).on("scroll", onScroll);



	$('a[href^="#"]').on('click', function (e) {

		e.preventDefault();

		$(document).off("scroll");



		$('a').each(function () {

			$(this).removeClass('active');

		})

		$(this).addClass('active');



		var target = this.hash;

		$target = $(target);

		$('html, body').stop().animate({

			'scrollTop': $target.offset().top

		}, 500, 'swing', function () {

			window.location.hash = target;

			$(document).on("scroll", onScroll);

		});

	});

	});



	function onScroll(event){

	var scrollPosition = $(document).scrollTop();

	$('.nav li a').each(function () {

		var currentLink = $(this);

		var refElement = $(currentLink.attr("href"));

		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {

			$('.nav li a').removeClass("active");

			currentLink.addClass("active");

		}

		else{

			currentLink.removeClass("active");

		}

	});

	}

	(function($) {
		"use strict"; // Start of use strict

		$(".about-carousel").owlCarousel({
			items: 3,
			navigation: true,
			pagination: false,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
		});

		$(".testimonials-carousel").owlCarousel({
			singleItem: true,
			navigation: true,
			pagination: true,
			autoHeight: true,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
			transitionStyle: "backSlide"
		});


	})(jQuery);
}