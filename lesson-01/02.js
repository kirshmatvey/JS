/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/
const INITIAL_VALUE = 10;
// your code
let factorial = 1;
let counter = 1;

while (counter <= INITIAL_VALUE) {
    factorial *= counter;
    counter++;
}
