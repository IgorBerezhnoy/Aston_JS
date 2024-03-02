//1. Перечислить какие бывают алгоритмы сортировок?
//
// Bubble sort (Пузырьковая сортировка) -в худшем и среднем случае – O(n2), в лучшем случае – O(n).
// Shaker sort (Шейкерная сортировка) -  у алгоритма такая же, как и у сортировки пузырьком,
// однако реальное время работы лучше.
// Quick sort (Быстрая сортировка) -  O(nlogn) в среднем и лучшем случае, O(n2).
// Наихудшая оценка достигается при неудачном выборе опорного элемента.
// Selection sort (Сортировка выбором) -  O(n2) в лучшем, среднем и худшем случае.
// Insertion sort (Сортировка вставками) - в среднем и худшем случае – O(n2), в лучшем – O(n).
// Merge sort (Сортировка слиянием) - слияние работает за O(n), уровней всего logn, O(nlogn).
// Эффективно заранее создать временный массив и передать его в качестве аргумента функции.
// Heap sort (Пирамидальная сортировка/Сортировка кучей) -  O(nlogn) в худшем, среднем и лучшем случае.
// Comb sort (Сортировка расческой) - в лучшем случае  равна O(nlogn), в худшем – O(n2).
// Tree sort (Сортировка деревом) -  будет равна O(nlogn) в худшем, среднем и лучшем случае.
// Gnome sort (Гномья сортировка) - алгоритм похож на сортировку вставками. Поддерживаем указатель на текущий элемент,
// если он больше предыдущего или он первый — смещаем указатель на позицию вправо,
// иначе меняем текущий и предыдущий элементы местами и смещаемся влево.

//2. Создать объект Person несколькими способами, после создать объект AnotherPerson,
// чтобы в нём были доступны методы объекта Person.
// Добавить метод logInfo чтоб он был доступен всем объектам.

///////Person

// Используя литерал объекта:
const person = {
  name: 'Ivan',
  sayHello() {
    console.log(`Hello I'm ${this.name}`);
  }
};

//Используя конструктор Object:
const person2 = new Object({
  name: 'Ivan', sayHello() {
    console.log(`Hello I'm ${this.name}`);
  }
});

//Используя функцию-конструктор:
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello I'm ${this.name}`);
};

const person3 = new Person('Ivan');
person3.sayHello();

//Используя class:
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello I'm ${this.name}`);
  }

}

let person4 = new PersonClass('Ivan');
person4.sayHello();

//////////AnotherPerson

//Используя Object.create():

const anotherPerson = Object.create(person, {
  name: {
    value: 'Vlad',
    enumerable: true
  }
});
anotherPerson.sayHello();


//Используя  __proto__

const anotherPerson1 = {
  name: 'Jack',
  __proto__: person
};
anotherPerson1.sayHello();

//Используя  extends class

class AnotherPersonClass extends PersonClass {
  constructor(name, ago) {
    super(name);
    this.ago = ago;
  }
}

const anotherPerson2 = new AnotherPersonClass('Igor', 23);
anotherPerson2.sayHello();

function AnotherPerson(name, ago) {
  this.name = name;
  this.ago = ago;
}

////////// Добавить метод logInfo чтоб он был доступен всем объектам.

// метод logInfo будет доступен объекту person и его наследникам
person.logInfo = function () {
  console.log(`Name: ${this.name}`);
};

// определение метода logInfo с помощью метода defineProperty
Object.defineProperty(person, 'logInfo', {
  value: function () {
    console.log(`Name: ${this.name}`);
  },
  configurable: true,
});

// метод logInfo будет доступен всем объектам
Object.prototype.logInfo = function () {
  console.log(`Name: ${this.name}`);
};

person.logInfo();
anotherPerson.logInfo();

///3. Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.
class SuperPerson {
  constructor(name) {
    this._name = name;
  }

  get name() {
    console.log('Имя получено ' + this._name);
    return this._name;
  }

  set name(newName) {
    console.log('Имя изменено на ' + newName);
    this._name = newName;
  }
}

const superPerson = new SuperPerson('SuperIvan');
console.log(superPerson.name);
superPerson.name = 'SuperVlad';

class SuperMan extends SuperPerson {
  constructor(name) {
    super(name);
    this._superPower = 'fly';
  }

  get superPower() {
    return this._superPower;
  }
}

const superMan = new SuperMan('SuperMan');
console.log(superMan.superPower);
// console.log(superMan.superPower="Run"); //error