const Quandl = require('quandl')
const moment = require('moment')
const _ = require('lodash')
const kitco = require('./kitco')

const local_app = function () {}

//we cache the data for up to ten minutes, it's daily anyways so whatever.
const update_time_threshold = 600000; //ten minutes in milliseconds

var quandl = new Quandl();
var quandl_query = {
    order: 'desc',
    start_date: moment().subtract(1, 'week').format('YYYY-MM-DD'),
    end_date: moment().format('YYYY-MM-DD')
};

var gold_data = {
    lastrefresh: 0,
    data: [],
}

var commodity_data = {
    lastrefresh: 0,
    data: {}
}

function queryQuandl(q) {
    return new Promise((resolve, reject) => {
        quandl.dataset({
            source: q.database,
            table: q.dataset
        }, quandl_query, (err, response) => {
            if (err) reject(err)
            try {
                let results = JSON.parse(response).dataset.data
                let index = 0
                if (!commodity_data.data[q.name]) commodity_data.data[q.name] = []
                for (key in results) {
                    commodity_data.data[q.name][index] = {
                        date: results[key][0]
                    }
                    commodity_data.data[q.name][index][q.currency] = results[key][1]
                    index++
                }
            } catch (err) {
                reject(err)
            }
            resolve()
        })
    })
}

function updateCommodityData() {
    let promises = []
    let queryList = enduro.cms_data.global.keys.quandl.queries
    for (key in queryList) {
        promises.push(queryQuandl(queryList[key]))
    }
    commodity_data.lastrefresh = Date.now()
    return Promise.all(promises)
}

function getCommodityData() {
    quandl.configure(enduro.cms_data.global.keys.quandl)
    return new Promise((resolve, reject) => {
        if ((Date.now() - commodity_data.lastrefresh) > update_time_threshold) {
            updateCommodityData().then(() => {
                resolve(commodity_data.data)
            }).catch((err) => {
                reject(err)
            })
        } else {
            resolve(commodity_data.data)
        }
    })
}



function getGoldData() {
    return new Promise((resolve, reject) => {
        if ((Date.now() - gold_data.lastrefresh) > update_time_threshold) {
            quandl.configure(enduro.cms_data.global.keys.quandl)
            quandl.dataset({
                source: enduro.cms_data.global.keys.quandl.database_code,
                table: enduro.cms_data.global.keys.quandl.dataset_code
            }, quandl_query, (err, response) => {
                let results = JSON.parse(response).dataset.data
                let index = 0;
                gold_data.data = {}
                for (key in results) {
                    if (!gold_data.data[index]) gold_data.data[index] = {}
                    gold_data.data[index] = {
                        date: results[key][0],
                        CAD: results[key][1]
                    }
                    index++;
                }

                gold_data.lastrefresh = Date.now()
                resolve(gold_data.data)
            })
        } else {
            resolve(gold_data.data)
        }
    })
}

local_app.prototype.init = function (app) {
    app.get('/api/gold/', (req, res) => {
        kitco.getPrices().then((data) => {
            res.send(data)
        })
        /*getCommodityData().then((data) => {
            res.send(data)
        }).catch((err) => {
            res.send({error: 'data not found'})
        })*/
    })
}

module.exports = new local_app();