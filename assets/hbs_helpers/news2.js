const _ = require('lodash')
const Promise = require('bluebird')
const logger = require(enduro.enduro_path + '/libs/logger')
const flat_helpers = require(enduro.enduro_path + '/libs/flat_db/flat_helpers')
const globalizer = require(enduro.enduro_path + '/libs/globalizer/globalizer')
const fs = require('fs')
const path = require('path')

enduro.templating_engine.registerHelper('whatdis', (options) => {
    /*console.log(options.data.root)
    console.log(options.data.root.global.contact.correspond)*/
    console.log(enduro.cms_data.global.contact.correspond)
})

/*
enduro.templating_engine.registerHelper('news2', (category, options) => {
    var content_entries
    return enduro.api.pagelist_generator.get_cms_list()
    .then((pagelist) => {
        let get_content_promises = []

        content_entries = _.chain(pagelist.structured[category])
            .filter((o) => {return typeof o === 'object' && !o.hidden}).value()

        function get_content(page) {
            get_content_promises.push(enduro.api.flat.load(page.fullpath).then((content) => {
                page.content = content
            }))
        }

        for (page_id in content_entries) {
            get_content(content_entries[page_id])
        }

        return Promise.all(get_content_promises)
    }).then(() => {
        
    })
})*/