const Quandl = require('quandl')
const moment = require('moment')

const local_app = function () {}

//we cache the data for up to ten minutes, it's daily anyways so whatever.
const update_time_threshold = 600000; //ten minutes in milliseconds

var quandl = new Quandl();

var gold_data = {
    lastrefresh: 0,
    data: [],
}

function getGoldData() {
    
    return new Promise((resolve, reject) => {
        if ((Date.now() - gold_data.lastrefresh) > update_time_threshold) {
            quandl.configure(enduro.cms_data.global.keys.quandl)
            quandl.dataset({source: enduro.cms_data.global.keys.quandl.database_code, table: enduro.cms_data.global.keys.quandl.dataset_code}, {order: 'desc', start_date: moment().subtract(1, 'week').format('YYYY-MM-DD'), end_date: moment().format('YYYY-MM-DD')}, (err, response) => {
                gold_data.data = JSON.parse(response).dataset.data
                gold_data.lastrefresh = Date.now()
            })
        }
        resolve(gold_data);
    })
}

local_app.prototype.init = function (app) {
    app.get('/api/gold/', (req, res) => {
        getGoldData().then((data) => {
            res.send(data)
        })
    })
}

module.exports = new local_app();