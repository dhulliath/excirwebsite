const _ = require('lodash')
const Promise = require('bluebird')
const arraySort = require('array-sort');
const deepmerge = require('deepmerge')

const helper = function () {}

helper.prototype.register = function () {
    enduro.templating_engine.registerHelper('navlist', function (group, options) {
        return enduro.api.pagelist_generator.get_cms_list()
            .then((pagelist) => {
                let get_content_promises = []



                for (page_id in pagelist.flat) {
                    var page = pagelist.flat[page_id]

                    function get_content(page) {
                        get_content_promises.push(enduro.api.flat.load(page.fullpath).then((content) => {
                            if (content._navigation) {
                                let groupsreturn = []
                                for (groupKey in content._navigation.navigation_groups) {
                                    var top_group_item = content._navigation.navigation_groups[groupKey]
                                    if (top_group_item.name == group) {

                                        for (subKey in top_group_item.subgroup) {
                                            var lower_group_item = top_group_item.subgroup[subKey]
                                            
                                            delete lower_group_item['$weight_type']
                                            lower_group_item.subgroup = group + '_' + lower_group_item.name,
                                                
                                            groupsreturn.push(lower_group_item)
                                        }
                                    }
                                }
                                return {subgroups: groupsreturn}
                            }

                            if (content._page) {
                                if (content._page.nav.label) page.label = content._page.nav.label
                                else page.label = page.name

                                page.weight = content._page.nav.weight

                                if (group == content._page.nav.location.split('.').pop().trim()) {
                                    return page
                                }
                            }
                        }))
                    }

                    get_content(page)
                    /*if (page.fullpath.substring(0,7) == '/global') {
                        get_navigations(page)
                    }*/
                }

                /* Wait until we have all our pages loaded then send them */
                return Promise.all(get_content_promises).then((items) => {
                    let parsed_items = []
                    for (key in items) {
                        if (items[key]) {
                            //if the item is a page...
                            if (items[key].page) {
                                //cleanup /index to /
                                if (items[key].fullpath == '/index') items[key].fullpath = '/'
                                //remove /generators from generator pages
                                if (items[key].fullpath.substring(0, 11) == '/generators') items[key].fullpath = items[key].fullpath.substring(11)
                                parsed_items.push(items[key])
                            }
                            //if the item is a subgroup list...
                            if (items[key].subgroups) {
                                for (groupkey in items[key].subgroups) {
                                    parsed_items.push(items[key].subgroups[groupkey])
                                }
                            }
                        }
                    }
                    parsed_items = arraySort(parsed_items, ['weight', 'label'])
                    return options.fn(parsed_items)
                })
            })
    })
}

module.exports = new helper()