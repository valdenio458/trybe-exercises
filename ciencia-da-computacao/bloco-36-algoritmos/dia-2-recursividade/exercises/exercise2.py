# Crie um algoritmo recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def account_pairs(n):
  # condição de parada
    if n == 1:
        return 0
    
  # condição de ser par - conta 1 e volta ao início
    elif n % 2 == 0:
            return 1 + account_pairs(n-1)
  # condição de ser impar - volta ao início
    else:
            return account_pairs(n-1)

if __name__ == '__main__':
    print(account_pairs(10))