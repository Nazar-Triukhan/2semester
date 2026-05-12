import random

# Введення розмірів матриці
n = int(input("Введіть кількість рядків: "))
m = int(input("Введіть кількість стовпців: "))

# Генерація матриці
matrix = [[random.randint(0, 100) for j in range(m)] for i in range(n)]

# Виведення матриці на екран
print("Матриця:")
for row in matrix:
    print(row)

# Запис у файл
with open("matrix.txt", "w") as file:
    for row in matrix:
        # записуємо елементи рядка через пробіл
        file.write(" ".join(map(str, row)) + "\n")

print("Матрицю записано у файл matrix.txt")
