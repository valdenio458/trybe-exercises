const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
//1 Teste se o retorno de sum(4,5) é 9
assert.strictEqual(typeof sum,'function')
const actual = sum(4,5);
assert.strictEqual(actual,9,"A soma deveria ser 9");
const actual0 = sum(0,0);
assert.strictEqual(actual0, 0,"A soma deveria ser 0");

assert.throws(() => {
    sum(4,'5');
    
})