// Write a function 'createLinkedList' that takes in an array of values as an argument.
// The function should create a linked list containing each element
// of the array as the values of the nodes.
// The function should return the head of the linked list.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// iterative
// const createLinkedList = (values) => {
//   let dummyNode = new Node(null);
//   let tail = dummyNode;
//   for (let val of values) {
//     let newNode = new Node(val);
//     tail.next = newNode;

//     tail = tail.next;
//   }

//   return dummyNode.next;
// };
// recursive
const createLinkedList = (values, i = 0) => {
  if (values.length === i) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;
};

console.log(createLinkedList(["h", "e", "y"])); // h -> e -> y
