from time import sleep
number = 5
fact = 1

print('CALCULANDO fatorial de {}...'.format(number))
sleep(3)
print('Resultado = ', end='')
while number > 0:
    print(f'{number}', end='')
    if number > 1:
        print(' x ', end='')
    fact *= number
    number -= 1
print(f' = {fact}')
