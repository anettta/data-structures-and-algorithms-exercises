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
// 12-18-21
// const linkedListValues = (head) => {
//   let arr = [];
//   let current = head;
//   while (current) {
//     arr.push(current.val);
//     current = current.next;
//   }
//   return arr;
// };

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

// const linkedListValues = (head) => {
//   // iterative
//   //   let values = [];
//   //   let current = head;
//   //   while (current !== null) {
//   //     values.push(current.val);
//   //     current = current.next;
//   //   }
//   //   return values;
//   //recursive
//   let values = [];
//   fillValues(head, values);
//   return values;
// };

// const fillValues = (head, values) => {
//   if (head === null) {
//     return;
//   }
//   values.push(head.val);
//   fillValues(head.next, values);
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(linkedListValues(a)); // ['a', 'b', 'c', 'd']
