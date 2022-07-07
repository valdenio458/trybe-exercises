carros = ["Polo", "Volvo", "Jetta", "Cruze", "Fusion"]

itCarros = iter(carros)

while itCarros:
    try:
        print(next(itCarros))
    except StopIteration:
        print("Fim da lista")
        break


