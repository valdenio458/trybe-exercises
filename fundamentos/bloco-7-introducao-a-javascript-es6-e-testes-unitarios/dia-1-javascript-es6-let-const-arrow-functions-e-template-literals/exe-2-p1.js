// Solução 1:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaOddsAndEvens = () => {
    oddsAndEvens[0] = 2
    oddsAndEvens[1] = 3
    oddsAndEvens[2] = 4
    oddsAndEvens[3] = 7
    oddsAndEvens[4] = 10
    oddsAndEvens[5] = 13
    
    return oddsAndEvens;
}
const arrayOrdenado = ordenaOddsAndEvens();
console.log(`Os números ${arrayOrdenado} se encontram ordenados de forma crescente!`)

// Solução bônus:
const oddsAndEvens1 = [13, 3, 4, 10, 7, 2];
oddsAndEvens1.sort((a,b) => a - b);
console.log(`Os números ${oddsAndEvens1} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
