from collections.abc import Iterable, Iterator

class Valores(Iterator):
    def __init__(self, valor):
      self.inicio = -1
      self.valor = valor # inicia os valores
    
    def __next__(self):
      try:
        current = self.valor[self.inicio]
      except IndexError:
        raise StopIteration
      else:
        self.inicio -= 1
        return current

class Iteration(Iterable):
    def __init__(self, lista):      
      self.lista = lista

    def __iter__(self):
        return Valores(self.lista)

lvalor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
va = Valores(lvalor)
for x in va:
  print(x)   