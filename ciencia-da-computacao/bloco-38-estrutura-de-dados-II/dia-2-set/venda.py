# Usar função para criar intervalo de 1 a 2000
# Transformar lista em conjunto
# Operação de diferença

shelf = [4, 1, 1, 13, 6, 3, 1, 7, 14, 20, 13, 9]
# 2, 5, 8, 11, 12, 15, 16, 17, 18, 19

def to_by(self):
  all_products = set(range(1, 21))
  my_products = set(self)
  return all_products.difference(my_products)
  #return my_products.difference(all_products)

print(to_by(shelf))