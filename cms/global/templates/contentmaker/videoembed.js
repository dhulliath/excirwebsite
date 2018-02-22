{
    _contenttemplates: {
        video_embed: {
            youtube: {
                $type_hidden: true,
                type: 'youtube',
                pre: '<iframe width="100%" height="100%" src="',
                post: '?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
            }
        },
        video_source: {
            local: {
                $local_type: 'title',
                local: 'Local File',
                $url_type: 'file',
                url: '',
                type: ''
            }
        }
    },
    contentmaker: {
        embedded_video: {
            $embedded_video_type: 'title',
            embedded_video: 'Embedded Video',
            $sources_templatitator: '@@global._contenttemplates.video_source',
            $sources_size: 6,
            sources: []
        },
        video_embed: {
            $embed_video_type: 'title',
            embed_video: 'Embedded Video',
            service: '@@global._contenttemplates.video_embed.youtube',
            url: ''
        }
    }
}