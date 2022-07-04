def imc(peso, altura):
    return peso / pow(altura*0.01, 2)

    print(f'O IMC é: {round(imc(70,170), 2)}')
