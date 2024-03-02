"use strict";
const sayHello = () => console.log(`Hi,I'm ${this.name}`);
const person = {
  name: 'Ivan',
  sayHello: function () {
    sayHello.call(this);
  }, introduceMyself() {
    console.log(`Hi,I'm ${this.name}`);
  }, introduceMyself2: () => {
    console.log(`Hi,I'm ${this.name}`);
  },
};
// const anotherPerson = {name: 'Igor', ago: 23};
// sayHello(); //1...
// person.sayHello(); //2...
// person.introduceMyself(); //3...
// person.introduceMyself2(); //4...
// person.introduceMyself.apply(anotherPerson);//5...
// person.introduceMyself2.bind(anotherPerson)();//6...


const obj = {
  num: 3,
}

// function mul(a) {
//   return this.num * a;
// }
//
// mul = mul.bind(obj, 2);
// obj.num = 6;
// mul = mul.bind(null);
//
// console.log( mul(3) );
// console.log( mul(4) );
// console.log( mul(5) );

// const theObj = {
//   name: "Pavel",
//   doLogThis: function () {
//     console.log("this is", this)
//   }
// }
//
// setTimeout(theObj.doLogThis, 1)

