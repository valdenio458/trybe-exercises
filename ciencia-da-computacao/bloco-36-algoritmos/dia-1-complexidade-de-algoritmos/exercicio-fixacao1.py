def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result

print(multiply_array([1, 2, 3, 4, 5]))