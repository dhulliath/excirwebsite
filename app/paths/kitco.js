const DomParser = require('dom-parser')
const rp = require('request-promise')
const tough = require('tough-cookie')
const money = require('money')

var parser = new DomParser()

//so we get CAD currency
let cookie = new tough.Cookie({
    key: "market_currency_ny",
    value: "CAD",
    domain: '.www.kitco.com',
    path: '/',
    httpOnly: false,
    maxAge: 31536000
})
let cookie_lgqCur = new tough.Cookie({
    key: 'lgqCur',
    value: 'USD',
    domain: '.www.kitco.com',
    path: '/',
    httpOnly: false,
    maxAge: 31536000
})

var cookiejar = rp.jar();
cookiejar.setCookie(cookie, 'http://www.kitco.com')
cookiejar.setCookie(cookie_lgqCur, 'http://www.kitco.com')



//we cache the data for up to ten minutes, it's daily anyways so whatever.
const update_time_threshold = 600000 * 6; //ten minutes in milliseconds
var last_update = 0;


var lookup_elements = {
    'gold': 'AU',
    'platinum': 'PT',
    'palladium': 'PD'
}

var prices = {}

module.exports.updatePrices = function () {
    return rp({uri: 'http://www.kitco.com/market/', jar: cookiejar}).then((htmlString) => {
        var dom = parser.parseFromString(htmlString)
        for (key in lookup_elements) {
            prices[key] = {
                date: dom.getElementById(lookup_elements[key] + '-date').innerHTML,
                USD: dom.getElementById(lookup_elements[key] + '-bid').innerHTML
            }
            //prices[key].CAD = money.convert(prices[key].USD, {from: 'USD', to: 'CAD'})
        }
    })
}

module.exports.getPrices = function () {
    return new Promise((resolve, reject) => {
        if ((Date.now() - last_update) > update_time_threshold) {
            last_update = Date.now()
            module.exports.updatePrices().then(() => {
                resolve(prices)
            })
        } else {
            resolve(prices)
        }
    })
}

module.exports.test = function () {
    module.exports.updatePrices().then(() => {
        console.log(prices)
    }).catch((err) => {
        console.log(err)
    })
}

//module.exportsule.exports = module.exports