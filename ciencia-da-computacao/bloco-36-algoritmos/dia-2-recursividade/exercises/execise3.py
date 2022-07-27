# Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.
def biggest_integer_aux(list, size):
    if size == 1:
        return list[0]
    else:
        biggest_of_list = biggest_integer_aux(list, size-1)
        if biggest_of_list > list[size-1]:
            return biggest_of_list
        else:
            return list[size-1]

def biggest_integer(list):
    size = len(list)
    return biggest_integer_aux(list, size)

if __name__ == '__main__':
    print(biggest_integer([1, 21, 300, 4, 57]))
