const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// User registration
exports.register = async (req, res) => {
  // Validate input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract data from the request body
  const { username, password } = req.body;

  try {
    // Check if the username is already taken
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'Username is already taken' });
    }

    // Create a new user
    user = new User({ username, password });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    // Create and send a JSON Web Token (JWT) for authentication
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // You can adjust the expiration time
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// User login
exports.login = async (req, res) => {
  // Validate input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract data from the request body
  const { username, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare the entered password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and send a JSON Web Token (JWT) for authentication
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // You can adjust the expiration time
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Correct example with function definition and export
exports.getAll = (req, res) => {
    // Your implementation here
  };
  
  exports.register = async (req, res) => {
    // Your implementation here
  };
  
  exports.login = async (req, res) => {
    // Your implementation here
  };
  