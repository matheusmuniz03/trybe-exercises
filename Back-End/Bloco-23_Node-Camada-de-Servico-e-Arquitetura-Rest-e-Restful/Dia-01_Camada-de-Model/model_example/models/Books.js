const connection = require('./connection');

const serialize = (dataBase) => {
  return {
    id: dataBase.id,
    title: dataBase.title,
    authorId: dataBase.author_id,
  }
};

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books');

  return books.map(serialize);
};

const createNewBook = async (title, authorId) => 
  connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
  [title, authorId],
);

module.exports = {
  getAllBooks,
  createNewBook,
}