// Write a function 'insertNode' that takes in the head
// of a linked list, a value, and an index.
// The function should insert a new node with the value
// into the list at the specified index.
// Consider the head of the linked list as index 0.
// The function should return the head of the resulting linked list.
//
// Do this in-place.
//
// You may assume that the input list is non-empty
// and the index is not greater than the length of the input list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index, count = 0) => {
  if (head === null) return null;
  if (index === 0) {
    let newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  if (count === index - 1) {
    let newNode = new Node(value);
    let temp = head.next;
    head.next = newNode;
    head.next.next = temp;
  }
  insertNode(head.next, value, index, count + 1);
  return head;
};

//
// iterative
//
// const insertNode = (head, value, index) => {
//   if (index === 0) {
//     let newHead = new Node(value);
//     newHead.next = head;
//     return newHead;
//   }
//   let current = head;
//   let count = 0;
//   while (current !== null) {
//     if (count === index - 1) {
//       let newNode = new Node(value);
//       let temp = current.next;
//       current.next = newNode;
//       current.next.next = temp;
//     }
//     count++;
//     current = current.next;
//   }
//   return head;
// };
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(insertNode(a, "x", 1));
