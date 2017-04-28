var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, unique: true },
  password: String
});

var modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;