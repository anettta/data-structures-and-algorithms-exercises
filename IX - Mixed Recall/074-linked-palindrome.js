// Write a function, linkedPalindrome, that takes in the head of a linked list as an argument.
// The function should return a boolean indicating whether or not the linked list is a palindrome.
// A palindrome is a sequence that is the same both forwards and backwards.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedPalindrome = (head) => {
  let current = head;
  let arr = [];
  let reversed = [];
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return arr.join(",") === reversed.join(",") ? true : false;
};

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(linkedPalindrome(a));
