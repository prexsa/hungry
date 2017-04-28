var path = require('path');
var Yelp = require('yelp');

var Authentication = require('../controllers/authentication.js');

var yelp = new Yelp({
	consumer_key: '87NU8aZtFfawZ9u_SpR6mg',
	consumer_secret: '_6Y6n7L01r1SPXJa8h1OPX9tFrw',
	token: 'Ei9j22-Wep3BWQBMqRZ0oEpHyBuikt8v',
	token_secret: '_uzWT2rqdLYt5MPfy_y0-Prztjc'
});

module.exports = function(app, express) {
	console.log('dirname: ', __dirname);
	app.use('/', express.static(path.join(__dirname, '../../client')));
	app.use('/node', express.static(__dirname + '/../node_modules/'));

	// Routes
	app.post('/search', (req, res) => {
		console.log('/search: ', req.body);
		const area = req.body.area;
		yelp.search({ term: 'food', location: area })
			.then(function (data) {
		  	res.send(data);
		})
		.catch(function (err) {
		  console.error(err);
		});
	})

	app.post('/login', (req, res) => {
		console.log('/login: ', req.body);
	})

	app.post('/signup', Authentication.signup);
}