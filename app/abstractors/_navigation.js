const deepmerge = require('deepmerge')
const arraySort = require('array-sort');

const abstractor = function () {}

abstractor.prototype.init = function (context) {
    return new Promise(function (resolve, reject) {
        resolve()
    })
}

abstractor.prototype.abstract = function (context) {
    return new Promise(function (resolve, reject) {
        //create default state
        context['$_navigation_noframe'] = true
        var contextDefault = {
            $_templates_hidden: true,
            _templates: {
                group: {
                    group: {
                        name: '',
                        $subgroup_templatitator: '@@global._navigation._templates.subgroup',
                        $subgroup_size: 6,
                        $subgroup_noframe: true,
                        subgroup: []
                    }
                },
                subgroup: {
                    subgroup: {
                        name: '',
                        label: '',
                        weight: 1
                    }
                }
            },
            $navigation_groups_templatitator: '@@global._navigation._templates.group',
            $navigation_groups_size: 6,
            navigation_groups: [],
            $navgroupitems_hidden: true,
        }
        //merge in defaults
        context._navigation = deepmerge(contextDefault, context._navigation)

        //set group with primary items
        context._navigation.navgroupitems = {
            none: {
                name: 'none'
            },
            main: {
                name: 'main'
            }
        }

        //add additionals
        for (key in context._navigation.navigation_groups) {
            context._navigation.navgroupitems[context._navigation.navigation_groups[key].name] = {
                name: context._navigation.navigation_groups[key].name
            }
            //add subgroups
            for (subkey in context._navigation.navigation_groups[key].subgroup) {
                context._navigation.navgroupitems[context._navigation.navigation_groups[key].name + '_' + context._navigation.navigation_groups[key].subgroup[subkey].name] = {
                    name: context._navigation.navigation_groups[key].name + '_' + context._navigation.navigation_groups[key].subgroup[subkey].name
                }
            }
        }
        
        return resolve()
    })
}

module.exports = new abstractor()