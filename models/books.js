const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: "",
    unique: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;