const { validationResult } = require('express-validator');
const Blog = require('../models/blog');

// Create a new blog post
exports.create = async (req, res) => {
  // Validate input data using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract data from the request body
  const { title, content } = req.body;

  try {
    // Create a new blog post
    const blog = new Blog({
      title,
      content,
      author: req.user.id, // Assuming you have user authentication middleware
    });

    // Save the blog post to the database
    await blog.save();

    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

