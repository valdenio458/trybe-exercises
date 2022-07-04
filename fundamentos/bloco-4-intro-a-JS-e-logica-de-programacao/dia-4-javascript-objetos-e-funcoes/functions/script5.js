let num = [2, 3, 2, 5, 8, 2, 3];
let igual = num[0];
let qtd = 1;
for (let i = 0; i < num.length; i+=1){
     if(igual === num[i]){
         qtd += qtd
     }
}

console.log(qtd);