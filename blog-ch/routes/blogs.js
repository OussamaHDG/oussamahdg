// routes/blogs.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const BlogController = require('../controllers/blogController'); // Require the blog controller

// Blog CRUD routes
router.post('/', passport.authenticate('jwt', { session: false }), BlogController.create);
router.get('/', BlogController.getAll);
router.get('/:id', BlogController.getById);
router.put('/:id', passport.authenticate('jwt', { session: false }), BlogController.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), BlogController.delete);

module.exports = router;
