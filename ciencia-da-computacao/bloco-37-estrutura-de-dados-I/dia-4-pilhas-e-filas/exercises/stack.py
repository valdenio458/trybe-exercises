class Stack:
    def __init__(self):
        self._data = []

    def __rep__(self):
        return str(self._data)

    def __str__(self):
        return str(self._data)

    def __len__(self):
        return len(self._data)

    def size(self):
        return len(self._data)

    def is_empty(self):       
        return not self.size()

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self._data.pop()

    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self._data[-1]
    
    def min_value(self):
        if self.is_empty():
            raise Exception("Stack is empty")
            
        min_value = self._data[0]
        for value in self._data:
            if value < min_value:
                min_value = value
        return min_value