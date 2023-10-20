/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// Steps;
// 1: use slow and fast pointers to find the middle of the list. slow move by 1 and fast move by 2. When the fast reached the end of the list then slow will be at middle.
// 2: Reverse the second part of the list.
// 3: merge the two lists together 

var reorderList = function(head) {
    if(!head) return [];
    // step 1: find the middle of the list
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // step 2: Reverse the second half of the list
    let prev = null;
    let curr = slow.next;
    while(curr){
        const nextt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextt;
    }
    slow.next = null;
    // step 3: merge lists
    let head1 = head;
    let head2 = prev;
    nextt = head1.next;
    head1.next = head2;
    head1 = head2;
    head2 = nextt


};