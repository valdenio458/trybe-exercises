vogais = "aeiou"
frase = "Flamengo querido"
lista_v = []
lista_c = []
for letra in frase:
    if letra in vogais:
        lista_v.append(letra)

print(lista_v)
for letra in frase:
    if letra not in vogais:
        lista_c.append(letra)
print(lista_c)

# lista de compreensão
lista_v2 = [letra for letra in frase if letra in vogais]
print(lista_v2)
lista_c2 = [letra for letra in frase if letra not in vogais]
print(lista_c2)
