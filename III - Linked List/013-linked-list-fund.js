// Write a function 'linkedListFund' that takes in the head of a
// linked list and a target value. The function should return
// a boolean indicating whether or not the linked list contains the target.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFund = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFund(head.next, target);
  // let current = head;
  // while (current !== null) {
  //   if (current.val === target) return true;
  //   current = current.next;
  // }
  // return false;
};

// const linkedListFund = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) {
//       return true;
//     }
//     current = current.next;
//   }
//   return false;
// };

// const linkedListFund = (head, target) => {
//   if (head === null) return false;
//   if (head.val === target) return true;
//   return linkedListFund(head.next, target);
// };

// 01/04/22
//
// iterative
//
// const linkedListFund = (head, target) => {
//   if (head.val === target) return true;
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) return true;
//     current = current.next;
//   }
//   return false;
// };
//
// recursive
//
// const linkedListFund = (head, target) => {
//   if (head === null) return false;
//   if (head.val === target) return true;

//   return linkedListFund(head.next, target);
// };

// 12-20-21

// const linkedListFund = (head, target) => {
//   let current = head;
//   while (current) {
//     if (current.val === target) {
//       return true;
//     }
//     current = current.next;
//   }
//   return false;
// };
// const linkedListFund = (head, target) => {
//   if (head === null) return false;
//   if (head.val === target) return true;
//   return linkedListFund(head.next, target);
// };

//                           iterative
//
// const linkedListFund = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) {
//       return true;
//     }
//     current = current.next;
//   }
//   return false;
// };
//
//                          recursive
//
// const linkedListFund = (head, target) => {
//   if (head === null) {
//     // empty list or end of linked list
//     return false;
//   }
//   if (head.val === target) {
//     return true;
//   }
//   return linkedListFund(head.next, target);
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(linkedListFund(a, "c")); // true
console.log(linkedListFund(a, "x")); // false
