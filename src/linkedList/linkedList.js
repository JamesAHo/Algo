class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const f = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = f;


const printLinkedList = (head) => {
    let current = head;
    while(current !== null) {
        console.log(current.value)
        current = current.next;
    }
}

printLinkedList(a);