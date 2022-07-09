class Liquidificador:
    def __init__(self, cor, potencia, voltagem):
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3

liquidificador_azul = Liquidificador('Azul', 200, 127)
liquidificador_vermelho = Liquidificador('Vermelho', 250, 220)

Em Python, não temos as já conhecidas palavras reservadas: public, private e protected que são utilizadas em outras linguagens para declarar um atributo como privado, por exemplo. Porém, existe uma convenção para indicar que a acessibilidade é privada: basta nomear um método ou atributo com o prefixo __ (dunder/duplo underline), como vimos nos atributos __ligado, __cor.

A abstração de dados oculta os detalhes da implementação e mostra apenas a funcionalidade para o usuário, a fim de reduzir a complexidade do código.

Composição é atribuir o objeto de uma classe a outra, gerando assim um relacionamento de pertencimento entre eles.

Herança é especializar o comportamento de uma classe, ou seja, a classe herdeira é tudo que a classe ascendente é e talvez um pouco mais.

Em Python, para declarar que um objeto herda as características de outro, basta na declaração da classe passarmos como primeiro parâmetro a classe que será herdada.