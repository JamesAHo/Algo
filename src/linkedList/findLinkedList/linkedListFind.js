class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
    // todo
    let current = head;
    while(current !== null){
      if(current.val === target) return true;
      current = current.next
    }
    return false;
  };
// recursively approach the linked list


const linkedListFind2 = (head, target) => {
    // base case 1: if head.val equals target, then return true
    if(head === null ) return false;
    // base case 2: if head is null, then return false
    if(head.val === target) return true;
    return linkedListFind2(head.next, target)
  };