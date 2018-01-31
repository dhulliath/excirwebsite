require.config({
	baseUrl: '/assets/',

	paths: {
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
	},
})

require(['jquery'], function ($) {
	$(document).ready(function () {
		console.log('requirejs ready to use')
		$('.debugbutton').click(function() {
			$('body').toggleClass('debug')
		})
	})
	$('nav a.icon').click(function () {
		$('nav').toggleClass('responsive');
	})
	var stickyTop = $('nav').offset().top;
	$(window).resize(function() {
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