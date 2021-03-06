{
    contentmaker: {
        text_markdown: {
            $markdown_type: 'title',
            markdown: 'Text with Markdown Filter',
            $text_type: 'textarea',
            text: '',
            $style_expander: true,
            style: {
                $text_size: 4,
                $text_noframe: true,
                $position_size: 4,
                $position_noframe: true,
                text: {
                    font: '@@global.styling.font_styles.default',
                    align: '@@global.styling.text_align.left',
                    size: '@@global.styling.text_size.default'
                },
                position: {
                    position: '@@global.styling.position_styles.default',
                    size: '@@global.styling.size_styles.default',
                    border: '@@global.styling.border_styles.none'
                }
            }
        }
    }
}