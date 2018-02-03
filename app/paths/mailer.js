const local_app = function () {}
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const axios = require('axios')

local_app.prototype.transporter = null

local_app.prototype.init = function (app) {
	var transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false,
		auth: {
			user: 'xnzmgj2nil5c5chl@ethereal.email',
			pass: 'C9pueduutAM2QhFYqF'
		}
	})

	app.use(bodyParser.urlencoded({
		extended: false
	}))

	app.post('/mail/send', (req, res) => {
		let code = {
			error: false,
			honeypot: false
		}
		if (req.body.gotcha) {
			code.honeypot = true
		}

		if (code.honeypot) {
			res.send('okay')
		}
		if (code.error) {
			res.send('error')
		}

		if (!code.honeypot && !code.error) {
			let mailOptions = {
				from: '"Noreply" <noreply@excirworks.com>',
				replyTo: '"' + req.body.name + '" <' + req.body.replyEmail + '>',
				to: '"Excir Info" <info@excirworks.com>',
				subject: 'Site Inquiry: ' + req.body.company,
				text: 'phone number: ' + req.body.phoneNumber + '\n' + req.body.message
			}
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					res.send(error)
				} else {
					res.redirect('/emailsuccess/')
				}
			})
		}
	})
}

module.exports = new local_app()