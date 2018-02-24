module.exports.init = function (app) {
    app.get('/debug', (req, res) => {
        console.log(enduro);
        //res.send(JSON.stringify(enduro))
    })
}