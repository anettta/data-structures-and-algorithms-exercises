// Write a function 'reverseList' that takes in the head of a linked list
// as an argument. The function should reverse the order of the nodes
// in the linked list in-place and return the new head of the reversed linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 01/04/22
//
// iterative
//
// const reverseList = (head) => {
//   let prev = null;
//   let current = head;
//   while (current !== null) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// };
//
// recursive
//
const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseList(next, head);
};

// 12-24-21

// const reverseList = (head) => {
//   let prev = null;
//   let current = head;
//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// };

// 12-20-21

// const reverseList = (head) => {
//   let current = head;
//   let prev = null;

//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;

//     current = next;
//   }

//   return prev;
// };

// const reverseList = (head, prev = null) => {
//   if (head === null) return null;
//   let next = head.next;
//   head.next = prev;

//   return reverseList(next, head);
// };

//
// iterative
//
// const reverseList = (head) => {
//   let current = head;
//   let prev = null;
//   while (current !== null) {
//     let next = current.next; // save next pointer
//     current.next = prev; // points to null; current's arrow that points to the next
//     prev = current;
//     current = next;
//   }
//   return prev;
// };
//
// recursive
//
// const reverseList = (head, prev = null) => {
//   if (head === null) {
//     return prev;
//   }
//   const next = head.next;
//   head.next = prev;
//   return reverseList(next, head);
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a
