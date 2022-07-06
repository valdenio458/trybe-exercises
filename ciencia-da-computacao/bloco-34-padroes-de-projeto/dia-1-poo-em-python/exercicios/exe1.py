class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume >= 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError('Canal inválido')

        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def get_volume(self):
        return self.__volume

    def __str__(self):
        return f'''
        - Tamanho: {self.__tamanho}
        - Volume: {self.__volume}
        - Canal: {self.__canal}
        - Ligada: {self.__ligada}
        '''


tv1 = TV(40)
print(tv1)

print("===============================")

tv2 = TV(60)
tv2.ligar_desligar()
tv2.aumentar_volume()
tv2.modificar_canal(10)
print(tv2)
