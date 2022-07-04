const fatorial = n => {
   let resultado = n;
   if(n === 0){
       return 1;
   } else {
    for(let i = 1; i < n; i += 1){
        resultado *= i;
   }   
   
}
return resultado;
}
console.log(fatorial(4));

//Forma recursiva:
const factorial = n => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(4));