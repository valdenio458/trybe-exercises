let soma = 0;
let numInteiro = 0;
function somaNum(numInteiro){
    for(let i =0; i <= numInteiro; i+=1){
        soma +=i;
    }
    return(soma);
}
console.log(somaNum(5))