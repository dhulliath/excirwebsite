const abstractor = function() {}
const deepmerge = require('deepmerge')

abstractor.prototype.init = function(context) {
    return new Promise(function (resolve, reject) {
        resolve()
    })
}

abstractor.prototype.abstract = function (context) {
    return new Promise(function (resolve, reject) {
        context.$_content_size = 12
	    context.$_content_templatitator = '@@global.contentmaker'

        return resolve()
    })
}

module.exports = new abstractor()