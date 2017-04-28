var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
  email: { type: String, unique: true },
  password: String
});

userSchema.pre('save', function(next) {
  var user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if(err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err); }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) { return cb(err); }

    cb(null, isMatch);
  })
}


var modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;