const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
  .create({ title, directedBy, releaseYear });
  console.log(movie);
  if (!movie) {
    return res.status(400).send('Dados inválidos');
  }
  return res.status(201).send('Filme criado com sucesso!');
};

const getAll = async (req,res) => {
  const movies = await movieService.getAll();
  res.status(200).json(movies);
}

module.exports = {
  create,
  getAll
};