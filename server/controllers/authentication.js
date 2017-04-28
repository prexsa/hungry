var User = require('../models/user.js');

exports.signup = function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

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

      res.json(user);
    });
  });
}