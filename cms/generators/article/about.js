{
	_page: {
		title: '',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: 'About',
			location: '@@global._navigation.navgroupitems.main_company',
			weight: '20',
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
			$embed_video_type: 'title',
			embed_video: 'Embedded Video',
			service: '@@global._contenttemplates.video_embed.youtube',
			url: 'https://www.youtube.com/embed/1yqVD0swvWU'
		}
	],
	$_page_expander: true,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}