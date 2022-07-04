# Calcule a média aritmética dos valores contidos em uma lista.
def average(list):
    sum = 0
    for num in list:
        sum += num
    return sum / len(list)


print(average([1, 2, 3, 4, 5]))
