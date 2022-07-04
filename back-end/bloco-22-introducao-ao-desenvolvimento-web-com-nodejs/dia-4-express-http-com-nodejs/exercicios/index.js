const express = require('express');
const bodyParser = require('body-parser');
//const simpsons = require('./getSimpsons');

const app  = express();

const fs = require('fs').promises;

app.use(bodyParser.json());
// Exercício 1:

app.get('/ping', (_req,res) => {
    res.status(200).json({ message: 'pong' })
});

// Exercício 2:
 
app.post('/hello', (req,res) => {
    const { name } = req.body;   
    res.status(200).json({ "message": `Hello, ${name}!` } )
});

// Exercício 3:

app.post('/greetings', (req,res) => {
    const { name, age } = req.body;   

    if(age <= 17) res.status(401).json({ "message": "Unauthorized" });

    if(age > 17) res.status(200).json({ "message": `Hello, ${name}!` } )

});

// Exercício 4:

app.put('/users/:name/:age', (req,res) => {
    const { name, age } = req.body;   

    res.status(200).json({ "message": `Seu nome é, ${name} e você tem ${age} anos de idade!` } )


});
app.listen('3000', (req,res) => {
    console.log('🚀 Rodando na porta 3000!')
})

// Exercício 6:

async function getSimpons() {
    try {
        const array = await fs.readFile('./simpsons.json','utf-8')    
        return JSON.parse(array)
    } catch (error) {
        console.log('Arquivo não encontrado', error)
    }
}
app.get('/simpsons', async(_req,res) => {
    //const theSimpsons = await simpsons.getSimpsons()
    return res.status(200).json(await getSimpons())       
});

// Exercício 7:

app.get('/simpsons/:id', async(req,res) => {
    const { id } = req.params;

    const theSimpsons = await getSimpons()

    const simpsonsId = theSimpsons.find((elem) => elem.id === id);
    if (!simpsonsId) return res.status(404).json({ message: 'simpson not found!'})

    return res.status(200).json(simpsonsId)       
});