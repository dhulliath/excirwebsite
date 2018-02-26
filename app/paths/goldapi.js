const local_app = function () {}

local_app.prototype.init = function (app) {
    app.get('/api/gold/', (req, res) => {
        res.send('HI')
    })
}

module.exports = new local_app();