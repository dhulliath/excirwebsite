const Quandl = require('quandl')

const local_app = function () {}


global.gold_data = {
    lastrefresh: 0,
    value_usd: 0
}

local_app.prototype.init = function (app) {
    app.get('/api/gold/', (req, res) => {
        res.send('HI')
    })
}

module.exports = new local_app();