const fs = require('fs');

fs.promises.writeFile('./meu-arquivo.txt', 'Alterado pelo writeFile')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });