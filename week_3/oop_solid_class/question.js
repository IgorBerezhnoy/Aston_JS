// function firstFunction(){}
// function secondFunction(){}
// console.log(firstFunction.__proto__===secondFunction.__proto__);
// console.log(firstFunction.prototype===secondFunction.prototype);
// console.log(({}).__proto__===({}).__proto__);
// console.log(({}).prototype===({}).prototype);
//
// var animal = { eats: null };
// var dog = { eats: true };
//
// dog.__proto__ = animal;
//
// console.log( dog.eats ); // ?
//
// delete dog.eats;
// console.log( dog.eats ); // ?
//
// delete animal.eats;
// console.log( dog.eats); // ?
const user = {
  name: 'Alex',
};

const animal = {
  wolf: true,
};
//
// console.log(user.prototype === animal.prototype);
// console.log(user.__proto__ === Object.prototype);
// console.log(user.__proto__ !== animal.__proto__);
// Object.setPrototypeOf(user, animal);
// console.log(user.__proto__ === animal.__proto__);

// class Person{
//   constructor(name, age){
//     this.#name = name;
//     this.age = age;
//   }
// }
// class Employee extends Person{
//   constructor(name, age, company){
//     super(name, age);
//     this.company = company;
//   }
//   work(){
//     console.log(`${this.#name} works in ${this.company}`);
//   }
// }
// const alex = new Employee('Alex', 25);
// alex.work();


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// speedy.eat("apple");
// console.log( speedy.stomach );
// console.log( lazy.stomach );
// let Employee = {
//   company: "xyz",
// };
// let emp1 = Object.create(Employee);
// delete emp1.company;
// console.log(emp1.company);
// console.dir(new Promise((res, rej)=>res("str")))

Promise.resolve()
  .then((first) => {
    return 'b';
  })
  .then(
    Promise.resolve().then((second) => {
    return "c"
  })
  ).then((third)=>{
    debugger
    console.log(third);
  })