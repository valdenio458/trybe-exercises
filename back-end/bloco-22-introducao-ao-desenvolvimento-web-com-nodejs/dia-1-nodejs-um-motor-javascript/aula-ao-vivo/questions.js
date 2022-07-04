const readlineSync = require('readline-sync');

const readName = () => {
  const name = readlineSync.question('Digite seu nome: ');

  return name;
};

const readWeigth = () => {
    const weigth = readlineSync.questionFloat('Digite seu peso : ');

    return weigth;
};
const readHeight = () => {
  const height = readlineSync.questionFloat('Digite sua altura : ');

  return height;
};

module.exports = {
  readName,
 readWeigth,
 readHeight
};