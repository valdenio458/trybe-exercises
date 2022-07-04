let n = 5; 
let string = ""; //Declarando variável .
for(let i = 1; i <= n; i++){ //Declarando um contador menor igual a n.
    for(let g = 1; g <= n - i; g++){ //Declarando um contador que será menor igual à n menos o i, que na primeira rodada do loop, será 2, que resultará em 3.
    string += " "; //Adicionando espaço na string, 3 espaços.
}
    for(let p = 0; p < 2 * i - 1; p++) { //Aqui, estou adicionando um crescimento dinâmico ao p, pois conforme o i cresce, p crescerá junto. O -1 está para garantir que sempre será um valor ímpar começado pelo 1, pois o i começa valendo 2 na primeira rodada do loop.
        string += "*" //Adicionando o asterisco.
    }
    string += "\n" //Pulando para a linha de baixo para recomeçar o loop.
}
console.log(string) //Imprimindo a string.