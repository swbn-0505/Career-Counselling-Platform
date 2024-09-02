const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user'); // Import the User model

// Profile Update Route
router.post('/', (req, res) => {
  const { userId, profilePic, info } = req.body; // Adjust fields as needed

  User.updateOne({ _id: new mongoose.Types.ObjectId(userId) }, { $set: { profilePic, info } })
    .then(() => res.send('Profile updated successfully'))
    .catch((err) => {
      console.error('Error updating profile:', err);
      res.status(500).send('Error updating profile');
    });
});

module.exports = router;
