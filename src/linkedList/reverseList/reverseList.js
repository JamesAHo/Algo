class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = (head) => {
    let prev = null;
    let current = head;
    while(current != null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
  };
  