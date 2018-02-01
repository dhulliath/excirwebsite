const abstractor = function() {}
const deepmerge = require('deepmerge')

abstractor.prototype.init = function(context) {
    return new Promise(function (resolve, reject) {
        resolve()
    })
}

abstractor.prototype.abstract = function (context) {
    return new Promise(function (resolve, reject) {
        var defaultContext = {
            title: '',
            publishing: {
                date: '',
                published: false
            },
            stub: {
                teaser: ''
            }
        }
        var overrideContext = {
            publishing: {
                $date_type: 'date'
            },
            stub: {
                $teaser_type: 'textarea',
            },
            $publishing_size: 4,
            $stub_size: 8
        }

        var contextData = deepmerge.all([defaultContext, context._blog, overrideContext])
        context._blog = contextData
        context['$_blog_expander'] = false;

        return resolve()
    })
}

module.exports = new abstractor()