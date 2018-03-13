{
	_page: {
		title: 'Environmental Impact',
		styling: {
			theme: '@@global.styling.page_styles.standard'
		},
		nav: {
			label: 'Environmental Impact',
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
			text: 'Electronic waste (e-waste) is the fastest growing waste stream on the planet which contains valuable metals, such as gold, palladium, silver and copper. Annually 50 million tonnes of e-waste are produced worldwide and around 300 metric tons of gold can potentially be recycled from this valuable source. However, less than 20% is recycled due to the lack of suitable recycling methods. \nCurrently, pyrometallurgical techniques are the dominant recycling methods to recover precious metals in industrial scales. Large amounts of electronics scraps are burned at high temperatures (more than 1200 oC) in big smelting operations to recover precious and base metals. However, there are some major environmental and economic issues associated with these methods: \n\n* Negative environmental impact such as heavy metal contamination and production of toxic gases (dioxins and furans) \n* Extremely large energy consumption (applying >1200 oC temperatures)\n* Low precious metals recovery rates (~ 90%)\n* Long recycling processes \n* Large amounts of investments in heavy equipment.\n\nIn smaller scales, some companies use extremely toxic chemicals such as aqua regia and cyanide as leaching reagents for recovery of gold from e-waste. Aqua regia which is a mixture of strong acids (three parts of concentrated hydrochloric acid and one part of nitric acid), has been used for centuries to dissolve gold and other precious metals, however, it provides an extremely corrosive environment which generates large amounts of nasty gasses and produces a huge amount of toxic wastes. In the cyanidation process, an aqueous solution of sodium or potassium cyanide is used to selectively extract the gold from obsolete electronics. Due to its extremely toxic natures it needs to be implemented under tougher safety regulations which in turn limits its wide applications especially in developed countries. \n\nIn some countries, there are many family-run workshops which use unprotected ways to extract precious metals from obsolete electronics. Incineration and open-burning of e-wastes applying strong acids and hazardous chemicals are some examples of the unsafe methods, which all lead to thousands of people being at high risk of exposure to toxic gases and working with extremely dangerous chemicals.\n\nThe recycling process developed by Excir is a significant advancement over the chemicals and process currently employed (both pyro metallurgical and hydrometallurgical methods). Our process enables the overall gold extraction to be more environmentally friendly by applying milder conditions, less corrosive reagents and benign reaction environment. Due to its high affinity to gold and other precious metals, small amounts of Excir lixiviant can process large amounts of electronic wastes, resulting in significantly less waste production. Furthermore, because of the recyclability of the applied chemistry, the amount of generated liquid waste will be negligible.\n\nIn addition, all recycling steps are implemented at ambient temperature and pressure, minimizing the energy input of the whole process. Therefore, due to small footprint, mild reaction conditions and simplicity of the process, Excir technology is highly scalable and able to reduce the operation risks.',
			$style_expander: true,
			$style_size: 4,
			style: {
				font: '@@global.styling.font_styles.default',
				align: '@@global.styling.text_align.left',
				position: '@@global.styling.position_styles.none',
				size: '@@global.styling.size_styles.default',
				border: '@@global.styling.border_styles.none'
			}
		}
	],
	$_page_expander: false,
	$_content_size: 12,
	$_content_templatitator: '@@global.contentmaker'
}