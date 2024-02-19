const getLength = (value) => {
  if (value && value.length !== undefined) {
    console.log(value.length);
  } else if (value instanceof Map || value instanceof Set) {
    console.log(value.size);
  } else {
    console.log(0);
  }
};
getLength(new Set([1, 2, 3, 4, 5]));
getLength(new Map([[1, 'one'], [2, 'two']]));
getLength(1);
getLength('1');
getLength(['1', '2', '3']);
getLength(true);
getLength(false);
getLength({isPrivate: false});
getLength({isPrivate: false, length: 1});

//Если структура объекта содержит миллион Node,
// то рекурсивное решение может привести к переполнению стека вызовов из-за большой глубины рекурсии.
const compare = (node1, node2) => {
  const stack = [[node1, node2]];

  while (stack.length > 0) {
    const [currentNode1, currentNode2] = stack.pop();
    if (currentNode1 === undefined && currentNode2 === undefined) {
      continue;
    }
    if (currentNode1 === undefined || currentNode2 === undefined || currentNode1.value !== currentNode2.value) {
      return false;
    }
    stack.push([currentNode1.left, currentNode2.left]);
    stack.push([currentNode1.right, currentNode2.right]);
  }
  return true;
};

const tree1 = {
  value: 1,
  left: {value: 2},
  right: {value: 3}
};

const tree2 = {
  value: 1,
  left: {value: 2},
  right: {value: 3}
};

const tree3 = {
  value: 1,
  left: {value: 3},
  right: {value: 3}
};

const tree4 = {
  value: 1,
  left: {value: 2, left: {value: 3}}
};

// console.log(compare(tree1, tree2)); // true
// console.log(compare(tree1, tree3)); // false
// console.log(compare(tree1, tree4)); // false


//// question for lesson


//#1


// let a = 'Hello';
// if (1 === 1) {
//   console.log(a);
//
//   let a = 'World';
// }
// Что будет в консоле
// Что измениться если закомментировать строчку 68


//#2

// let x = [] + 1 + 2
// let x = [1] + false
// let x = [1,2,3,] +[4,5,6]
// let x = {}+1
// let x = function(){}+1
//
//   console.log(x);
//   console.log(typeof x);