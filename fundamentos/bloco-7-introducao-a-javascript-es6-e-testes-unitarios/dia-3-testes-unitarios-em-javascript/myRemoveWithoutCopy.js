const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
//Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
const actual = myRemoveWithoutCopy([1,2,3,4],3);
assert.deepStrictEqual(actual,[1,2,4])

//Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(actual,[1,2,3,4]);

//Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const actual0 = [1,2,3,4];
myRemoveWithoutCopy(actual0,4);
assert.strictEqual(actual.length,3);

//Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
const actual1 = myRemoveWithoutCopy([1,2,3,4])
assert.deepStrictEqual(actual1,[1,2,3,4])