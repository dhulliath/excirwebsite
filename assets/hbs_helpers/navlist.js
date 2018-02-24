const _ = require('lodash')
const Promise = require('bluebird')
const arraySort = require('array-sort');
const deepmerge = require('deepmerge')

const helper = function () {}

function get_nav_list() {
    return enduro.api.pagelist_generator.get_cms_list()
        .then((pagelist) => {
            let get_content_promises = []
            let navlist = {}
            for (page_id in pagelist.flat) {
                function get_content(page) {
                    get_content_promises.push(enduro.api.flat.load(page.fullpath).then((content) => {
                        //if this is a page with nav info, add into the array
                        if (content._page) {
                            let group = content._page.nav.location.split('.').pop().trim()
                            let pagedata = {
                                label: content._page.nav.label || page.name,
                                weight: content._page.nav.weight,
                                url: page.fullpath
                            }
                            
                            //cleanupurls
                            if (pagedata.url == '/index') pagedata.url = '/'
                            if (pagedata.url.substring(0, 11) == '/generators') pagedata.url = pagedata.url.substring(11)
                            //make group
                            if (!navlist[group]) navlist[group] = []
                            //push to group
                            navlist[group].push(pagedata)
                            return true
                        }
                        //if this is a global page with navigation info
                        if (content._navigation) {
                            for (keyG in content._navigation.navigation_groups) {
                                let top_group_item = content._navigation.navigation_groups[keyG]
                                for (keySG in top_group_item.subgroup) {
                                    let groupdata = {
                                        label: top_group_item.subgroup[keySG].label,
                                        weight: top_group_item.subgroup[keySG].weight,
                                        subgroup: top_group_item.name + '_' + top_group_item.subgroup[keySG].name
                                    }
                                    if (!navlist[top_group_item.name]) navlist[group] = []
                                    navlist[top_group_item.name].push(groupdata)
                                }
                            }
                        }
                    }))
                }
                var page = pagelist.flat[page_id]
                get_content(page)
            }

            return Promise.all(get_content_promises).then(() => {
                return navlist
            })
        })
}

helper.prototype.register = function () {
    enduro.templating_engine.registerHelper('navlist', function (group, options) {
        return get_nav_list().then((navlist) => {
            if (navlist[group]) {
                for (key in navlist[group]) {
                    if (navlist[group][key].url == options.data.root.page_name) {
                        navlist[group][key].active = true
                    }
                }
                return options.fn(arraySort(navlist[group], ['weight', 'label']))
            }
        })
    }
)}

module.exports = new helper()