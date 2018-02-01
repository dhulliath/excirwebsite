{
	_page: {
		title: 'Executive Team',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: 'Executive Team',
			location: '@@global._navigation.navgroupitems.main_company',
			weight: '50',
			$label_size: 6,
			$location_size: 6,
			$weight_size: 6
		},
		$title_size: 12,
		$styling_size: 4,
		$nav_size: 8
	},
	$_templates_hidden: true,
	_templates: {
		teamtemplate: {
			team_member: {
				name: '',
				picture: '',
				$picture_type: 'image',
				title: '',
				bio: '',
				$bio_type: 'textarea'
			}
		}
	},
	$team_templatitator: '@@_templates.teamtemplate',
	team: [
		{
			name: 'Graham Fritz',
			picture: '/remote/direct_uploads/1516592540_cfcm5u.jpeg',
			$picture_type: 'image',
			title: 'Chief Executive Officer',
			bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium luctus mollis. Ut sed facilisis mi. Fusce leo nulla, cursus at placerat cursus, faucibus sit amet diam. Integer nec posuere nisi. Mauris porta leo vitae tortor gravida, a tincidunt lacus eleifend. Aliquam nec faucibus elit. Pellentesque tincidunt finibus lacus, nec eleifend lacus suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ipsum sed elit faucibus porta. Etiam nec convallis dui. Morbi id metus condimentum, facilisis massa sit amet, molestie augue.',
			$bio_type: 'textarea'
		},
		{
			name: 'Dr. Hiwa Salimi',
			picture: '/remote/direct_uploads/1516592545_qmx8rn.jpeg',
			$picture_type: 'image',
			title: 'Chief Technology Officer',
			bio: 'Mr. Salimi is one of the founders of Excir Works and an expert in the hydrometallurgy and organometallic chemistry. He earned his PhD in organometallic chemistry from the University of Saskatchewan and has over 10 years of experience in precious metals extraction and metal-ligand interactions. For the past five years, he has been focusing on developing new methods for purification and recovery of precious metals from both primary and secondary resources. Mr. Salimi holds a couple of patents in the field of purification and recovery of precious metals and has also been one of the three main inventors of the Excir process.',
			$bio_type: 'textarea'
		},
		{
			name: 'Dr. Loghman Moradi',
			picture: '/remote/direct_uploads/1516592551_wga8c.jpeg',
			$picture_type: 'image',
			title: 'Chief Operation Officer',
			bio: 'Mr. Moradi has 10 years + experience in the field of Hydrometallurgy and applied chemistry with the focus on designing and applying new sulphur based extractants for solvent extraction of gold and other precious metals. He has published numerous scientific papers and patents in the field of hydrometallurgy, chemistry and polymer science. He is also one of the reviewers for the journal of Industrial & Engineering Chemistry Research which is published by the American Chemical Society. Prior to joining Excir, Loghman was an assistant professor at the University of Kurdistan. Mr. Moradi earned his PhD in Organic chemistry from the Tarbiat Modares University. Loghman has been one of the inventors of the Excir technology.',
			$bio_type: 'textarea'
		},
		{
			name: 'Dr. Chris Bowman',
			picture: '/remote/direct_uploads/1516592556_g8ahk.jpeg',
			$picture_type: 'image',
			title: 'Business Development Officer',
			bio: 'Mr. Bowman is a portfolio manager with the University of Saskatchewan, with a specialty in the transfer of University technologies in physical science and engineering to industry. He has expertise in technology evaluation, scale-up and licensing. He holds a Ph.D in applied mathematics from the University of Arizona.',
			$bio_type: 'textarea'
		},
		{
			name: 'Dr. Stephen Foley',
			picture: '/remote/direct_uploads/1516592561_bfx0rg.jpeg',
			$picture_type: 'image',
			title: 'Director',
			bio: 'Mr. Foley is one of the co-founders of Excir Works and has more than 20 years research experience in the general field of inorganic chemistry. He has spent the last 12 years as a professor in the Department of Chemistry at the University of Saskatchewan. His recent research has focused on developing new extraction methods for recovery and purification of precious metals. Stephen was one of the inventors of the Excir technology.',
			$bio_type: 'textarea'
		}
	],
	$_page_expander: true
}