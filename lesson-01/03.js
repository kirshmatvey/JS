/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
const INITIAL_VALUE = 20;
let counter = 1;
while (counter <= INITIAL_VALUE) {
    if (counter % 2 !== 0) {
        sum += counter;
    }
    counter++;
}
