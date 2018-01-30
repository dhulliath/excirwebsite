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
	$_page_expander: true,
	_content: [
		{
			$embed_video_type: 'title',
			embed_video: 'Embedded Video',
			service: '@@global._contenttemplates.video_embed.youtube',
			url: 'https://www.youtube.com/embed/1yqVD0swvWU'
		}
	],
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}