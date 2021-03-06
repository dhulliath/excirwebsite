{
	_page: {
		title: 'Technology',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: 'Technology',
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
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: 'Excir Works Corp possesses a new and proprietary technology that will replace standard worldwide recovery and purification methods for gold, platinum and palladium. The process has some unique properties which make it superior to all current commercial recovery methods in several ways. For example, in the case of processing e-waste, the process shows an unprecedented efficiency as in the case of circuit boards for instance, the Excir leaching solution dissolves all surface gold layer in less than 20 seconds while leaving all the other metals intact. Due to its high selectivity and extremely fast kinetics, large amount of e-scraps can be treated by comparatively very small amount of our solution. The gold contained in electronic components is extracted using the same method but requires grinding first and takes an average of 15 min for complete extraction (> 99%). The unique features of the Excir new technology can be summarized as follows:\n\n* Greatly reduced operational cost of gold recovery\n* Higher gold recovery yields (> 99%),\n* Extremely fast kinetics, (the fastest known gold leaching method to date) resulting       in vastly accelerated processing and thus fast cash flow turn overs\n* Greatly increased metals selectivity,\n* Purified gold production without added processing (99.99%+ purity)\n\nThe technology is selective and non-destructive to other metals, the remaining solid waste stream’s values can be extracted as well. Copper, silver, nickel, tantalum and aluminum can all be collected for their respective values while the remaining solid waste can be repurposed into valuable products and raw materials to be sold and reused.',
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
		},
		{
			$embedded_video_type: 'title',
			embedded_video: 'Embedded Video',
			$sources_templatitator: '@@global._contenttemplates.video_source',
			sources: [
				{
					$local_type: 'title',
					local: 'Local File',
					$url_type: 'file',
					url: '/assets/img/process_h264.mp4',
					type: 'video/mp4'
				}
			]
		}
	],
	$_page_expander: false,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}