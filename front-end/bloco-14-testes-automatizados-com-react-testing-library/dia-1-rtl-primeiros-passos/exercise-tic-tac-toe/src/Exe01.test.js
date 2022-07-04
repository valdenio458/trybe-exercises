import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe ('Configurações iniciais', () => {
   test('Verifica se os campos estão vazios', () => {
      render(<App />);

     /*  expect(screen.queryAllByText('x').toBeInTheDocument()); */

   });
 
   test('Verifica se não tem a mensagem de "Fim de jogo"', () => {
    render(<App />);
    
   });

    test('Verifica se tem 9 casas rendrizadas', () => {
      render(<App />);
      
   });
});