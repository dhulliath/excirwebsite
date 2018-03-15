require.config({
	baseUrl: '/assets/js/',

	paths: {
		jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
	},
})
/*require(['goldwidget'], function (gold) {
	gold.makeGoldWidget('.goldWidget', {
		'gold': 'Gold',
		'platinum': 'Platinum',
		'palladium': 'Palladium'
	});
})*/
require(['svg4everybody.min'], function (svg) {
	svg4everybody();
})
require(['jquery'], function ($) {
	$(document).ready(function () {
		console.log('requirejs ready to use')
		$('nav .burger').click(function () {
			$(this).parent().parent().toggleClass('is-active');
		})

	})
})