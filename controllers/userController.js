const User = require('../models/user');

exports.signup = (req, res) => {
  const { name, email, age, phone, career } = req.body;
  const profilePic = req.file ? req.file.path : '';

  const user = new User({ name, email, age, phone, career, profilePic });

  user.save()
    .then(() => res.send('User registered successfully'))
    .catch((err) => {
      console.error('Error inserting user:', err);
      res.status(500).send('Error registering user');
    });
};

exports.updateProfile = (req, res) => {
  const { userId, profilePic, info } = req.body;

  User.updateOne({ _id: new mongoose.Types.ObjectId(userId) }, { $set: { profilePic, info } })
    .then(() => res.send('Profile updated successfully'))
    .catch((err) => {
      console.error('Error updating profile:', err);
      res.status(500).send('Error updating profile');
    });
};
