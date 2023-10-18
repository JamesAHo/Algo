class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

const linkedListValues = (head) => {
    const result = [];
    let current  = head;
    while(current != null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// test case

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

linkedListValues(a);