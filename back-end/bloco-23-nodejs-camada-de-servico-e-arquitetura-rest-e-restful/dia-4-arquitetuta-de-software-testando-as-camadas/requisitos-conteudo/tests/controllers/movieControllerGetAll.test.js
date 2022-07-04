const sinon = require('sinon');
const { expect } = require('chai');

const movieController = require('../../controllers/movieController');

const movieService = require('../../services/movieService')

describe('Busca todos os filmes do BD', () => {
  describe('quando não existe nenhum filme', () => {
    const request = {};
    const response = {};
    before('')
    request.body = {};
    response.status = sinon.stub().returns(response)
    response.json = sinon.stub().returns()

    sinon.stub(movieService, 'getAll').resolves([]);
   it('retorna um array', async () => {
     await movieController.getAll(request, response);
     expect(response.status.calledWith(200)).to.be.equal(true);
   })
   it('retorna um array vazio', async () => {
    await movieController.getAll(request, response);
     expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
  });
  });

  describe.skip('quando existem filmes criados', () => {
    
    });
    it('retorna um array', async ()=> {
      
    });
    it('o array não estar vazio', async ()=> {
      
    });
    it('o array possui itens do tipo objeto', async () => {
      
    });
    it('o item tem as propriedades id, title, releaseYear e directedBy', async () => {
      
    });
  });
