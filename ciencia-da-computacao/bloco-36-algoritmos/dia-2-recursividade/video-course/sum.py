# Implementar um somatório recursivo

# sum(5) -> 5 + sum(4) -> 4 + sum(3) -> 3 + sum(2) -> 2 + sum(1) -> 1 + sum(0) -> 0

# caso base -> 0
# alterar estado em direção ao caso base
# função chama a si mesma

def sum(n):
  if n == 0:
    return 0
  else:
    return n + sum(n-1)

if __name__ == '__main__':
  print(sum(5))