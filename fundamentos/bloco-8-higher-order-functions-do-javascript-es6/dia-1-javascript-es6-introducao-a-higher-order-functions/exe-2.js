const numberChecker = (myNumber, number) => myNumber === number;

const resSorteio = (myNumber, numberChecker) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return numberChecker(myNumber, number) ? 'Parabéns, você ganhou!' : 'Tente outra vez!';
};

console.log(resSorteio(2, numberChecker));