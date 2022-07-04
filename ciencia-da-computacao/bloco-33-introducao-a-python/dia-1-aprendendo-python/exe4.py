# Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.
preco = 24.20
transporte = 3.00
adicional = 0.75
desconto = 0.4
custo = preco * 60 + transporte * 60 + adicional * 59
custo_desconto = custo * desconto
print(f'O custo total de atacado para 60 cópias é de R${custo_desconto:.2f}')
