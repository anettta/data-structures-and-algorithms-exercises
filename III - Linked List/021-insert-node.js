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

// const insertNode = (head, value, index) => {
//   let count = 0;
//   let current = head;
//   if (index === 0) {
//     let newNode = new Node(value);
//     newNode.next = head;
//   }
//   while (current !== null) {
//     if (count === index - 1) {
//       let newNode = new Node(value);
//       let next = current.next;
//       current.next = newNode;
//       newNode.next = next;
//     }
//     count++;
//     current = current.next;
//   }
//   return head;
// };

const insertNode = (head, value, index, count = 0) => {
  if (head === null) return null;
  if (index === 0) {
    let newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  if (count === index - 1) {
    let newNode = new Node(value);
    let next = head.next;
    head.next = newNode;
    newNode.next = next;
    return head;
  }
  insertNode(head.next, value, index, count + 1);
  return head;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(insertNode(a, "x", 1));
