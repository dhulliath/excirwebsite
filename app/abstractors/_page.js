const abstractor = function() {}
const deepmerge = require('deepmerge')

abstractor.prototype.init = function(context) {
    return new Promise(function (resolve, reject) {
        resolve()
    })
}

abstractor.prototype.abstract = function (context) {
    return new Promise(function (resolve, reject) {
        //default values
        var defPage = {
            title: '',
            styling: {
                theme: '@@global.styling.page_styles.standard'
            },
            nav: {
                label: '',
                location: '@@global._navigation.navgroupitems.none',
			    weight: 1
            }
        }
        //overidden values
        var defPageOverride = {
            $title_size: 12,
            $styling_size: 4,
            $nav_size: 8,
            nav: {
                $label_size: 6,
                $location_size: 6,
                $weight_size: 6,
            }
        }
        
        //merge with existing values
        var pageData = deepmerge.all([defPage, context._page, defPageOverride])

        context['$_page_expander'] = true
        context._page = pageData

        return resolve()
    })
}

module.exports = new abstractor()