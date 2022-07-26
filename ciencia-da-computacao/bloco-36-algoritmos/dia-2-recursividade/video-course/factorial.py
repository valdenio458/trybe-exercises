# Implementar um fatorial recursivo

# O fatorial de um número n é o produto de todos os números inteiros positivos até n.

# fat(5) -> 5 * 4 * 3 * 2 * 1 = 120
# fat(4) -> 4 * 3 * 2 * 1 = 24
# fat(3) -> 3 * 2 * 1 = 6
# fat(2) -> 2 * 1 = 2
# fat(1) -> 1 = 1
# fat(0) -> 0 = 1

# caso base -> 0
# alterar estado em direção ao caso base
# função chama a si mesma

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

if __name__ == '__main__':
  print(factorial(5))