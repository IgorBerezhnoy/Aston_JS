// Базовый:
//   Написать функцию pattern, принимающую на вход число n и возвращающую в консоли паттерн:

const pattern = (lines) => {
    let result = '';
    const addNums = (n) => {
      for (let k = -0; k < lines - n; k++) result += ' ';
      for (let j = 0; j < n; j++) result += j + 1;
      for (let j = 1; j < n; j++) result += n - j;
    };
    for (let i = 1; i <= lines; i++) {
      addNums(i);
      result += '\n';
    }
    for (let i = lines - 1; i > 0; i--) {
      addNums(i);
      result += '\n';
    }
    console.log(result);
  }
pattern(5);



// function pattern1(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = ' '.repeat(n - i);
//     for (let j = 1; j <= i; j++) {
//       str += j;
//     }
//     for (let j = i - 1; j > 0; j--) {
//       str += j;
//     }
//     console.log(str);
//
//   }
//   for (let i = n - 1; i > 0; i--) {
//     let str = ' '.repeat(n - i);
//     for (let j = 1; j <= i; j++) {
//       str += j;
//     }
//     for (let j = i - 1; j > 0; j--) {
//       str += j;
//     }
//     console.log(str);
//   }
// }
// pattern1(5);
