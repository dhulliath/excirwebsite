{
	$_contenttemplate_hidden: true,
	_contenttemplate: {
		contact: {
			email_contact: {
				subject: '',
				email_destination: ''
			}
		},
		gold_queries: {
			quandl: {
				name: '',
				currency: '',
				unit: '@@global._contenttemplate.weight_units.oz',
				database: '',
				dataset: ''
			}
		},
		weight_units: {
			oz: {
				oz: 1
			},
			troy_oz: {
				oz: 1.0971
			},
			not_applicable: {
				oz: 1
			}
		}
	},
	site: {
		title: 'Excir Works',
		$image_hidden: true,
		image: '@@global._hidden.logo_images.vector',
		footer: 'Website under Construction',
		$footer_type: 'textarea'
	},
	seo: {
		description: 'The most effective and environmentally-friendly method for recycling and refining of gold, palladium and platinum.',
		$description_type: 'textarea',
		keywords: '',
		url_base: 'https://excir.earlgraytease.com',
		share_image: '/assets/img/icon.png',
		$share_image_type: 'image',
		fav_icon: '/assets/img/favicon.ico',
		$fav_icon_type: 'image',
		facebook: {
			app_id: ''
		}
	},
	contact: {
		$address_size: 6,
		address: {
			unit: 'Bay 12',
			address: '2712 - 37 Avenue NE',
			city: 'Calgary',
			region: 'AB',
			country: 'CA',
			postal_code: 'T1Y 5L3'
		},
		$correspond_size: 6,
		correspond: {
			phone: '',
			$email_templatitator: '@@global._contenttemplate.contact',
			$email_size: 12,
			primaryemail: 'info@excirworks.com',
			email: [
				{
					subject: 'General Inquiry',
					email_destination: 'info@excirworks.com'
				},
				{
					subject: 'Investor Relation',
					email_destination: 'info@excirworks.com'
				}
			]
		}
	},
	keys: {
		google_maps_embed_api: 'AIzaSyD-0Zh06uc_M12ac3zdTtUtSQu0Wy6U7DM'
	},
	$_hidden_hidden: true,
	_hidden: {
		logo_images: {
			vector: {
				src: '/assets/img/logo.svg'
			},
			original: {
				src: '/assets/img/logo.png'
			}
		}
	}
}