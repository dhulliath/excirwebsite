{
	_navigation: {
		$_templates_hidden: true,
		_templates: {
			group: {
				group: {
					name: '',
					$subgroup_templatitator: '@@global._navigation._templates.subgroup',
					$subgroup_size: 6,
					$subgroup_noframe: true,
					subgroup: []
				}
			},
			subgroup: {
				subgroup: {
					name: '',
					label: '',
					weight: 1
				}
			}
		},
		$navigation_groups_templatitator: '@@global._navigation._templates.group',
		$navigation_groups_size: 6,
		navigation_groups: [
			{
				name: 'main',
				$subgroup_templatitator: '@@global._navigation._templates.subgroup',
				$subgroup_size: 6,
				$subgroup_noframe: true,
				subgroup: [
					{
						name: 'company',
						label: 'Company',
						weight: '1'
					}
				]
			}
		],
		$navgroupitems_hidden: true,
		navgroupitems: {
			none: {
				name: 'none'
			},
			main: {
				name: 'main'
			},
			main_company: {
				name: 'main_company'
			}
		}
	},
	$_navigation_noframe: true
}