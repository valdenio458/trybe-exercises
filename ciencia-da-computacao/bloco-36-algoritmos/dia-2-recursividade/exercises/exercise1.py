# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def account_pairs(n):
    count = 0
    for num in range(1, n+1):
        if num % 2 == 0:
            count += 1
    return count

if __name__ == '__main__':
  print(account_pairs(10))