class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleValue = (head) => {
  //Time linear, space - linear
  //
  //   let current = head;
  //   let values = [];
  //   while (current) {
  //     values.push(current.val);
  //     current = current.next;
  //   }
  //   let mid = Math.floor(values.length / 2);

  //   return values[mid];
  //
  //
  //
  // slow and fast pointers Time linear, space - constant
  //
  let slow = head;
  let fast = head;
  while (fast !== null || fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.val;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(middleValue(a));
