var jwt = require('jwt-simple');
var User = require('../models/user.js');
var config = require('../../config.js');

function tokenForUser(user) {
  var timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret );
}

exports.login = function(req, res, next) {
  res.send({ token: tokenForUser(req.user) });
}

exports.register = function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({ err: 'You must provide email and password '});
  }

  User.findOne({ email: email }, function(err, existingUser) {
    if(err) {return next(err); }

    if(existingUser) {
      return res.status(422).send({ error: 'Email already exists'});
    }

    var user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if(err) { return next(err); }

      res.json({ token: tokenForUser(user) });
    });
  });
}