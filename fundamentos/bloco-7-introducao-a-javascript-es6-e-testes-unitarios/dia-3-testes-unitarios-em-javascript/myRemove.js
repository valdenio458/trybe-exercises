const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
      
    }
  }
  return newArr;
}


// implemente seus testes aqui
const actual = myRemove([1,2,3,4],3);
//Verifica se a chamada myRemove([1,2,3,4], 3) retorna o array esperado
assert.deepStrictEqual(actual,[1,2,4],"ESPERADO [1,2,4]");

//Verifica se a chamada myRemove([1,2,3,4], 3) retorna o array [1,2,3,4]
assert.notDeepStrictEqual(actual,[1,2,3,4]);

//Verifica se o array passado por parâmetro não sofreu alterações
const myarr = [5, 6, 7, 8];
myRemove(myarr, 5);
assert.deepStrictEqual(myarr, [5, 6, 7, 8]);

//Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const actual0 = myRemove([1,2,3,4],5)
assert.deepStrictEqual(actual0,[1,2,3,4])