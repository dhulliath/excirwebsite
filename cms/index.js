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
			$header_type: 'textarea',
			header: 'THE MOST EFFECTIVE AND ENVIRONMENTALLY-FRIENDLY METHOD FOR RECYCLING AND REFINING OF GOLD, PALLADIUM AND PLATINUM',
			$style_expander: true,
			style: {
				$text_size: 4,
				$position_size: 4,
				text: {
					font: '@@global.styling.font_styles.default',
					align: '@@global.styling.text_align.left',
					text_size: '@@global.styling.text_size.1_5_em'
				},
				position: {
					position: '@@global.styling.position_styles.center',
					size: '@@global.styling.size_styles.fluid',
					border: '@@global.styling.border_styles.none'
				}
			}
		},
		{
			spacer: '3em'
		},
		{
			$image_type: 'title',
			image: 'Image with Styling',
			$href_type: 'image',
			href: '/remote/direct_uploads/1519854788_Picture2.png',
			$style_expander: true,
			$style_size: 12,
			style: {
				$position_noframe: true,
				$position_size: 4,
				position: {
					position: '@@global.styling.position_styles.center',
					size: '@@global.styling.size_styles.fluid',
					border: '@@global.styling.border_styles.none'
				}
			}
		}
	],
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}