import { render, screen } from '@testing-library/react';
import App from './App';

function retornaNumeroAleatorio(){
  return Math.floor(Math.random() * 100);
}

function divisivelPorDois(){
  return (retornaNumeroAleatorio() % 2) === 0
}

function somaDoisNumeros(){
  return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}

// MOCK é simulação
describe('Aprendendo sobre mocks', () => {
  it('Testa se a função foi chamada', () => {
   somaDoisNumeros = jest.fn(); 
   somaDoisNumeros();
   expect(somaDoisNumeros).toHaveBeenCalled();
  });

 it('Testa o resultado da função', () => {
  somaDoisNumeros = jest.fn().mockReturnValue(8);
  
  expect(somaDoisNumeros()).toBe(8);

 });

 it('Testa quantas vezes a função foi chamada', () => {
   somaDoisNumeros = jest.fn();
   somaDoisNumeros();
   somaDoisNumeros();
   somaDoisNumeros();

   expect(somaDoisNumeros).toHaveBeenCalledTimes(3);
 });

 it('Testa que retorna true quando o número é par', () => {
   
  retornaNumeroAleatorio = jest.fn().mockReturnValue(2);

   expect(divisivelPorDois()).toBe(true);
 });

 it('Testa que retorna false quando o número é ímpar', () => {
   retornaNumeroAleatorio = jest.fn().mockReturnValue(3);

   expect(divisivelPorDois()).toBe(false);
 })

});


