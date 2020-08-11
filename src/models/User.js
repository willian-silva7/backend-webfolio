const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model('User', UserSchema);
