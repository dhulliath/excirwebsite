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
            }
        }
        var overrideContext = {
            publishing: {
                $date_type: 'date'
            },
            $publishing_size: 6
        }

        var contextData = deepmerge.all([defaultContext, context._blog, overrideContext])
        context._blog = contextData

        return resolve()
    })
}

module.exports = new abstractor()