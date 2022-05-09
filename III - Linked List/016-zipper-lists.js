// Write a function 'zipperLists' that takes in the head of two linked lists
// as arguments. The function should zipper the two lists together into single linked list by alternating nodes.
// If one of the linked lists is longer than the other, the resulting list should
// terminate with the remaining nodes. The function should return the head of the zippered linked list.
//
// Do this in-place, by mutating the original Nodes.
//
// You may assume that both input lists are non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  let next1 = head1.next;
  let next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};

// const zipperLists = (head1, head2) => {
//   let current1 = head1.next;
//   let current2 = head2;
//   let count = 0;
//   let tail = head1;

//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next;
//     count++;
//   }
//   if (current1 === null) {
//     tail.next = current2;
//   }
//   if (current2 === null) {
//     tail.next = current1;
//   }

//   return head1;
// };

// const zipperLists = (head1, head2) => {
//   if (head1 === null && head2 === null) return null;
//   if (head1 === null) return head2;
//   if (head2 === null) return head1;
//   let next1 = head1.next;
//   let next2 = head2.next;
//   head1.next = head2;
//   head2.next = zipperLists(next1, next2);
//   return head1;
// };

// const zipperLists = (head1, head2) => {
//   let current1 = head1.next;
//   let current2 = head2;
//   let tail = head1;
//   let count = 0;
//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     count++;
//     tail = tail.next;

//     if (current1 === null) {
//       tail.next = current2;
//     }
//     if (current2 === null) {
//       tail.next = current1;
//     }
//   }

//   return head1;
// };

// 01/04/22
//
// iterative
//
// const zipperLists = (head1, head2) => {
//   let current1 = head1.next;
//   let current2 = head2;
//   let tail = head1;
//   let count = 0;
//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     count++;
//     tail = tail.next;
//   }
//   if (current1 === null) {
//     tail.next = current2;
//   }
//   if (current2 === null) {
//     tail.next = current1;
//   }
//   return head1;
// };
//
// recursive
//

// const zipperLists = (head1, head2) => {
//   if (head1 === null && head2 === null) return null;
//   if (head1 === null) return head2;
//   if (head2 === null) return head1;
//   const next1 = head1.next;
//   const next2 = head2.next;
//   head1.next = head2;
//   head2.next = zipperLists(next1, next2);

//   return head1;
// };

// 12-27-21

// const zipperLists = (head1, head2) => {
//   let current1 = head1.next;
//   let current2 = head2;
//   let tail = head1;
//   let count = 0;
//   while (current1 && current2) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }

//     tail = tail.next;
//     count++;
//   }
//   if (current2 === null) {
//     tail.next = current1;
//   }
//   if (current1 === null) {
//     tail.next = current2;
//   }
//   return head1;
// };

// 12-25-21

// const zipperLists = (head1, head2) => {
//   let current1 = head1.next;
//   let current2 = head2;
//   let tail = head1;
//   let count = 0;

//   while (current1 && current2) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next;
//     count++;
//   }

//   if (current2 === null) {
//     tail.next = current1;
//   }

//   if (current1 === null) {
//     tail.next = current2;
//   }
//   return head1;
// };

// 12-21-21

// const zipperLists = (head1, head2) => {
//   let current1 = head1.next;
//   let current2 = head2;
//   let tail = head1;
//   let count = 0;

//   while (current1 && current2) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }

//     tail = tail.next;
//     count++;
//   }

//   if (current1 === null) {
//     tail.next = current2;
//   }
//   if (current2 === null) {
//     tail.next = current1;
//   }

//   return head1;
// };

//
// iterative
//
// const zipperLists = (head1, head2) => {
//   let count = 0;
//   let tail = head1;
//   let current1 = head1.next;
//   let current2 = head2;

//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current2 = current1.next;
//     }
//     tail = tail.next;
//     count++;
//   }
//   if (current1 === null) {
//     tail.next = current1;
//   }
//   if (current2 === null) {
//     tail.next = current2;
//   }
//   return head1;
// };

// recursive
//
// const zipperLists = (head1, head2) => {
//   if (head1 === null && head2 === null) {
//     return null;
//   }
//   if (head1 === null) {
//     return head2;
//   }
//   if (head2 === null) {
//     return head1;
//   }
//   const next1 = head1.next;
//   const next2 = head2.next;
//   head1.next = head2;
//   head2.next = zipperLists(next1, next2); // head of the remaining list, we chain it to head2.next
//   return head1;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

a.next = b;
b.next = c;

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;

console.log(zipperLists(a, x)); // a -> x -> b -> y -> c -> z
