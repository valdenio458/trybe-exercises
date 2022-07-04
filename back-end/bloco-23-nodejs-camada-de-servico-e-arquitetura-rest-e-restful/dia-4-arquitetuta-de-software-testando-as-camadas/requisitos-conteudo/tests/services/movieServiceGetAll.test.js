const sinon = require('sinon');
const { expect } = require('chai');

const movieModel = require('../../models/movieModel')

const movieService = require('../../services/movieService')

describe('Busca todos os filmes do BD', () => {
  describe('quando não existe nenhum filme', () => {
   before(() =>
   {
     sinon.stub(movieModel,'getAll').resolves([])
   });
   after(() => {
     movieModel.getAll.restore();
   })
   it('retorna um array', async () => {
     const result = await movieService.getAll();
     expect(result).to.be.an('array');
   })
   it('retorna um array vazio', async () => {
    const result = await movieService.getAll();
    expect(result).to.be.empty;
  });
  });

  describe('quando existem filmes criados', () => {
    before(() =>{
      sinon.stub(movieModel, 'getAll').resolves([
        { 
          id: 1,
          title: 'Seven',
          directedBy: 'Fulano',
          releaseYear: 2022,
        },
      ]);
    });
    after(() => {
      movieModel.getAll.restore();
    });
    it('retorna um array', async ()=> {
      const result = await movieService.getAll();
      expect(result).to.be.an('array');
    });
    it('o array não estar vazio', async ()=> {
       const result = await movieService.getAll();
       expect(result).to.be.not.empty;
    });
    it('o array possui itens do tipo objeto', async () => {
      const [item] = await movieService.getAll();
      expect(item).to.be.an('object');
    });
    it('o item tem as propriedades id, title, releaseYear e directedBy', async () => {
      const [item] = await movieService.getAll();
      expect(item).to.include.all.keys('id', 'title', 'directedBy','releaseYear');
    });
  })
})