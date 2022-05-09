// Write a function 'sumList' that takes in the head of a linked list
// containing numbers as an arguments.
// The function should return the total sum of all values in the linked list.

// Time: O(n) iterations
// Time: O(1)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (head) => {
  if (head === null) return 0;
  // let sum = 0;
  // let current = head;
  // while (current !== null) {
  //   sum += current.val;
  //   current = current.next;
  // }
  // return sum;
  return head.val + sumList(head.next);
};

// const sumList = (head) => {
//   // let sum = 0;
//   // let current = head;
//   // while (current !== null) {
//   //   sum += current.val;
//   //   current = current.next;
//   // }
//   // return sum;
//   if (head === null) return 0;
//   return head.val + sumList(head.next);
// };

// const sumList = (head) => {
//   let current = head;
//   let sum = 0;
//   while (current !== null) {
//     sum += current.val;
//     current = current.next;
//   }
//   return sum;
// };

// const sumList = (head) => {
//   if (head === null) return 0;
//   return head.val + sumList(head.next);
// };

// 01/04/22
//
// iterative
//
// const sumList = (head) => {
//   let sum = 0;
//   let current = head;
//   while (current !== null) {
//     sum += current.val;
//     current = current.next;
//   }
//   return sum;
// };
//
// recursive
//
// const sumList = (head) => {
//   if (head === null) return 0;
//   return head.val + sumList(head.next);
// };

// 12-18-21

// const sumList = (head) => {
//   let sum = 0;
//   let current = head;
//   while (current) {
//     sum += current.val;
//     current = current.next;
//   }
//   return sum;
// };

// recursive

// const sumList = (head) => {
//   if (head === null) return null;
//   return head.val + sumList(head.next);
// };

// iterative
// const sumList = (head) => {
//   let current = head;
//   let sum = 0;
//   while (current !== null) {
//     sum += current.val;
//     current = current.next;
//   }
//   return sum;
// };
// recursive, also time is O(n) calls but space is O(n)
// const sumList = (head) => {
//   if (head === null) {
//     return 0;
//   }
//   return head.val + sumList(head.next);
// };

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(sumList(a)); // 19
