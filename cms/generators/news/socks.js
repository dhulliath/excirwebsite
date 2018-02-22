{
	_blog: {
		title: 'Dogs Like Socks',
		publishing: {
			date: 'Tuesday, 20 February, 2018',
			published: true,
			$date_type: 'date',
			$date_value: '2018-02-20'
		},
		stub: {
			teaser: 'they really do',
			$teaser_type: 'textarea'
		},
		$publishing_size: 4,
		$stub_size: 8
	},
	_content: [
		{
			$embed_video_type: 'title',
			embed_video: 'Embedded Video',
			service: '@@global._contenttemplates.video_embed.youtube',
			url: 'https://www.youtube.com/embed/swmuqGWgZCc'
		}
	],
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker',
	$_page_expander: true,
	$_blog_expander: false
}