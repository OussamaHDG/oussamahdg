// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  // Other user fields
});

module.exports = mongoose.model('User', UserSchema);
