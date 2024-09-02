const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined')); // Use morgan to log HTTP requests

// Serve static files from the "public" directory
app.use(express.static('public'));

// Connect to MongoDB using Mongoose
const url = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongoose connected to MongoDB'); 
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Import routes
const signupRoutes = require('./routes/signup');
const updateProfileRoutes = require('./routes/updateProfile');

// Use routes
app.use('/signup', signupRoutes);
app.use('/updateProfile', updateProfileRoutes);

// Serve dashboard page
app.get('/dashboard.html', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html'); // Adjust path if necessary
});

// Default Route
app.get('/', (req, res) => {
  res.send('Server is working!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
