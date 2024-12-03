const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  questionText: { type: String, required: true },
  image: { type: String },
  options: [String], // For categorize or cloze questions
  correctAnswer: String, // For cloze or comprehension
});

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: String,
  questions: [questionSchema],
});

module.exports = mongoose.model('Form', formSchema);
