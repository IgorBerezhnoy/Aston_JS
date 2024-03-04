//Продвинутое:
// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс
// каждого элемента с задержкой в 3 секунды.

const arr = [1, 3, 6, 4, 2, 5];
const delay = 3000;

const printArrWithDelay = (arr, delay = 3000) => {
  if (arr.length === 0 || delay < 0 || typeof delay !== 'number' || Array.isArray(arr) === false) {
    console.error('wrong input');
    return;
  }
  arr.forEach((el, i) => {
    setTimeout(() => {
      console.log(i);
    }, delay * (i+1));
  });
  console.log('iteration finished');
};
printArrWithDelay(arr, delay);
