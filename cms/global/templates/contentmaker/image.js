{
    contentmaker: {
        image: {
            $image_type: 'title',
            image: 'Image with Styling',
            $href_type: 'image',
            href: '',
            $style_expander: true,
            $style_size: 12,
            style: {
                $position_noframe: true,
                $position_size: 4,
                position: {
                    position: '@@global.styling.position_styles.default',
                    size: '@@global.styling.size_styles.fluid',
                    border: '@@global.styling.border_styles.none'
                }
            }
        }
    }
}