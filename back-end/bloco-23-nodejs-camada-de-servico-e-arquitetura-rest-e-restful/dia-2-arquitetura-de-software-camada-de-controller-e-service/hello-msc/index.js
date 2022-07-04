// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Authors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.createAuthor);

app.listen(PORT, () => {// controllers/Authors.js

  const Author = require('../services/Authors');
  
  const getAll = async (_req, res) => {
    const authors = await Author.getAll();
  
    res.status(200).json(authors);
  };
  
  const findById = async (req, res) => {
    const { id } = req.params;
  
    const author = await Author.findById(id);
  
    if (!author) return res.status(404).json({ message: 'Author not found' });
  
    res.status(200).json(author);
  }
  
  const createAuthor = async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;
  
  
    const author = await Author.createAuthor(first_name, middle_name, last_name);
  
    if (!author) return res.status(400).json({ message: 'Dados inválidos' });
  
    res.status(201).json(author);
  };
  module.exports = {
    getAll,
    findById,
    createAuthor,
  }
  
  
  console.log(`Ouvindo a porta ${PORT}`);
});