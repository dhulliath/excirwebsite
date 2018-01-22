{
	_page: {
		title: 'Environmental Impact',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: 'Environmental Impact',
			location: '@@global._navigation.navgroupitems.main_company',
			weight: '30',
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
			text: '## Other Companies Extraction methods\nCurrently, pyro metallurgical techniques are the dominant recycling methods to recover precious metals in industrial scales. Large amounts of electronics scraps are burned at high temperatures (more than 1200C) in big smelting operations to recover precious and base metals. However, there are some major environmental and economic issues associated with these methods: \n\n* Release of toxic gases and metals into the local environment \n* Large energy consumption rates\n* Low precious metals recovery rates\n* Long recycling processes\n* Requirement of large amounts of investments in heavy equipment\n* Temperature reactive impurities\n* Sorting requirements\n* Worker safety\n* Accidental release into the environment\n\nIn smaller scales, some companies use extremely toxic chemicals such as *aqua regia* and *cyanide* as leaching reagents for recovery of gold from e-waste.\n\n* __Aqua Regia__: Is a mixture of strong acids, which has been used for centuries to dissolve gold and other precious metals, it provides an extremely corrosive environment which generates large amounts of nasty gasses and produces a huge amount of toxic wastes.\n\n* __Cyanide__: In this process, an aqueous solution of sodium or potassium cyanide is used to selectively extract the gold from obsolete electronics. Due to its extremely toxic natures it needs to be implement under tougher safety regulations which in turn limits its wide applications especially in developed countries.  \n\nIn some countries, there are many family-run workshops which use unprotected ways to extract precious metals from obsolete electronics. Incineration and open-burning of e-wastes applying strong acids and hazardous chemicals are some examples of the unsafe methods, which all lead to thousands of people being at high risk of exposure to toxic gases and working with extremely dangerous chemicals.\n\n## Excir Eco-Friendly Extraction Method\n\nThe recycling process developed by Excir is a significant advancement over the chemicals and process currently employed (both pyrometallurgical and hydrometallurgical methods). Our process enables the overall gold extraction to be more environmentally friendly by applying:\n* milder conditions \n* less corrosive reagents \n* benign reaction environment\n* Ambient temperature \n\nDue to its high affinity to gold and other precious metals, small amounts of Excir lixiviant can process large amounts of electronic wastes. Therefore, due to small footprint, mild reaction conditions and simplicity of the Excir technology is highly scalable and able to reduce the operation risks.\n             \nExample: 100 Liter of Excir solution can treat 3 tones of electronics scraps.'
		},
		{
			$markdown_type: 'title',
			markdown: 'Text with Markdown Filter',
			$text_type: 'textarea',
			text: 'In addition, all recycling steps are implemented at ambient temperature and pressure, minimizing the energy input of the whole process. Excir lixiviant is able to be completely recycled, leading to generation of negligible amounts of liquid wastes. Due to all mentioned advantages, our process is able to revolutionize the precious metals recycling industry from both environmental and economical viewpoints.'
		}
	],
	$_page_expander: true,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}