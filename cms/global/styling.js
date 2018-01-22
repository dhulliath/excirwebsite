{
	styling: {
		$_templates_hidden: true,
		_templates: {
			csstemplate: {
				css_file: {
					src: ''
				}
			}
		},
		page_styles: {
			landing: {
				$stylesheets_templatitator: '@@global.styling._templates.csstemplate',
				stylesheets: [
					{
						src: '/assets/css/landing.css'
					}
				]
			},
			standard: {
				$stylesheets_templatitator: '@@global.styling._templates.csstemplate',
				stylesheets: [
					{
						src: '/assets/css/main.css'
					}
				]
			}
		}
	}
}