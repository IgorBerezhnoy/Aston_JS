// Продвинутый:
//   1. Написать функцию
// function firstSum = (arr, total)
//которая вернет массив с первой парой чисел, сумма которых равна total :const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = 13;
// firstSum(arr, total) //result = [4, 9]


const firstSum = (arr, total) => {
  if (arr.length < 2 || total < 0 || Array.isArray(arr) === false) {
    return null;
    //Или ошибка на усмотрение лида
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        result.push(arr[i], arr[j]);
        return result;
      }
    }
  }
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
console.log(firstSum(arr, total)); //result = [4, 9]
// Для данной  функции максимальная сложность алгоритма будет квадратичной,
// обозначается как O(n^2), где n - количество элементов в массиве.
// Это связано с тем, что функция использует два вложенных цикла for,
// которые перебирают все пары чисел в массиве для проверки их суммы на соответствие значению total

