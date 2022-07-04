const { expect } = require('chai');

const numbers = require('../exercicio-2');

describe('Se o número for maior que zero', () => {
   it('retorna \'positivo\'', () => {
    const response = numbers(10);
    expect(response).to.be.equals('positivo');
   })
});

describe('Se o número for menor que zero', () => {
    it('retorna \'negativo\'', () => {
     const response = numbers(-5);
     expect(response).to.be.equals('negativo');
    })
 });

 describe('Se o número for igual a zero', () => {
    it('retorna \'neutro\'', () => {
     const response = numbers(0);
     expect(response).to.be.equals('neutro');
    })
 });

