function calculaSituacao(num){
  if (num >= 7) return 'aprovado';
  return 'reprovado'
}  
calculaSituacao(5);
module.exports = {calculaSituacao}