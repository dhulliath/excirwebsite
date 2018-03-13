{
	_page: {
		title: 'About',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: 'About',
			location: '@@global._navigation.navgroupitems.main_company',
			weight: 1,
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
			text: 'Excirs core technology was first discovered at the University of Saskatchewan in 2016 after three years of research in the field of precious metals recovery from both primary and secondary sources. The aim was to find an environmentally friendly lixiviant as an alternative to the cyanidation process. Besides reaching significant results for gold recovery from ore, the process showed an exceptional efficiency in the case of gold recovery from electronic wastes. In March 2017, Excir Works Corp. was established in Saskatoon to experience the process in large scale operations with the aim of becoming one of the major precious metals producers. After implementing the first phase of pilot plant, the company was relocated to Calgary in December 2017 to launch the second phase of pilot plant and setting up the first operation plant in it’s headquarter facility. \n\nThe company aims to exploit its proprietary technology to achieve a worldwide majority market share in precious metals industry. After establishing the operation plant in the e-waste sector, Excir will extend its recycling technology to the other precious metals industries including spent catalyst recycling, precious metal refining, and a variety of mining applications in which the technology shows the same level of efficiency.',
			$style_expander: true,
			style: {
				$text_size: 4,
				$text_noframe: true,
				$position_size: 4,
				$position_noframe: true,
				text: {
					font: '@@global.styling.font_styles.default',
					align: '@@global.styling.text_align.left'
				},
				position: {
					position: '@@global.styling.position_styles.default',
					size: '@@global.styling.size_styles.default',
					border: '@@global.styling.border_styles.none'
				}
			}
		}
	],
	$_page_expander: false,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}