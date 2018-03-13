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
			text: 'That page cannot be found.',
			$style_expander: true,
			$style_size: 4,
			style: {
				font: '@@global.styling.font_styles.default',
				align: '@@global.styling.text_align.left',
				position: '@@global.styling.position_styles.none',
				size: '@@global.styling.size_styles.default',
				border: '@@global.styling.border_styles.none'
			}
		}
	],
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}