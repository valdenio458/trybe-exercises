# Conjuntos imutáveis (frozenset)
#É uma variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.
permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado
#frozenset({'group', 'user', 'member'})

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos
#frozenset({'member'})

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
#frozenset({'group', 'member'})
