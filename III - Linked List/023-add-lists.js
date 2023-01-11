// Write a function 'addLists' that takes in the head of two linked lists,
// each representing a number.
// The nodes of the linked lists contain digits as values.
// The nodes in the input lists are reversed.
// this means that the least significant digit of the number is the head.
// The function should return the head of a new linked list representing
// the sum of the input lists.
// The output list should have it's digits reversed as well.

// 621
// +
// 354
// ___
// 975

// 1 -> 2 -> 6
// 4 -> 5 -> 3
// 5 -> 7 -> 9

// n = length of list 1
// m = length of list 2
// Time: O(max(n,m))
// Space: O(max(n,m))

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const addLists = (head1, head2) => {
//   let current1 = head1;
//   let current2 = head2;
//   let dummyHead = new Node(null);
//   let tail = dummyHead;
//   let carry = 0;
//   while (current1 !== null || current2 !== null || carry === 1) {
//     let val1 = current1 === null ? 0 : current1.val;
//     let val2 = current2 === null ? 0 : current2.val;
//     let sum = val1 + val2 + carry;
//     let digit = sum % 10;
//     carry = sum > 9 ? 1 : 0;
//     let result = new Node(digit);
//     tail.next = result;
//     tail = tail.next;
//     if (current1 !== null) {
//       current1 = current1.next;
//     }
//     if (current2 !== null) {
//       current2 = current2.next;
//     }
//   }
//   return dummyHead.next;
// };

const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;
  let val1 = head1 === null ? 0 : head1.val;
  let val2 = head2 === null ? 0 : head2.val;
  let sum = val1 + val2 + carry;
  let digit = sum % 10;
  let nextCarry = sum > 9 ? 1 : 0;
  let result = new Node(digit);
  let next1 = head1 === null ? null : head1.next;
  let next2 = head2 === null ? null : head2.next;
  result.next = addLists(next1, next2, nextCarry);
  return result;
};

const a1 = new Node(9);
const a2 = new Node(9);
// const a3 = new Node(0);
// const a4 = new Node(1);
a1.next = a2;
// a2.next = a3;
// a3.next = a4;

const b1 = new Node(1);
const b2 = new Node(1);
// const b3 = new Node(0);
b1.next = b2;
// b2.next = b3;

console.log(addLists(a1, b1));
