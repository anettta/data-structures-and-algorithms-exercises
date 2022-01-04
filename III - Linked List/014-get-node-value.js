// Write a function 'getNodeValue' that takes in the head of a linked list and an index.
// The function should return the value of the linked list at the specified index.
//
// If there is no node at the given index, then return null.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 01/04/22

// iterative
//
// const getNodeValue = (head, idx) => {
//   let current = head;
//   let count = 0;
//   while (current !== null) {
//     if (count === idx) return current.val;
//     current = current.next;
//     count++;
//   }
// return null;
// };
//
// recursive
//
const getNodeValue = (head, idx, count = 0) => {
  if (head === null) return null;
  if (count === idx) return head.val;
  return getNodeValue(head.next, idx, (count += 1));
};

// 12-28-21

// const getNodeValue = (head, idx) => {
//   let current = head;
//   let count = 0;
//   while (current) {
//     if (count === idx) {
//       return current.val;
//     }
//     current = current.next;
//     count++;
//   }
//   return null;
// };

// 12-20-21

// const getNodeValue = (head, idx) => {
//   let current = head;
//   let count = 0;
//   while (current) {
//     if (count === idx) {
//       return current.val;
//     }
//     current = current.next;
//     count++;
//   }
//   return null;
// };

// const getNodeValue = (head, idx) => {
//   if (head === null) return null;
//   if (idx === 0) return head.val;
//   return getNodeValue(head.next, idx - 1);
// };

// iterative
//
// const getNodeValue = (head, index) => {
//   let current = head;
//   let count = 0;
//   while (current !== null) {
//     if (count === index) {
//       return current.val;
//     }
//     current = current.next;
//     count++;
//   }
//  return null;
// };
//
// recursive
//
// const getNodeValue = (head, index) => {
//   if (head === null) {
//     return null;
//   }
//   if (index === 0) {
//     return head.val;
//   }
//   return getNodeValue(head.next, index - 1);
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(getNodeValue(a, 2)); // 'c'
