let numeros = [33,69,2,-34,56,79];
let menor = numeros[0];
for (let i = 0; i < numeros.length; i+=1){
     if(menor > numeros[i]){
         menor = numeros[i]
     }
}

console.log(numeros.indexOf(menor));