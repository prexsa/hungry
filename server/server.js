var express = require('express');
var React = require('react');
var Router = require('react-router');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var cookieParser = require('cookie-parser');

//mongoose.connect('mongodb://localhost:auth/auth');

var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(morgan('combined'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ type: '*/*'}));

/*app.get('*', function (request, response){
    response.sendFile(path.resolve('client', 'index.html'));
})*/

require('./routes/routes.js')(app, express);

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

// Webpack middleware
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./../webpack.config.js');
var bundler = webpack(webpackConfig);

app.use(webpackMiddleware(bundler));

module.exports = app; 