# Implementar um contador recursivo

# caso base -> 0
# alterar estado em direção ao caso base
# função chama a si mesma

def countdown(n):
  if n == 0:
    print('FIM!')
  else:
    print(n)
    countdown(n-1)

if __name__ == '__main__': # quando eu chamar este arquivo, ele será executado
  countdown(5)