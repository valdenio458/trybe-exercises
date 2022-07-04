function maiorNome(nomes) {
  let maiorNome = nomes[0];
  for (let i in nomes) {
    if (maiorNome.length < nomes[i].length) {
      maiorNome = nomes[i];
    }
  }
  return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 