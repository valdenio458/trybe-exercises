const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const books = [
    {id: 1, title: '1984', author: 'George Orwell'},
    {id: 2, title: 'Brave New World', author: 'Aldous Huxley'},
    {id: 3, title: 'Dom Casmurro', author: 'Machado de Assis'},
    {id: 4, title: 'Ensaio sobre a cegueira', author: 'José Saramago'}
]

// GET é um verbo que faz requisições:
app.get('/', (_req, res)=> {
    console.log('Hello, Valdênio!')
    res.send('Olá, Valdênio!')
});

app.get('/books', (_req, res) => {
    res.status(200).json(books);
});

app.get('/books/search', (req, res) => {
    const { author } = req.query;

    const filteredBooks = books.filter((elem) => elem.author === author);
    
    if (filteredBooks.length === 0) return res.status(404).json({message:`O livro com o autor ${author} não existe!`});

    res.status(200).json( filteredBooks )
})
app.get('/books/:id', (req, res) => {
    const { id } = req.params;

    const book = books.find((elem) => elem.id === parseInt(id));
// O 'return' aqui é importante pois se o livro não foi encontrado não faz sentido ir para o próximo comando que é para exibir o livro
    if (!book) return res.status(404).json({message: 'Book not found!'});

    res.status(200).json(book);
});

// POST é um verbo que envia informação via terminal para ser salva:
//  http POST :3000/books id:=12 title="Corpo" author="Carlos Drummond de Andrade"


app.post('/books', (req,res) => {
    const { id, title, author } = req.body;
    books.push({ id, title, author});
    res.status(201).json({message: ' Book created'})
});

// PUT é um verbo que atualiza dados via terminal:
// http PUT :3000/books/1 title=2022

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const bookIndex = books.findIndex((elem) => elem.id === parseInt(id));

    if (bookIndex === -1) return res.status(404).send({ message: "Book not found!"});

    books[bookIndex] = { id, title, author};

    res.status(204).end();
})

// DELETE é um verbo que apaga dados:
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;   
    const bookIndex = books.findIndex((elem) => elem.id === parseInt(id));

    if (bookIndex === -1) return res.status(404).send({ message: "Book not found!"});

    books.splice(bookIndex, 1)

    res.status(204).end();
})/2



app.listen(3000, () => {
    console.log('🚀 Rodando na porta 3000!')
});