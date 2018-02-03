const local_app = function () {}
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const axios = require('axios')

local_app.prototype.init = function (app) {
    app.use(bodyParser.urlencoded({extended: false}))
	//app.use(bodyParser.json())
	/*
	let poolConfig = {
		pool: true,
		host: 'smtp.example.com',
		port: 465,
		secure: true, // use TLS
		auth: {
			user: 'username',
			pass: 'password'
		}
	};

	this.mailTransport = nodeMailer.createTransport(poolConfig)*/

	app.post('/mail/send', (req, res) => {
		if (req.body.gotcha) {
			res.send('ok')
		}
		res.send([req.body, req.params])
		//res.redirect('/emailsuccess/')
	})
}

module.exports = new local_app()