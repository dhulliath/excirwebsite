{
	_page: {
		title: '',
		styling: {
			theme: '@@global.styling.page_styles.landing'
		},
		nav: {
			label: 'Landing',
			location: '@@global._navigation.navgroupitems.none',
			weight: 1,
			$label_size: 6,
			$location_size: 6,
			$weight_size: 6,
			$weight_type: ''
		},
		$title_size: 12,
		$styling_size: 4,
		$nav_size: 8
	},
	$_page_expander: false,
	_content: [
		{
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: 'That page cannot be found.'
		}
	],
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}