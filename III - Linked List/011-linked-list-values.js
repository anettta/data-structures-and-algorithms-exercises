// Write a function 'linkedListValues' that takes in the head of a linked list as an argument.
// The function should return an array containing all values of the nodes in the linked list.

// Time: O(n)
// Space: O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// iterative

// const linkedListValues = (head) => {
//   let current = head;
//   let resultArray = [];
//   while (current !== null) {
//     resultArray.push(current.val);
//     current = current.next;
//   }
//   return resultArray;
// };

// recursive

const linkedListValues = (head) => {
  let values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return null;
  values.push(head.val);
  return fillValues(head.next, values);
};

const a = new Node("apple");
const b = new Node("banana");
const c = new Node("coconut");
const d = new Node("date");

a.next = b;
b.next = c;
c.next = d;

console.log(linkedListValues(a)); // ['a', 'b', 'c', 'd']
