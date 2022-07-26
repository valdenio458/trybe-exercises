# # Lembrando:
# Fatorial de N = N * (N-1) * (N-2) * ... * 2 * 1

# Raciocínio:
# Fatorial de 1 = 1
# Fatorial de 2 = 2 * 1             = (2 * Fatorial de 1)
# Fatorial de 3 = 3 * 2 * 1         = (3 * Fatorial de 2)
# Fatorial de 4 = 4 * 3 * 2 * 1     = (4 * Fatorial de 3)
# Fatorial de 5 = 5 * 4 * 3 * 2 * 1 = (5 * Fatorial de 4)
# Fatorial de N = N * (Fatorial de N-1)


def fatorial(n):
    if n == 1: # Base case
        return 1
    else:
        return n * fatorial(n-1) # Recursive call

print(fatorial(3))

# def iterative_factorial(n):
#     fact = 1

#     for i in range(1, n + 1):
#         fact = fact * i

#     return fact

# iterative_factorial(5)