const express = require('express');
const router = express.Router();
const User = require('../models/user');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configure multer for file uploads

// Signup Route
router.post('/', upload.single('profilePic'), (req, res) => {
  const { name, email, age, phone, career } = req.body;
  const profilePic = req.file ? req.file.path : ''; // Handle profile picture if uploaded

  const user = new User({ name, email, age, phone, career, profilePic });

  user.save()
    .then(() => res.redirect('/dashboard.html')) // Redirect to dashboard
    .catch((err) => {
      console.error('Error inserting user:', err);
      res.status(500).send('Error registering user');
    });
});

module.exports = router;
