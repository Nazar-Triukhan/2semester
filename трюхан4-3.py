total_sum = 0

with open("numbers.txt", "r") as file:
    for line in file:
        # розбиваємо рядок на числа
        elements = line.split()
        
        for el in elements:
            try:
                num = float(el)
                # перевірка чи число ціле
                if num.is_integer():
                    total_sum += int(num)
            except:
                continue

print("Сума цілих чисел:", total_sum)
