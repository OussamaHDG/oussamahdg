// models/Blog.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  // Other blog fields
});

module.exports = mongoose.model('Blog', BlogSchema);
