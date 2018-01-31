{
    _contenttemplates: {
        video_embed: {
            youtube: {
                pre: '<iframe width="100%" height="100%" src="',
                post: '?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
            }
        }
    },
    contentmaker: {
        video_embed: {
            $embed_video_type: 'title',
            embed_video: 'Embedded Video',
            service: '@@global._contenttemplates.video_embed.youtube',
            url: ''
        }
    }
}