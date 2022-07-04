const express = require('express');

const app = express();

const books = [
    {id: 1, title: '1984', author: 'George Orwell'},
    {id: 2, title: 'Brave New World', author: 'Aldous Huxley'},
    {id: 3, title: 'Dom Casmurro', author: 'Machado de Assis'},
    {id: 4, title: 'Ensaio sobre a cegueira', author: 'José Saramago'}
]

app.get('/', (_req, res) => {
    return res.send({name: 'Hello, world!'});
});

app.get('/books',(_req, res, next) => {
    return res.status(200).json(books)
    next();
});

app.get('/books/:id',function (req, res) {
    const { id } = req.params;
    const selectId = books.find((elem) => elem.id === parseInt(id));    
    res.status(200).json(selectId)
});

app.listen(3000, () => console.log('App rodando na porta 3000'));

