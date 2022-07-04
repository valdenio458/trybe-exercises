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
sumNumbers(200,2,1);