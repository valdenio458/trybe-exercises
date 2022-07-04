const connection = require('./connection');

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'
  const [books] = await connection.execute(query, [id]) ;

  if (books.length === 0) return null;

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM books');
    
  return books;
  // return authors.map(serialize).map(getNewAuthor);
}

const isValidBooks = (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3 ) return false;
  if (!author_id || typeof author_id !== 'string') return false;

  return true;
}

const createBooks = async (title, author_id) => {
  connection.execute(
    'INSERT INTO model_example.books(id, title, author_id) VALUES (?, ?)',
    [title, author_id]
  )
}

module.exports = {
  getAll,
  getById,
  isValidBooks,
  createBooks,
}
