# Введення рядка
text = input("Введіть текст: ")

# Підрахунок символів
char_count = len(text)

# Підрахунок слів
word_count = len(text.split())

# Введення символу для пошуку
letter = input("Введіть літеру для пошуку: ")

# Частота входження
frequency = text.count(letter)

# Виведення результатів
print("Кількість символів:", char_count)
print("Кількість слів:", word_count)
print("Частота входження:", frequency)

# Запис у файл
choice = input("Дописати (a) чи перезаписати (w)? ")

with open("text_analysis.txt", choice) as file:
    file.write(f"Текст: {text}\n")
    file.write(f"Символів: {char_count}\n")
    file.write(f"Слів: {word_count}\n")
    file.write(f"Частота '{letter}': {frequency}\n")
    file.write("-" * 20 + "\n")

print("Дані збережено у файл")

