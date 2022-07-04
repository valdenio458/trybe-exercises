const service = require('./Service ');

describe('Testa o exercíco 1', () => {
    test ('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {

        service.randomNumber = jest.fn().mockReturnValue(10);
        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        

    })
})