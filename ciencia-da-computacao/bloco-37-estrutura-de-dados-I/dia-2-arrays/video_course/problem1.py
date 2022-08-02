# Dado um array de números, verifique se este array possui algum elemento duplicado.
# Sua função deve retornar True se algum elemento estiver duplicado e False caso contrário.

def contains_duplicates(nums):
    nums.sort()
    for i in range(len(nums)-1):
        if nums[i] == nums[i+1]:
            return True
    return False

test1 = [1, 2, 3, 1]                    # saída: True
test2 = []                              # saída: False
test3 = [1, 2, 3, 4]                    # saída: False
test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]  # saída: True

print(contains_duplicates(test4))