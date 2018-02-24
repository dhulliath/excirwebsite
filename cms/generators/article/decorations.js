{
	_page: {
		title: 'Testing design choices here',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: '_TEST',
			location: '@@global._navigation.navgroupitems.main',
			weight: '999999',
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
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel quam vitae urna elementum eleifend sit amet eu nulla. Etiam ante dui, finibus at suscipit vel, commodo ut sem. Cras euismod porta velit quis dictum. Cras suscipit dictum justo quis laoreet. Maecenas lobortis, nulla vel bibendum congue, turpis lorem imperdiet mi, quis tincidunt quam enim in lacus. Nulla semper hendrerit libero at pharetra. Donec ornare magna est, lobortis porttitor diam viverra ac. In arcu libero, tristique nec rutrum non, egestas placerat quam. Donec vel orci a nunc vestibulum consectetur nec nec mi.'
		},
		{
			$header_size: 8,
			$header_type: 'textarea',
			header: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas."',
			$style_size: 4,
			style: {
				position: '@@global.styling.position_styles.float_right',
				size: '@@global.styling.size_styles.quarter',
				border: '@@global.styling.border_styles.none'
			}
		},
		{
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: 'Aenean vel eros mattis nunc tempus condimentum sed sed sapien. Sed vel sem auctor, faucibus nisi eget, viverra ligula. Maecenas cursus nisi varius, hendrerit nunc eget, malesuada nisl. Phasellus placerat libero magna, et pretium ligula condimentum eu. In aliquam diam at dolor bibendum, dictum hendrerit sem gravida. Sed consectetur bibendum orci in sodales. Donec mauris orci, convallis at luctus sit amet, faucibus quis nisi. Praesent condimentum in eros non faucibus. Cras tempus arcu vel dapibus semper. In ornare ipsum ac metus convallis, sed bibendum velit mattis. Cras auctor mauris quis nisl ultrices congue. Mauris laoreet ornare arcu, sed lobortis orci volutpat ac. Etiam eu ornare lectus. Aliquam interdum erat consequat, condimentum mi semper, pretium turpis. Donec pulvinar quam ut facilisis dictum. Nunc felis nisi, viverra non interdum non, volutpat ac orci.\n\nNunc dignissim dolor consequat eros porta, eget dictum ex accumsan. \n* Quisque tellus purus, bibendum et elit in, tristique dictum arcu. \n* Quisque posuere, magna cursus viverra auctor, tortor enim pretium purus, ut rhoncus lacus velit in urna. \n* Vestibulum interdum enim ante, non posuere urna ultrices at. \n* Quisque dui risus, congue quis hendrerit vel, consequat id quam. \n* Nullam pretium arcu et orci egestas luctus. \n* Mauris eu lectus nibh.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta sed velit quis interdum. Nam condimentum placerat velit a facilisis. Suspendisse sit amet erat vitae urna scelerisque ornare. Vestibulum a sollicitudin augue. Phasellus ipsum nibh, efficitur at purus quis, blandit eleifend sem. Nulla id suscipit libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae leo viverra risus tempus sollicitudin vitae sed lacus. Maecenas ultrices condimentum velit, ac bibendum sapien condimentum ornare. Curabitur dictum aliquam rhoncus. Praesent tristique ante sit amet mauris ornare suscipit. In hac habitasse platea dictumst.\n\n## Vivamus at leo libero\n\nDonec vulputate venenatis tempor. Vivamus at leo libero. Morbi dapibus purus vitae purus finibus, semper posuere purus suscipit. Aliquam turpis lorem, pretium non venenatis sit amet, lacinia vel nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent laoreet dui sed congue rhoncus. Nam nec sollicitudin arcu, et posuere tellus. Praesent quis nunc augue. Proin nec mollis lectus. Quisque quis sodales elit. Curabitur ornare elit vel elit sagittis sagittis fermentum tempus orci. Proin finibus quam eget nisi consectetur rhoncus.'
		},
		{
			$image_type: 'title',
			$href_size: 4,
			image: 'Image with Styling',
			$href_type: 'image',
			href: '/remote/direct_uploads/1519409074_wallhaven-570208.jpg',
			$style_size: 8,
			style: {
				position: '@@global.styling.position_styles.float_left',
				size: '@@global.styling.size_styles.quarter',
				border: '@@global.styling.border_styles.rounded'
			}
		},
		{
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: '# Nulla facilisi. \n\nMorbi blandit, libero in feugiat sodales, justo dui euismod arcu, ornare pharetra arcu dui vel purus. Vivamus faucibus dui arcu, sit amet lacinia tortor feugiat non. Nullam eget magna sed urna condimentum dignissim id venenatis magna. Integer bibendum, velit a dignissim mattis, libero nulla ullamcorper tortor, sit amet pellentesque magna ante eu turpis. In nec blandit tortor, sed congue mauris. Proin ullamcorper augue at sapien euismod, a feugiat justo malesuada. Vestibulum nibh neque, ultrices vitae volutpat a, rutrum at eros. Donec pulvinar risus ac vestibulum aliquet. Morbi mattis massa dolor, ut vestibulum nisi finibus eu. Cras eget dolor non nulla aliquet rhoncus non at enim.\n\nNam lacinia et nibh sit amet bibendum. Aenean ac mattis diam. Fusce aliquet justo mi, eget sodales dolor tempus sit amet. In fermentum egestas ipsum, ac elementum mi suscipit sit amet. Etiam ullamcorper ex eu purus luctus, eget auctor metus facilisis. Donec quis posuere tortor, a dignissim ante. Etiam fringilla elit in augue lacinia, a ornare metus condimentum. Maecenas euismod semper libero et porttitor. Nulla a ipsum sit amet eros efficitur commodo eget sed est. Donec feugiat ex id turpis facilisis, ut efficitur leo dignissim. Suspendisse enim dolor, placerat sit amet est et, luctus efficitur mi. Sed diam purus, maximus sed augue in, egestas porttitor justo. Vivamus dictum dui a sapien aliquet, sit amet lobortis ex molestie.'
		},
		{
			$image_type: 'title',
			$href_size: 4,
			image: 'Image with Styling',
			$href_type: 'image',
			href: '/remote/direct_uploads/1519409566_wallhaven-593190.jpg',
			$style_size: 8,
			style: {
				position: '@@global.styling.position_styles.float_right',
				size: '@@global.styling.size_styles.quarter',
				border: '@@global.styling.border_styles.rounded'
			}
		},
		{
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec quam eget massa elementum viverra et in risus. Aenean eget turpis et quam ultricies placerat. Curabitur in augue et est consequat viverra. Nullam at mi vel mi laoreet elementum. Praesent nisi magna, posuere quis pulvinar eu, pretium at ex. Nunc euismod sit amet urna vel eleifend. Aenean porta diam at neque pretium mattis. In quam nisl, finibus et dui eget, interdum tempor leo. Phasellus non feugiat lacus. Praesent ullamcorper lacus sit amet enim sollicitudin vulputate. Integer augue tortor, pellentesque non mi sed, faucibus hendrerit eros. Donec vel ante semper leo placerat iaculis. Nunc at purus eu tortor blandit venenatis at non massa. Aenean non nisl nec lectus dignissim pretium. Duis volutpat arcu sed nunc molestie, eget tristique mauris commodo.'
		},
		{
			$header_size: 8,
			$header_type: 'textarea',
			header: 'Nam a neque egestas, condimentum justo sit amet, porttitor dolor.',
			$style_size: 4,
			style: {
				position: '@@global.styling.position_styles.center',
				size: '@@global.styling.size_styles.fluid',
				border: '@@global.styling.border_styles.none'
			}
		},
		{
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: 'Vestibulum mollis arcu magna, eu pellentesque mi viverra eu. Aenean quis diam eget diam sollicitudin euismod. Vestibulum pretium, massa quis mollis varius, nulla nisl egestas dolor, vel posuere ipsum diam eget turpis. Vivamus ipsum lorem, rutrum non condimentum nec, aliquam quis dui. Donec viverra metus ac orci volutpat, ut malesuada eros blandit. Sed placerat, orci sit amet tristique vestibulum, risus eros vestibulum dui, a fringilla erat nunc a libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sit amet lorem dictum, tempus metus vel, auctor orci. Etiam et risus nec quam lacinia vestibulum id et metus. Quisque et orci lobortis, facilisis nisl vitae, porta est. Sed posuere est ut mi eleifend, sed sollicitudin dolor venenatis. Nullam tincidunt lorem sem, ac luctus velit porta at. Cras ut mi vestibulum, dictum diam vitae, luctus nunc. Aenean mattis aliquet diam sit amet dignissim.\n\nVivamus et dignissim arcu, cursus finibus sem. Sed scelerisque eros vitae molestie dictum. Integer euismod ligula neque, nec hendrerit orci ornare tempus. Donec condimentum vel massa quis vulputate. Donec euismod dui eu libero venenatis tempor. Vivamus in nisl sollicitudin, commodo tellus in, egestas metus. Praesent dictum facilisis dolor id fringilla. Nulla facilisi. Curabitur iaculis massa nunc, ut efficitur leo elementum nec. Sed fermentum enim eget nibh pretium vestibulum. In pulvinar enim sit amet lorem molestie interdum. Vestibulum est tortor, fringilla in pharetra a, varius sed metus. Nullam et diam non augue imperdiet vehicula ac eu nisl. Proin tincidunt nunc sit amet egestas faucibus. Curabitur nec est ligula. In fringilla ac elit a pretium.'
		}
	],
	$_page_expander: false,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}