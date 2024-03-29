// Write a function 'isUnivalueList' that takes in the
// head of the linked list as an argument.
// The function should return a boolean indicating
// whether or not the linked list contains exactly one unique value.
//
// You may assume that the input list is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//iterative
// const isUnivalueList = (head) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val !== head.val) {
//       return false;
//     }
//     current = current.next;
//   }
//   return true;
// };
//recursive
const isUnivalueList = (head, prev = null) => {
  if (head === null) return true;
  if (head.val !== prev && prev !== null) return false;
  let next = head.next;

  return isUnivalueList(next, head.val);
};

const a = new Node(1);
const b = new Node(1);
const c = new Node(1);

a.next = b;
b.next = c;

console.log(isUnivalueList(a));
