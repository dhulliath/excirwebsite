{
	_page: {
		title: '',
		styling: {
			theme: '@@global.styling.page_styles.standard'
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
			text: 'Excir Works Corp. recovers valuable metals from e-waste and spent catalysts using its proprietary breakthrough technology. Excir’s unique process delivers the final products in highly pure forms (> 99.99%), excluding precious metal products from refining processes. The company aims to apply its unique recycling technology all over the world to become one of the leading producer of precious metals.'
		},
		{
			$image_type: 'title',
			$href_size: 4,
			image: 'Image with Styling',
			$href_type: 'image',
			href: '/assets/img/goldbeaker.svg',
			$style_size: 8,
			style: {
				position: '@@global.styling.position_styles.center',
				size: '@@global.styling.size_styles.half'
			}
		}
	],
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}