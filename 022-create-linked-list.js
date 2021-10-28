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
//
// recursive
//
const createLinkedList = (array, i = 0) => {
  if (i === array.length) {
    return null;
  }
  const head = new Node(array[i]);
  head.next = createLinkedList(array, i + 1);
  return head;
};
//
// iterative
//
// const createLinkedList = (array) => {
//   let dummy = new Node(null);
//   let tail = dummy;

//   for (let element of array) {
//     let newNode = new Node(element);
//     tail.next = newNode;
//     tail = tail.next;
//   }

//   return dummy.next;
// };

console.log(createLinkedList(["h", "e", "y"])); // h -> e -> y
