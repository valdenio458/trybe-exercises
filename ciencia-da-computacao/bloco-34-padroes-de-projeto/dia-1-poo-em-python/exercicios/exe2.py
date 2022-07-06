class Estatistica:
    @classmethod
    # Método que faz com que não seja necessário instanciar a classe.
    def media(cls, lista):
        return sum(lista)/len(lista)


print(Estatistica.media([1, 2, 3, 4, 5]))
