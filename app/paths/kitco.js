//scraper for kito.com, hopefully they never change their table ID's.

const DomParser = require('dom-parser')
const rp = require('request-promise')
const fixer = require('fixer-api')

var parser = new DomParser()

//we cache the data for up to ten minutes, it's daily anyways so whatever.
const update_time_threshold = 600000 * 6; //ten minutes in milliseconds
var last_update = 0;

var lookup_elements = {
    'gold': 'AU',
    'platinum': 'PT',
    'palladium': 'PD'
}

var prices = {}
var fixer_data = {}

module.exports.updateCurrency = function () {
    return fixer.latest().then((data) => {
        fixer_data = data;
    })
}

module.exports.updatePrices = function () {
    return rp({
        uri: 'http://www.kitco.com/market/'
    }).then((htmlString) => {
        var dom = parser.parseFromString(htmlString)
        for (key in lookup_elements) {
            prices[key] = {
                date: dom.getElementById(lookup_elements[key] + '-date').innerHTML,
                USD: parseFloat(dom.getElementById(lookup_elements[key] + '-bid').innerHTML)
            }
            //prices[key].CAD = money.convert(prices[key].USD, {from: 'USD', to: 'CAD'})
        }
    })
}

module.exports.getPrices = function () {
    return new Promise((resolve, reject) => {
        if ((Date.now() - last_update) > update_time_threshold) {
            last_update = Date.now()
            module.exports.updateCurrency().then(() => {
                module.exports.updatePrices().then(() => {
                    for (key in prices) {
                        prices[key].CAD = round(prices[key].USD * fixer_data.rates.CAD / fixer_data.rates.USD, 2)
                    }
                    resolve(prices)
                })
            })
        } else {
            resolve(prices)
        }
    })
}

module.exports.test = function () {
    module.exports.getPrices().then(() => {
        console.log(prices)
    }).catch((err) => {
        console.log(err)
    })
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }