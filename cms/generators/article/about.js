{
	_page: {
		title: 'About',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: 'About',
			location: '@@global._navigation.navgroupitems.main_company',
			weight: '1',
			$label_size: 6,
			$location_size: 6,
			$weight_size: 6
		},
		$title_size: 12,
		$styling_size: 4,
		$nav_size: 8
	},
	_content: [
		{
			$image_type: 'title',
			$href_size: 4,
			image: 'Image with Styling',
			$href_type: 'image',
			href: '/assets/img/circuitgold.svg',
			$style_size: 8,
			style: {
				position: '@@global.styling.position_styles.float_left',
				size: '@@global.styling.size_styles.half'
			}
		},
		{
			$image_type: 'title',
			$href_size: 4,
			image: 'Image with Styling',
			$href_type: 'image',
			href: '/assets/img/goldbeaker.svg',
			$style_size: 8,
			style: {
				position: '@@global.styling.position_styles.float_right',
				size: '@@global.styling.size_styles.half'
			}
		},
		{
			$embed_video_type: 'title',
			embed_video: 'Embedded Video',
			service: '@@global._contenttemplates.video_embed.youtube',
			url: 'https://www.youtube.com/embed/1yqVD0swvWU'
		}
	],
	$_page_expander: false,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}