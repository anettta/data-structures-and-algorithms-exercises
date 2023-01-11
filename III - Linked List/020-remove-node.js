class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const deleteNode = (head, value) => {
// if(head===value)return head.next;
//   let current = head;
//   let prev = null;
//   while (current !== null) {
//     if (current.val === value) {
//       prev.next = current.next;
//break
//     }
//     prev = current;
//     current = current.next;
//   }
//   return head;
// };

const deleteNode = (head, value, prev = null) => {
  if (head === null) return null;
  if (head.val === value) return head.next;

  head.next = deleteNode(head.next, value, head);
  return head;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(deleteNode(a, "b"));
