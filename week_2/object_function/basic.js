//Базовое:

// Задание 1 – Создать объект counter всеми возможными способами;

// Используя литерал объекта:
const counter = {count: 0};
console.log(counter);
//Используя конструктор Object:
const counter2 = new Object({count: 0});
console.log(counter2);

//Используя функцию-конструктор:
function Counter() {
  this.count = 0;
}

const counter3 = new Counter();
console.log(counter3);

//Используя class (синтаксический сахар над функцией конструктором):
class CounterClass {
  constructor() {
    this.count = 0;
  }
}

let counter4 = new CounterClass();
console.log(counter4);

//Используя Object.create():

const counter5 = Object.create({}, {
  count: {
    enumerable: true, value: 0
  }
});
console.log( counter5);


//Используя Object.assign():

let counter6 = Object.assign({count: 0});
console.log(counter6);


// Задание 2 – Скопировать объект counter всеми возможными способами;

///////////Поверхностная копия

//Используя Object.assign():
const copy = Object.assign({}, counter);
console.log(copy === counter);//false

//Используя Object.create():
const copy2 = Object.create(counter);
console.log(copy2 === counter);//false

//Используя spread оператор:
const copy3 = {...counter};
console.log(copy3 === counter);//false

///////////Глубокая копия
//Используя JSON.stringify()  (Есть огромные минусы: не поддерживает клонирование функций, регулярных выражений и некоторых других типов данных):
const copy4 = JSON.parse(JSON.stringify(counter));
console.log(copy4 === counter);//false;

//Используя structuredClone():
//Минусы:
//Нельзя клонировать: Функции, DOW-узлы, прототипы объектов, дескрипторы свойств, сеттеры и геттеры. А также аналогичные функции, подобные метаданным не клонируются.
//
const copy5 = structuredClone(counter);
console.log(copy5 === counter);//false

// Используя lodash.cloneDeep()
// Минус нужно использовать отдельной библиотеку.
// Есть возможность установить отдельный модуль lodash.clonedeep в npm
import cloneDeep from 'lodash.clonedeep';

const copy6 = cloneDeep(counter);
console.log(copy6 === counter);//false

//Используя собственную функцию:
const deepClone = (obj) => {
  if (obj === null) return null;
  const clone = Object.assign({}, obj);
  Object.keys(clone).forEach((key) => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]));
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};
const copy7 = deepClone(counter);
console.log(copy7 === counter);//false

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

// Используя литерал функции:

function makeCounter() {
  return {count: 0};
}

console.log(makeCounter());

//Используя функцию-конструктор:

function makeCounter2() {
  function Counter() {
    this.count = 0;
  }

  return new Counter();
}

console.log(makeCounter2());

//Используя class (синтаксический сахар над функцией конструктором)

class Counter1 {
  constructor() {
    this.count = 0;
  }
}

function makeCounter3() {
  return new Counter1();
}

console.log(makeCounter3());

//Используя конструктор Object:
function makeCounter4() {
  return new Object({count: 0});
}

console.log(makeCounter4());

//Используя Object.create():
function makeCounter5() {
  return Object.create({}, {
    count: {
      enumerable: true, value: 0
    }
  });
}

console.log(makeCounter5());

//Используя Object.assign():
function makeCounter6() {
  return Object.assign({count: 0});
}

console.log(makeCounter6());

