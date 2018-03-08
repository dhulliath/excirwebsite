require.config({
	baseUrl: '/assets/js/',

	paths: {
		jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
	},
})
require(['goldwidget'], function (gold) {
	gold.makeGoldWidget({
		'gold': '.AU-price',
		'platinum': '.PT-price',
		'palladium': '.PD-price'
	});
})
require(['jquery'], function ($) {
	$(document).ready(function () {
		console.log('requirejs ready to use')
		$('.debugbutton').click(function () {
			$('body').toggleClass('debug')
		})

		$('nav .burger').click(function () {
			$(this).parent().parent().toggleClass('is-active');
		})

	})

	$('nav a.icon').click(function () {
		$('nav').toggleClass('responsive');
	})
	var stickyTop = $('nav').offset().top;
	$(window).resize(function () {
		$('nav').removeClass('sticky');
		stickyTop = $('nav').offset().top;
		$(window).scroll();
	})
	$(window).scroll(function () {
		if ($(window).scrollTop() >= stickyTop) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	})
	/*$('nav .dropdown').click(function() {
		$(this).toggleClass('show');
	})*/
	$(window).scroll();
})