// function findEncryptedWord(s) {
//   let mid = Math.floor(s.length / 2);
//   if (mid % 2 === 0) {
//     mid--;
//   }
//   let encrypted = "";
//   let first = s[mid];
//   let left = s.slice(0, mid);
//   let right = s.slice(mid + 1);

//   encrypted += first;
//   encrypted += left;
//   encrypted += right;
//   return encrypted;
// }

// console.log(findEncryptedWord("abcd")); // bacd

// Add any extra import statements you may need here

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

// Add any helper functions you may need here

function reverse(head) {
  // Write your code here
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(8);
let e = new Node(9);
let f = new Node(12);
let m = new Node(16);

a.next = b;
b.next = c;
c.next = e;
e.next = f;
f.next = m;

console.log(reverse(a));
