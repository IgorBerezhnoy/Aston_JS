function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }

  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
///.........

// function createCounter() {
//   let count = 0;
//
//   function increment() {
//     count++;
//   }
//
//   function getCounter() {
//     return count;
//   }
//
//   return {
//     increment,
//     getCounter
//   };
// }
//
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
//
// console.log(counter.getCounter());

// const animal = {
//   name: 'Cat',
//   props: {
//     ability: "Meow",
//   }
// }
// Object.freeze(animal)
// animal.props.ability = "Run"
// console.log(animal.name)
// console.log(animal.props.ability)