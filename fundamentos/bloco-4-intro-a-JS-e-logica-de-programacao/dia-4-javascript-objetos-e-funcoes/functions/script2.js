let numeros = [33,69,2,34,56,79];
let maior = numeros[0];
for (let i = 0; i < numeros.length; i+=1){
     if(maior < numeros[i]){
         maior = numeros[i]
     }
}

console.log(numeros.indexOf(maior));