const books = require('../models/Books');

const getAllBooks = async (req, res) => {
  const allBooks = await books.getAllBooks();

  return res.status(200).json(allBooks);
}

const getBookById = async (req, res) => {
  const { id } = req.params;

  const allBooks = await books.getAllBooks();
  
  const filteredBook = allBooks.find((book) => book.id === parseInt(id));

  if (!filteredBook) return res.status(404).json({ message: 'Book Not Found' });

  return res.status(200).json(filteredBook);
};

module.exports = {
  getAllBooks,  
  getBookById,
};