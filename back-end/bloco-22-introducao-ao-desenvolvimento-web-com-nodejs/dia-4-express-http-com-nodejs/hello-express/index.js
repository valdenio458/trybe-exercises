const express = require('express');

const app = express(); // 1 - Cria aplicação express

app.get('/hello', handleHelloWorldRequest); // 2 - Diz ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3 - Pede ao Express que crie um servidor HTTP e escute por requisições na porta 3001

function handleHelloWorldRequest(req, res) {
  res.status(200).send({msg: 'Olá, Valdênio!'}); // 4 -  Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!"
}