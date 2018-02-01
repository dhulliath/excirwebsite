{
	_blog: {
		title: 'Test',
		publishing: {
			date: 'Wednesday, 31 January, 2018',
			published: true,
			$date_type: 'date',
			$date_value: '2018-01-31'
		},
		stub: {
			teaser: 'I don\'t know I just work here.',
			$teaser_type: 'textarea'
		},
		$publishing_size: 4,
		$stub_size: 8
	},
	_content: [
		{
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: 'So this here is a blog entry. What more can I say? Blog it up homie.'
		}
	],
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker',
	$_blog_expander: false,
	$_page_expander: true
}