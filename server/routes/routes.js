var path = require('path');
var Yelp = require('node-yelp-api-v3');
var passport = require('passport');
var axios = require('axios');
var { yelpv3 } = require('../../config.js');
var cheerio = require('cheerio');

var Authentication = require('../controllers/authentication.js');
var passportService = require('../services/passport.js');

var requireAuth = passport.authenticate('jwt', { session: false });
var requireLogin = passport.authenticate('local', { session: false });

var yelp = new Yelp({
	consumer_key: yelpv3.app_id,
	consumer_secret: yelpv3.app_secret
})

// https://arian.io/how-to-use-yelps-api-with-node/

module.exports = function(app, express) {
	//console.log('dirname: ', __dirname);
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
		//console.log('/hours: ', id)
		yelp.getBusinessById(id)
			.then(function (data) {
				//console.log('/hours: ', data);
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

// https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

	app.post('/yelplink', (req, res) => {
		const yelpUrl = req.body.urlLink;
		axios.get(yelpUrl)
			.then((resp) => {
				$ = cheerio.load(resp.data);

				const dailyHours = $('.u-space-r-half').text().trim();
				const healthGrade = $('.score-block').text().trim();

				let businessInfo = {};
				let keyArray = [];
				let valueArray = [];
				$('.short-def-list dl dt').each((i, element) => {
					const childArray = element.children;
					childArray.forEach(item => {
						const attributeKey = item.data.trim();
						keyArray.push(attributeKey);
					});
				});

				$('.short-def-list dl dd').each((i,element) =>  {
					const childArray = element.children;
					childArray.forEach(item => {
						const attributeValue = item.data.trim();
						valueArray.push(attributeValue);
					});
				});

				for(let i = 0; i < keyArray.length; i++) {
					businessInfo[keyArray[i]] = valueArray[i];
				};

				const summary = {
					dailyHours,
					healthGrade,
					businessInfo
				}

				res.send(summary);
			})
			.catch(function (err) {
				console.error(err);
			})

	})


	app.post('/login', requireLogin, Authentication.login);
	app.post('/register', Authentication.register);

};