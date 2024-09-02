const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  phone: String,
  career: String,
  profilePic: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
