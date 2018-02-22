{
	_page: {
		title: 'Administrative stuff',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: 'Admin',
			location: '@@global._navigation.navgroupitems.main',
			weight: '9999',
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
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: '[Admin Page](/admin/)\n\n```\nusername: admin\npassword: admin\n```'
		}
	],
	$_page_expander: false,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}