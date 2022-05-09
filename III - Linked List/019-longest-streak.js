// Write a function 'longestStreak' that takes in the head of a linked list as an argument.
// The function should return the length of the
// longest consecutive streak of the same value
// within the list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  let currStr = 0;
  let maxStr = 0;
  let prev = null;
  let current = head;
  while (current !== null) {
    if (current.val === prev) {
      currStr++;
    } else {
      currStr = 1;
    }
    prev = current.val;
    if (currStr > maxStr) {
      maxStr = currStr;
    }
    current = current.next;
  }
  return maxStr;
};

// const longestStreak = (head) => {

// let current = head;
// let currStr = 0;
// let max = 0;
// while (current !== null) {
//   if (current.val !== head.val) {
//     currStr = 0;
//   }
//   currStr++;
//   if (currStr > max) {
//     max = currStr;
//   }
//   current = current.next;
// }
// return max;
// };

// const longestStreak = (head) => {
//   let max_streak = 0;
//   let current_streak = 0;
//   let prev_val = head.val;
//   let current = head;

//   while (current !== null) {
//     if (current.val === prev_val) {
//       current_streak++;
//     } else {
//       prev_val = current.val;

//       if (current_streak > max_streak) {
//         max_streak = current_streak;
//       }
//       current_streak = 1;
//     }

//     current = current.next;
//   }

//   return max_streak;
// };

// const longestStreak = (head) => {
//   let max = 0;
//   let current_streak = 0;
//   let prev = null;
//   let current = head;

//   while (current !== null) {
//     if (current.val === prev) {
//       current_streak++;
//     } else {
//       current_streak = 1;
//     }
//     if (current_streak > max) {
//       max = current_streak;
//     }
//     prev = current.val;
//     current = current.next;
//   }
//   return max;
// };

const a = new Node(5);
const b = new Node(5);
const c = new Node(5);
const d = new Node(9);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(longestStreak(a));
