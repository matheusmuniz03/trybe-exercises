const books = require('../models/Books');

const createBook = async (req, res) => {
  const { title, author_id } = req.body;

  const newBook = { title, authorId: author_id }

  await books.createNewBook(title, author_id);

  return res.status(201).json(newBook);
}

module.exports = {
  createBook,
}
