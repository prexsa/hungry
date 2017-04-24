var path = require('path');
var Yelp = require('yelp');

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
		console.log('body: ', req.body);
		yelp.search({ term: 'donuts', location: 90805 })
			.then(function (data) {
		  	//console.log('/search: ', data);
		  	res.send(data);
		})
		.catch(function (err) {
		  console.error(err);
		});
	})
}