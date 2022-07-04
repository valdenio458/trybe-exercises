const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.use(bodyParser.json());

//* AUTHORS:

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req,res) => {
  const { id } = req.params;
  const author = await Author.findById(id)

  if (!author) return res.status(404).json({message: 'Author not found!'});

  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValidAuthor(first_name,middle_name, last_name)) return res.status(400).json({message: 'Dados inválidos!'});

  await Author.createAuthor(first_name, middle_name, last_name);

  res.status(201).json({message: 'Autor criado com sucesso!'})


})


// Query Params = consulta pela url = ?nome=valor
// Route Params = http://loalhost:3000/users/1
// Request body = feita pelo corpo da requisição {"id": 1}

//* BOOKS:

    app.get('/books', async (req, res) => {
      const {author_id} = req.query;
      const books = (author_id)
      ? await Book.getById(author_id)
      : await Book.getAll();

      res.status(200).json(books);
    });

app.get('/books/:id', async (req,res) => {
  const { id } = req.params;
  const books = await Book.getById(id)

  if (!books) return res.status(404).json({message: 'Book not found!'});

  return res.json(books)    
})
app.post('/books', async (req, res) => {
  const { title, author_id} = req.body;

  if (!Books.isValidBooks(title, author_id)) return res.status(400).json({message: 'Dados inválidos!'});

  await Books.createBooks(title, author_id);

  res.status(201).json({message: 'Livro criado com sucesso!'})


})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
