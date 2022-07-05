class Pet():
    def __init__(self, nome, especie, idade, humano):
        self.nome = nome
        self.especie = especie
        self.idade = idade
        self.humano = humano

    def __str__(self):
        return f"""
        Nome: {self.nome}
        Especie: {self.especie}
        Idade: {self.idade} 
        Pessoa responsável: {self.humano}"""

thor = Pet('Thor', 'Gato', 5, 'Pedro')

print(thor)
    