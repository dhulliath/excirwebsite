{
	styling: {
		$_templates_hidden: true,
		_templates: {
			csstemplate: {
				css_file: {
					cascadingstylesheet: ''
				},
				js_file: {
					javascript: ''
				}
			}
		},
		page_styles: {
			landing: {
				$stylesheets_templatitator: '@@global.styling._templates.csstemplate',
				stylesheets: [
					{
						src: '/assets/css/landing.css'
					},
					{
						javascript: 'https://www.google.com/recaptcha/api.js'
					}
				]
			},
			standard: {
				$stylesheets_templatitator: '@@global.styling._templates.csstemplate',
				stylesheets: [
					{
						src: '/assets/css/main.css'
					},
					{
						javascript: 'https://www.google.com/recaptcha/api.js'
					}
				]
			},
			clean: {
				$stylesheets_templatitator: '@@global.styling._templates.csstemplate',
				stylesheets: [
					{
						src: '/assets/css/cleaned.css'
					},
					{
						javascript: 'https://www.google.com/recaptcha/api.js'
					}
				]
			}
		},
		font_styles: {
			default: {
				classes: []
			},
			anton: {
				classes: [
					'font-anton'
				]
			},
			arimo: {
				classes: [
					'font-arimo'
				]
			},
			libre_franklin: {
				classes: [
					'font-libre-franklin'
				]
			},
			merriweather: {
				classes: [
					'font-merriweather'
				]
			},
			montserrat: {
				classes: [
					'font-montserrat'
				]
			}
		},
		text_align: {
			left: {
				classes: [
					'txt-left'
				]
			},
			right: {
				classes: [
					'txt-right'
				]
			},
			center: {
				classes: [
					'txt-center'
				]
			},
			justify: {
				classes: [
					'txt-justify'
				]
			}
		},
		border_styles: {
			none: {
				classes: []
			},
			solid_trim: {
				classes: [
					'bdr-trim'
				]
			},
			rounded: {
				classes: [
					'bdr-round'
				]
			},
			margin: {
				classes: [
					'bdr-margin'
				]
			}
		},
		position_styles: {
			float_left: {
				classes: [
					'fl-left'
				]
			},
			float_right: {
				classes: [
					'fl-right'
				]
			},
			center: {
				classes: [
					'fl-center'
				]
			},
			none: {
				classes: []
			}
		},
		size_styles: {
			default: {
				classes: []
			},
			fifth: {
				classes: [
					'sz-fifth'
				]
			},
			quarter: {
				classes: [
					'sz-quarter'
				]
			},
			third: {
				classes: [
					'sz-third'
				]
			},
			half: {
				classes: [
					'sz-half'
				]
			},
			fluid: {
				classes: [
					'sz-fluid'
				]
			}
		},
		image_styles: {
			fluid: {
				classes: [
					'size-fluid'
				]
			},
			float_left: {
				classes: [
					'size-quarter',
					'float-left'
				]
			},
			float_right: {
				classes: [
					'size-quarter',
					'float-right'
				]
			}
		}
	}
}