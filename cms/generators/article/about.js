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
			$gallery_type: 'title',
			gallery: 'Image Gallery',
			title: '',
			$items_templatitator: '@@global._contenttemplates.gallery',
			items: [
				{
					$image_type: 'title',
					image: 'Image with Styling',
					$href_type: 'image',
					href: '/assets/img/goldbeaker.svg',
					caption: 'Gold beaker animated'
				},
				{
					$image_type: 'title',
					image: 'Image with Styling',
					$href_type: 'image',
					href: '/assets/img/circuitgold.svg',
					caption: 'Circuit bricks'
				}
			]
		}
	],
	$_page_expander: false,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}