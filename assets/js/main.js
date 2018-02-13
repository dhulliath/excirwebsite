require.config({
	baseUrl: '/assets/',

	paths: {
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
		"photoswipe": "/assets/js/photoswipe.min",
		"photoswipe-ui": "/assets/js/photoswipe-ui-default.min"
	},
})

require(['jquery'], function ($) {
	$(document).ready(function () {
		console.log('requirejs ready to use')
		$('.debugbutton').click(function() {
			$('body').toggleClass('debug')
		})
		
	})
	require(['photoswipe', 'photoswipe-ui'], function( PhotoSwipe, PhotoSwipeUI_Default) {
		console.log('photoswipe loaded');
		$('.pswp').each(function( index ) {
			var items = $(this).find('.itemcontent').toArray();
			var galleryitems = []
			for (key in items) {
				galleryitems.push({href: $(items[key]).attr('data-href'), height: 600, width: 600})
			}
			var gallery = new PhotoSwipe(this, PhotoSwipeUI_Default, galleryitems, {index: 0});
			gallery.init();
		})
	});
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