var passport = require('passport');
var User = require('../models/user.js');
var config = require('../../config.js');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local');

// serialize and deserialize
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// https://scotch.io/tutorials/easy-node-authentication-facebook
var localLogin = new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if(err) { return done(err); }
    if(!user) { return done(null, false); }

    user.comparePassword(password, function(err, isMatch) {
      if(err) { return done(err); }
      if(!isMatch) { return done(null, false); }

      return done(null, user);
    })
  })
});


var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  console.log('payload.sub: ', payload.sub)
  User.findById(payload.sub, function(err, user) {
    if(err) { return done(err, false); }

    if(user) {
      done(null, user);
    }else{
      done(null, false);
    }
  });
});


passport.use(jwtLogin);
passport.use(localLogin);
