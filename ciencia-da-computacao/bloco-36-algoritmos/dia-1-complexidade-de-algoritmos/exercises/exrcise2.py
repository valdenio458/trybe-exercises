# Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas x para linhas e y para colunas, o algoritmo verifica se há um navio na coordenada alvo.
# Por exemplo:
# entrada = [ 
#  0 0 0 0 1
#  0 0 0 0 1
#  1 1 1 1 1
#  0 0 0 1 0 
# ]

# resultado para (0, 4) = True
# resultado para (1, 1) = False
def battle_ship(board, x, y):
    if  board[x][y] == 1:
        return True
    return False

print(battle_ship([[0, 0, 0, 0, 1], [0, 0, 0, 0, 1]], 0, 4))

# Complexidade O(1) = Constante