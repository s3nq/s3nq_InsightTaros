import numpy as np

# Определим функцию f(x)
def f(x):
    return 2 * x**3 - 3 * x**2 - 12 * x - 5

# Зададим начальные параметры
a0 = 0
b0 = 6
e = 0.4
k = 0

# Запускаем алгоритм
while True:
    # Вычисляем точки yk и zk
    yk = a0 + (3 - np.sqrt(5)) / 2 * (b0 - a0)
    zk = a0 + b0 - yk

    # Вычисляем значения функции в этих точках
    fy = f(yk)
    fz = f(zk)

    # Вывод текущей информации об итерации
    print(f"Итерация {k}:")
    print(f"a{k} = {a0}, b{k} = {b0}")
    print(f"y{k} = {yk}, z{k} = {zk}")
    print(f"f(y{k}) = {fy}, f(z{k}) = {fz}")
    
    # Сравниваем значения функции
    if fy <= fz:
        b0 = zk  # Исключаем интервал (zk, b0]
        # Новые значения для следующей итерации
        yk = a0 + b0 - yk
        zk = yk
    else:
        a0 = yk  # Исключаем интервал [a0, yk)
        # Новые значения для следующей итерации
        yk = zk
        zk = a0 + b0 - zk

    # Вычисляем новую длину интервала
    del_interval = abs(a0 - b0)

    # Вывод текущей длины интервала
    print(f"Длина интервала = {del_interval}\n")

    # Проверяем условие остановки
    if del_interval <= e:
        break  # Выходим из цикла

    k += 1  # Увеличиваем k для следующей итерации

# Вычисляем приближенное решение
x_star = (a0 + b0) / 2
print("Приближенное значение x*:", x_star)
print("Конечная длина интервала неопределенности:", del_interval)
