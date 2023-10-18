class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1, head2) => {
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = next2;
    head2.next = zipperLists(next1, next2);

    return head1;
  };
  
