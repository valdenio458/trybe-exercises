const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO movies_api.movies (title, directedBy, releaseYear) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

const getAll = async () => {
 const [movies] = await connection.execute('SELECT * FROM movies_api.movies');
 return movies;
}


module.exports = {
  create,
  getAll
};