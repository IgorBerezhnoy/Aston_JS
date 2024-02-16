const getLength = (value) => (value && value.length !== undefined) ? value.length : 0;

console.log(getLength(1));
console.log(getLength('1'));
console.log(getLength(['1', '2', '3']));
console.log(getLength(true));
console.log(getLength(false));
console.log(getLength({isPrivate: false}));
console.log(getLength({isPrivate: false, length: 1}));

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

console.log(compare(tree1, tree2)); // true
console.log(compare(tree1, tree3)); // false
console.log(compare(tree1, tree4)); // false
