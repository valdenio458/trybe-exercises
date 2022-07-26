# Implementar uma função que inverte uma lista de maneira recursiva.

# [1] -> [1]
# [1, 2] -> [2, 1]
# [1, 2, 3] -> [3, 2, 1]
# [1, 2, 3, 4] -> [4, 3, 2, 1]

# caso base -> [1]
# alterar estado em direção ao caso base
# função chama a si mesma

def reverse(array):
    if len(array) <= 1:
        return array
    else:
        return [array[-1]] + reverse(array[:-1])

if __name__ == '__main__':
  print(reverse([1, 2, 3, 4]))
