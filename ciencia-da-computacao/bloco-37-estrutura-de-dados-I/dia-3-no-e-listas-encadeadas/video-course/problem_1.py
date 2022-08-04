""""
Dada uma lista não vazia, unida individualmente
com o nó principal, retorne o node do meio da lista.
"""

from linked_list import LinkedList
from rich import print 

if __name__ == "__main__":
    my_linked_list = LinkedList()

    my_linked_list.insert_first('Felps')
    my_linked_list.insert_first('Eli')
    my_linked_list.insert_first('Flavio')
    my_linked_list.insert_first('Bux')
    my_linked_list.insert_first('Will')

    # print(my_linked_list.get_element_at(0)) # Will
    print(my_linked_list.get_mid_element())
