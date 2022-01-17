class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListCycle = (head) => {
  //   let current = head;
  //   let values = new Set();
  //   while (current !== null && current.next !== null) {
  //    if (values.has(current.val)) {
  //       return true;
  //     }
  //     values.add(current.val);

  //     current = current.next;
  //
  //   }
  //   return false;

  let slow = head;
  let fast = head;
  let firstIteration = true;

  while (fast !== null && fast.next !== null) {
    if (slow === fast && firstIteration !== true) return true;
    slow = slow.next;
    fast = fast.next.next;
    firstIteration = false;
  }
  return false;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("a");
const e = new Node("e");

a.next = b;
b.next = c;
c.next = a;

console.log(linkedListCycle(a));
