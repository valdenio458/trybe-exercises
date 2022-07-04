const fs = require('fs');

const sinon = require('sinon');

const { expect } = require('chai');

const leArquivo = require('../readFile');

const CONTEUDO_DO_ARQUIVO = 'Course ruim';

describe('Testando a existência e o conteúdo do arquivo', () => {
    before(() => {
        sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO)
    })

    after(() => {
        fs.readFileSync.restore();
    })
    
    const resposta = leArquivo('arquivo.txt')
    it('Verifica se o conteúdo do arquivo é uma string', () => {
        expect(resposta).to.be.a('string')
    })

    it('Verifica o conteúdo do arquivo', () => {
    expect(resposta).to.be.equal(CONTEUDO_DO_ARQUIVO)
    })

});

describe('Quando o arquivo não existe', () => {
    
    before(() => {
        sinon.stub(fs, 'readFileSync').returns(null)
    })

    after(() => {
        fs.readFileSync.restore();
    })

    it('a resposta é igual a "null"', () => {
    const resposta = leArquivo('arquiv.txt');
    expect(resposta).to.be.equal(null);
    });
});
