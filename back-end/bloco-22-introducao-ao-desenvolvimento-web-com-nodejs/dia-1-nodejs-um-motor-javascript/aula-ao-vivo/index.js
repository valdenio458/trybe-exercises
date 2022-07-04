/* CommonJS - Versão 16 do Node
/* ES6 - Versão 17 do Node
 export = module.exports
 import = require


const { soma, subtrai } = require('./calculadora');
console.log(soma(65,55))
console.log(subtrai(65,55));

// Outra forma:
const calculadora = require('./calculadora');
console.log(calculadora.soma(5,7));
*/

const { readName, readWeigth, readHeight } = require('./questions');
const imc = require('./imc');

const name = readName();
const weigth = readWeigth();
const height = readHeight();

const imcValue = imc(weigth, height);

console.log(`Nome: ${name}, Peso: ${weigth}, Altura: ${height}, IMC: ${imcValue}`);