# Dado um array de números de tamanho n, escreva um algoritmo que retorna True se houver no array um número duplicado e False caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.

def contains_duplicate(numbers):
  numbers.sort()
  previous_number = ''
  for number in numbers:
    if number == previous_number:
      return True
    previous_number = number
  return False

print(contains_duplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))