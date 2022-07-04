const fs = require('fs');

function sumNumbers(num1,num2,num3){
    const promise = new Promise((resolve, reject) => {
    if (
        typeof num1 !== 'number' || 
        typeof num2 !== 'number' || 
        typeof num3 !== 'number') reject(Error('Informe apenas números.'));
      const resultado = (num1 + num2) * num3;

    if(resultado < 50) reject(Error('Valor muito baixo.'))
    else if(resultado > 50 )

    resolve(console.log(resultado));
    })

    return promise;
};
//sumNumbers(200,2,1);

function returnRandom (){
    return Math.floor(Math.random() * 100 + 1)
}
async function generateNumbers(){
    // const num1 = Math.floor(Math.random() * 100 + 1);
    // const num2 = Math.floor(Math.random() * 100 + 1);
    // const num3 = Math.floor(Math.random() * 100 + 1);
    // const array = [num1,num2,num3]
    const array = Array.from({length:3}).map(Function.call,returnRandom)
    try{
        return await sumNumbers(...array)
    } catch(err){
        console.error('Não foi possível fazer o cálculo.', err);
    }
    console.log(array);
}

generateNumbers();
