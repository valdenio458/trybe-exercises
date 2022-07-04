//  async function soma (a, b){
//      return a + b;
//  }
//  console.log(soma(2,2));
 const fs = require('fs');

 // Jeito atual:
 const mainComAsync = async () => {
     try{
       const content = await fs.promises.readFile('./arquivo1.txt','utf-8');
       console.log(`mainComAsync: ${content}`);
     } catch (e){
       console.log(e);       
      }
 }
      mainComAsync();

      // Trabalhando com then:
        fs.promises.readFile('./arquivo1.txt','utf-8')
           .then((response) => console.log(`Usando com then: ${response}`))
           .catch((err) => console.log(err));

      // Jeito antigo/legado:
      const mainComCallback = ( ) => {
        fs.readFile('./arquivo1.txt','utf-8', (err,content) => {
          if (err) console.log(err);

          console.log(`Main com Callback: ${content}`)
        })
      }

      mainComCallback(); 
    

 console.log('Executando após a chamada da função main.')