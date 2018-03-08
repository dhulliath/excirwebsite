const kitco = require('./kitco')

const local_app = function () {}

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