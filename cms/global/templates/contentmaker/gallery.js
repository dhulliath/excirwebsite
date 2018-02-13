{
    _contenttemplates: {
        gallery: {
            image: {
                $image_type: 'title',
                image: 'Image with Styling',
                $href_type: 'image',
                href: '',
                caption: ''
            }
        }
    },
    contentmaker: {
        gallery: {
            $gallery_type: 'title',
            gallery: 'Image Gallery',
            title: '',
            $items_templatitator: '@@global._contenttemplates.gallery',
            items: []
        }
    }
}