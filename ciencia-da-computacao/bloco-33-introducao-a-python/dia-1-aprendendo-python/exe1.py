# No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
a = 10
b = 5
soma = a + b
cores = {'limpa': '\033[m',
        'azul': '\033[34m',
        'amarelo': '\033[33m',
        'pretoebranco': '\033[7;30m',
  }
print('A soma entre {} e {} é {}' .format(cores['amarelo'], a, b, soma, cores['limpa']))
print(f'A subtração entre \033[33m{a} \033[me \033[32m{b} \033[mé \033[1;36m{a - b}\033[32m')
print(a * b)
print(a / b)
print(a % b)
print(a ** b)
print(a // b)