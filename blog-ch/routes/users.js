// routes/users.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../controllers/userController');

// User registration route
router.post('/register', UserController.register);

// User login route
router.post('/login', UserController.login);



module.exports = router;
