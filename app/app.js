const local_app = function () {}
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')

// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //
local_app.prototype.init = function (app) {
	// express app available here
	// don't forget these routes will be available on production server server (defaults to localhost:5000)
	/*app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))

	app.post('/api/mail', (req, res) => {
		
		//res.send(req.body)
		res.redirect('/emailsuccess/')
	})*/
}

module.exports = new local_app()
