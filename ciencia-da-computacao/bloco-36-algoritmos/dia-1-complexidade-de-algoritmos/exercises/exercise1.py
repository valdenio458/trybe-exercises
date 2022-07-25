def contains_duplictae(numbers):
  numbers.sort()
  previous_number = ''
  for number in numbers:
    if number == previous_number:
      return True
    previous_number = number
  return False

print(contains_duplictae([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))