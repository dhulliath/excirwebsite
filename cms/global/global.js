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
		image: '@@global._hidden.logo_images.vector',
		footer: 'Website under Construction',
		$footer_type: 'textarea'
	},
	seo: {
		description: 'The most effective and environmentally-friendly method for recycling and refining of gold, palladium and platinum.',
		$description_type: 'textarea',
		keywords: '',
		url_base: 'https://excir.earlgraytease.com'
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
		google_maps_embed_api: 'AIzaSyD-0Zh06uc_M12ac3zdTtUtSQu0Wy6U7DM',
		quandl: {
			auth_token: 'kknHW49hyq86BMG7oSmM',
			api_version: 3,
			database_code: 'WGC',
			dataset_code: 'GOLD_DAILY_CAD',
			$queries_templatitator: '@@global._contenttemplate.gold_queries',
			queries: [
				{
					name: 'gold',
					currency: 'CAD',
					unit: '@@global._contenttemplate.weight_units.oz',
					database: 'WGC',
					dataset: 'GOLD_DAILY_CAD'
				},
				{
					name: 'platinum',
					currency: 'USD',
					unit: '@@global._contenttemplate.weight_units.troy_oz',
					database: 'COM',
					dataset: 'PL_EIB'
				},
				{
					name: 'palladium',
					currency: 'USD',
					unit: '@@global._contenttemplate.weight_units.oz',
					database: 'COM',
					dataset: 'PA_EFP'
				},
				{
					name: 'usdcad',
					currency: 'USD',
					unit: '@@global._contenttemplate.weight_units.not_applicable',
					database: 'CURRFX',
					dataset: 'USDCAD'
				}
			]
		}
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