const maiorPalavra = frase => {
    let arrayPalavra = frase.split(' ');   
    let counterTamanhoPalavra = 0;
    let res = '';

    for(const palavra of arrayPalavra){
        if(palavra.length > counterTamanhoPalavra){
            counterTamanhoPalavra = palavra.length;
            res = palavra;
        }
    }
    return res;
}
console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));