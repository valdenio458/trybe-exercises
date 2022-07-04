# Um conjunto é uma coleção de elementos únicos e não ordenados. Conjuntos implementam operações de união, intersecção e outras.
permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto
# {'group', 'root', 'member'}

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união
# {'group', 'root', 'user', 'member'}

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos
# {'member'}

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
# {'group', 'root', 'member'}
