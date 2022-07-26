# Implementar a sequência de fibonacci recursiva

# O próximo elemento é sempre a soma dos dois anteriores
 
# 0  1  2  3  4  5  6  7   8   9   10 (posição)
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

# casos base -> 0 = 0 e 1 = 1
# alterar estado em direção ao caso base
# função chama a si mesma

def fibo(n):
  if n < 2:
    return n
  return fibo(n-1) + fibo(n-2)

if __name__ == '__main__':
    print(fibo(5))
