class Stack():
    def __init__(self):
        self._data = list()

    def size(self): # tamanho da pilha
        return len(self._data)

    def is_empty(self): # verificar se a pilha está vazia
        return not bool(self.size())
    

    def push(self, value): # empilhar itens
        self._data.append(value)

    def pop(self): # desempilhar itens
        if self.is_empty():
            return None

            # -1 se refere ao último objeto da pilha.
        # Ou seja, o valor do topo da pilha
        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self): # ver o valor do topo da pilha
        if self.is_empty():
            return None
        value = self._data[-1]
        return value 
    
    def clear(self): # limpar a pilha
        self._data.clear()
    
    def __str__(self): # retornar a pilha
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"

if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack() # criar uma pilha

    for elem in elements: # empilhar itens
        content_stack.push(elem)

    # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print(content_stack)
    # saída: 10
    print(content_stack.size())

    # saída: 10
    print(content_stack.peek())

    # saída: 10, pois a função retorna o elemento que está sendo retirado
    print(content_stack.pop())

    # saída: 9, pois, após o 10 ter sido removido, o 9 se tornou o elemento do topo da pilha
    print(content_stack.peek())

    # saída: 9
    print(content_stack.size())

    # saída: None, pois a função não retorna nada!
    print(content_stack.clear())
    
    # saída: 0
    print(content_stack.size())