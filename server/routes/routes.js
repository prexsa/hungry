var path = require('path');
var Yelp = require('node-yelp-api-v3');
var passport = require('passport');
var axios = require('axios');
var { yelpv2, yelpv3 } = require('../../config.js');

var Authentication = require('../controllers/authentication.js');
var passportService = require('../services/passport.js');

var requireAuth = passport.authenticate('jwt', { session: false });
var requireLogin = passport.authenticate('local', { session: false });

/*var yelp = new Yelp({
	consumer_key: yelpv2.consumer_key,
	consumer_secret: yelpv2.consumer_secret,
	token: yelpv2.token,
	token_secret: yelpv2.token_secret
});*/

var yelp = new Yelp({
	consumer_key: yelpv3.app_id,
	consumer_secret: yelpv3.app_secret
})

// https://arian.io/how-to-use-yelps-api-with-node/

module.exports = function(app, express) {
	console.log('dirname: ', __dirname);
	app.use('/', express.static(path.join(__dirname, '../../client')));
	app.use('/node', express.static(__dirname + '/../node_modules/'));

	// Routes
	app.post('/search', (req, res) => {
		// console.log('/search: ', req.body);
		const area = req.body.area;
		yelp.searchBusiness({ term: "food, restaurants", location: area })
			.then(function (data) {
				// console.log('data: ', data)
		  	res.send(data);
		})
		.catch(function (err) {
		  console.error(err);
		});
	});

	app.post('/hours', (req, res) => {
		const id = req.body.id;
		console.log('/hours: ', id)
		yelp.getBusinessById(id)
			.then(function (data) {
				console.log('/hours: ', data);
				res.send(data);
			})
			.catch(function (err) {
				console.error(err);
			});
		});

	app.post('/reviews', (req, res) => {
		const id = req.body.id;
		yelp.getReviews(id)
			.then(function(data) {
				//console.log('/reviews: ', data);
				res.send(data);
			})
			.catch(function (err) {
				console.error(err);
			});
		});


	app.post('/login', requireLogin, Authentication.login);
	app.post('/register', Authentication.register);

}