const fs = require('fs');

function leArquivo() {
  try {
    const conteudoDoArquivo = fs.readFileSync('./arquivo.txt', 'utf-8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;