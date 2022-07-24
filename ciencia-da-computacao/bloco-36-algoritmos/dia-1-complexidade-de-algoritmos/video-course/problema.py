def mais_que_25_porcento_quad(array):
    for elem in array:
        counter = 0
        for elem2 in array:
            if elem == elem2:
                counter += 1
        if counter > len(array) * 0.25:
            return elem
    return -1

def mais_que_25_porcento_lin(array):
    vinte_e_cinco_porcento = len(array) // 4
    setenta_e_cinco_porcento = len(array) - vinte_e_cinco_porcento

    for indice, elem in enumerate(array[:setenta_e_cinco_porcento]):
        if elem == array[indice + vinte_e_cinco_porcento]:
            return elem

    return -1


if __name__ == '__main__':
    test1 = [1 ,2 , 2, 6, 6 ,6 , 6, 7, 10]   # 6
    test2 = [1, 1, 2, 3]              # 1
    test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # -1
    print(f"O elemento encontrado para test1: {test1}")
    print(f"foi {mais_que_25_porcento_quad(test1)}")
    print(f"foi {mais_que_25_porcento_lin(test1)}")
    print(f"O elemento encontrado para test2: {test2}")
    print(f"foi {mais_que_25_porcento_quad(test2)}")
    print(f"foi {mais_que_25_porcento_lin(test2)}")
    print(f"O elemento encontrado para test3: {test3}")
    print(f"foi {mais_que_25_porcento_quad(test3)}")
    print(f"foi {mais_que_25_porcento_lin(test3)}")