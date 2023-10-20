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
    if (!head || !head.next) {
        return head;
    }

    // Step 1: Find the middle of the list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    let curr = slow;
    while (curr) {
        const nextt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextt;
    }

    // Step 3: Merge lists
    let head1 = head;
    let head2 = prev;
    
    while (head2.next) {
        const nextt1 = head1.next;
        const nextt2 = head2.next;
        head1.next = head2;
        head1 = nextt1;
        head2.next = head1;
        head2 = nextt2;
    }


};