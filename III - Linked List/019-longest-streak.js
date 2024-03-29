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
  let current_streak = 0;
  let max_streak = 0;
  let prev = null;
  let current = head;
  while (current !== null) {
    if (current.val === prev) {
      current_streak++;
    } else {
      current_streak = 1;
    }
    if (max_streak < current_streak) {
      max_streak = current_streak;
    }
    prev = current.val;
    current = current.next;
  }

  return max_streak;
};

const a = new Node(5);
const b = new Node(5);
const c = new Node(5);
const d = new Node(5);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(longestStreak(a));
