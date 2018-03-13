const local_app = function () {}
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const reCAPTCHA = require('recaptcha2')

var recaptcha = new reCAPTCHA({
	siteKey: process.env.recaptchaSiteKey,
	secretKey: process.env.recaptchaSecretKey
})

//local_app.prototype.transporter = null

local_app.prototype.init = function (app) {
	var transporter = nodemailer.createTransport({
		host: process.env.emailSMTPServer,
		port: parseInt(process.env.emailPort),
		secure: process.env.emailSecure || false,
		auth: {
			user: process.env.emailUsername,
			pass: process.env.emailPassword
		}
	})

	app.use(bodyParser.urlencoded({
		extended: false
	}))

	app.post('/email/send/', (req, res) => {
		recaptcha.validateRequest(req)
		.then(function() {
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
					from: '<' + process.env.emailUsername + '>',
					replyTo: '"' + req.body.name + '" <' + req.body.replyEmail + '>',
					to: '<' + getEmailDestination(req.body.formSubject) + '>',
					subject: req.body.formSubject + ': ' + req.body.company,
					text: 'company: ' + req.body.company + '\nphone number: ' + req.body.phoneNumber + '\n' + req.body.message
				}
				transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						res.redirect('/email/failure/')
					} else {
						res.redirect('/email/success/')
					}
				})
			}
		})
		.catch(function(err) {
			res.redirect('/email/captchafail/')
		})
	})
}

module.exports = new local_app()

function getEmailDestination(subject) {
	let target = enduro.cms_data.global.contact.correspond.email
	for (key in target) {
		if (target[key].subject == subject) {
			return target[key].email_destination
		}
	}
	return false
}